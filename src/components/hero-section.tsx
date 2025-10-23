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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream-50 via-warm-50/40 to-cozy-50/30">
      {/* Warme, organische Hintergrund-Muster */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(139,21,56,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(212,175,55,0.06),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(184,154,115,0.04),transparent_80%)]"></div>
      
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/50" />
      </motion.div>

      {/* Premium Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center">
          <div className="max-w-4xl">

            {/* Typography */}
            <motion.h1
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Willkommen in unserem
              <span className="block mt-2 text-accent-300 font-handwriting text-5xl sm:text-6xl lg:text-7xl">Zuhause in Hambach</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-100 sm:text-xl mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ein historisches Fachwerkhaus voller Geschichte und Charme – wo ihr euch wie zu Hause fühlen könnt
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
                className="rounded-2xl bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-xl shadow-primary-600/25 transition-all duration-300 hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-600/30 hover:-translate-y-1"
              >
                Lassen Sie uns sprechen
              </button>

              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1"
              >
                Unser Zuhause entdecken
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
                { icon: MapPin, text: "Geschichte zum Anfassen" },
                { icon: Wine, text: "Wein & Kultur erleben" },
                { icon: Sparkles, text: "Gemütlich wie zu Hause" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/90 p-5 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 shadow-lg">
                    <feature.icon className="h-6 w-6" />
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