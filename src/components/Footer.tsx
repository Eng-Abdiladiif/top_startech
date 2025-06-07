"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Github } from "lucide-react"
import Logo  from   "../../image/Logo.png"
function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Apps", href: "/mobile-apps" },
        { name: "Cloud Solutions", href: "/cloud-solutions" },
        { name: "AI & Analytics", href: "/ai-analytics" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "Support Center", href: "/support" },
        { name: "API Reference", href: "/api" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="px-4 md:px-8 lg:px-12 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Logo and company info */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <Image src={Logo} alt="Top Star Tech Logo" width={200} height={60} className="h-12 w-auto" />
              </Link>
              <p className="text-slate-300 mb-6 max-w-sm leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. We transform ideas into digital reality
                with innovation and excellence.
              </p>

              {/* Newsletter subscription */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                <div className="flex gap-2 max-w-sm">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-orange-500"
                  />
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-slate-800 p-3 rounded-lg text-slate-300 hover:text-white hover:bg-orange-600 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerLinks.map((category) => (
                  <div key={category.title}>
                    <h3 className="font-semibold text-white mb-4 text-lg">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.links.map((link) => (
                        <li key={link.name}>
                          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Link
                              href={link.href}
                              className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="bg-slate-800 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email Us</p>
                  <p className="text-white font-medium">cabdiladiifsaalax988@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call Us</p>
                  <p className="text-white font-medium">+1 (252)0634991174</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Visit Us</p>
                  <p className="text-white font-medium">Saanag/ Erigavo</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-slate-700 mb-8" />

          {/* Copyright and bottom links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© {currentYear} Top Star Tech. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/sitemap" className="text-slate-400 hover:text-orange-400 transition-colors">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-slate-400 hover:text-orange-400 transition-colors">
                Accessibility
              </Link>
              <Link href="/status" className="text-slate-400 hover:text-orange-400 transition-colors">
                Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export  default Footer