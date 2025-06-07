"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AnimatedTitle() {
  const words = ["Innovative", "Modern", "Responsive", "Dynamic", "Beautiful", "Powerful"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight"
      >
        <div className="flex flex-col items-center">
          <span className="block">Building</span>
          <div className="h-20 md:h-24 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="block">Web Solutions</span>
        </div>
      </motion.div>
    </div>
  )
}
