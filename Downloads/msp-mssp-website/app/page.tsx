import Hero from "./components/Hero"
import ServicePackages from "./components/ServicePackages"
import Features from "./components/Features"
import CTA from "./components/CTA"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
      <section className="w-full min-h-screen flex items-center justify-center bg-[#1E88E5] text-white pt-20">
        <Hero />
      </section>
      <ServicePackages />
      <Features />
      <CTA />
    </div>
  )
}

