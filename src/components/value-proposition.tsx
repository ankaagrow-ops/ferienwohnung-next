"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Wine } from "lucide-react";

export function ValueProposition() {
  const valueProps = [
    {
      icon: MapPin,
      title: "Mitten in der Geschichte",
      description: "Schloßstraße – Fußweg zum Hambacher Schloss, Start für Weinwanderungen",
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-600"
    },
    {
      icon: Sparkles,
      title: "Stilvoll & Gemütlich", 
      description: "Fußbodenheizung, Holzofen, lichtdurchflutet – Moderne trifft Charme",
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50",
      iconColor: "text-accent-600"
    },
    {
      icon: Wine,
      title: "Wein, Wandern, Kultur",
      description: "Weingüter fußläufig, Pfälzer Wald direkt vor der Tür",
      color: "from-wine-500 to-wine-600", 
      bgColor: "bg-wine-50",
      iconColor: "text-wine-600"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary-50/30 py-24">
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
            <Sparkles className="h-4 w-4" />
            Warum Hambach?
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Drei Gründe für einen
            <motion.span 
              className="block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              unvergesslichen Aufenthalt
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

        {/* Premium Cards Grid */}
        <motion.div 
          className="grid gap-8 lg:grid-cols-3"
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
          {valueProps.map((prop) => (
            <motion.article
              key={prop.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-gray-900/5 border border-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/10"
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
              {/* Premium Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
              
              {/* Premium Icon */}
              <motion.div 
                className="relative mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${prop.color} shadow-lg`}
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <prop.icon className="h-8 w-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Premium Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {prop.description}
                </p>
              </div>

              {/* Premium Hover Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${prop.color} transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}></div>
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
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 text-sm font-medium text-primary-800">
            <Sparkles className="h-4 w-4" />
            Alle Vorteile inklusive
          </div>
        </motion.div>
      </div>
    </section>
  );
}
