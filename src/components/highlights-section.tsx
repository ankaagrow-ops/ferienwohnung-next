import type { Highlight } from "@/lib/landing-content";

type HighlightsSectionProps = {
  highlights: Highlight[];
};

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section
      id="vorteile"
      className="border-y border-slate-100 bg-white"
      aria-labelledby="section-highlights"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
        <h2 id="section-highlights" className="text-2xl font-bold text-slate-900 sm:col-span-1">
          Darauf kannst du dich freuen
        </h2>
        <div className="space-y-6 sm:col-span-2">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-2xl border border-rose-100 bg-vineyard-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-wine-800">{highlight.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
