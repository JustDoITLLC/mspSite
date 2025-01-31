import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JDIT</h3>
            <p className="text-gray-400">Your trusted partner for all your IT and cybersecurity needs.</p>
            <p className="text-gray-400 mt-2">Proud to be a Service-Disabled Veteran-Owned Small Business (SDVOSB).</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#1E88E5]" />
                <span>122 Reams Ave, Roxboro, NC 27573</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#1E88E5]" />
                <a href="tel:3363605337" className="hover:text-[#1E88E5] transition-colors duration-300">
                  336-360-5337
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#1E88E5]" />
                <a
                  href="mailto:support@justdoitservices.com"
                  className="hover:text-[#1E88E5] transition-colors duration-300"
                >
                  support@justdoitservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} JDIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

