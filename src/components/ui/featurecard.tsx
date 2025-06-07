"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className="group cursor-pointer h-full">
      <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] group-hover:border-gray-200 h-full">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
