"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface ERPModuleProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
}

export function ERPModule({ icon: Icon, title, description, features, color }: ERPModuleProps) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group cursor-pointer h-full">
      <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] group-hover:border-gray-200 h-full flex flex-col">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-grow space-y-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="mr-2 mb-2 text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Implementation</span>
            <span className="text-sm font-medium text-gray-900">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className={`h-2 bg-gradient-to-r ${color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
