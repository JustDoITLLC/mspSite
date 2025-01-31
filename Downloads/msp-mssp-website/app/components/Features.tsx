"use client"

import { motion } from "framer-motion"
import { Shield, Cloud, Zap, Users, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "AI-driven security that stops even the most sophisticated cyber threats in real-time.",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Management",
    description: "Seamless and secure cloud integration, backup, and disaster recovery solutions.",
  },
  {
    icon: Zap,
    title: "Proactive IT Management",
    description: "Stay ahead of issues with our 24/7 monitoring and automated remediation.",
  },
  {
    icon: Users,
    title: "Expert Training & Support",
    description: "Empower your team with cutting-edge cybersecurity awareness and best practices.",
  },
  {
    icon: Award,
    title: "Veteran-Owned Business",
    description: "As an SDVOSB, we bring military-grade discipline and commitment to your IT security.",
  },
]

const Features = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Just Do IT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

