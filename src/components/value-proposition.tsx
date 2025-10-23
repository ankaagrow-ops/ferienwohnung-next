"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Wine } from "lucide-react";

export function ValueProposition() {
  const valueProps = [
    {
      icon: MapPin,
      title: "Geschichte erleben",
      description: "Direkt am Hambacher Schloss – wo deutsche Demokratie begann. Jeden Tag Geschichte zum Anfassen.",
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-600"
    },
    {
      icon: Sparkles,
      title: "Gemütlich wie zu Hause", 
      description: "Wir haben unser Zuhause mit Liebe eingerichtet – damit ihr euch sofort wohlfühlt.",
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50",
      iconColor: "text-accent-600"
    },
    {
      icon: Wine,
      title: "Pfalz entdecken",
      description: "Weinberge vor der Tür, Pfälzer Wald zum Wandern – die schönste Ecke Deutschlands wartet auf euch.",
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
          <motion.h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Was unser Zuhause besonders macht
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ein Ort voller Geschichte, wo ihr euch entspannen und die Pfalz entdecken könnt.
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
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
            >
              {/* Icon */}
              <div className="mb-5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${prop.bgColor}`}>
                  <prop.icon className={`h-6 w-6 ${prop.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
