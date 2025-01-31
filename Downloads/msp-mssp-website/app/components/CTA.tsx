"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Just Do IT?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Get started with our cutting-edge cybersecurity solutions today and stay protected in the digital age.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center mx-auto"
        >
          Schedule a Free Consultation
          <ArrowRight className="ml-2" />
        </motion.button>
      </div>
    </section>
  )
}

export default CTA

