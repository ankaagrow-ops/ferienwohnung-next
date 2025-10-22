import type { Highlight } from "@/lib/landing-content";

type HighlightsSectionProps = {
  highlights: Highlight[];
};

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section
      id="vorteile"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-vineyard-50/30 py-24"
      aria-labelledby="section-highlights"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-wine-100 px-4 py-2 text-sm font-medium text-wine-700 mb-6">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Premium Features
          </div>
          <h2 id="section-highlights" className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            Darauf kannst du dich
            <span className="block bg-gradient-to-r from-wine-700 to-wine-500 bg-clip-text text-transparent">
              freuen
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Jeder Aspekt unserer Ferienwohnung wurde mit Liebe zum Detail gestaltet, 
            um euch einen unvergesslichen Aufenthalt zu ermöglichen.
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-wine-900/10"
            >
              {/* Premium Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-wine-50/50 via-transparent to-gold-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Premium Icon */}
              <div className="relative mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-wine-100 to-wine-200 shadow-lg">
                  {index === 0 && (
                    <svg className="h-8 w-8 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="h-8 w-8 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="h-8 w-8 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Premium Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-wine-700 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {highlight.description}
                </p>
              </div>

              {/* Premium Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-wine-500 to-wine-700 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </article>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-wine-100 to-gold-100 px-6 py-3 text-sm font-medium text-wine-800">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Alle Features inklusive
          </div>
        </div>
      </div>
    </section>
  );
}
