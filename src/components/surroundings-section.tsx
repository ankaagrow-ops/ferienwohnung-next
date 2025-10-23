"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mountain, Castle, Wine, Trees } from "lucide-react";

export function SurroundingsSection() {
  const surroundings = [
    {
      image: "/images/13-hambacher-schloss.jpg",
      title: "Hambacher Schloss",
      description: "Fußweg zum historischen Schloss - Wiege der deutschen Demokratie",
      icon: Castle,
      distance: "10 Min zu Fuß",
      highlight: "Geschichte"
    },
    {
      image: "/images/14-weinberge.jpg", 
      title: "Weinberge der Pfalz",
      description: "Entdeckt die wunderschönen Weinberge direkt vor der Tür",
      icon: Wine,
      distance: "5 Min zu Fuß",
      highlight: "Wein"
    },
    {
      image: "/images/15-pfaelzer-wald.jpg",
      title: "Pfälzer Wald",
      description: "Wandern und Natur erleben im größten zusammenhängenden Waldgebiet",
      icon: Trees,
      distance: "Direkt vor der Tür",
      highlight: "Natur"
    },
    {
      image: "/images/16-deutsche-weinstrasse.jpg",
      title: "Deutsche Weinstraße",
      description: "Start für unvergessliche Weinwanderungen und Touren",
      icon: Mountain,
      distance: "Direkt erreichbar",
      highlight: "Wandern"
    }
  ];

  return (
    <section id="umgebung" className="relative overflow-hidden bg-gradient-to-br from-accent-50 via-white to-primary-50/30 py-24">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(212,175,55,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,21,56,0.08),transparent_50%)]"></div>
      
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
            className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 text-sm font-medium text-accent-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mountain className="h-4 w-4" />
            Umgebung entdecken
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Die Pfalz
            <motion.span 
              className="block bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              von ihrer schönsten Seite
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Entdeckt die wunderschöne Umgebung unserer Ferienwohnung - von historischen Stätten bis zu unberührter Natur.
          </motion.p>
        </motion.div>

        {/* Premium Surroundings Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {surroundings.map((surrounding) => (
            <motion.article
              key={surrounding.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-900/10"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Premium Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={surrounding.image}
                  alt={surrounding.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Premium Overlay Content */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <surrounding.icon className="h-4 w-4 text-accent-600" />
                    <span className="text-sm font-medium text-gray-900">{surrounding.distance}</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {surrounding.highlight}
                  </div>
                </div>
              </div>

              {/* Premium Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-700 transition-colors">
                  {surrounding.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {surrounding.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <surrounding.icon className="h-4 w-4" />
                  <span>{surrounding.distance}</span>
                </div>
              </div>

              {/* Premium Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-primary-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </motion.article>
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
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-primary-100 px-6 py-3 text-sm font-medium text-accent-800">
            <Mountain className="h-4 w-4" />
            Perfekte Lage für alle Aktivitäten
          </div>
        </motion.div>
      </div>
    </section>
  );
}
