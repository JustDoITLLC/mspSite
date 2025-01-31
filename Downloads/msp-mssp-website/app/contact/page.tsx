import { Card } from "@/components/ui/card"
import ContactForm from "./contact-form"
import { Building2, Mail, Phone } from "lucide-react"

export const metadata = {
  title: "Contact Us - JDIT",
  description: "Get in touch with JDIT for all your IT and cybersecurity needs",
}

export default function ContactPage() {
  return (
    <main className="">
      <section className="bg-gradient-to-br from-blue-900 to-purple-800 text-white py-16 pt-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Ready to secure your digital future? Get in touch with our team of experts today.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-6 h-6 text-[#1E88E5] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Tech Street
                      <br />
                      Cyber City, CC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#1E88E5] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#1E88E5] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@jdit.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM EST</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Saturday - Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </p>
                  <p className="mt-4 text-gray-600">24/7 Emergency Support Available for Premium Plan Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

