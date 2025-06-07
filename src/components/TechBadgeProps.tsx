"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TechBadgeProps {
  name: string
  icon: string
  delay: number
}

function TechBadge({ name, icon, delay }: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(255,255,255,0.8)] border border-gray-100 transition-all duration-300 group-hover:shadow-[0_25px_70px_rgba(255,255,255,0.9)] group-hover:border-gray-200">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
            <Image
              src={icon || "/placeholder.svg"}
              alt={name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-gray-900 font-medium text-center">{name}</span>
        </div>
      </div>
    </motion.div>
  )
}


export default TechBadge