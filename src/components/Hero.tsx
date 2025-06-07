"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronRight, Play, Sparkles } from "lucide-react"

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Smooth Transition */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
            scale: index === currentImageIndex ? 1.05 : 1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white">Leading Digital Innovation</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Top Star Tech
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2">
              Digital Agency
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
        >
          Transforming businesses through cutting-edge technology solutions and innovative digital experiences that
          drive growth and success.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold text-white shadow-2xl shadow-orange-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center gap-2">
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Stats or Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-orange-500 w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
