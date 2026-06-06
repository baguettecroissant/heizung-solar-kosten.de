/**
 * ⭐ SITE CONFIGURATION — heizung-solar-kosten.de
 * EMD dual-niche : PV + WP Combo (Photovoltaik + Wärmepumpe)
 */
export const siteConfig = {
  // === IDENTITÄT ===
  domain: "heizung-solar-kosten.de",
  name: "Heizung & Solar Kosten",
  tagline: "Heizung & Solar Kosten — Wärmepumpe + Photovoltaik kombinieren 2026",
  description: "Was kostet die Kombination aus Photovoltaik und Wärmepumpe 2026? Erfahren Sie alles über Preise, Förderung und Wirtschaftlichkeit. Jetzt Angebote vergleichen und sparen.",
  editorialTone: "Energieberater für das Gesamtpaket",

  // === NICHE ===
  niche: {
    slug: "heizung-solar",
    name: "Wärmepumpe mit Photovoltaik",
    nameShort: "PV + WP Kombi",
    emoji: "⚡",
    seoTitleTemplate: "Heizung & Solar Kosten in {city} — Wärmepumpe + Photovoltaik {zip}",
    metaDescTemplate: "Heizung und Solar kombinieren in {city}: Wärmepumpe + Photovoltaik ab {priceMin}€. Bis zu 50% Energiekosten sparen. Kostenlose Angebote vergleichen.",
    heroTitle: "Heizung & Solar Kosten — Wärmepumpe + Photovoltaik kombinieren 2026",
    heroSubtitle: "Die effizienteste Kombination für Ihr Eigenheim. Betreiben Sie Ihre Wärmepumpe fast kostenlos mit Solarstrom vom eigenen Dach und sichern Sie sich maximale Autarkie.",
  },

  // === MONETARISIERUNG (TAP TAP HOME DUAL) ===
  taptaphome: {
    partnerName: "DAA GmbH (BOSCH-Gruppe)",
    contactPerson: "Tuuli Himme (tuuli.himme@taptaphome.com)",
    
    // ZWEI getrennte Kampagnen
    pv: {
      campaign: "PV (Photovoltaik)",
      provision: "35% (ca. 80€/Lead)",
      ctaColor: "#FF6F00",
      trackingLink: "https://www.taptaphome.com/?utm_source=affiliate&utm_campaign=heizung_solar_kosten_de_pv",
    },
    hp: {
      campaign: "HP (Wärmepumpe)",
      provision: "35% (ca. 63€/Lead)",
      ctaColor: "#D84315",
      trackingLink: "https://www.taptaphome.com/?utm_source=affiliate&utm_campaign=heizung_solar_kosten_de_hp",
    },
    
    // PLZ-Filter: Union der PV- und HP-Regionen
    highAvrPrefixes: [
      "04", "06", "07", "08", "09", "12", "13", "14", "15", "16", "21", "22", "24", "25", "26", "27", "28", "30", "31", "32", "33", "38", "39", "40", "41", "42", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "55", "56", "57", "58", "60", "61", "63", "64", "65", "67", "68", "69", "70", "71", "73", "74", "75", "76", "80", "81", "82", "83", "84", "85", "86", "90", "91", "93", "94", "99"
    ]
  },

  // === KOSTEN KOMBINATION (2026) ===
  pricing: {
    headline: "Gesamtpaket: PV 10 kWp + Speicher 10 kWh + Luft-Wasser-WP",
    table: [
      { component: "PV-Anlage 10 kWp", individual: "14.000€ – 18.000€", packet: "12.000€ – 16.000€" },
      { component: "Stromspeicher 10 kWh", individual: "6.000€ – 9.000€", packet: "5.000€ – 8.000€" },
      { component: "Luft-Wasser-WP (inkl. Einbau)", individual: "25.000€ – 35.000€", packet: "22.000€ – 32.000€" },
    ],
    individualTotal: "45.000€ – 62.000€",
    packetTotal: "39.000€ – 56.000€",
    savingsTotal: "~5.000€ – 6.000€",
    kfwGrants: "-12.500€ bis -17.500€ (KfW 458 für WP)",
    taxFree: "-3.400€ bis -4.600€ (0% MwSt-Vorteil PV)",
    netTotal: "~20.000€ – 35.000€"
  },

  // === WIRTSCHAFTLICHKEIT (Betriebskosten pro Jahr) ===
  operatingCosts: [
    { scenario: "Standard: Gas + Netzstrom", cost: "4.500€ – 6.000€", savings: "—" },
    { scenario: "Nur Wärmepumpe (ohne PV)", cost: "2.800€ – 3.500€", savings: "1.500€ – 2.500€" },
    { scenario: "Nur PV-Anlage (ohne WP)", cost: "3.200€ – 4.500€", savings: "1.000€ – 1.500€" },
    { scenario: "🟢 PV + WP Kombination", cost: "1.200€ – 2.000€", savings: "3.000€ – 4.000€" },
    { scenario: "🟢 PV + WP + 10 kWh Speicher", cost: "800€ – 1.500€", savings: "3.500€ – 4.500€" },
  ],

  // === AUTARKIE GRADE ===
  autarky: [
    { system: "Nur Photovoltaik-Anlage", rate: "25% – 35%" },
    { system: "Photovoltaik + Speicher", rate: "50% – 70%" },
    { system: "Photovoltaik + Wärmepumpe", rate: "40% – 55%" },
    { system: "🟢 Photovoltaik + Wärmepumpe + Speicher", rate: "60% – 80%" }
  ],

  // === FÖRDERUNG 2026 ===
  subsidies: [
    { name: "KfW-Grundförderung WP", amount: "30%", condition: "Basis-Zuschuss für jeden Wärmepumpen-Kauf" },
    { name: "Klimageschwindigkeits-Bonus", amount: "+20%", condition: "Für den schnellen Tausch einer alten fossilen Heizung" },
    { name: "Einkommens-Bonus", amount: "+30%", condition: "Für selbstnutzende Eigentümer mit zvE < 40.000€/Jahr" },
    { name: "Effizienz-Bonus", amount: "+5%", condition: "Bei Wärmepumpen mit natürlichem Kältemittel (Propan)" },
    { name: "Max. Förderung gedeckelt", amount: "70%", condition: "Höchstgrenze der KfW-Zuschüsse (max. 21.000€)" },
    { name: "Umsatzsteuersatz für PV", amount: "0%", condition: "Keine Mehrwertsteuer auf PV-Module & Speicher" }
  ],

  // === TRUST BADGES ===
  trustBadges: [
    "Bis zu 50% Heizkosten sparen",
    "PV + WP = maximale Unabhängigkeit",
    "Doppelte Förderung 2026",
    "Kostenlose Angebote vergleichen"
  ],

  // === PROCESS STEPS ===
  process: [
    { title: "Projekt konfigurieren", desc: "Wählen Sie aus, ob Sie PV, WP oder beides kombinieren möchten.", icon: "📋", duration: "2 Min" },
    { title: "Qualifikation & Region prüfen", desc: "Ihre Postleitzahl wird mit den AVR-Zielgebieten unserer Partner abgeglichen.", icon: "🔍", duration: "Echtzeit" },
    { title: "Anfragen weiterleiten", desc: "Wir leiten Ihre Anfrage für die ausgewählten Kampagnen (PV und/oder WP) weiter.", icon: "📨", duration: "Direkt" },
    { title: "Angebote vergleichen", desc: "Sie erhalten bis zu 3 maßgeschneiderte Angebote von geprüften Fachbetrieben.", icon: "⚡", duration: "Kostenlos" }
  ],

  // === GENERAL FAQ ===
  faq: [
    {
      q: "Warum lohnt es sich, eine Wärmepumpe mit Photovoltaik zu kombinieren?",
      a: "Die Kombination aus Wärmepumpe (WP) und Photovoltaikanlage (PV) gilt als die wirtschaftlichste Lösung für die Energiewende im Eigenheim. Die Wärmepumpe benötigt Strom, um Wärme aus der Luft oder Erde zu gewinnen. Wenn dieser Strom über Ihre eigene PV-Anlage erzeugt wird, heizen Sie einen Großteil des Jahres nahezu kostenlos. Das senkt Ihre Betriebskosten drastisch und schützt Sie vor steigenden Strompreisen."
    },
    {
      q: "Wie groß sollte die PV-Anlage für eine Wärmepumpe dimensioniert sein?",
      a: "Als Faustregel gilt: Je größer, desto besser. Da eine Wärmepumpe vor allem im Winter viel Heizstrom benötigt, liefert eine groß dimensionierte PV-Anlage auch bei bewölktem Himmel noch ausreichend Energie. Wir empfehlen für ein Standard-Einfamilienhaus eine Mindestgröße von 10 kWp (Kilowattpeak), idealerweise 12 bis 15 kWp, um sowohl den Haushaltsstrom als auch den Heizstrom optimal zu decken."
    },
    {
      q: "Welche staatliche Förderung gibt es 2026 für das Komplettpaket?",
      a: "Für die Wärmepumpe erhalten Sie über die KfW (Zuschuss 458) bis zu 70 % Förderung (maximal 21.000 €). Für die Photovoltaikanlage profitieren Sie vom gesetzlichen Nullsteuersatz (0 % Umsatzsteuer in Deutschland), was einer Ersparnis von 19 % auf alle Anschaffungs- und Montagekosten entspricht. Zusätzlich bieten viele Kommunen regionale Speicherzuschüsse."
    },
    {
      q: "Macht ein Stromspeicher bei einer Wärmepumpe-PV-Kombination Sinn?",
      a: "Ja, unbedingt. Ein Stromspeicher erhöht den solaren Eigenverbrauch von ca. 30 % auf über 60 % bis 80 %. Er speichert tagsüber überschüssigen Solarstrom, der dann am Abend und in der Nacht von der Wärmepumpe zum Heizen oder für Warmwasser verbraucht werden kann. Das erhöht Ihre Autarkie und senkt den teuren Zukauf aus dem Netz."
    },
    {
      q: "Wie hoch ist die Amortisationszeit für die Kombination aus PV und WP?",
      a: "Durch die extremen Einsparungen bei den Heiz- und Stromkosten amortisiert sich das Komplettpaket (PV + WP + Speicher) im Schnitt nach 9 bis 12 Jahren. Bei einer Lebensdauer der Module von über 25 Jahren und der Wärmepumpe von 15-20 Jahren heizen Sie danach über ein Jahrzehnt komplett kostenfrei."
    }
  ],

  // === INTRO TEXT ===
  introText: `Die Kombination aus einer Photovoltaikanlage und einer modernen Luft-Wasser-Wärmepumpe ist im Jahr 2026 der Königsweg zur Klimaneutralität und maximalen Heizkostenersparnis im eigenen Haus. Mit selbst erzeugtem Solarstrom betreiben Sie Ihre Heizung zu einem großen Teil völlig autark und entgehen der Preisspirale fossiler Energieträger.
  
  Dank Rekord-Förderungen der KfW von bis zu 70% für Wärmepumpen und der dauerhaften Mehrwertsteuerbefreiung (0% Steuersatz) für Photovoltaikanlagen ist der Einstieg finanziell so attraktiv wie nie zuvor. Durch Komplettpakete vom gleichen Anbieter lassen sich zudem erhebliche Synergien bei Montage, Elektroanschluss und Abstimmung der Steuerungstechnik erzielen.`
} as const;

export type SiteConfig = typeof siteConfig;
