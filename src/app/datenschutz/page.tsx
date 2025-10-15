import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · Ferienwohnung Unterm Schloß",
  description: "Datenschutzerklärung der Ferienwohnung Unterm Schloß in Hambach",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-rose-600 hover:text-rose-700 mb-8"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Allgemeine Hinweise</h3>
            <p className="text-slate-700">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
              Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-slate-700 font-semibold">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p className="text-slate-700">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <p className="text-slate-700 font-semibold mt-4">Wie erfassen wir Ihre Daten?</p>
            <p className="text-slate-700">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
              sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="text-slate-700 mt-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="text-slate-700 font-semibold mt-4">Wofür nutzen wir Ihre Daten?</p>
            <p className="text-slate-700">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="text-slate-700 font-semibold mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p className="text-slate-700">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
              Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
              Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="text-slate-700 mt-4">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Hosting</h2>
            <p className="text-slate-700">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Externes Hosting</h3>
            <p className="text-slate-700">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es
              sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
              Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
              werden, handeln.
            </p>
            <p className="text-slate-700 mt-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
              und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
              und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
              (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
              die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen
              im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Datenschutz</h3>
            <p className="text-slate-700">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-slate-700 mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
              Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="text-slate-700 mt-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per
              E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
              durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-slate-700">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-slate-700 mt-4">
              Eva Dirion
              <br />
              Schloßstraße 18
              <br />
              67434 Neustadt-Hambach
            </p>
            <p className="text-slate-700 mt-4">
              Telefon: <a href="tel:+491728049269" className="text-rose-600 hover:text-rose-700">0172 804 9269</a>
              <br />
              E-Mail: <a href="mailto:eva.dirion@gmx.net" className="text-rose-600 hover:text-rose-700">eva.dirion@gmx.net</a>
            </p>
            <p className="text-slate-700 mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
              mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
              Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Speicherdauer</h3>
            <p className="text-slate-700">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
              entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder
              handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
              Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-slate-700">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
              können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-slate-700">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
              unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p className="text-slate-700">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
              Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
              an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p className="text-slate-700">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
              Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können
              Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p className="text-slate-700">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 mt-4 text-slate-700 space-y-2">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
                benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können
                Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt
                der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung
                zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht,
                wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Kontaktformular</h3>
            <p className="text-slate-700">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-slate-700 mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
              Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="text-slate-700 mt-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
              gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
              Anfrage per E-Mail, Telefon oder Telefax
            </h3>
            <p className="text-slate-700">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
              Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
            <p className="text-slate-700 mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
              Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="text-slate-700 mt-4">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-500">
              Quelle:{" "}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700"
              >
                e-recht24.de
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
