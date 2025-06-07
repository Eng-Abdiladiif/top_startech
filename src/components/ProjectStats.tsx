"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Code, Award } from "lucide-react"

function ProjectStats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "98/100",
      label: "Performance Score",
      description: "Lighthouse audit results",
    },
    {
      icon: Clock,
      value: "1.2s",
      label: "Load Time",
      description: "First contentful paint",
    },
    {
      icon: Code,
      value: "50+",
      label: "Components",
      description: "Reusable UI components",
    },
    {
      icon: Award,
      value: "100%",
      label: "Accessibility",
      description: "WCAG 2.1 compliant",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-white 
       rounded-3xl p-8 shadow-[0_25px_70px_rgba(0,0,0,0.08)] border border-gray-100"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Metrics</h2>
        <p className="text-lg text-gray-600">Key performance indicators and achievements</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className="text-center group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <stat.icon className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
            <div className="text-sm text-gray-600">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export  default ProjectStats