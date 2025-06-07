"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, TrendingUp, Database } from "lucide-react"
import  Aos  from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link, Element } from "react-scroll/modules"

const services = [
  {
    title: "Web Design and Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Brand Design",
    description:
      "Complete brand identity solutions including logos, visual guidelines, and marketing materials that make your brand stand out.",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns to boost your online presence and drive meaningful engagement with your target audience.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "ERP Systems",
    description:
      "Enterprise resource planning solutions to streamline your business processes and improve operational efficiency.",
    icon: Database,
    gradient: "from-orange-500 to-red-500",
  },
]

function OurServices() {

  useEffect(()  => {

  Aos.init({duration:3000})
  
  })
  return (

    <Element  name="Services">
    <section className="py-16 px-20 md:px-4 max-w-3xl mx-auto"
  >
      <div className="text-center mb-12"
      data-aos= "fade-down">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Our Services</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide comprehensive digital solutions to help your business grow and succeed in today's competitive
          market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      data-aos= "fade-up">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-border"
            >
              <CardHeader className="text-center pb-4"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
    </Element>
  )
}


export default  OurServices