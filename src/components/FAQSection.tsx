"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown, MessageCircle, Phone, Mail } from "lucide-react"

const faqData = [
  {
    id: "item-1",
    question: "What are the main goals of Top Star Tech?",
    answer:
      "We focus on delivering custom strategies that increase online visibility, attract the right audience, and convert leads into loyal customers. Whether it’s a high-performing website or a professional brand identity, our goal is your business success.",
  },
  {
    id: "item-2",
    question: "How does Top Star Tech support business growth?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery. International shipping times vary by location but generally take 7-14 business days.",
  },
  {
    id: "item-3",
    question: "What makes Top Star Tech’s goals unique compared to other digital agencies?",
    answer:
      "Top Star Tech combines technology, creativity, and a deep understanding of business needs. Our goal is not just to build websites or campaigns but to create long-term digital success stories for every client we work with.",
  },

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b
     from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-3 sm:px-3 lg:px-12">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Premium Title Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 dark:bg-slate-100 rounded-2xl mb-8 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white dark:text-slate-900" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Frequently Asked
              <span className="block text-slate-600 dark:text-slate-300">Questions</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Find comprehensive answers to common questions about our products, services, and policies. Our team has
              compiled the most helpful information to assist you.
            </p>
          </motion.div>

          {/* Premium FAQ Container */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-8 sm:p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <motion.div key={faq.id} variants={itemVariants}>
                      <AccordionItem value={faq.id} className="border-none">
                        <div className="group border border-slate-200 dark:border-slate-600 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-md">
                          <AccordionTrigger className="px-8 py-7 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 [&[data-state=open]]:bg-slate-50 dark:[&[data-state=open]]:bg-slate-700/50 [&[data-state=open]]:border-slate-300 dark:[&[data-state=open]]:border-slate-500">
                            <div className="flex  items-center justify-between w-full">
                              <div className="flex items-center space-x-6">
                                <div className="flex-shrink-0 
                                w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                                  <span className="text-lg font-bold">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-left leading-relaxed">
                                  {faq.question}
                                </h3>
                              </div>
                              <ChevronDown className="h-6 w-6 text-slate-500 dark:text-slate-400 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0 ml-4" />
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-7">
                            <div className="ml-2 pt-4 border-l-2 border-slate-200 dark:border-slate-600 pl-6">
                              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{faq.answer}</p>
                            </div>
                          </AccordionContent>
                        </div>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          </motion.div>

          {/* Premium Contact Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-slate-900 dark:bg-slate-100 rounded-3xl 
            p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-bold text-white dark:text-slate-900 mb-4">Still Need Assistance?</h3>
              <p className="text-xl text-slate-300 dark:text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our dedicated support team is available to help you with personalized assistance and detailed guidance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-slate-800 dark:bg-white rounded-2xl p-6 text-center">
                  <Phone className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                  <h4 className="text-white dark:text-slate-900 font-semibold mb-2">Phone Support</h4>
                  <p className="text-slate-400 dark:text-slate-600 text-sm">Sat-Thur, 8AM-6PM AF</p>
                </div>
                <div className="bg-slate-800 dark:bg-white rounded-2xl p-6 text-center">
                  <Mail className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                  <h4 className="text-white dark:text-slate-900 font-semibold mb-2">Email Support</h4>
                  <p className="text-slate-400 dark:text-slate-600 text-sm">24/7 Response</p>
                </div>
                <div className="bg-slate-800 dark:bg-white rounded-2xl p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                  <h4 className="text-white dark:text-slate-900 font-semibold mb-2">Live Chat</h4>
                  <p className="text-slate-400 dark:text-slate-600 text-sm">Instant Support</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Our Team
                <MessageCircle className="ml-3 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default  FAQSection