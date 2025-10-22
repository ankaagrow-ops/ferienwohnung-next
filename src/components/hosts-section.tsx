export function HostsSection() {
  return (
    <section id="gastgeber" className="py-16 bg-gradient-to-br from-wine-50 to-vineyard-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vineyard-900 sm:text-4xl">
            Eure Gastgeber
          </h2>
          <p className="mt-4 text-lg text-vineyard-700">
            Wir freuen uns darauf, euch in Hambach willkommen zu heißen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-wine-100">
              <h3 className="text-2xl font-bold text-vineyard-900 mb-4">
                Eva & Jon
              </h3>
              <p className="text-vineyard-700 leading-relaxed mb-4">
                Wir leben seit über 10 Jahren in der Pfalz und lieben diese Region. 
                Unser Haus in der Schloßstraße haben wir mit viel Herzblut renoviert 
                und möchten es mit euch teilen.
              </p>
              <p className="text-vineyard-700 leading-relaxed">
                Wenn ihr Fragen habt oder Tipps für euren Aufenthalt braucht, 
                sind wir gerne für euch da. Wir kennen die besten Weingüter, 
                versteckten Wanderwege und gemütlichsten Restaurants in der Umgebung.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-wine-100 text-center">
                <div className="text-2xl mb-2">🍷</div>
                <h4 className="font-semibold text-vineyard-900 mb-1">Wein-Expertise</h4>
                <p className="text-sm text-vineyard-600">Persönliche Empfehlungen für die besten Weingüter</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-wine-100 text-center">
                <div className="text-2xl mb-2">🥾</div>
                <h4 className="font-semibold text-vineyard-900 mb-1">Wander-Tipps</h4>
                <p className="text-sm text-vineyard-600">Versteckte Pfade und schöne Aussichtspunkte</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-wine-100">
            <h4 className="text-xl font-bold text-vineyard-900 mb-4">
              Was uns wichtig ist
            </h4>
            <ul className="space-y-3 text-vineyard-700">
              <li className="flex items-start gap-3">
                <span className="text-wine-600 mt-1">✓</span>
                <span>Dass ihr euch von der ersten Minute an wohlfühlt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wine-600 mt-1">✓</span>
                <span>Nachhaltiger Tourismus - wir lieben unsere Region</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wine-600 mt-1">✓</span>
                <span>Persönlicher Kontakt statt anonyme Buchungsplattformen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wine-600 mt-1">✓</span>
                <span>Eure Wünsche und Bedürfnisse stehen im Mittelpunkt</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-wine-50 rounded-lg border border-wine-200">
              <p className="text-sm text-wine-800">
                <strong>Kontakt:</strong> Eva & Jon<br />
                📞 0172 804 9269<br />
                ✉️ eva.dirion@gmx.net
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
