"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "Dashboard Overview",
      description: "Main dashboard with analytics and user management",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "User Interface",
      description: "Clean and intuitive user interface design",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "Mobile Responsive",
      description: "Fully responsive design across all devices",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "Data Visualization",
      description: "Interactive charts and data visualization",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "Settings Panel",
      description: "Comprehensive settings and configuration panel",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      title: "User Profile",
      description: "Detailed user profile and customization options",
    },
  ]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="space-y-8">
      {/* Main Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="bg-white rounded-3xl p-8 shadow-[0_25px_70px_rgba(255,255,255,0.9)] border border-gray-100">
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-[0_8px_25px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-[0_8px_25px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Expand Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-[0_8px_25px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Maximize2 className="w-5 h-5" />
            </Button>
          </div>

          {/* Image Info */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{galleryImages[selectedImage].title}</h3>
            <p className="text-gray-600">{galleryImages[selectedImage].description}</p>
          </div>
        </div>
      </motion.div>

      {/* Thumbnail Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {galleryImages.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedImage(index)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group ${selectedImage === index ? "ring-2 ring-gray-400 ring-offset-4" : ""}`}
          >
            <div className="bg-white rounded-2xl p-3 shadow-[0_15px_40px_rgba(255,255,255,0.7)] border border-gray-100 transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.8)]">
              <div className="relative h-20 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={200}
                  height={150}
                />
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    selectedImage === index ? "bg-blue-500/20" : "bg-black/0 group-hover:bg-black/10"
                  }`}
                />
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl p-6 shadow-[0_25px_70px_rgba(255,255,255,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200"
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-600 text-lg">{galleryImages[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
