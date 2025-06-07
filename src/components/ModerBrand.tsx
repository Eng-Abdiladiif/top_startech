"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ArrowRight, Check } from "lucide-react"

function ModernTechBrand() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100])

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)



  const technologies = [
    "Frontend Development",
    "Backend Architecture",
    "Web Design",
    "Brand  Design",
    "Digital Marketing",
    "AI Solution",
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Background Image with Parallax */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Technology Background"
            fill
            className="object-cover opacity-60"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ opacity: headerOpacity, y: headerY }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-1 bg-blue-500 mb-8"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Next-Generation Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                Empowering businesses with cutting-edge technology to drive innovation and growth in the digital era.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300"
                >
                  Explore Solutions
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300"
                >
                  Our Process
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>


      {/* Animated Stats Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Driving Digital Excellence Through Innovation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team of experts combines technical expertise with strategic thinking to deliver solutions that drive
                measurable business outcomes.
              </p>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="mr-3 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "200+", label: "Clients Worldwide" },
                { value: "15+", label: "Years Experience" },
                { value: "98%", label: "Client Retention" },
                { value: "24/7", label: "Technical Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our Technology Process</h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to ensure successful implementation and adoption of technology solutions.
            </p>
          </motion.div>

          {/* <Tabs defaultValue="discovery" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-12">
              <TabsTrigger value="discovery">Discovery</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              {["discovery", "design", "development", "deployment"].map((tab) => (
                <TabsContent key={tab} value={tab} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8 items-center"
                  >
                    <div className="md:w-1/2">
                      <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
                        <Image
                          src={`/placeholder.svg?height=400&width=600`}
                          alt={`${tab} Process`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4 capitalize text-gray-900">{tab} Phase</h3>
                      <p className="text-gray-600 mb-6">
                        {tab === "discovery" &&
                          "We analyze your business needs and technical requirements to define the scope and objectives of your project."}
                        {tab === "design" &&
                          "Our experts create a comprehensive solution architecture and user experience design tailored to your specific needs."}
                        {tab === "development" &&
                          "We build your solution using agile methodologies, with regular reviews and testing to ensure quality."}
                        {tab === "deployment" &&
                          "We implement your solution with minimal disruption, providing training and support for a smooth transition."}
                      </p>
                      <ul className="space-y-3">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-start">
                            <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-gray-600">
                              {tab === "discovery" &&
                                [`Stakeholder interviews`, `Requirements analysis`, `Technical assessment`][item - 1]}
                              {tab === "design" &&
                                [`Solution architecture`, `UX/UI design`, `Technical specifications`][item - 1]}
                              {tab === "development" &&
                                [`Agile development`, `Quality assurance`, `Performance testing`][item - 1]}
                              {tab === "deployment" &&
                                [`Implementation plan`, `User training`, `Ongoing support`][item - 1]}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs> */}
        </div>
      </section>

   

      
    </div>
  )
}


export default ModernTechBrand