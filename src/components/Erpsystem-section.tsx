"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ERPModule } from "../../src/components/ui/erpmodule"
import { Building2, Users, Package, DollarSign, BarChart3, Settings, Database, Shield, Zap, Globe } from "lucide-react"
import odoo  from "../../image/odoo.png"
function ERPSystemSection() {
  const erpModules = [
    {
      icon: Users,
      title: "Human Resources",
      description: "Employee management, payroll, and performance tracking",
      features: ["Employee Database", "Payroll Management", "Performance Reviews", "Time Tracking"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking and warehouse management",
      features: ["Stock Tracking", "Warehouse Management", "Supplier Relations", "Order Management"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Comprehensive accounting and financial reporting",
      features: ["Accounting", "Financial Reports", "Budget Planning", "Tax Management"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced analytics and business intelligence",
      features: ["Real-time Dashboards", "Custom Reports", "Data Visualization", "KPI Tracking"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Building2,
      title: "Project Management",
      description: "End-to-end project planning and execution",
      features: ["Project Planning", "Resource Allocation", "Timeline Tracking", "Team Collaboration"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Settings,
      title: "System Administration",
      description: "User management and system configuration",
      features: ["User Roles", "Security Settings", "System Config", "Audit Logs"],
      color: "from-gray-500 to-slate-600",
    },
  ]

  const systemFeatures = [
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Built to handle enterprise-level data and users",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols and data protection",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and reliability",
    },
    {
      icon: Globe,
      title: "Multi-tenant",
      description: "Support for multiple organizations and branches",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white
    dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200
           mb-4">🏢 Enterprise Solution</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6
          dark:text-gray-100">Complete ERP System</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developed a comprehensive Enterprise Resource Planning system that streamlines business operations, improves
            efficiency, and provides real-time insights across all departments.
          </p>
        </motion.div>

        {/* ERP Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 shadow-[0_25px_70px_rgba(0,0,0,0.2)]">
            <div className="bg-white rounded-2xl p-6 relative overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-4 py-1 text-sm text-gray-600">
                  https://erp-system.company.com/dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden">
                <Image
                  src={odoo}
                  alt="ERP Dashboard"
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+24%</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1.2M+</div>
                    <div className="text-xs text-gray-600">Records</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ERP Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20
       ">
          {erpModules.map((module, index) => (
            <motion.div  className=" dark:bg-black dark:text-gray-100"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ERPModule {...module} />
            </motion.div>
          ))}
        </div>

        {/* System Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8
         "
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Architecture</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of a fully integrated ERP system designed for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export  default ERPSystemSection