export interface Article {
  slug: string;
  title: string;
  category: 'Kosten' | 'Förderung' | 'Technik' | 'Wirtschaftlichkeit';
  image: string;
  summary: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "waermepumpe-photovoltaik-kombinieren-kosten-vorteile",
    title: "Wärmepumpe mit Photovoltaik kombinieren: Kosten & Vorteile",
    category: "Wirtschaftlichkeit",
    image: "/images/blog/kombi-wp-pv.webp",
    summary: "Die Kombination aus PV-Anlage und Wärmepumpe gilt als Königsweg der häuslichen Energiewende. Erfahren Sie alles über die realen Synergien, Kosten und Ersparnisse.",
    content: `
      <p>Die Kopplung einer Photovoltaikanlage (PV) mit einer Luft-Wasser-Wärmepumpe (WP) gilt im Jahr 2026 als der technologische und wirtschaftliche Goldstandard für Ein- und Zweifamilienhäuser. Durch die Verknüpfung von lokaler Solarstromerzeugung und hocheffizienter Wärmeversorgung lässt sich ein hoher Grad an Energieautarkie erreichen. Wir beleuchten die physikalischen Synergien, die Investitionskosten und die realisierbaren Ersparnisse eines solchen integrierten Gesamtsystems.</p>
      
      <h3>Die physikalische Synergie: Wie Strom zu Wärme wird</h3>
      <p>Eine moderne Luft-Wasser-Wärmepumpe arbeitet nach dem Prinzip des umgekehrten Kühlschranks: Sie entzieht der Umgebungsluft Wärmeenergie, verdichtet diese mithilfe eines Kompressors unter Einsatz von Strom und gibt die Wärme an das Heizungssystem (z. B. Fußbodenheizung oder Heizkörper) ab. Die Effizienz dieses Prozesses wird durch die Jahresarbeitszahl (JAZ) ausgedrückt. Eine JAZ von 4,0 bedeutet, dass die Wärmepumpe aus 1 kWh Strom rund 4 kWh nutzbare Wärmeenergie gewinnt.</p>
      <p>Wenn dieser Betriebsstrom nun nicht teuer aus dem öffentlichen Netz bezogen, sondern als kostenloser Solarstrom vom eigenen Dach geliefert wird, sinken die Heizkosten drastisch. Während Netzstrom 2026 bei ca. 35 bis 38 Cent pro Kilowattstunde liegt, belaufen sich die Gestehungskosten für eigenen PV-Strom auf lediglich 8 bis 10 Cent pro Kilowattstunde.</p>
      
      <h3>Die thermische Speicherung: Der Estrich als Puffer</h3>
      <p>Ein häufiger Kritikpunkt ist die zeitliche Diskrepanz: Die Sonne scheint mittags am stärksten, geheizt werden muss jedoch vor allem abends und nachts. Hier greifen moderne Energiemanagementsysteme (HEMS) und thermische Speicherkonzepte ein. Über intelligente Kommunikationsstandards wie <strong>SG Ready</strong> (Smart Grid Ready) erhält die Wärmepumpe ein Signal, sobald ein Solarstromüberschuss vorliegt.</p>
      <p>Die Wärmepumpe hebt daraufhin die Solltemperatur im Brauchwasserspeicher und im Pufferspeicher um einige Grad an. Auch die Estrichmasse einer Fußbodenheizung kann als thermischer Puffer genutzt werden (sog. Überheizung). Der tagsüber erzeugte Solarstrom wird somit in Form von heißem Wasser und Raumwärme für die Abendstunden zwischengespeichert. Dies entlastet den elektrischen Batteriespeicher und erhöht die Eigenverbrauchsquote der PV-Anlage erheblich.</p>
      
      <h3>Wirtschaftlichkeitsrechnung: Separate Systeme vs. Kombipaket</h3>
      <p>Der wirtschaftliche Vorteil zeigt sich im direkten Vergleich über einen Zeitraum von 20 Jahren. Die folgende Tabelle vergleicht ein Haus mit fossiler Gasheizung, ein Haus mit Wärmepumpe (ohne PV) und die vollständige Kombination (PV + WP + Stromspeicher).</p>
      
      <table class="cost-table">
        <thead>
          <tr>
            <th>Parameter (150 m² EFH)</th>
            <th>Gasheizung + Netzstrom</th>
            <th>Nur Wärmepumpe</th>
            <th>Kombination (PV + WP + Speicher)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jährlicher Strombedarf (Haus)</td>
            <td>4.000 kWh</td>
            <td>4.000 kWh</td>
            <td>4.000 kWh</td>
          </tr>
          <tr>
            <td>Jährlicher Heizstrombedarf</td>
            <td>0 kWh</td>
            <td>4.300 kWh (JAZ 3,5)</td>
            <td>4.300 kWh (JAZ 3,5)</td>
          </tr>
          <tr>
            <td>Brennstoffbedarf (Gas)</td>
            <td>15.000 kWh</td>
            <td>0 kWh</td>
            <td>0 kWh</td>
          </tr>
          <tr>
            <td>Eigenstromabdeckung durch PV</td>
            <td>0 %</td>
            <td>0 %</td>
            <td>ca. 55 % (Heizung) / 75 % (Haus)</td>
          </tr>
          <tr>
            <td><strong>Jährliche Betriebskosten</strong></td>
            <td><strong>ca. 4.100 €</strong></td>
            <td><strong>ca. 2.750 €</strong></td>
            <td><strong>ca. 1.250 €</strong></td>
          </tr>
          <tr class="total-row">
            <td><strong>Ersparnis vs. Gas / Jahr</strong></td>
            <td>—</td>
            <td><strong>1.350 €</strong></td>
            <td><strong>2.850 €</strong></td>
          </tr>
        </tbody>
      </table>
      
      <h3>Zusammenfassung der Vorteile</h3>
      <ul>
        <li><strong>Reduktion der Heizkosten:</strong> Durch den hohen solaren Deckungsbeitrag heizen Sie an rund 8 Monaten im Jahr nahezu kostenlos.</li>
        <li><strong>Zukunftssicherheit:</strong> Unabhängigkeit von fossilen Brennstoffen, steigenden Gaspreisen und der schrittweise angehobenen CO₂-Abgabe (BEHG).</li>
        <li><strong>Erhöhter Eigenverbrauch:</strong> Die Wärmepumpe fungiert als zusätzlicher Abnehmer für Überschussstrom und verhindert die Abregelung der PV-Anlage im Sommer.</li>
        <li><strong>Werterhalt der Immobilie:</strong> Durch die energetische Sanierung steigt die Energieeffizienzklasse (Energieausweis) des Hauses signifikant an.</li>
      </ul>
    `
  },
  {
    slug: "komplettpaket-pv-wp-was-kostet-die-energiewende-fuers-eigenheim",
    title: "Komplettpaket PV + WP: Was kostet die Energiewende fürs Eigenheim?",
    category: "Kosten",
    image: "/images/blog/komplettpaket-kosten.webp",
    summary: "Wer PV-Anlage und Wärmepumpe im Komplettpaket kauft, spart bei der Installation. Ein detaillierter Kosten- und Preisvergleich für das Jahr 2026.",
    content: `
      <p>Die Investition in eine klimafreundliche Energieversorgung ist eine der weitreichendsten Entscheidungen für Hauseigentümer. Wenn sowohl eine Solaranlage als auch eine neue Heizung benötigt werden, bietet der Erwerb eines Komplettpakets erhebliche finanzielle und organisatorische Vorteile. Wir schlüsseln die Kosten für das Jahr 2026 detailliert auf und zeigen, wie sich Synergien bei der Montage bezahlt machen.</p>
      
      <h3>Warum das Komplettpaket günstiger ist: Synergieeffekte</h3>
      <p>Werden Photovoltaik und Wärmepumpe getrennt voneinander bei unterschiedlichen Handwerksbetrieben in Auftrag gegeben, entstehen hohe Schnittstellenverluste. Im Komplettpaket hingegen lassen sich signifikante Einsparungen realisieren:</p>
      <ol>
        <li><strong>Gerüstbau und Baustelleneinrichtung:</strong> Das für die PV-Montage und den Mauerdurchbruch der Wärmepumpe benötigte Gerüst wird nur einmal aufgestellt und abgerechnet. Dies spart ca. 800 € bis 1.500 €.</li>
        <li><strong>Zentralisierte Elektroinstallation:</strong> Der Zählerschrank muss für beide Systeme umgebaut werden. Ein Elektriker kann den Einbau des Smart Meters, die Absicherung des Wechselrichters und den Anschluss des Heizstabs / Kompressors in einem einzigen Arbeitsschritt durchführen. Ersparnis: ca. 1.000 € – 1.800 €.</li>
        <li><strong>Mengenrabatte bei Komponenten:</strong> Integrierte Fachanbieter erhalten vom Großhandel bessere Konditionen für Wechselrichter, Speicher und Wärmepumpenpakete, die sie in Form von Paketpreisen an den Endkunden weitergeben.</li>
      </ol>
      
      <h3>Detaillierte Kostenaufstellung 2026</h3>
      <p>Die folgenden drei Paketgrößen decken die gängigsten Szenarien für deutsche Einfamilienhäuser ab. Alle Angaben verstehen sich inklusive Installation, Inbetriebnahme und Anmeldung beim Netzbetreiber.</p>
      
      <table class="cost-table">
        <thead>
          <tr>
            <th>System-Komponenten</th>
            <th>Paket S (Kompakt)</th>
            <th>Paket M (Standard)</th>
            <th>Paket L (Groß)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Geeignet für</td>
            <td>EFH bis 110 m²</td>
            <td>EFH 120 - 160 m²</td>
            <td>Zweifamilienhaus / Altbau</td>
          </tr>
          <tr>
            <td>PV-Anlagenleistung</td>
            <td>7 kWp (ca. 16 Module)</td>
            <td>10 kWp (ca. 24 Module)</td>
            <td>15 kWp (ca. 36 Module)</td>
          </tr>
          <tr>
            <td>Batteriespeicher</td>
            <td>6 kWh LFP</td>
            <td>10 kWh LFP</td>
            <td>15 kWh LFP</td>
          </tr>
          <tr>
            <td>Wärmepumpe (Luft-Wasser)</td>
            <td>8 kW (z. B. Propan R290)</td>
            <td>12 kW (Modulierend)</td>
            <td>16 kW (Hochtemperatur)</td>
          </tr>
          <tr>
            <td>Listenpreis (Einzelkauf)</td>
            <td>ca. 38.500 €</td>
            <td>ca. 54.000 €</td>
            <td>ca. 69.500 €</td>
          </tr>
          <tr class="total-row">
            <td><strong>Kombipaket-Preis</strong></td>
            <td><strong>ca. 34.000 €</strong></td>
            <td><strong>ca. 48.000 €</strong></td>
            <td><strong>ca. 62.000 €</strong></td>
          </tr>
          <tr class="total-row" style="background-color: #ECFDF5;">
            <td style="color: var(--success);">Tatsächlicher Preis nach KfW-Förderung</td>
            <td style="color: var(--success);"><strong>ca. 19.500 €</strong></td>
            <td style="color: var(--success);"><strong>ca. 28.500 €</strong></td>
            <td style="color: var(--success);"><strong>ca. 38.000 €</strong></td>
          </tr>
        </tbody>
      </table>
      
      <h3>Einmalige Nebenkosten und Puffer</h3>
      <p>Bei Altbauten können zusätzliche Kosten für den Austausch alter Heizkörper gegen moderne Niedertemperatur-Heizkörper (ca. 300 € pro Stück) oder für eine umfassende Zählerschranksanierung (ca. 1.500 € – 2.500 €) anfallen. Diese Kosten sind jedoch ebenfalls im Rahmen des KfW-Programms 458 förderfähig.</p>
      
      <h3>Fazit</h3>
      <p>Durch die Inanspruchnahme eines Komplettpakets minimieren Hauseigentümer nicht nur das Risiko von Schnittstellenproblemen, sondern sparen direkt bei den Errichtungskosten. Dank der Rekordförderung für Wärmepumpen halbiert sich die Netto-Investition in vielen Fällen, was die Amortisationszeit auf unter 10 Jahre drückt.</p>
    `
  },
  {
    slug: "eigenverbrauch-maximieren-so-nutzen-sie-ihren-solarstrom-optimal",
    title: "Eigenverbrauch maximieren: So nutzen Sie Ihren Solarstrom optimal",
    category: "Technik",
    image: "/images/blog/eigenverbrauch-maximieren.webp",
    summary: "Jede selbst verbrauchte Kilowattstunde spart Geld. Mit intelligenten Steuerungen und Wärmepumpen lässt sich die Eigenverbrauchsquote maximieren.",
    content: `
      <p>Im Jahr 2026 beträgt die Einspeisevergütung für Solarstrom nach dem Erneuerbare-Energien-Gesetz (EEG) nur noch rund 8 Cent pro Kilowattstunde. Da der Zukauf von Strom aus dem Netz jedoch etwa 35 Cent pro Kilowattstunde kostet, gilt eine einfache Regel: Jede selbst verbrauchte Kilowattstunde Solarstrom spart Ihnen netto rund 27 Cent. Die Kombination aus Photovoltaik und Wärmepumpe bietet hervorragende technische Möglichkeiten, diesen Eigenanteil zu maximieren.</p>
      
      <h3>Die Herausforderung: Heizlast vs. Sonnenstunden</h3>
      <p>Während eine Solaranlage im Sommer ihren Ertragspeak erreicht, benötigt die Wärmepumpe ihre Hauptenergie in den kalten Wintermonaten sowie in den Übergangszeiten (März/April und Oktober/November). Ohne intelligente Steuerung würde die Wärmepumpe vor allem in den kalten Morgen- und Abendstunden laufen — also genau dann, wenn kein Solarstrom zur Verfügung steht. Um dies zu verhindern, muss das System aktiv gesteuert werden.</p>
      
      <h3>1. Thermische Speicherung durch Sollwert-Anhebung</h3>
      <p>Die einfachste und effektivste Methode zur Steigerung des Eigenverbrauchs ist die thermische Speicherung. Sobald der Wechselrichter einen Überschuss an Solarstrom registriert, sendet er ein Signal an die Wärmepumpe (entweder über ein Relais per <strong>SG Ready</strong> oder digital per Modbus). Die Wärmepumpe reagiert darauf mit einer Erhöhung der Soll-Temperaturen:</p>
      <ul>
        <li><strong>Trinkwasserspeicher:</strong> Die Wassertemperatur wird von standardmäßig 48 °C auf 55 °C oder 60 °C angehoben. Der Heizstab oder der Kompressor nutzt hierfür ausschließlich Überschussstrom.</li>
        <li><strong>Heizungspuffer:</strong> Der Pufferspeicher wird geladen und dient als thermische Reserve für die sonnenarmen Nachtstunden.</li>
        <li><strong>Gebäudemasse (Fußbodenheizung):</strong> Die Raumtemperatur wird am Tag um 1 °C bis 2 °C angehoben. Die massive Betonplatte des Estrichs speichert die Wärme und gibt sie in den Abendstunden langsam ab.</li>
      </ul>
      
      <h3>2. Optimiertes Tages-Heizprofil</h3>
      <p>Durch die Programmierung von Sperrzeiten oder gezielten Freigabezeiten im Regler der Wärmepumpe lässt sich der Betrieb gezielt in die Mittagsstunden verschieben. Die folgende Tabelle zeigt ein optimiertes Heizprofil im Tagesverlauf:</p>
      
      <table class="cost-table">
        <thead>
          <tr>
            <th>Uhrzeit</th>
            <th>Status PV-Ertrag</th>
            <th>Wärmepumpen-Modus</th>
            <th>Ziel der Steuerung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22:00 - 06:00</td>
            <td>Kein Ertrag</td>
            <td>Absenkbetrieb (Flüsterbetrieb)</td>
            <td>Minimaler Stromverbrauch aus der Batterie</td>
          </tr>
          <tr>
            <td>06:00 - 09:00</td>
            <td>Geringer Ertrag</td>
            <td>Standardbetrieb (Heizung)</td>
            <td>Grundversorgung sichern</td>
          </tr>
          <tr>
            <td>09:00 - 12:00</td>
            <td>Steigender Ertrag</td>
            <td>DHW (Warmwasserbereitung)</td>
            <td>Speicherladung mit beginnendem Überschuss</td>
          </tr>
          <tr style="background-color: #ECFDF5; font-weight: bold;">
            <td>12:00 - 15:00</td>
            <td>Ertrags-Peak</td>
            <td>SG Ready Boost (Sollwert-Anhebung)</td>
            <td>Maximale thermische Speicherung in Estrich und Puffer</td>
          </tr>
          <tr>
            <td>15:00 - 18:00</td>
            <td>Sinkender Ertrag</td>
            <td>Standardbetrieb (Heizung)</td>
            <td>Langsame Abkühlung, Puffer hält die Last</td>
          </tr>
          <tr>
            <td>18:00 - 22:00</td>
            <td>Kein Ertrag</td>
            <td>Heizung aus dem Pufferspeicher</td>
            <td>Vermeidung von teurem Netzstrom-Bezug</td>
          </tr>
        </tbody>
      </table>
      
      <h3>3. Der Einsatz eines Home Energy Management Systems (HEMS)</h3>
      <p>Ein modernes HEMS geht über einfache SG-Ready-Relais hinaus. Es nutzt Wetterprognosen und historische Verbrauchsdaten, um den optimalen Ladezeitpunkt für den Batteriespeicher und die Laufzeit der Wärmepumpe zu berechnen. Kündigt sich beispielsweise für den Nachmittag ein bewölkter Himmel an, wird die Warmwasserbereitung vorgezogen, um den Vormittagsstrom optimal zu nutzen.</p>
    `
  },
  {
    slug: "pv-anlage-fuer-die-waermepumpe-dimensionieren-richtige-groesse-berechnen",
    title: "PV-Anlage für die Wärmepumpe dimensionieren: Richtige Größe berechnen",
    category: "Technik",
    image: "/images/blog/pv-wp-dimensionieren.webp",
    summary: "Wie viel kWp PV-Leistung benötigt man für eine Wärmepumpe? Eine Schritt-für-Schritt-Anleitung zur richtigen Dimensionierung.",
    content: `
      <p>Wer plant, eine Wärmepumpe mit Solarstrom zu betreiben, steht vor einer zentralen Frage der Auslegung: Wie groß muss die Photovoltaikanlage dimensioniert werden, damit auch im sonnenarmen Winter ein relevanter Deckungsbeitrag geleistet wird? Eine Unterdimensionierung führt zu hohem Netzstrombezug, während eine extreme Überdimensionierung unnötig hohe Anschaffungskosten verursacht. Wir zeigen Ihnen, wie Sie die optimale Größe (in Kilowattpeak, kWp) berechnen.</p>
      
      <h3>Die Ausgangslage: Der Gesamtstrombedarf</h3>
      <p>Um die PV-Anlage korrekt zu dimensionieren, müssen zwei Verbrauchswerte addiert werden:</p>
      <ol>
        <li><strong>Haushaltsstrom:</strong> Ein durchschnittlicher 4-Personen-Haushalt verbraucht ca. 4.000 kWh Strom pro Jahr.</li>
        <li><strong>Wärmepumpenstrom:</strong> Ein gut gedämmtes Einfamilienhaus mit 150 m² Wohnfläche und einer Heizlast von 8 kW benötigt ca. 15.000 kWh Wärmeenergie im Jahr. Bei einer Jahresarbeitszahl (JAZ) von 3,5 benötigt die Wärmepumpe hierfür: <br />
        <em>15.000 kWh Wärme / 3,5 = ca. 4.300 kWh Strom pro Jahr.</em></li>
      </ol>
      <p>Der Gesamtelektrizitätsbedarf des Gebäudes beläuft sich somit auf <strong>8.300 kWh pro Jahr</strong>.</p>
      
      <h3>Das Winterdefizit: Warum die JAZ im Winter sinkt</h3>
      <p>Im Winter sinkt die Außentemperatur, wodurch die Luft-Wasser-Wärmepumpe schwerer arbeiten muss. Gleichzeitig sinkt die Leistung der PV-Anlage durch den niedrigen Sonnenstand und häufige Bewölkung. Rund 70 % des jährlichen Solarertrags werden in den Monaten April bis September generiert. Um auch im Dezember und Januar nennenswerten Solarstrom für die Wärmepumpe bereitzustellen, muss die PV-Leistung großzügiger bemessen werden als bei einer reinen Haushaltsstrom-PV-Anlage.</p>
      
      <h3>Dimensionierungs-Tabelle nach Heizlast</h3>
      <p>Die folgende Tabelle dient als Richtwert für die Abstimmung zwischen der Gebäude-Heizlast und der empfohlenen PV-Nennleistung sowie der Speichergröße:</p>
      
      <table class="cost-table">
        <thead>
          <tr>
            <th>Wohnfläche (Standard EFH)</th>
            <th>Gebäude-Heizlast</th>
            <th>Empfohlene Wärmepumpe</th>
            <th>Empfohlene PV-Leistung</th>
            <th>Empfohlene Speichergröße</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100 m² (Neubau)</td>
            <td>4 - 6 kW</td>
            <td>6 kW</td>
            <td><strong>8 - 10 kWp</strong></td>
            <td>6 - 8 kWh</td>
          </tr>
          <tr class="total-row">
            <td>150 m² (Standard)</td>
            <td>7 - 9 kW</td>
            <td>10 kW</td>
            <td><strong>10 - 12 kWp</strong></td>
            <td>10 kWh</td>
          </tr>
          <tr>
            <td>200 m² (Teilsaniert)</td>
            <td>10 - 12 kW</td>
            <td>12 - 14 kW</td>
            <td><strong>14 - 18 kWp</strong></td>
            <td>12 - 15 kWh</td>
          </tr>
          <tr>
            <td>250 m² (Altbau/ZFH)</td>
            <td>14 - 16 kW</td>
            <td>16 kW</td>
            <td><strong>20 - 25 kWp</strong></td>
            <td>15 - 20 kWh</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Die goldene Regel: Dachflächen vollbelegen</h3>
      <p>Früher galt die Empfehlung, die PV-Anlage exakt auf den Jahresverbrauch auszulegen. Bei einer Wärmepumpe gilt diese Regel nicht mehr. Da im Winter jedes Watt zählt, ist die Belegung aller geeigneten Dachflächen (inklusive Ost- und Westdächer) die wirtschaftlichste Lösung. Ost-West-Dächer liefern über den gesamten Tag hinweg eine gleichmäßige Leistungskurve, die perfekt zum kontinuierlichen Strombedarf einer modulierenden Wärmepumpe passt.</p>
      
      <h3>Zusammenfassung</h3>
      <p>Für ein Standard-Einfamilienhaus ist eine PV-Anlage mit **mindestens 10 kWp** Nennleistung zu empfehlen. Gekoppelt mit einem **10 kWh Batteriespeicher** lässt sich so die optimale Balance zwischen Investitionskosten und Autarkiegrad herstellen.</p>
    `
  },
  {
    slug: "autarkie-mit-pv-waermepumpe-speicher-wie-unabhaengig-werden-sie",
    title: "Autarkie mit PV + Wärmepumpe + Speicher: Wie unabhängig werden Sie?",
    category: "Wirtschaftlichkeit",
    image: "/images/blog/autarkie-speicher.webp",
    summary: "Welcher Autarkiegrad ist mit einer Wärmepumpe und einer Solaranlage realistisch? Ein Vergleich mit und ohne Stromspeicher.",
    content: `
      <p>Das Versprechen der „Autarkie“ klingt verlockend: Keine Stromrechnungen mehr bezahlen, unabhängig von Preiserhöhungen der Energiekonzerne sein und den eigenen grünen Strom verbrauchen. Doch wie hoch ist die Autarkiequote in der Realität, wenn eine stromhungrige Wärmepumpe im System integriert ist? Wir betrachten den saisonalen Verlauf und zeigen auf, welche Werte im Jahresdurchschnitt realistisch sind.</p>
      
      <h3>Was bedeutet Autarkie im Detail?</h3>
      <p>Die Autarkiequote gibt an, wie viel Prozent Ihres gesamten Strombedarfs (Hausstrom plus Heizstrom der Wärmepumpe) durch Ihre eigene Photovoltaikanlage gedeckt werden. Der Rest muss aus dem öffentlichen Stromnetz bezogen werden. Hiervon abzugrenzen ist der **Eigenverbrauchsanteil**, welcher angibt, wie viel des erzeugten Solarstroms selbst genutzt und wie viel ins Netz eingespeist wird.</p>
      
      <h3>Saisonaler Autarkie-Verlauf: Die Winterlücke</h3>
      <p>In Deutschland steht die Solarstrahlung in direktem Widerspruch zum Heizwärmebedarf. Während im Sommer die PV-Erträge maximal sind und die Wärmepumpe nur wenig Energie für Warmwasser benötigt, kehrt sich das Verhältnis im Winter um. Im Dezember und Januar deckt die Solaranlage selbst bei großen Dächern meist nur 10 % bis 20 % des Heizstrombedarfs. In den Übergangsmonaten (März bis Mai und September bis Oktober) hingegen leistet die PV-Anlage einen enormen Beitrag und kann die Wärmepumpe oft zu 60 % bis 80 % versorgen. Im Sommer liegt die Abdeckung für Warmwasser bei nahezu 100 %.</p>
      
      <h3>Monatlicher Autarkie-Erwartungswert (Beispiel 10 kWp PV + 10 kWh Speicher + WP)</h3>
      <p>Die folgende Tabelle zeigt die typische monatliche Verteilung der Autarkie über ein Kalenderjahr in Deutschland:</p>
      
      <table class="cost-table">
        <thead>
          <tr>
            <th>Monat</th>
            <th>PV-Ertrag (10 kWp)</th>
            <th>Strombedarf (Haus+WP)</th>
            <th>Realisierbare Autarkie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Januar</td>
            <td>ca. 250 kWh</td>
            <td>ca. 1.200 kWh</td>
            <td><strong>15 % – 20 %</strong></td>
          </tr>
          <tr>
            <td>Februar</td>
            <td>ca. 450 kWh</td>
            <td>ca. 950 kWh</td>
            <td><strong>30 % – 40 %</strong></td>
          </tr>
          <tr style="background-color: #ECFDF5;">
            <td>März</td>
            <td>ca. 850 kWh</td>
            <td>ca. 750 kWh</td>
            <td><strong>60 % – 75 %</strong></td>
          </tr>
          <tr style="background-color: #ECFDF5;">
            <td>April</td>
            <td>ca. 1.150 kWh</td>
            <td>ca. 500 kWh</td>
            <td><strong>80 % – 90 %</strong></td>
          </tr>
          <tr style="background-color: #ECFDF5;">
            <td>Mai - August</td>
            <td>ca. 1.300 kWh / Monat</td>
            <td>ca. 350 kWh / Monat</td>
            <td><strong>95 % – 98 %</strong></td>
          </tr>
          <tr>
            <td>September</td>
            <td>ca. 950 kWh</td>
            <td>ca. 400 kWh</td>
            <td><strong>80 % – 90 %</strong></td>
          </tr>
          <tr>
            <td>Oktober</td>
            <td>ca. 600 kWh</td>
            <td>ca. 650 kWh</td>
            <td><strong>50 % – 65 %</strong></td>
          </tr>
          <tr>
            <td>November</td>
            <td>ca. 300 kWh</td>
            <td>ca. 950 kWh</td>
            <td><strong>20 % – 30 %</strong></td>
          </tr>
          <tr>
            <td>Dezember</td>
            <td>ca. 180 kWh</td>
            <td>ca. 1.300 kWh</td>
            <td><strong>10 % – 15 %</strong></td>
          </tr>
          <tr class="total-row">
            <td><strong>Jahresdurchschnitt</strong></td>
            <td><strong>ca. 9.800 kWh</strong></td>
            <td><strong>ca. 8.300 kWh</strong></td>
            <td><strong>🟢 65 % – 75 %</strong></td>
          </tr>
        </tbody>
      </table>
      
      <h3>Die Rolle des Batteriespeichers (LFP-Technologie)</h3>
      <p>Ein Stromspeicher ist unverzichtbar, um den Autarkiegrad von ca. 45 % (ohne Speicher) auf über 70 % anzuheben. Moderne Speicher nutzen die Lithium-Eisenphosphat-Technologie (LFP). Diese zeichnet sich durch extreme Zyklenfestigkeit (bis zu 6.000 Ladezyklen) und hohe Eigensicherheit aus. Der Speicher nimmt die Energieüberschüsse des Mittags auf und gibt sie in den Abendstunden ab, wenn die Wärmepumpe anspringt, um die Raumtemperaturen zu halten.</p>
    `
  },
  {
    slug: "foerderung-fuer-pv-und-waermepumpe-alle-zuschuesse-2026-im-ueberblick",
    title: "Förderung für PV und Wärmepumpe: Alle Zuschüsse 2026 im Überblick",
    category: "Förderung",
    image: "/images/blog/foerderung-2026.webp",
    summary: "Staatliche Zuschüsse senken die Kosten für Wärmepumpen und Photovoltaik drastisch. Alle Details zu KfW, BAFA und Steuervorteilen 2026.",
    content: `
      <p>Die energetische Sanierung von Wohngebäuden wird in Deutschland so stark gefördert wie nie zuvor. Insbesondere der Austausch einer alten fossilen Öl- oder Gasheizung gegen eine moderne Wärmepumpe in Kombination mit einer Photovoltaikanlage wird durch verschiedene staatliche Töpfe massiv bezuschusst. Wir erklären die aktuellen KfW-Förderrichtlinien (Zuschuss 458) und steuerlichen Vorteile des Jahres 2026.</p>
      
      <h3>1. Die Bundesförderung für effiziente Gebäude (BEG) - KfW 458</h3>
      <p>Für den Einbau einer Luft-Wasser-Wärmepumpe erhalten private Hauseigentümer direkte Zuschüsse über die Kreditanstalt für Wiederaufbau (KfW). Die Förderung setzt sich modular zusammen:</p>
      <ul>
        <li><strong>Basisförderung (30 %):</strong> Erhält jeder Eigentümer für den Umstieg auf eine klimafreundliche Wärmepumpe.</li>
        <li><strong>Klimageschwindigkeits-Bonus (20 %):</strong> Wird gewährt, wenn Sie eine funktionierende Öl-, Kohle-, Nachtspeicher- oder eine mindestens 20 Jahre alte Gasheizung ersetzen. Dieser Bonus sinkt in den Folgejahren schrittweise ab, schnelles Handeln lohnt sich.</li>
        <li><strong>Einkommens-Bonus (30 %):</strong> Richtet sich an selbstnutzende Eigentümer, deren zu versteuerndes Haushaltsjahreseinkommen unter 40.000 € liegt.</li>
        <li><strong>Effizienz-Bonus (5 %):</strong> Gibt es, wenn die Wärmepumpe ein natürliches Kältemittel (wie Propan R290) nutzt oder Erdwärme erschließt.</li>
      </ul>
      
      <p><strong>Wichtige Deckelung:</strong> Die einzelnen Boni lassen sich kombinieren, sind jedoch auf einen <strong>maximalen Gesamtfördersatz von 70 %</strong> begrenzt. Die förderfähigen Kosten für die erste Wohneinheit betragen maximal 30.000 €, woraus sich ein **maximaler KfW-Zuschuss von 21.000 €** ergibt.</p>
      
      <h3>Förderungs-Rechenbeispiele für die Wärmepumpe</h3>
      <table class="cost-table">
        <thead>
          <tr>
            <th>Antragsteller-Szenario</th>
            <th>Zusammensetzung Boni</th>
            <th>Gesamtfördersatz</th>
            <th>Zuschuss bei 30.000 € Kosten</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard-Eigentümer (Gastherme 10 Jahre alt)</td>
            <td>30% Basis + 5% Propan</td>
            <td>35 %</td>
            <td>10.500 €</td>
          </tr>
          <tr>
            <td>Schnellentschlossene (Austausch Ölheizung)</td>
            <td>30% Basis + 20% Speed + 5% Propan</td>
            <td>55 %</td>
            <td>16.500 €</td>
          </tr>
          <tr class="total-row">
            <td>Eigentümer mit Einkommen &lt; 40.000 € / Jahr</td>
            <td>30% Basis + 20% Speed + 30% Einkommen + 5% Propan (gedeckelt)</td>
            <td><strong>🟢 70 %</strong></td>
            <td><strong>21.000 €</strong></td>
          </tr>
        </tbody>
      </table>
      
      <h3>2. Steuerliche Vorteile für Photovoltaik (Nullsteuersatz)</h3>
      <p>Für den Kauf und die Installation einer Photovoltaikanlage sowie des zugehörigen Batteriespeichers gilt in Deutschland dauerhaft der **Nullsteuersatz gemäß § 12 Abs. 3 UStG**. Dies bedeutet, dass auf der Rechnung des Solarteurs 0 % Mehrwertsteuer ausgewiesen werden. Hauseigentümer sparen somit direkt 19 % Anschaffungskosten, ohne einen Antrag beim Finanzamt stellen zu müssen.</p>
      
      <h3>3. Ergänzende zinsgünstige Kredite (KfW 358/359)</h3>
      <p>Wer den Eigenanteil nicht vollständig aus Eigenmitteln finanzieren möchte, kann einen zinsgünstigen Ergänzungskredit über die KfW beantragen (bis zu 120.000 € Kreditsumme). Für Haushalte mit einem Einkommen unter 90.000 € gibt es zusätzliche Zinsverbilligungen.</p>
    `
  },
  {
    slug: "waermepumpe-mit-solarstrom-betreiben-so-funktioniert-es-technisch",
    title: "Wärmepumpe mit Solarstrom betreiben: So funktioniert's technisch",
    category: "Technik",
    image: "/images/blog/wp-solarstrom-technik.webp",
    summary: "Was passiert hinter den Kulissen, wenn Solarstrom zur Wärmepumpe fließt? Wechselrichter, SG Ready und Energiemanagement verständlich erklärt.",
    content: `
      <p>Die Kombination aus Photovoltaikanlage und Wärmepumpe verspricht minimale Heizkosten. Damit dies gelingt, müssen die beiden komplexen Systeme reibungslos miteinander kommunizieren. Wir erklären verständlich die technischen Schnittstellen, Steuerungssignale und wie der Strom vom Dach physikalisch in den Kompressor Ihrer Heizung gelangt.</p>
      
      <h3>Die physikalische Stromleitung</h3>
      <p>Grundsätzlich gilt: Strom fließt immer den Weg des geringsten Widerstands. Wenn die PV-Anlage auf dem Dach Strom produziert, leitet der Wechselrichter diesen in das Hausnetz. Ist im Haus ein Verbraucher aktiv — beispielsweise der Kompressor der Wärmepumpe —, wird dieser Strom direkt physikalisch im Haus verbraucht. Erst wenn im Haus kein Bedarf mehr besteht, fließt der überschüssige Strom über den Zweirichtungszähler ins öffentliche Netz. Eine spezielle physikalische Trennung zwischen „Solarstrom“ und „Netzstrom“ gibt es in den Kabeln nicht.</p>
      
      <h3>Die Steuerungsebenen: Wie die Geräte kommunizieren</h3>
      <p>Damit die Wärmepumpe bevorzugt dann arbeitet, wenn die Sonne scheint, stehen drei technische Kommunikationsmethoden zur Verfügung:</p>
      
      <h4>1. Die SG Ready Schnittstelle (Smart Grid Ready)</h4>
      <p>Dies ist der am weitesten verbreitete Standard. Die Wärmepumpe verfügt über zwei Steuereingänge (Schaltkontakte), die vom Wechselrichter oder einer Smart-Home-Zentrale geschaltet werden können. Es gibt vier definierte Betriebszustände:</p>
      <ul>
        <li><strong>Zustand 1 (Sperrzeit):</strong> Die Wärmepumpe wird blockiert (z.B. bei extremen Netzlasten, für PV-Eigenverbrauch irrelevant).</li>
        <li><strong>Zustand 2 (Standardbetrieb):</strong> Die Wärmepumpe arbeitet nach den eingestellten Heizkurven.</li>
        <li><strong>Zustand 3 (Empfehlung / PV-Überschuss):</strong> Die Wärmepumpe läuft an und hebt die Solltemperaturen für Warmwasser und Heizungspuffer moderat an (z. B. um 3 bis 5 °C).</li>
        <li><strong>Zustand 4 (Befehl / PV-Maximum):</strong> Die Wärmepumpe und der elektrische Heizstab schalten sich ein, um die Speicher maximal aufzuladen (bis zu 60 °C).</li>
      </ul>
      
      <h4>2. Digitale Kommunikation per Modbus TCP / EEBUS</h4>
      <p>Moderne Wechselrichter und Wärmepumpen kommunizieren zunehmend über Netzwerkkabel (Ethernet) unter Verwendung standardisierter Protokolle wie EEBUS oder Modbus TCP. Dies ermöglicht eine stufenlose (modulierende) Regelung. Das HEMS (Home Energy Management System) teilt der Wärmepumpe exakt mit: „Es stehen aktuell genau 1.800 Watt Überschuss zur Verfügung.“ Die Wärmepumpe regelt ihren Inverter-Kompressor daraufhin exakt auf diese Leistungsaufnahme ein, sodass kein einziges Watt Netzstrom bezogen werden muss.</p>
      
      <h3>Die Rolle der Inverter-Technologie</h3>
      <p>Ältere Wärmepumpen kannten nur zwei Zustände: An (100% Leistung) oder Aus (0% Leistung). Für den PV-Betrieb ist dies ungünstig, da eine 12 kW Wärmepumpe beim Start schlagartig 3.000 Watt benötigt. Moderne Wärmepumpen nutzen die **Inverter-Technologie**. Sie können ihre Leistung stufenlos anpassen (modulieren) und beispielsweise mit nur 400 Watt Leistungsaufnahme leise vor sich hin arbeiten. Dies passt perfekt zur variablen Leistungskurve einer Solaranlage bei wechselnder Bewölkung.</p>
    `
  },
  {
    slug: "energiekosten-vergleich-gas-vs-pv-waermepumpe-ueber-20-jahre",
    title: "Energiekosten-Vergleich: Gas vs. PV + Wärmepumpe über 20 Jahre",
    category: "Wirtschaftlichkeit",
    image: "/images/blog/energiekosten-vergleich.webp",
    summary: "Lohnt sich die hohe Anfangsinvestition in Solar und Wärmepumpe? Eine 20-Jahres-Rechnung im direkten Vergleich zur fossilen Gasheizung.",
    content: `
      <p>Wer vor der Entscheidung steht, seine alte Heizung zu sanieren, scheut oft die hohen Anschaffungskosten einer Wärmepumpe und einer zusätzlichen Photovoltaikanlage. Eine neue Gastherme ist in der Anschaffung deutlich günstiger. Doch eine ehrliche Wirtschaftlichkeitsrechnung darf nicht nur die Anschaffungskosten betrachten, sondern muss die gesamten Betriebs- und Energiekosten über eine typische Lebensdauer von 20 Jahren bilanzieren. Wir stellen beide Systeme gegenüber.</p>
      
      <h3>Die Rahmenbedingungen für unseren 20-Jahre-Vergleich</h3>
      <ul>
        <li><strong>Gebäude:</strong> Einfamilienhaus, 150 m² Wohnfläche, Heizwärmebedarf: 18.000 kWh/Jahr.</li>
        <li><strong>Szenario A (Gas):</strong> Neue Brennwert-Gastherme (Anschaffung inkl. Einbau ca. 12.000 €). Durchschnittlicher Gaspreis: 14 Cent/kWh (inkl. CO₂-Abgabe nach BEHG).</li>
        <li><strong>Szenario B (Kombipaket):</strong> Luft-Wasser-Wärmepumpe (JAZ 3,5) + 10 kWp PV-Anlage + 10 kWh Batteriespeicher. Anschaffung (Paketpreis abzüglich 55% KfW-Förderung und 0% MwSt): ca. 28.000 €. Strompreis: 36 Cent/kWh.</li>
        <li><strong>Angenommene Inflation:</strong> 3 % jährliche Preissteigerung auf Gas und Netzstrom ab Jahr 2.</li>
      </ul>
      
      <h3>Betriebskosten-Vergleich im Zeitverlauf</h3>
      <p>Die folgende Tabelle schlüsselt die kumulierten Energiekosten (Heizung + Hausstrom) sowie eventuelle Wartungskosten über einen Zeitraum von 20 Jahren auf:</p>
      
      <table class="cost-table">
        <thead>
          <tr>
            <th>Jahr</th>
            <th>Szenario A: Gasheizung + Netzstrom</th>
            <th>Szenario B: PV + WP + Speicher (Kombipaket)</th>
            <th>Ersparnis (Kombipaket) / Jahr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jahr 1</td>
            <td>4.100 € (2.520 € Gas + 1.580 € Strom)</td>
            <td>1.300 € (Netzstrombezug Rest)</td>
            <td>2.800 €</td>
          </tr>
          <tr>
            <td>Jahr 5</td>
            <td>4.614 €</td>
            <td>1.463 €</td>
            <td>3.151 €</td>
          </tr>
          <tr>
            <td>Jahr 10</td>
            <td>5.348 €</td>
            <td>1.696 €</td>
            <td>3.652 €</td>
          </tr>
          <tr>
            <td>Jahr 15</td>
            <td>6.200 €</td>
            <td>1.966 € (inkl. WR-Tausch anteilig)</td>
            <td>4.234 €</td>
          </tr>
          <tr>
            <td>Jahr 20</td>
            <td>7.188 €</td>
            <td>2.279 €</td>
            <td>4.909 €</td>
          </tr>
          <tr class="total-row">
            <td><strong>Energiekosten gesamt</strong></td>
            <td><strong>111.450 €</strong></td>
            <td><strong>35.400 €</strong></td>
            <td><strong>🟢 76.050 € Ersparnis</strong></td>
          </tr>
        </tbody>
      </table>
      
      <h3>Gesamtbilanz inklusive Anschaffung</h3>
      <p>Rechnet man die Anschaffungskosten in die 20-Jahres-Bilanz ein, ergibt sich folgendes eindeutiges Bild:</p>
      <ul>
        <li><strong>Gesamtkosten Gasheizung (Anschaffung + Betrieb):</strong> 12.000 € + 111.450 € = <strong>123.450 €</strong></li>
        <li><strong>Gesamtkosten Kombipaket (Anschaffung + Betrieb):</strong> 28.000 € + 35.400 € = <strong>63.400 €</strong></li>
      </ul>
      <p><strong>Trotz der um 16.000 € höheren Netto-Anschaffungskosten sparen Hauseigentümer über 20 Jahre hinweg rund 60.000 € mit dem PV-Wärmepumpen-Kombipaket.</strong></p>
      
      <h3>Warum fossile Heizungen ein finanzielles Risiko sind</h3>
      <p>Das Brennstoffemissionshandelsgesetz (BEHG) regelt die CO₂-Bepreisung für Erdgas und Heizöl. Der Preis pro Tonne CO₂ steigt kontinuierlich an, was ab 2027 zu einer ungedeckten Marktpreisbildung führt. Wer heute noch in eine Gasheizung investiert, geht das erhebliche Risiko unkalkulierbar steigender Heizkosten ein, während das Kombipaket Unabhängigkeit und Preissicherheit garantiert.</p>
    `
  },
  {
    slug: "kombi-angebote-lohnt-sich-das-gesamtpaket-vom-gleichen-anbieter",
    title: "Kombi-Angebote: Lohnt sich das Gesamtpaket vom gleichen Anbieter?",
    category: "Kosten",
    image: "/images/blog/kombi-angebote.webp",
    summary: "Viele Fachbetriebe bieten Komplettpakete für PV und Wärmepumpe an. Vor- und Nachteile von Komplettanbietern im Überblick.",
    content: `
      <p>Bei der energetischen Sanierung eines Hauses stehen Eigentümer vor einer organisatorischen Herausforderung: Es müssen verschiedene Gewerke koordiniert werden — vom Dachdecker über den Gerüstbauer und Heizungsinstallateur bis hin zum Elektriker. Um diesen Aufwand zu minimieren, bieten immer mehr Fachfirmen Komplettpakete für Photovoltaik und Wärmepumpe aus einer Hand an. Wir analysieren die Vor- und Nachteile dieses Ansatzes.</p>
      
      <h3>Vergleich der Umsetzungsmodelle</h3>
      <p>Grundsätzlich gibt es zwei Wege zur Realisierung Ihres PV-Wärmepumpen-Projekts:</p>
      
      <h4>Modell A: Der integrierte Generalunternehmer (Komplettanbieter)</h4>
      <p>Ein einziges Unternehmen plant die Gesamtanlage, liefert alle Komponenten (Wärmepumpe, Solarmodule, Wechselrichter, Speicher) und koordiniert die eigenen Handwerker-Teams für Dach, Heizungskeller und Elektroanschluss.</p>
      
      <h4>Modell B: Getrennte Einzelgewerke</h4>
      <p>Sie beauftragen einen lokalen Heizungsbauer für die Wärmepumpe und einen separaten Solarteur für die PV-Anlage. Die Abstimmung und Elektroanmeldung müssen zwischen beiden Betrieben koordiniert werden.</p>
      
      <h3>Entscheidungsmatrix: Komplettanbieter vs. Einzelgewerke</h3>
      <table class="cost-table">
        <thead>
          <tr>
            <th>Kriterium</th>
            <th>Komplettanbieter (Kombi-Angebot)</th>
            <th>Getrennte Einzelgewerke</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Planungsaufwand</td>
            <td><strong>Sehr gering</strong> (alles aus einer Hand)</td>
            <td><strong>Hoch</strong> (Schnittstellen müssen selbst koordiniert werden)</td>
          </tr>
          <tr>
            <td>Gewährleistung</td>
            <td><strong>Eindeutig</strong> (Ein Ansprechpartner für das Gesamtsystem)</td>
            <td><strong>Schwierig</strong> (Gefahr von Schuldzuweisungen bei Störungen)</td>
          </tr>
          <tr>
            <td>System-Abstimmung</td>
            <td><strong>Optimal</strong> (Erprobte Komponenten-Kombinationen)</td>
            <td><strong>Variabel</strong> (Abhängig vom Fachwissen der Betriebe)</td>
          </tr>
          <tr>
            <td>Installationsdauer</td>
            <td><strong>Kurz</strong> (Ineinandergreifende Handwerker-Teams)</td>
            <td><strong>Länger</strong> (Terminabstimmungen zwischen den Firmen nötig)</td>
          </tr>
          <tr>
            <td>Anschaffungspreis</td>
            <td>Mittel bis Hoch (Komfort-Aufschlag)</td>
            <td>Teilweise günstiger bei hohem Eigenaufwand</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Die Schnittstellenfalle vermeiden</h3>
      <p>Der größte Vorteil eines Kombi-Angebots liegt in der klaren Gewährleistung. Arbeitet die Wärmepumpe nicht optimal mit der PV-Überschusssteuerung zusammen, schieben sich getrennte Gewerke gerne die Schuld zu: Der Heizungsbauer verweist auf den Wechselrichter-Programmierer, dieser wiederum auf die Steuerelektronik der Wärmepumpe. Bei einem Komplettanbieter liegt die Gesamtverantwortung bei einer einzigen Firma, was Ihnen langwierigen Ärger erspart.</p>
      
      <h3>Fazit</h3>
      <p>Für die Mehrheit der Hauseigentümer ist das Kombi-Angebot eines integrierten Anbieters die stressfreiste und sicherste Wahl. Die geringfügig höheren Kosten werden durch die Zeitersparnis, die fehlerfreie technische Abstimmung und die unkomplizierte Gewährleistung im Alltag mehr als ausgeglichen.</p>
    `
  },
  {
    slug: "e-auto-pv-waermepumpe-das-dreier-system-fuers-eigenheim",
    title: "E-Auto + PV + Wärmepumpe: Das Dreier-System für maximale Autarkie",
    category: "Wirtschaftlichkeit",
    image: "/images/blog/eauto-pv-wp.webp",
    summary: "Wer Solarstrom für Heizung UND Mobilität nutzt, maximiert seine Einsparungen. So funktioniert das Dreier-System im Alltag.",
    content: `
      <p>Die Verknüpfung von Stromerzeugung, Wärmeversorgung und Mobilität im privaten Haushalt wird als Sektorenkopplung bezeichnet. Wenn Sie ein Elektroauto mit einer Wärmepumpe und einer Photovoltaikanlage kombinieren, entsteht ein hocheffizientes Dreier-System. Dieses maximiert den Eigenverbrauch Ihres Solarstroms und minimiert Ihre laufenden Energiekosten. Wir zeigen, wie die Steuerung im Alltag funktioniert.</p>
      
      <h3>Die Herausforderung: Hoher Energiebedarf intelligent steuern</h3>
      <p>Ein Haushalt mit Wärmepumpe und Elektroauto (Fahrleistung ca. 15.000 km/Jahr) benötigt jährlich rund 10.000 bis 12.000 kWh Strom. Ohne ein intelligentes Steuerungssystem besteht die Gefahr von Überlastungen des Hausanschlusses, wenn die Wärmepumpe heizt, im Haus gekocht wird und zeitgleich das E-Auto lädt. Ein modernes Energiemanagementsystem (HEMS) verhindert dies durch **dynamisches Lastmanagement**.</p>
      
      <h3>Priorisierung des Solarstroms im Alltag</h3>
      <p>Ein HEMS verteilt den erzeugten Solarstrom nach einer festen Prioritätenliste:</p>
      <ol>
        <li><strong>Direktverbrauch im Haushalt:</strong> Waschmaschine, Kochen und Licht haben immer Vorrang, um Netzstrombezug sofort zu vermeiden.</li>
        <li><strong>Batteriespeicher laden:</strong> Der Hausspeicher wird geladen, um die Stromversorgung des Hauses in den Abend- und Nachtstunden abzusichern.</li>
        <li><strong>Wärmepumpen-Boost:</strong> Überschüssiger Strom wird thermisch im Warmwasser- und Pufferspeicher zwischengespeichert.</li>
        <li><strong>Elektroauto laden (Überschussladen):</strong> Liegt danach immer noch Überschuss vor, regelt die Wallbox den Ladevorgang des E-Autos stufenlos hoch (z.B. durch automatische Phasenumschaltung von 1-phasigem auf 3-phasiges Laden).</li>
      </ol>
      
      <h3>Das wöchentliche Energie-Budget: Verteilung im Sommer vs. Winter</h3>
      <p>Die folgende Übersicht zeigt die Verteilung des wöchentlichen Solarstroms (Ertrag einer 12 kWp Anlage) in verschiedenen Jahreszeiten:</p>
      
      <table class="cost-table">
        <thead>
          <tr>
            <th>Verbraucher-Sektor</th>
            <th>Sommerwoche (Ertrag ca. 350 kWh)</th>
            <th>Winterwoche (Ertrag ca. 60 kWh)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hausstrom-Bedarf</td>
            <td>80 kWh (zu 95% durch PV gedeckt)</td>
            <td>80 kWh (zu 20% durch PV gedeckt)</td>
          </tr>
          <tr>
            <td>Wärmepumpe (Warmwasser/Heizung)</td>
            <td>20 kWh (zu 100% durch PV gedeckt)</td>
            <td>150 kWh (zu 15% durch PV gedeckt)</td>
          </tr>
          <tr>
            <td>Elektroauto (Wallbox)</td>
            <td>70 kWh (zu 100% durch PV gedeckt)</td>
            <td>70 kWh (zu 10% durch PV gedeckt)</td>
          </tr>
          <tr class="total-row">
            <td>Einspeisung / Netzbezug</td>
            <td><strong>+180 kWh ins Netz eingespeist</strong></td>
            <td><strong>-225 kWh aus dem Netz bezogen</strong></td>
          </tr>
        </tbody>
      </table>
      
      <h3>Dynamische Tarife als Ergänzung im Winter</h3>
      <p>Da die PV-Anlage im Winter nicht genügend Strom für Wärmepumpe und E-Auto liefert, empfiehlt sich die Kombination mit einem **dynamischen Stromtarif** (z. B. Tibber oder Awattar). Das HEMS lädt dann das E-Auto und betreibt die Wärmepumpe gezielt in den Nachtstunden, wenn der Strom an der Börse besonders günstig ist (z. B. bei viel Windstrom im Netz).</p>
      
      <h3>Zusammenfassung</h3>
      <p>Das Dreier-System macht Sie im Sommer vollkommen autark und senkt Ihre Betriebskosten im Winter durch intelligente Sektorenkopplung und dynamische Tarife. Es stellt die technologische Speerspitze der privaten Energiewende dar.</p>
    `
  }
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getRecentArticles(limit = 4): Article[] {
  return articles.slice(0, limit);
}
