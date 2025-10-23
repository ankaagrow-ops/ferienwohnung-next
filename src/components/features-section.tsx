"use client";

import { motion } from "framer-motion";
import { Wifi, Tv, Car, Baby, Dog, Flame, Droplets, Utensils, Home } from "lucide-react";

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
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Was euch erwartet
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Alles da, was ihr für einen entspannten Aufenthalt braucht.
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
              className="flex items-center gap-4 p-5 rounded-xl bg-white shadow-sm border border-gray-100"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 }
                }
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                  <feature.icon className="h-5 w-5 text-primary-600" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-900 font-medium">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
