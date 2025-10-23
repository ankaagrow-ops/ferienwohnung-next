"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Sparkles, Wine } from "lucide-react";
import { useTranslations } from "next-intl";

type HeroContent = {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  secondaryCta: string;
  image: string;
  features: string[];
};

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const t = useTranslations('hero');

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
            {/* Premium Badge */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-700 shadow-lg">
                <Sparkles className="h-4 w-4" />
                Premium Ferienwohnung
              </div>
            </motion.div>

            {/* Premium Typography */}
            <motion.h1 
              className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-100 sm:text-2xl mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('subtitle')}
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden rounded-2xl bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-600/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="group rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('secondaryCta')}
              </motion.button>
            </motion.div>

            {/* Premium Feature List */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: MapPin, text: t('features.schloss'), highlight: "Geschichte" },
                { icon: Wine, text: t('features.wein'), highlight: "Wein" },
                { icon: Sparkles, text: t('features.luxus'), highlight: "Luxus" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-3 text-white/90 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{feature.text}</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{feature.highlight}</span>
                    </div>
                  </div>
                </motion.div>
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