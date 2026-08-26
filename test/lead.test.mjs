import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestGet, onRequestOptions, onRequestPost } from '../functions/api/lead.js';

const SITE = 'heizung-solar-kosten.de';
const ENV = { TAPTAPHOME_USERNAME: 'test-user', TAPTAPHOME_API_KEY: 'test-key' };
const UUID = '123e4567-e89b-42d3-a456-426614174000';
const combo = {
  firstname: 'Anna', lastname: 'Muster', email: 'anna@example.invalid', phone: '+49 30 1234567',
  street: 'Musterstrasse 12', zip: '10115', city: 'Berlin', consent: true,
  idempotency_key: UUID, project: 'combo',
  projects: {
    photovoltaics: {
      eigentumsverhaeltnisse: 'Eigner / Entscheidungsbefugt', objekt: 'Einfamilienhaus',
      dachflaeche: 90, dachtyp: 'Satteldach', stromspeicher: 'Ja',
      stromverbrauch: '3.500-4.500 kWh',
      zeitpunkt_projektbegin: 'In 3 bis 6 Monaten',
    },
    heat_pump: {
      eigentumsverhaeltnisse: 'Eigner / Entscheidungsbefugt', objekt: 'Einfamilienhaus',
      heizflaeche: 160, heat_pump_type: 'Luft-Wasser-Wärmepumpe',
      zeitpunkt_projektbegin: 'In 3 bis 6 Monaten',
    },
  },
};
function req(body = combo, origin = `https://${SITE}`, method = 'POST') {
  return new Request(`https://${SITE}/api/lead`, {
    method, headers: { origin, 'content-type': 'application/json' },
    body: method === 'POST' ? JSON.stringify(body) : undefined,
  });
}

async function withMockFetch(fn, responder = () => ({ success: true, id: 10, status: 'qualification' })) {
  const oldFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    const call = { url: String(url), options, body: JSON.parse(options.body) };
    calls.push(call);
    const response = responder(call, calls.length);
    const status = response.httpStatus || 200;
    return new Response(JSON.stringify(response.body || response), { status, headers: { 'content-type': 'application/json' } });
  };
  try { return await fn(calls); } finally { globalThis.fetch = oldFetch; }
}

test('GET expose uniquement la configuration directe DAA', async () => {
  const res = await onRequestGet({ env: ENV, request: req(undefined, undefined, 'GET') });
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.architecture, 'direct_daa');
  assert.equal(body.delivery_enabled, true);
  assert.match(body.version, /direct-daa/);
  assert.deepEqual(body.mapping, [
    { subject: 'photovoltaics', service: 'power_system' },
    { subject: 'heat_pump', service: 'installation' },
  ]);
  assert.equal(JSON.stringify(body).includes(ENV.TAPTAPHOME_API_KEY), false);
});

test('OPTIONS autorise apex/www et refuse une origine étrangère', async () => {
  for (const origin of [`https://${SITE}`, `https://www.${SITE}`]) {
    const res = await onRequestOptions({ env: {}, request: req(undefined, origin, 'OPTIONS') });
    assert.equal(res.status, 204);
  }
  const res = await onRequestOptions({ env: {}, request: req(undefined, 'https://evil.example', 'OPTIONS') });
  assert.equal(res.status, 403);
});

test('un POST sans credentials échoue fail-closed sans réseau', async () => {
  await withMockFetch(async (calls) => {
    const res = await onRequestPost({ env: {}, request: req() });
    assert.equal(res.status, 503);
    assert.equal(calls.length, 0);
  });
});

test('combo produit deux leads DAA distincts et préserve chaque projet (mock)', async () => {
  await withMockFetch(async (calls) => {
    const res = await onRequestPost({ env: ENV, request: req() });
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.success, true);
    assert.equal(calls.length, 2);
    assert.ok(calls.every((c) => c.url === 'https://www.daa.net/api/v3/leads/send'));
    const pv = calls.find((c) => c.body.subject === 'photovoltaics').body;
    const hp = calls.find((c) => c.body.subject === 'heat_pump').body;
    assert.equal(pv.service, 'power_system');
    assert.equal(pv.job_details.nutzflaeche, 90);
    assert.equal(pv.job_details.stromverbrauch, '3.500-4.500 kWh');
    assert.equal(hp.service, 'installation');
    assert.equal(hp.job_details.heat_pump_type, 'Luft-Wasser-Wärmepumpe');
    assert.notEqual(pv.options.id_partner, hp.options.id_partner);
    assert.equal(pv.options.id_partner, `${SITE}:${UUID}:photovoltaics`);
    assert.equal(hp.options.id_partner, `${SITE}:${UUID}:heat_pump`);
  });
});

test('une soumission combo mono-projet garde un id_partner distinct par sujet', async () => {
  for (const [project, expectedSubject] of [['pv', 'photovoltaics'], ['hp', 'heat_pump']]) {
    await withMockFetch(async (calls) => {
      const res = await onRequestPost({ env: ENV, request: req({ ...combo, project }) });
      assert.equal(res.status, 200);
      assert.equal(calls.length, 1);
      assert.equal(calls[0].body.subject, expectedSubject);
      assert.equal(calls[0].body.options.id_partner, `${SITE}:${UUID}:${expectedSubject}`);
    });
  }
});

test('une erreur DAA est réduite en 502 sans corps amont', async () => {
  await withMockFetch(async (calls) => {
    const res = await onRequestPost({ env: ENV, request: req() });
    const body = await res.json();
    assert.equal(res.status, 502);
    assert.equal(body.success, false);
    assert.equal(calls.length, 2);
    assert.equal(JSON.stringify(body).includes('upstream-secret'), false);
  }, (_call, index) => index === 2
    ? { httpStatus: 500, body: { success: false, details: 'upstream-secret' } }
    : { success: true, id: 10, status: 'qualification' });
});
