"use client";

import { motion } from "framer-motion";
import { Check, Wifi, Tv, Car, Baby, Dog, Flame, Droplets, Utensils, Home } from "lucide-react";

export function FeaturesSection() {
  const features = [
    { icon: Droplets, text: "Fußbodenheizung im Bad", category: "Komfort" },
    { icon: Flame, text: "Gemütlicher Holzofen", category: "Gemütlichkeit" },
    { icon: Utensils, text: "Voll ausgestattete Küche", category: "Ausstattung" },
    { icon: Baby, text: "Babybett & Hochstuhl", category: "Familie" },
    { icon: Dog, text: "Hunde willkommen (€10/Tag)", category: "Haustiere" },
    { icon: Wifi, text: "Kostenfreies WLAN", category: "Technik" },
    { icon: Tv, text: "Smart TV", category: "Unterhaltung" },
    { icon: Car, text: "Waschmaschine & Trockner", category: "Praktisch" },
    { icon: Home, text: "Hofplatz zum Entspannen", category: "Außenbereich" },
  ];


  return (
    <section id="ausstattung" className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary-50/30 py-24">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,21,56,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.05),transparent_50%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Check className="h-4 w-4" />
            Vollausstattung
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Darauf kannst du dich
            <motion.span 
              className="block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              freuen
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Jeder Aspekt unserer Ferienwohnung wurde mit Liebe zum Detail gestaltet, 
            um euch einen unvergesslichen Aufenthalt zu ermöglichen.
          </motion.p>
        </motion.div>

        {/* Premium Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.text}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-white shadow-lg border border-gray-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Premium Icon */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </motion.div>

              {/* Premium Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-600">{feature.category}</span>
                </div>
                <p className="text-gray-900 font-medium text-lg">{feature.text}</p>
              </div>

              {/* Premium Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 text-sm font-medium text-primary-800">
            <Check className="h-4 w-4" />
            Alle Features inklusive
          </div>
        </motion.div>
      </div>
    </section>
  );
}
