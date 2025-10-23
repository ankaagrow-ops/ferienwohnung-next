"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Sparkles, Wine } from "lucide-react";

type HeroContent = {
  image: string;
  features: string[];
};

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50/30 to-accent-50/20">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,21,56,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.08),transparent_50%)]"></div>
      
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0"
      >
        <Image
          src={hero.image}
          alt="Historisches Haus in Hambach an der Weinstraße"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </motion.div>

      {/* Premium Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center">
          <div className="max-w-4xl">

            {/* Typography */}
            <motion.h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Urlaub in Hambach
              <span className="block mt-2">an der Weinstraße</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-100 sm:text-xl mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Gemütliche Ferienwohnung im historischen Fachwerkhaus – direkt am Fuße des Hambacher Schlosses
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-xl bg-primary-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-primary-700"
              >
                Anfragen
              </button>

              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/20"
              >
                Bilder ansehen
              </button>
            </motion.div>

            {/* Feature List */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: MapPin, text: "Fußweg zum Hambacher Schloss" },
                { icon: Wine, text: "Mitten in der Weinstraße" },
                { icon: Sparkles, text: "Gemütliche Ausstattung" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/90 p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-sm font-medium">Scrollen</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}