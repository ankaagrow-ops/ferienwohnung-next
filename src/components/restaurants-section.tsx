"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, MapPin, Star } from "lucide-react";

export function RestaurantsSection() {
  const restaurants = [
    {
      name: "Fassdaube",
      description: "Traditionelle Pfälzer Küche mit regionalen Spezialitäten",
      distance: "5 Min zu Fuß",
      rating: "4.8",
      category: "Traditionell",
      highlights: ["Pfälzer Spezialitäten", "Weinauswahl", "Gemütlich"]
    },
    {
      name: "Fuxbau",
      description: "Moderne Küche mit regionalen Zutaten und kreativen Gerichten",
      distance: "8 Min zu Fuß", 
      rating: "4.6",
      category: "Modern",
      highlights: ["Kreative Küche", "Frische Zutaten", "Stylisch"]
    },
    {
      name: "Mohre",
      description: "Historisches Gasthaus mit authentischer Atmosphäre",
      distance: "10 Min zu Fuß",
      rating: "4.7",
      category: "Historisch",
      highlights: ["Historische Atmosphäre", "Traditionell", "Authentisch"]
    },
    {
      name: "Jule",
      description: "Café & Bistro mit hausgemachten Leckereien und Kaffeespezialitäten",
      distance: "3 Min zu Fuß",
      rating: "4.5",
      category: "Café",
      highlights: ["Hausgemacht", "Kaffee", "Entspannend"]
    }
  ];

  return (
    <section id="restaurants" className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-accent-50/30 py-24">
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
            className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 text-sm font-medium text-accent-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <UtensilsCrossed className="h-4 w-4" />
            Restaurant-Empfehlungen
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kulinarische
            <motion.span 
              className="block bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Entdeckungen
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Entdeckt die kulinarischen Schätze der Pfalz in unseren liebsten Restaurants und Cafés.
          </motion.p>
        </motion.div>

        {/* Premium Restaurant Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
          {restaurants.map((restaurant) => (
            <motion.article
              key={restaurant.name}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-900/10"
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
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-transparent to-primary-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Premium Content */}
              <div className="relative p-6">
                {/* Restaurant Icon */}
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-lg">
                    <UtensilsCrossed className="h-6 w-6 text-white" />
                  </div>
                </motion.div>

                {/* Restaurant Info */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent-700 transition-colors">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent-500 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {restaurant.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-700">
                    {restaurant.category}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {restaurant.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-accent-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
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
            <UtensilsCrossed className="h-4 w-4" />
            Alle Empfehlungen persönlich getestet
          </div>
        </motion.div>
      </div>
    </section>
  );
}
