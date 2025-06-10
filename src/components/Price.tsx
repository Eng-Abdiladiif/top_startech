"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Zap, Globe, Settings2, Palette } from "lucide-react"
import { Link, Element } from "react-scroll/modules"
const services = [
  {
    id: "web",
    name: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    accent: "bg-emerald-400",
    description: "Modern web solutions that convert",
    tiers: [
      {
        name: "Starter",
        price: "200",
        duration: "project",
        popular: false,
        features: [
          "5-page responsive site",
          "Mobile-first approach",
          "SEO foundation",
          "Contact integration",
          "30-day support",
        ],
      },
      {
        name: "Professional",
        price: "500",
        duration: "project",
        popular: true,
        features: [
          "10-page custom site",
          "Design system",
          "Advanced SEO",
          "CMS integration",
          "E-commerce ready",
          "90-day support",
        ],
      },
      {
        name: "Enterprise",
        price: "1200",
        duration: "project",
        popular: false,
        features: [
          "Unlimited pages",
          "Custom application",
          "API integrations",
          "Multi-language",
          "Analytics suite",
          "180-day support",
        ],
      },
    ],
  },
  {
    id: "erp",
    name: "ERP Systems",
    icon: <Settings2 className="w-5 h-5" />,
    accent: "bg-blue-400",
    description: "Business automation at scale",
    tiers: [
      {
        name: "Core",
        price: "400",
        duration: "setup",
        popular: false,
        features: [
          "CRM + Inventory",
          "10 user licenses",
          "Basic reporting",
          "Email support",
          "Standard APIs",
          "90-day training",
        ],
      },
      {
        name: "Business",
        price: "899",
        duration: "setup",
        popular: true,
        features: [
          "Full module suite",
          "50 user licenses",
          "Advanced analytics",
          "Priority support",
          "Custom integrations",
          "180-day training",
        ],
      },
      {
        name: "Enterprise",
        price: "1699",
        duration: "setup",
        popular: false,
        features: [
          "Custom solution",
          "Unlimited users",
          "AI insights",
          "24/7 support",
          "Advanced security",
          "365-day training",
        ],
      },
    ],
  },
  {
    id: "brand",
    name: "Brand Design",
    icon: <Palette className="w-5 h-5" />,
    accent: "bg-violet-400",
    description: "Identity that resonates",
    tiers: [
      {
        name: "Essential",
        price: "25",
        duration: "package",
        popular: false,
        features: [
          "Logo concepts (3x)",
          "Business cards",
          "Letterhead design",
          "Brand guidelines",
          "2 revisions",
          "Standard formats",
        ],
      },
      {
        name: "Complete",
        price: "50",
        duration: "package",
        popular: true,
        features: [
          "Logo concepts (5x)",
          "Full stationery",
          "Brand manual",
          "Social templates",
          "Marketing materials",
          "5 revisions",
        ],
      },
      {
        name: "Premium",
        price: "110",
        duration: "package",
        popular: false,
        features: [
          "Brand strategy",
          "Unlimited concepts",
          "Visual identity",
          "Guidelines manual",
          "Marketing suite",
          "Unlimited revisions",
        ],
      },
    ],
  },
]



function Price() {
  const [activeService, setActiveService] = useState("web")
  const currentService = services.find((s) => s.id === activeService)

  return (

    <Element  name = "Price">
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-6xl font-bold tracking-tight text-neutral-900 mb-4
          dark:text-gray-200">Pricing</h1>
          <p className="text-xl text-neutral-600 font-medium">Choose what works for you</p>
        </motion.div>

        {/* Main Card */}
        <Card className="border-0 shadow-2xl shadow-neutral-200/50 rounded-3xl overflow-hidden
        ">
          <CardContent className="p-0">
            <Tabs value={activeService} onValueChange={setActiveService}>
              {/* Service Navigation */}
              <div className="border-b border-neutral-100">
                <TabsList className="w-full h-auto bg-transparent
                 p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="group relative p-6 rounded-2xl border border-neutral-200
                       bg-white data-[state=active]:border-neutral-900
                        data-[state=active]:bg-neutral-900 transition-all 
                        duration-300 hover:border-neutral-300 "
                    >
                      <div className="flex flex-col md:flex items-center gap-3">
                        <div
                          className={`p-3 rounded-xl ${service.accent} group-data-[state=active]:bg-white transition-colors`}
                        >
                          <div className="text-white group-data-[state=active]:text-neutral-900">{service.icon}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-neutral-900 group-data-[state=active]:text-white">
                            {service.name}
                          </div>
                          <div className="text-sm text-neutral-500 group-data-[state=active]:text-neutral-300 mt-1">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Pricing Content */}
              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="p-0 mt-0">
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <AnimatePresence mode="wait">
                        {service.tiers.map((tier, index) => (
                          <motion.div
                            key={`${service.id}-${tier.name}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="relative group"
                          >
                            {tier.popular && (
                              <div className="absolute -top-3 left-6 z-10">
                                <Badge className="bg-neutral-900 text-white font-medium px-3 py-1 rounded-full">
                                  <Zap className="w-3 h-3 mr-1" />
                                  Popular
                                </Badge>
                              </div>
                            )}

                            <div
                              className={`relative h-full p-8 rounded-2xl border transition-all duration-300 group-hover:shadow-xl ${
                                tier.popular
                                  ? "border-neutral-900 bg-neutral-50"
                                  : "border-neutral-200 bg-white group-hover:border-neutral-300"
                              }`}
                            >
                              {/* Tier Header */}
                              <div className="mb-8">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-2">
                                  <span className="text-4xl font-bold text-neutral-900">${tier.price}</span>
                                  <span className="text-neutral-500 font-medium">/{tier.duration}</span>
                                </div>
                              </div>

                              {/* Features */}
                              <div className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.05 }}
                                    className="flex items-start gap-3"
                                  >
                                    <div
                                      className={`w-1.5 h-1.5 rounded-full ${service.accent} mt-2.5 flex-shrink-0`}
                                    />
                                    <span className="text-neutral-700 leading-relaxed">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>

                              {/* CTA */}
                              <Button
                                className={`w-full h-12 rounded-xl font-semibold transition-all duration-300 group/btn ${
                                  tier.popular
                                    ? "bg-neutral-900 hover:bg-neutral-800 text-white"
                                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900"
                                }`}
                              >
                                <span>Get Started</span>
                                <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Footer */}
           
          </CardContent>
        </Card>
      </div>
    </div>
    </Element>
  )
}

export default  Price