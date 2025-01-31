import { Zap } from "lucide-react"
import ServicePackages from "../components/ServicePackages"

export const metadata = {
  title: "Services - JDIT",
  description: "Comprehensive IT and cybersecurity services for your business",
}

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-900 to-purple-800 text-white py-16 pt-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            From basic IT support to enterprise-grade cybersecurity solutions, we provide the services you need to keep
            your business running securely and efficiently.
          </p>
        </div>
      </section>
      <ServicePackages />
    </main>
  )
}

