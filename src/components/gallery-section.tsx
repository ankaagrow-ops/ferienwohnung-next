"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/landing-content";

type GallerySectionProps = {
  images: GalleryImage[];
};

export function GallerySection({ images }: GallerySectionProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
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
            <span className="rounded-full border border-rose-200 px-5 py-2 text-sm font-semibold text-wine-700">
              Galerie · {images.length} Impressionen
            </span>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <figure
                key={image.src}
                className="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-lg shadow-slate-200 transition hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-rose-400 transition-colors"
            aria-label="Schließen"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage}
              alt="Vergrößerte Ansicht"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
