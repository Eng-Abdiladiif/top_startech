"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface BrandShowcaseProps {
  title: string
  description: string
  image: string
  color: string
}

export function BrandShowcase({ title, description, image, color }: BrandShowcaseProps) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group cursor-pointer h-full">
      <div className="bg-white rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] group-hover:border-gray-200 h-full">
        {/* Image Container */}
        <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={300}
            height={200}
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
          ></div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Accent Bar */}
        <div
          className={`w-full h-1 bg-gradient-to-r ${color} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
        ></div>
      </div>
    </motion.div>
  )
}
