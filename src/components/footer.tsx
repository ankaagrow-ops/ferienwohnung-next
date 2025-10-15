import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="tel:+491728049269" className="hover:text-rose-600 transition">
                  0172 804 9269
                </a>
              </li>
              <li>
                <a href="mailto:eva.dirion@gmx.net" className="hover:text-rose-600 transition">
                  eva.dirion@gmx.net
                </a>
              </li>
              <li className="mt-4 text-slate-500">
                Schloßstraße 18
                <br />
                67434 Neustadt-Hambach
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#galerie" className="hover:text-rose-600 transition">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#vorteile" className="hover:text-rose-600 transition">
                  Vorteile
                </a>
              </li>
              <li>
                <a href="#bewertungen" className="hover:text-rose-600 transition">
                  Bewertungen
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-rose-600 transition">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Rechtliches</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/impressum" className="hover:text-rose-600 transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-rose-600 transition">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Ferienwohnung Unterm Schloß
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              Genießen Sie Ihren Urlaub in der Pfalz in unserem historischen Altstadthaus mit modernem
              Komfort.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Ferienwohnung Unterm Schloß. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
