"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users, Target, Zap } from "lucide-react"

function ProjectDetails() {
  const features = [
    { icon: Zap, text: "Lightning fast performance" },
    { icon: Target, text: "Pixel-perfect design" },
    { icon: Users, text: "Exceptional user experience" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Project Image */}
      <div className="relative">
        <div className="bg-white rounded-3xl p-8 shadow-[0_25px_70px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Project screenshot"
              className="w-full h-full object-cover"
              width={600}
              height={400}
            />

            {/* Browser mockup */}
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700">Live</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">98/100</div>
            <div className="text-sm text-gray-600">Performance Score</div>
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="space-y-6">
        <div>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">Featured Project</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Web Application</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A comprehensive web platform that demonstrates expertise in modern frontend development, featuring
            responsive design, optimized performance, and exceptional user experience.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-gray-700">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Duration</div>
              <div className="font-medium text-gray-900">3 Months</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Team Size</div>
              <div className="font-medium text-gray-900">4 Members</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg">
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </div>
      </div>
    </motion.div>
  )
}


export  default ProjectDetails