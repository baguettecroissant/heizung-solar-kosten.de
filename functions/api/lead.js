/**
 * Cloudflare Pages Function — Lead API Endpoint for TapTapHome / DAA GmbH
 * Special dual-niche handler supporting Single (PV / WP) and Combo (PV + WP) submissions.
 * Dual-write: Supabase (rank_rent_leads) + TapTapHome API
 */

const SITE_DOMAIN = 'heizung-solar-kosten.de';

// TapTapHome API Credentials
const TTH_USERNAME = 'daa-df901c71018e50c88dacc4d785e326f9';
const TTH_API_KEY = '2e0a3d3b94fb8ba959e989ae74fadb';
const TTH_API_URL = 'https://www.daa.net/api/v3/leads/send';

// Supabase
const SUPABASE_URL = 'https://nhmvgsrwhjsjnpncpiaj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obXZnc3J3aGpzam5wbmNwaWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5OTY0NjQsImV4cCI6MjA4MzU3MjQ2NH0.qpG5CJDNa53BB7ZpDy414GL3hmb51omxqPrnrrd7O6I';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export async function onRequestOptions() {
  return new Response(null, { headers: CORS_HEADERS });
}

// Helper to send a single lead to Supabase & TapTapHome
async function sendSingleLead({
  firstname, lastname, email, phone, zip,
  niche, subject_key, service_key, job_details,
  pageUrl, clientIp, userAgent
}) {
  const cleanTel = phone.replace(/\D/g, '');
  const detailsStr = Object.entries(job_details || {})
    .map(([k, v]) => `${k}: ${v}`)
    .join(', ');
  const workDescription = `DACH Lead [${niche}] for ${zip}. Details: ${detailsStr}.`;

  // 1. Insert into Supabase
  let supabaseId = null;
  try {
    const supabasePayload = {
      source_site: SITE_DOMAIN,
      niche: niche,
      nom: lastname.trim(),
      prenom: (firstname || '').trim(),
      email: email.trim(),
      telephone: cleanTel,
      adresse: 'Deutschland',
      ville: '',
      code_postal: zip,
      departement: zip.substring(0, 2),
      cat_id: niche === 'photovoltaics' ? 37 : 143,
      cat_name: niche === 'photovoltaics' ? 'Photovoltaïque' : 'Chauffage / PAC',
      type_bien: '1',
      situation: '1',
      description: workDescription,
      ip_address: clientIp,
      user_agent: userAgent,
      page_url: pageUrl || `https://${SITE_DOMAIN}`,
      vud_status: 'pending',
    };

    const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/rank_rent_leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(supabasePayload),
    });

    if (sbRes.ok) {
      const sbData = await sbRes.json();
      supabaseId = sbData?.[0]?.id || null;
    }
  } catch (sbErr) {
    console.error('[Supabase] Insert exception:', sbErr);
  }

  // 2. Format and POST to TapTapHome API
  const tthPayload = {
    contact: {
      title: 'Herr',
      forename: firstname.trim(),
      surname: lastname.trim(),
      email: email.trim(),
      phone: cleanTel,
      zipcode: zip,
    },
    options: {
      locale: 'de_DE',
      terms_accepted: true,
      site: SITE_DOMAIN,
      id_partner: supabaseId ? String(supabaseId) : undefined,
    },
    subject_key: subject_key,
    service_key: service_key,
    job_details: job_details || {},
  };

  const credentialsBase64 = btoa(`${TTH_USERNAME}:${TTH_API_KEY}`);
  const tthRes = await fetch(TTH_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentialsBase64}`,
    },
    body: JSON.stringify(tthPayload),
  });

  const tthStatus = tthRes.status;
  const tthText = await tthRes.text();
  let tthData = {};
  try {
    tthData = JSON.parse(tthText);
  } catch (_) {
    console.error('[TTH] JSON parse error:', tthText);
  }

  // 3. Update Supabase with TTH Response
  if (supabaseId) {
    try {
      const updatePayload = {
        vud_status: tthRes.ok && tthData.success ? 'sent' : 'error',
        vud_devis_id: tthData.id ? `#TTH-${tthData.id}` : null,
        vud_response: tthData,
        updated_at: new Date().toISOString(),
      };

      await fetch(`${SUPABASE_URL}/rest/v1/rank_rent_leads?id=eq.${supabaseId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(updatePayload),
      });
    } catch (updateErr) {
      console.error('[Supabase] Update error:', updateErr);
    }
  }

  return {
    success: tthRes.ok && tthData.success,
    status: tthStatus,
    data: tthData
  };
}

export async function onRequestPost(context) {
  try {
    const rawBody = await context.request.json();
    const {
      firstname,
      lastname,
      email,
      phone,
      zip,
      niche, // 'combo', 'pv', or 'hp'
      job_details_pv,
      job_details_hp,
      pageUrl
    } = rawBody;

    // Server-side validation
    const errors = [];
    if (!lastname || lastname.trim().length < 2) errors.push('Nachname erforderlich (mind. 2 Zeichen)');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Ungültige E-Mail-Adresse');
    if (!phone || phone.replace(/\D/g, '').length < 8) errors.push('Ungültige Telefonnummer (mind. 8 Ziffern)');
    if (!zip || !/^\d{5}$/.test(zip)) errors.push('Ungültige Postleitzahl (5 Ziffern)');

    if (errors.length > 0) {
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 400, headers: CORS_HEADERS,
      });
    }

    const clientIp = context.request.headers.get('CF-Connecting-IP') || '';
    const userAgent = context.request.headers.get('User-Agent') || '';

    // Handle submissions based on request type
    if (niche === 'pv') {
      const res = await sendSingleLead({
        firstname, lastname, email, phone, zip,
        niche: 'photovoltaics',
        subject_key: 'photovoltaics',
        service_key: 'power_system',
        job_details: job_details_pv,
        pageUrl, clientIp, userAgent
      });
      return new Response(JSON.stringify(res), { status: res.success ? 200 : 502, headers: CORS_HEADERS });
      
    } else if (niche === 'hp') {
      const res = await sendSingleLead({
        firstname, lastname, email, phone, zip,
        niche: 'heat_pump',
        subject_key: 'heat_pump',
        service_key: 'installation',
        job_details: job_details_hp,
        pageUrl, clientIp, userAgent
      });
      return new Response(JSON.stringify(res), { status: res.success ? 200 : 502, headers: CORS_HEADERS });
      
    } else if (niche === 'combo') {
      // 1. Submit Photovoltaics
      const resPV = await sendSingleLead({
        firstname, lastname, email, phone, zip,
        niche: 'photovoltaics',
        subject_key: 'photovoltaics',
        service_key: 'power_system',
        job_details: job_details_pv,
        pageUrl, clientIp, userAgent
      });
      
      // 2. Submit Heat Pump
      const resHP = await sendSingleLead({
        firstname, lastname, email, phone, zip,
        niche: 'heat_pump',
        subject_key: 'heat_pump',
        service_key: 'installation',
        job_details: job_details_hp,
        pageUrl, clientIp, userAgent
      });
      
      const overallSuccess = resPV.success || resHP.success; // Success if at least one works
      return new Response(JSON.stringify({
        success: overallSuccess,
        pv: resPV,
        hp: resHP
      }), { status: overallSuccess ? 200 : 502, headers: CORS_HEADERS });
    }

    return new Response(JSON.stringify({ success: false, errors: ['Invalid niche request type.'] }), {
      status: 400, headers: CORS_HEADERS
    });

  } catch (error) {
    console.error('[Lead API] Fatal error:', error);
    return new Response(JSON.stringify({
      success: false,
      errors: ['Server error occurred. Please try again later.'],
    }), { status: 500, headers: CORS_HEADERS });
  }
}
