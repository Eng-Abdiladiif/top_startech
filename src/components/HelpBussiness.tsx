"use client"

import Image from "next/image"
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react"
import Img1  from "../../image/top.png"
import Img2 from "../../image/team.png"
import  Aos  from "aos"
import   "aos/dist/aos.css"
import { useEffect } from "react"
import { Link, Element } from "react-scroll/modules"

 function HelpBussiness() {

  useEffect(()  => {

    Aos.init({duration:3000})
  })
  return (
    <Element name= "About">
    <section className="max-w-6xl mx-auto py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text and bullet points */}
          <div className="flex-1 space-y-8"
          data-aos = "fade-down">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl 
              lg:text-6xl bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                Help Your Business Thrive
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl max-w-2xl"
              data-aos = "fade-up">
                Transform your business operations with our comprehensive solutions designed to streamline processes,
                boost productivity, and drive sustainable growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div
                data-aos = "fade-up">
                  <h3 className="font-semibold text-lg mb-2">Accelerate Growth</h3>
                  <p className="text-muted-foreground">
                    Leverage data-driven insights and automated workflows to scale your business faster than ever
                    before.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div
                data-aos = "fade-up">
                  <h3 className="font-semibold text-lg mb-2">Enhance Team Collaboration</h3>
                  <p className="text-muted-foreground">
                    Connect your team with powerful collaboration tools that improve communication and productivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div
                data-aos = "fade-up">
                  <h3 className="font-semibold text-lg mb-2">Automate Operations</h3>
                  <p className="text-muted-foreground">
                    Reduce manual work and eliminate errors with intelligent automation that works around the clock.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2"
                  data-aos = "fade-up">Ensure Quality Results</h3>
                  <p className="text-muted-foreground">
                    Maintain high standards with built-in quality controls and real-time monitoring systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Overlapping images */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background image */}
              <div className="relative"
              data-aos = "fade-right">
                <Image
                  src={Img1}
                  alt="Business team collaboration"
                  width={500}
                  height={800}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>

              {/* Overlapping image */}
              <div className="absolute -bottom-8 -right-8 lg:-right-12"
              data-aos = "fade-up">
                <Image
                  src={Img2}
                  alt="Business growth analytics"
                  width={280}
                  height={480}
                  className="rounded-2xl shadow-2xl object-cover border-4 border-white"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Element>
  )
}


export default HelpBussiness