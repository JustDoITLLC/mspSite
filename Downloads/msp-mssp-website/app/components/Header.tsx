"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="w-full bg-white bg-opacity-70 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 mr-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jditLogo-min-2Ea1WCfWX0ykXHbr314ve8CxoXmQTl.png"
                alt="JDIT Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-[#1E88E5]">JDIT</h1>
          </Link>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.name}>
              <Link href={item.path} className="text-gray-600 hover:text-[#1E88E5] transition-colors duration-300">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <nav className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-[#1E88E5] py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Header

