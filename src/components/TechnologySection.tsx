"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code2, Palette, Atom, FileCode, Zap, Sparkles, Database, Leaf, Rocket, ArrowRight } from "lucide-react"

interface TechCardProps {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  features: string[]
  index: number
}

function TechCard({ name, description, icon: Icon, color, features, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-t-3xl`}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${color} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-1">Technology</div>
            <div className="text-sm font-bold text-gray-600 dark:text-gray-400">
              #{String(index + 1).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
          {name}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
              className="flex items-center"
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} mr-3 flex-shrink-0`}></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Learn more link */}
        <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}

function TechnologySection() {
  const technologies = [
    {
      name: "HTML5",
      description: "Semantic markup and modern web standards for accessible, SEO-friendly websites",
      icon: Code2,
      color: "from-orange-400 to-red-500",
      features: ["Semantic Elements", "Accessibility", "SEO Optimized"],
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework enabling rapid, responsive design development",
      icon: Palette,
      color: "from-cyan-400 to-blue-500",
      features: ["Responsive Design", "Custom Components", "Dark Mode"],
    },
    {
      name: "React.js",
      description: "Component-based library for building dynamic, interactive user interfaces",
      icon: Atom,
      color: "from-blue-400 to-cyan-500",
      features: ["Component Architecture", "State Management", "Hooks"],
    },
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript providing enhanced development experience",
      icon: FileCode,
      color: "from-blue-600 to-blue-700",
      features: ["Type Safety", "IntelliSense", "Error Prevention"],
    },
    {
      name: "Next.js",
      description: "Full-stack React framework with powerful features for modern web apps",
      icon: Zap,
      color: "from-gray-700 to-gray-900",
      features: ["SSR/SSG", "API Routes", "Performance"],
    },
    {
      name: "Framer Motion",
      description: "Production-ready motion library for creating smooth, engaging animations",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      features: ["Smooth Animations", "Gestures", "Layout Animations"],
    },
    {
      name: "Supabase",
      description: "Open source Firebase alternative with PostgreSQL and real-time features",
      icon: Database,
      color: "from-green-400 to-emerald-500",
      features: ["Real-time Database", "Authentication", "Storage"],
    },
    {
      name: "MongoDB",
      description: "NoSQL document database designed for modern, scalable applications",
      icon: Leaf,
      color: "from-green-600 to-green-700",
      features: ["Document Storage", "Scalability", "Flexible Schema"],
    },
    {
      name: "Vercel",
      description: "Platform for frontend frameworks with edge computing and instant deployment",
      icon: Rocket,
      color: "from-gray-800 to-black",
      features: ["Edge Functions", "Auto Deployment", "Analytics"],
    },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 mb-8"
          >
            <Sparkles className="w-5 h-5 mr-3 text-blue-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Modern Technology Stack</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Built for the
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Leveraging cutting-edge technologies to create scalable, performant, and maintainable applications that
            stand the test of time.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Production Ready</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Scalable</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>Modern</span>
            </div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </div>

  
      </div>
    </section>
  )
}

export default TechnologySection
