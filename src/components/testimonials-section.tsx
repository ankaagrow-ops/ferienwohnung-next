import type { Testimonial } from "@/lib/landing-content";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="bewertungen" className="bg-slate-50" aria-labelledby="section-testimonials">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="section-testimonials" className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Stimmen unserer Gäste
            </h2>
            <p className="mt-2 text-base text-slate-600">
              98 % Weiterempfehlung – echte Eindrücke aus den letzten Aufenthalten.
            </p>
          </div>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-600">
            Verifizierte Bewertungen
          </span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-100 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <header>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                  <span aria-label={`${testimonial.rating} von 5 Sternen`}>
                    {"★★★★★".slice(0, testimonial.rating)}
                  </span>
                </div>
              </header>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Aufenthalt 2024
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
