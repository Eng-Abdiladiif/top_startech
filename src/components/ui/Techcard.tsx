"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface TechCardProps {
  name: string
  description: string
  icon: string
  color: string
  features: string[]
}

export function TechCard({ name, description, icon, color, features }: TechCardProps) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group cursor-pointer h-full">
      <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] group-hover:border-gray-200 h-full flex flex-col">
        {/* Icon */}
        <div className="flex items-center space-x-4 mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <Image
              src={icon || "/placeholder.svg"}
              alt={name}
              width={32}
              height={32}
              className="w-full h-full object-contain filter brightness-0 invert"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        {/* Features */}
        <div className="space-y-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-2">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
