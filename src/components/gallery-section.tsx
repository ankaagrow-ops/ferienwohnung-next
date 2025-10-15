import Image from "next/image";
import type { GalleryImage } from "@/lib/landing-content";

type GallerySectionProps = {
  images: GalleryImage[];
};

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <section id="galerie" className="bg-white" aria-labelledby="section-gallery">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="section-gallery" className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Eindrücke aus dem Haus
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Großzügige Wohnbereiche, viel Tageslicht und ein geschützter Innenhof – so sieht euer
              Aufenthalt aus.
            </p>
          </div>
          <span className="rounded-full border border-rose-200 px-5 py-2 text-sm font-semibold text-rose-600">
            Galerie · 6 Impressionen
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure
              key={image.src}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-slate-200 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1280}
                height={960}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
