"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Atom, Zap, FileCode, Sparkles, Award, TrendingUp, Users, Clock } from "lucide-react"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function TechStack() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const technologies = [
    {
      name: "HTML5",
      icon: Code2,
      description: "Semantic markup and web standards for modern applications",
      experience: "5+ years",
      projects: "100+",
      proficiency: 95,
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      description: "Utility-first CSS framework for rapid UI development",
      experience: "5+ years",
      projects: "50+",
      proficiency: 92,
      color: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      name: "React.js",
      icon: Atom,
      description: "Component-based library for building interactive UIs",
      experience: "3+ years",
      projects: "30+",
      proficiency: 90,
      color: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      name: "Next.js",
      icon: Zap,
      description: "Full-stack React framework with server-side rendering",
      experience: "3+ years",
      projects: "20+",
      proficiency: 88,
      color: "from-gray-700 to-gray-900",
      bgGradient: "from-gray-50 to-gray-100",
    },
    {
      name: "TypeScript",
      icon: FileCode,
      description: "Typed superset of JavaScript for scalable applications",
      experience: "3+ years",
      projects: "20+",
      proficiency: 85,
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      name: "Aceternity UI",
      icon: Sparkles,
      description: "Modern component library for beautiful interfaces",
      experience: "2+ years",
      projects: "10+",
      proficiency: 80,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Professional Header */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-3 py-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            data-aos="fade-up"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg rounded-full px-6 py-3 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Award className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span className="text-blue-700 font-semibold text-sm tracking-wide">PROFESSIONAL TECH STACK</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Expert-Level
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Technologies
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Leveraging cutting-edge technologies to deliver exceptional digital experiences with proven expertise and
              measurable results
            </motion.p>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-8 mt-12"
            >
              {[
                { icon: TrendingUp, value: "6+", label: "Technologies" },
                { icon: Users, value: "400+", label: "Projects" },
                { icon: Clock, value: "5+", label: "Years" },
              ].map((stat, index) => (
                <motion.div key={stat.label} whileHover={{ scale: 1.05, y: -2 }} className="text-center">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg border border-gray-200/50">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Professional Technologies Grid */}
      <div className="max-w-5xl mx-auto px-3 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} rounded-2xl`}
                  ></motion.div>

                  {/* Professional Header */}
                  <div className="relative flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -5, 5, 0],
                        scale: [1, 1.1, 1.1, 1.05, 1.05, 1],
                      }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <IconComponent size={32} className="text-white" />
                      </div>
                      {/* Floating indicator */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                      ></motion.div>
                    </motion.div>

                    {/* Professional Badge */}
                    <div className="text-right">
                      <div className="text-xs font-semibold text-gray-500 mb-1">PROFICIENCY</div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                        {tech.proficiency}%
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{tech.description}</p>

                    {/* Professional Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-xs font-semibold text-gray-500 mb-1">EXPERIENCE</div>
                        <div className="text-sm font-bold text-gray-900">{tech.experience}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 mb-1">PROJECTS</div>
                        <div className="text-sm font-bold text-gray-900">{tech.projects}</div>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="space-y-2">
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          className={`h-2 bg-gradient-to-r ${tech.color} rounded-full relative`}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          ></motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"
                  ></motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

       
      </div>
    </div>
  )
}

export default TechStack
