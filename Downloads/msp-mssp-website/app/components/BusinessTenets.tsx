"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const tenets = [
  {
    title: "Customer-Centric Commitment",
    content:
      "We prioritize our customers' needs, ensuring every interaction and solution revolves around delivering the best possible experience.",
  },
  {
    title: "Tailored Solutions for Every Client",
    content:
      "We understand that each client has unique challenges. Our approach involves crafting customized solutions that perfectly align with individual business needs and goals.",
  },
  {
    title: "Exceeding Expectations",
    content:
      "We don't just meet expectations; we strive to exceed them. Our team goes above and beyond to deliver results that surpass what our clients anticipate.",
  },
  {
    title: "Partnership and Collaboration",
    content:
      "We view our clients as partners. By fostering strong collaborative relationships, we ensure mutual success and long-term growth.",
  },
  {
    title: "Responsive and Agile Service",
    content:
      "In the fast-paced world of IT, quick responses are crucial. Our agile approach allows us to adapt swiftly to changing needs and emerging challenges.",
  },
  {
    title: "Continuous Learning from Feedback",
    content:
      "We actively seek and value client feedback, using it as a tool for continuous improvement and refinement of our services.",
  },
  {
    title: "Building Trust Through Transparency",
    content:
      "We believe in open and honest communication. By maintaining transparency in our operations and decision-making, we build lasting trust with our clients.",
  },
  {
    title: "Innovation Driven by Client Needs",
    content:
      "Our innovation is purposeful and client-focused. We continuously evolve our services and solutions to address the ever-changing landscape of our clients' industries.",
  },
  {
    title: "Commitment to Quality and Excellence",
    content:
      "Quality is at the core of everything we do. We are committed to delivering excellence in every aspect of our service, from initial consultation to ongoing support.",
  },
]

export default function BusinessTenets() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const handleToggle = (value: string) => {
    setOpenItems((items) => (items.includes(value) ? items.filter((item) => item !== value) : [...items, value]))
  }

  return (
    <Accordion type="multiple" value={openItems} className="w-full">
      {tenets.map((tenet, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger onClick={() => handleToggle(`item-${index}`)}>{tenet.title}</AccordionTrigger>
          <AccordionContent>{tenet.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

