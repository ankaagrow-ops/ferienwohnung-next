import Image from "next/image";
import type { HeroContent } from "@/lib/landing-content";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-stone-50 to-white pt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-24 lg:px-8">
        <div className="w-full space-y-6 lg:w-1/2">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-rose-600 shadow-sm">
            9,7/10 auf Booking.com
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">{hero.subtitle}</p>
          <p className="text-base text-slate-600">{hero.description}</p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold shadow transition ${
                  cta.flavor === "secondary"
                    ? "border border-rose-200 text-rose-600 hover:border-rose-400 hover:text-rose-500"
                    : "bg-rose-600 text-white shadow-rose-700/30 hover:bg-rose-500"
                }`}
              >
                {cta.label}
              </a>
            ))}
          </div>

          <ul className="space-y-2 text-sm text-slate-500">
            <li>✓ Zwei Schlafzimmer · Platz für bis zu sechs Gäste</li>
            <li>✓ Holzofen · Innenhof · hochwertige Naturmaterialien</li>
            <li>✓ Persönliche Gastgeber-Tipps für Weingüter & Ausflüge</li>
          </ul>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl bg-slate-200 shadow-2xl lg:w-1/2">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={1600}
            height={1066}
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-4 text-sm text-slate-600 shadow-lg">
            <p className="font-semibold text-slate-800">Pfälzer Lebensart in bester Lage</p>
            <p className="mt-1">
              Schloßstraße 18 – Weinberge, Vinotheken und Cafés direkt vor der Haustür.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
