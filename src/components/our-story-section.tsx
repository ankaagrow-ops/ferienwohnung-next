"use client";

import { motion } from "framer-motion";
import { Heart, Home, History, Users } from "lucide-react";
import Image from "next/image";

export function OurStorySection() {
  const storyElements = [
    {
      icon: History,
      title: "Ein Haus voller Geschichte",
      description: "Unser Fachwerkhaus steht seit über 200 Jahren in der Schloßstraße. Hier wurde Geschichte geschrieben, als das Hambacher Schloss zum Symbol der deutschen Demokratie wurde.",
      image: "/images/surroundings/32-hambacher-schloss.jpg",
      highlight: "Seit 1820"
    },
    {
      icon: Heart,
      title: "Mit Liebe renoviert",
      description: "Wir haben das Haus mit viel Herzblut und Respekt vor der Geschichte renoviert. Jeder Balken, jede Ecke erzählt eine Geschichte und lädt zum Verweilen ein.",
      image: "/images/living-room/01-wohnzimmer-hauptansicht.jpg",
      highlight: "Mit Herz"
    },
    {
      icon: Home,
      title: "Unser Zuhause für Sie",
      description: "Wir möchten, dass Sie sich hier genauso wohlfühlen wie wir. Deshalb haben wir alles so eingerichtet, dass Sie sich von der ersten Minute an wie zu Hause fühlen.",
      image: "/images/courtyard/03-innenhof-sitzbereich.jpg",
      highlight: "Willkommen"
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-cream-50 to-cozy-50/30 py-24">
      {/* Warme, organische Hintergrund-Elemente */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(139,21,56,0.03),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(212,175,55,0.02),transparent_80%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(184,154,115,0.01),transparent_90%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Persönliche Überschrift */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-warm-100 px-4 py-2 text-sm font-medium text-warm-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart className="h-4 w-4" />
            Unsere Geschichte
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Die Geschichte unseres <span className="font-handwriting text-5xl sm:text-6xl lg:text-7xl text-primary-600">Zuhauses</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Ein Ort voller Geschichte, Liebe und Geschichten – wo Vergangenheit und Gegenwart aufeinandertreffen.
          </motion.p>
        </motion.div>

        {/* Story Elements */}
        <div className="space-y-16">
          {storyElements.map((element, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 shadow-lg">
                    <element.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-serif">{element.title}</h3>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {element.highlight}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={element.image}
                    alt={element.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Persönliche Nachricht */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-cream-200/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900 font-serif">Von Eva & Familie</h3>
            </div>
            
            <blockquote className="text-xl text-gray-700 leading-relaxed italic font-serif">
              "Wir lieben dieses Haus und seine Geschichte. Es ist unser Zuhause, und wir möchten, 
              dass Sie sich hier genauso wohlfühlen wie wir. Jeder Gast ist für uns wie ein Freund, 
              der zu Besuch kommt."
            </blockquote>
            
            <div className="mt-6 text-sm text-gray-500">
              — Eva Dirion, Gastgeberin
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
