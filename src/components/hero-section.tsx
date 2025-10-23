"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { HeroContent } from "@/lib/landing-content";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-vineyard-50/30 to-gold-50/20">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <motion.div 
          className="w-full space-y-8 lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-wine-800 shadow-lg border border-wine-200/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="h-2 w-2 rounded-full bg-wine-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Von Eva & Jon persönlich betreut
          </motion.div>

          {/* Premium Typography */}
          <div className="space-y-6">
            <motion.h1 
              className="text-5xl font-bold leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {hero.title}
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-wine-700 to-wine-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                in Hambach
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl leading-relaxed text-slate-700 sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {hero.subtitle}
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {hero.description}
            </motion.p>
          </div>

          {/* Premium CTA Buttons */}
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {hero.ctas.map((cta, index) => (
              <motion.a
                key={cta.label}
                href={cta.href}
                className={`group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-sm font-semibold transition-all duration-300 ${
                  cta.flavor === "secondary"
                    ? "border-2 border-wine-300 text-wine-700 hover:border-wine-500 hover:bg-wine-50 hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-gradient-to-r from-wine-700 to-wine-600 text-white shadow-xl shadow-wine-900/25 hover:shadow-2xl hover:shadow-wine-900/40 hover:-translate-y-1 hover:scale-105"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cta.label}
                <motion.svg 
                  className="ml-2 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Premium Features List */}
          <motion.div 
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            {[
              { icon: "Zwei Schlafzimmer" },
              { icon: "Gemütlicher Holzofen" },
              { icon: "Sonniger Innenhof" },
              { icon: "Persönliche Weintipps" }
            ].map((feature, index) => (
              <motion.div 
                key={feature.icon}
                className="flex items-center gap-3 text-slate-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-wine-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="h-4 w-4 text-wine-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span className="text-sm font-medium">{feature.icon}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Image Section with Parallax */}
        <motion.div 
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl shadow-slate-900/20"
            style={{ y }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              style={{ y: useTransform(scrollY, [0, 1000], [0, -100]) }}
            >
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={1600}
                height={1066}
                priority
                className="h-[600px] w-full object-cover"
              />
            </motion.div>
            
            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            {/* Premium Info Card */}
            <motion.div 
              className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-wine-100"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="h-6 w-6 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-bold text-slate-900">Premium-Lage in Hambach</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Schloßstraße 18 – Weinberge, Vinotheken und das Hambacher Schloss direkt vor der Haustür
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
