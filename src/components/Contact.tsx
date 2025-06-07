"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Link, Element } from "react-scroll/modules"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "success" | "error" | null
  message: string
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    try {
      await emailjs.send(
        "service_ippw25m",
        "template_liemtxj",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Your Name",
        },
        "YOUR_PUBLIC_KEY",
      )

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+(252)0634991174",
      href: "+(252)0634991174",
    },
    {
      icon: Mail,
      label: "Email",
      value: "cabdiladiifsaalax988@gmail.com",
      href: "cabdiladiifsaalax988@gmail.com",
    },

    {
      icon: Clock,
      label: "Working Hours",
      value: "Monday - Friday, 9:00 AM - 6:00 PM",
      href: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <Element name ="Contant">
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Contact Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as
            possible.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                    />
                  </div>

                  {status.type && (
                    <Alert
                      className={`${
                        status.type === "success"
                          ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                          : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      )}
                      <AlertDescription
                        className={`${
                          status.type === "success"
                            ? "text-green-800 dark:text-green-200"
                            : "text-red-800 dark:text-red-200"
                        }`}
                      >
                        {status.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Prefer to reach out directly? Here are the best ways to contact me.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-6">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.label}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.label}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Response Time</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I typically respond to all messages within 24 hours during business days. For urgent matters, please
                call directly.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </Element>
  )
}

export default Contact