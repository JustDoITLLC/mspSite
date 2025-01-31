import Image from "next/image"
import { Shield, Users, Award, Target } from "lucide-react"
import BusinessTenets from "../components/BusinessTenets"

export const metadata = {
  title: "About Us - JDIT",
  description:
    "Learn about JDIT, our mission, values, and commitment to providing exceptional IT and cybersecurity services",
}

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize your security in everything we do, implementing military-grade protection for your business.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our mission. We provide personalized solutions tailored to your specific needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "As a Service-Disabled Veteran-Owned Small Business, we bring military precision to IT services.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We measure our success by the tangible results we deliver to our clients.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-900 to-purple-800 text-white py-16 pt-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About JDIT</h1>
              <p className="text-xl mb-6">
                As a Service-Disabled Veteran-Owned Small Business (SDVOSB), we bring military-grade discipline and
                expertise to IT and cybersecurity services.
              </p>
              <p className="text-lg text-gray-200">
                Founded with a mission to provide exceptional IT services, we combine our military background with
                cutting-edge technology expertise to deliver superior results for our clients.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jditLogo-min-2Ea1WCfWX0ykXHbr314ve8CxoXmQTl.png"
                alt="JDIT Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <value.icon className="w-12 h-12 text-[#1E88E5] mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Business Tenets</h2>
          <div className="max-w-3xl mx-auto">
            <BusinessTenets />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose JDIT?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="mb-4">
                At JDIT, we understand that every business faces unique challenges in today's digital landscape. Our
                approach combines military precision with innovative technology solutions to address these challenges
                head-on.
              </p>
              <p className="mb-4">
                As a Service-Disabled Veteran-Owned Small Business, we bring a unique perspective to IT services. Our
                military background has instilled in us the values of discipline, attention to detail, and unwavering
                commitment to mission success.
              </p>
              <p>
                We're proud to serve businesses across various industries, providing them with the security,
                reliability, and efficiency they need to thrive in an increasingly digital world. Our customer-centric
                approach, tailored solutions, and commitment to excellence set us apart in the IT and cybersecurity
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

