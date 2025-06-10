"use client"

import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

const testimonials = [
  {
    id: 1,
    name: "Mohmed Rush",
    role: "Ceo at MaxElectronic",
    content:
      "Top Star Tech transformed our digital infrastructure. Their cloud solutions helped us scale 300% while reducing costs significantly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Khaalid  ",
    role: "CEO at Kmfxtrader",
    content:
      "A game-changer for our startup. They delivered a robust, scalable platform that perfectly aligned with our vision.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Digital at Global Dynamics",
    content:
      "Exceeded all expectations. Delivered on time, within budget, and our app now has 4.9 stars with outstanding reviews.",
    rating: 5,
  },
  
 
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            Client Success Stories
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Top Star Tech has helped businesses achieve digital transformation and growth.
          </p>
        </motion.div>

        {/* Testimonials Scroll Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm text-gray-500">Scroll to see more testimonials</div>
          </div>

          {/* Scrollable Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <Card className="w-80 h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <StarRating rating={testimonial.rating} />
                      <Quote className="w-6 h-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <blockquote className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</blockquote>

                    {/* Author */}
                  
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300" />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >

        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}


export  default TestimonialsSection