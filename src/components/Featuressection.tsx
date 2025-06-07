"use client"

import { motion } from "framer-motion"
import { FeatureCard } from "../components/ui/featurecard"
import { Zap, Shield, Smartphone, Palette, Database, Rocket } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with lazy loading, code splitting, and efficient caching strategies.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices, including data validation and protection measures.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Seamless experience across all devices with mobile-first design approach.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Modern UI/UX with smooth animations and intuitive user interactions.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Modular codebase designed to handle growth and feature expansion.",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Performance Optimized",
      description: "98+ Lighthouse score with optimized images, fonts, and resource loading.",
      color: "from-red-400 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make this project stand out from the competition
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
