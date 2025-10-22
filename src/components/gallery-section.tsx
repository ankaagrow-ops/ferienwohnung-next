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
      <section id="galerie" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-vineyard-50/20 py-24" aria-labelledby="section-gallery">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-wine-100 px-4 py-2 text-sm font-medium text-wine-700 mb-6">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Bildergalerie
            </div>
            <h2 id="section-gallery" className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
              Eindrücke aus
              <span className="block bg-gradient-to-r from-wine-700 to-wine-500 bg-clip-text text-transparent">
                unserem Zuhause
              </span>
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              Großzügige Wohnbereiche, viel Tageslicht und ein geschützter Innenhof – 
              so sieht euer unvergesslicher Aufenthalt in Hambach aus.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-wine-100 to-gold-100 px-6 py-3 text-sm font-medium text-wine-800">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {images.length} Premium-Impressionen
            </div>
          </div>

          {/* Premium Gallery Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <figure
                key={image.src}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl shadow-slate-900/10 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-wine-900/20 cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                {/* Premium Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1280}
                    height={960}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  
                  {/* Premium Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl">
                      <svg className="h-8 w-8 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Premium Caption */}
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-1">{image.label}</h3>
                    <p className="text-sm text-white/80">Klicken zum Vergrößern</p>
                  </div>
                </figcaption>

                {/* Premium Hover Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-wine-300/50"></div>
              </figure>
            ))}
          </div>

          {/* Premium Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-wine-700 to-wine-600 px-8 py-4 text-white shadow-xl shadow-wine-900/25 hover:shadow-2xl hover:shadow-wine-900/40 transition-all duration-300 hover:-translate-y-1">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-semibold">Alle Bilder in voller Auflösung ansehen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          {/* Premium Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Schließen"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Premium Image Container */}
          <div className="relative max-w-7xl w-full animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl shadow-black/50">
              <Image
                src={lightboxImage}
                alt="Vergrößerte Ansicht"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              
              {/* Premium Image Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm font-medium opacity-90">Klicken außerhalb zum Schließen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
