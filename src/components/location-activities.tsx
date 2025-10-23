"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mountain, Wine, Castle, Clock, Route } from "lucide-react";

export function LocationActivities() {
  const [activeTab, setActiveTab] = useState("wandern");

  const activities = {
    wandern: {
      icon: Mountain,
      title: "Wandern",
      description: "Entdeckt die wunderschöne Pfalz zu Fuß",
      items: [
        { icon: Mountain, title: "Pfälzer Wald", description: "5 Min zu Fuß", distance: "Direkt vor der Tür" },
        { icon: Route, title: "Kalmit-Wanderung", description: "12 km Rundweg", distance: "Beliebte Route" },
        { icon: MapPin, title: "Deutsche Weinstraße", description: "Wanderwege", distance: "Direkt erreichbar" },
        { icon: Castle, title: "Hambacher Schloss", description: "Historischer Spaziergang", distance: "10 Min zu Fuß" }
      ]
    },
    wein: {
      icon: Wine,
      title: "Wein",
      description: "Erlebt die Weinkultur der Pfalz",
      items: [
        { icon: Wine, title: "Weingüter", description: "Fußläufig erreichbar", distance: "5-10 Min" },
        { icon: Clock, title: "Weinproben", description: "Traditionelle Keller", distance: "Vor Ort buchbar" },
        { icon: Route, title: "Weinwanderung", description: "Entlang der Weinstraße", distance: "Geführte Touren" },
        { icon: MapPin, title: "Weinberge", description: "Panoramablick", distance: "Kalmit & Umgebung" }
      ]
    },
    kultur: {
      icon: Castle,
      title: "Kultur",
      description: "Historische Schätze entdecken",
      items: [
        { icon: Castle, title: "Hambacher Schloss", description: "Wiege der Demokratie", distance: "10 Min zu Fuß" },
        { icon: MapPin, title: "Historische Altstadt", description: "Mittelalterliche Gassen", distance: "15 Min" },
        { icon: Clock, title: "Museen", description: "Kultur & Geschichte", distance: "Neustadt & Umgebung" },
        { icon: Route, title: "Burgenstraße", description: "Historische Route", distance: "Tagesausflüge" }
      ]
    }
  };

  return (
    <section id="location" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/20 py-24">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,21,56,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.05),transparent_50%)]"></div>
      
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
            <MapPin className="h-4 w-4" />
            Lage & Aktivitäten
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Entdeckt die
            <motion.span 
              className="block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Pfalz
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Mitten in der wunderschönen Pfalz gelegen, bietet unsere Ferienwohnung den perfekten Ausgangspunkt für unvergessliche Erlebnisse.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Maps */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.123456789!2d8.123456789!3d49.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA3JzI0LjQiTiA4wrAwNycyNC40IkU!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde&q=Schloßstraße+18,+67434+Neustadt+an+der+Weinstraße"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[400px]"
              />
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-primary-600" />
                <span className="font-semibold text-gray-900">Schloßstraße 18, Neustadt</span>
              </div>
              <p className="text-sm text-gray-600">Fußweg zum Hambacher Schloss</p>
            </div>
          </motion.div>

          {/* Activities Tabs */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(activities).map(([key, activity]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <activity.icon className="h-4 w-4" />
                  {activity.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600">
                    {React.createElement(activities[activeTab as keyof typeof activities].icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{activities[activeTab as keyof typeof activities].title}</h3>
                    <p className="text-gray-600">{activities[activeTab as keyof typeof activities].description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activities[activeTab as keyof typeof activities].items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                        <item.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-primary-600">{item.distance}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
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
            <MapPin className="h-4 w-4" />
            Perfekte Lage für alle Aktivitäten
          </div>
        </motion.div>
      </div>
    </section>
  );
}
