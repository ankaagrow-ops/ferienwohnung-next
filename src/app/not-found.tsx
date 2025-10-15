import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-rose-50 to-white px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <span className="inline-block text-9xl font-bold text-rose-600">404</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-slate-900">Seite nicht gefunden</h1>

        <p className="mb-8 text-lg text-slate-600">
          Die von Ihnen gesuchte Seite existiert leider nicht. Vielleicht haben Sie sich vertippt oder
          die Seite wurde verschoben.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-700/30 transition hover:bg-rose-500"
          >
            ← Zurück zur Startseite
          </Link>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center rounded-full border border-rose-200 px-8 py-3 text-sm font-semibold text-rose-600 transition hover:border-rose-400 hover:text-rose-500"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Suchen Sie nach unserer Ferienwohnung?
          </h2>
          <ul className="space-y-2 text-left text-sm text-slate-600">
            <li>
              <a href="/#galerie" className="text-rose-600 hover:text-rose-700">
                → Galerie ansehen
              </a>
            </li>
            <li>
              <a href="/#vorteile" className="text-rose-600 hover:text-rose-700">
                → Unsere Vorteile
              </a>
            </li>
            <li>
              <a href="/#bewertungen" className="text-rose-600 hover:text-rose-700">
                → Gästebewertungen lesen
              </a>
            </li>
            <li>
              <a href="/#kontakt" className="text-rose-600 hover:text-rose-700">
                → Verfügbarkeit anfragen
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
