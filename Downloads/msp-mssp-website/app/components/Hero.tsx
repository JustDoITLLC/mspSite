"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const features = ["Advanced Threat Protection", "Secure Cloud Management", "24/7 IT Support", "Tailored Solutions"]

export default function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#1E88E5] overflow-hidden relative">
      {/* Background cable-like pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10h20M10 0v20" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jditLogo-min-2Ea1WCfWX0ykXHbr314ve8CxoXmQTl.png"
            alt="JDIT Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Your Trusted IT & Cybersecurity Partner
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mb-4 text-white"
        >
          We handle your IT and security, so you can focus on what you do best
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl mb-8 text-white font-semibold"
        >
          Proud to be a Service-Disabled Veteran-Owned Small Business (SDVOSB)
        </motion.p>

        <motion.div
          className="h-12 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentFeature === index ? 1 : 0,
                y: currentFeature === index ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl absolute left-0 right-0"
            >
              {feature}
            </motion.p>
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#1E88E5] font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center mx-auto"
        >
          Get Started
          <ArrowRight className="ml-2" />
        </motion.button>
      </div>

      {/* Decorative cable connectors */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="w-12 h-12 bg-gray-200 rounded-full mb-4"
          />
        ))}
      </div>
    </section>
  )
}

