"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Download } from "lucide-react"

function DemoSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the project firsthand with our live demo, or dive into the source code to see how it's built with
            modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Launch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Live Site
            </Button>
            <Button size="lg" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              <Download className="w-5 h-5 mr-2" />
              Download Assets
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export  default DemoSection