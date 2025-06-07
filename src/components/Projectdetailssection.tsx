"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "../components/ui/badge"
import { Calendar, Users, Target, Award, Clock, Code } from "lucide-react"
import MeProfile   from "../../image/top.png"

export function ProjectDetailsSection() {
  const projectInfo = [
    { icon: Calendar, label: "Duration", value: "1 Months" },
    { icon: Users, label: "Team Size", value: "5 Members" },
    { icon: Target, label: "Role", value: "Lead Developer" },
    { icon: Award, label: "Status", value: "Completed" },
  ]

  const metrics = [
    { icon: Clock, value: "1.2s", label: "Load Time" },
    { icon: Code, value: "95%", label: "Code Coverage" },
    { icon: Target, value: "98/100", label: "Performance" },
    { icon: Award, value: "100%", label: "Accessibility" },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100">
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <Image
                  src={MeProfile}
                  alt="Project screenshot"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />

                {/* Browser Chrome */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                {/* Live Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Live</span>
                </motion.div>
              </div>
            </div>

            {/* Floating Metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100"
            >
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <metric.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">Web Development</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                This comprehensive web application showcases modern development practices, featuring a responsive
                design, optimized performance, and exceptional user experience. Built with a focus on scalability and
                maintainability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The project demonstrates expertise in full-stack development, from frontend animations to backend
                optimization, resulting in a production-ready application that exceeds industry standards.
              </p>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-2 gap-6">
              {projectInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="font-semibold text-gray-900">{info.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
