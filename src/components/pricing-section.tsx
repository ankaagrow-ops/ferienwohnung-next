"use client";

import { motion } from "framer-motion";
import { Check, Euro, Calendar, Home, Heart, Star } from "lucide-react";

export function PricingSection() {
  const pricingFeatures = [
    { icon: Calendar, text: "Ab 2 Nächte", highlight: true },
    { icon: Euro, text: "Preis auf Anfrage", highlight: false },
    { icon: Check, text: "Endreinigung inklusive", highlight: true },
    { icon: Home, text: "Alle Nebenkosten inklusive", highlight: true },
    { icon: Heart, text: "Hunde willkommen (+€10/Tag)", highlight: false },
    { icon: Star, text: "Premium Ausstattung", highlight: true }
  ];

  const bookingOptions = [
    {
      icon: "📧",
      title: "Anfrage-Formular",
      description: "Schnell & unkompliziert",
      action: "Jetzt anfragen",
      primary: true
    },
    {
      icon: "📞", 
      title: "Direkt anrufen",
      description: "Persönlicher Kontakt",
      action: "+49 172 8049269",
      primary: false
    },
    {
      icon: "🏨",
      title: "Booking.com",
      description: "Online buchen",
      action: "Verfügbar",
      primary: false
    }
  ];

  return (
    <section id="preise" className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30 py-24">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,21,56,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent_50%)]"></div>
      
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
            <Euro className="h-4 w-4" />
            Preise & Konditionen
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Was Sie
            <motion.span 
              className="block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              erwartet
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Wir möchten, dass ihr euch von Anfang an wohlfühlt. Alles was ihr braucht, ist bereits da.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pricing Table */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              {/* Premium Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Ferienwohnung Hambach</h3>
                    <p className="text-primary-100">Premium Unterkunft</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Auf Anfrage</div>
                  <p className="text-primary-100">Individuelle Preise je nach Saison</p>
                </div>
              </div>

              {/* Pricing Features */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Was ist inklusive:</h4>
                <div className="space-y-4">
                  {pricingFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        feature.highlight 
                          ? 'bg-primary-100 text-primary-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <span className={`font-medium ${
                        feature.highlight ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {feature.text}
                      </span>
                      {feature.highlight && (
                        <div className="ml-auto">
                          <Check className="h-5 w-5 text-primary-600" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Options */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">So erreichen Sie uns</h3>
              <p className="text-gray-600 mb-8">Wir freuen uns darauf, von Ihnen zu hören:</p>
            </div>

            <div className="space-y-4">
              {bookingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                    option.primary
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-xl'
                      : 'bg-white border border-gray-200 hover:shadow-lg'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl ${option.primary ? '' : 'opacity-80'}`}>
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-1 ${
                        option.primary ? 'text-white' : 'text-gray-900'
                      }`}>
                        {option.title}
                      </h4>
                      <p className={`text-sm ${
                        option.primary ? 'text-primary-100' : 'text-gray-600'
                      }`}>
                        {option.description}
                      </p>
                    </div>
                    <motion.button
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        option.primary
                          ? 'bg-white text-primary-600 hover:bg-primary-50'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (option.title === "Anfrage-Formular") {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (option.title === "Direkt anrufen") {
                          window.location.href = 'tel:+491728049269';
                        }
                      }}
                    >
                      {option.action}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Bottom Info */}
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl border border-accent-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart className="h-5 w-5 text-primary-600" />
                <span className="font-semibold text-gray-900">Persönlicher Service</span>
              </div>
              <p className="text-gray-600 text-sm">
                Wir sind vor Ort und helfen gerne bei allen Fragen rund um Ihren Aufenthalt in der Pfalz.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 text-sm font-medium text-primary-800">
            <Star className="h-4 w-4" />
            Transparente Preise, keine versteckten Kosten
          </div>
        </motion.div>
      </div>
    </section>
  );
}
