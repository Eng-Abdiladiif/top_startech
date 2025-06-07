"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play } from "lucide-react"

function HeroSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
              ✨ Featured Project
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Modern Web
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Application
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A cutting-edge web application built with the latest technologies, featuring exceptional performance,
              beautiful animations, and seamless user experience.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Live Demo
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg">
              <Github className="w-5 h-5 mr-2" />
              View Source
            </Button>
            <Button size="lg" variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ExternalLink className="w-5 h-5 mr-2" />
              Case Study
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


export  default HeroSection