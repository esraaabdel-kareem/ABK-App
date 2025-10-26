
import React from 'react'
import { Lightbulb, ClipboardList, Ruler, FileText, Users, CheckCircle } from "lucide-react";
const Page = () => {
  const services = [
  {
    icon: <Lightbulb className="w-5 h-5 " />,
    title: "R&D and Site Analysis",
    desc: "We conduct thorough research and site analysis to ensure optimal construction solutions tailored to each project's unique requirements.",
  },
  {
    icon: <ClipboardList className="w-5 h-5 " />,
    title: "Concept Development",
    desc: "Our team collaborates with clients to develop innovative and sustainable construction concepts that align with their vision and goals.",
  },
  {
    icon: <Ruler className="w-5 h-5 " />,
    title: "Design Development",
    desc: "We provide comprehensive design development services, transforming concepts into detailed architectural and engineering plans ready for construction.",
  },
  {
    icon: <FileText className="w-5 h-5 " />,
    title: "Technical Documentation",
    desc: "We prepare precise technical documentation, including specifications and drawings, to guide the construction process and ensure quality standards are met.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Client Review",
    desc: "We facilitate client reviews throughout the project lifecycle, ensuring transparency and alignment with client expectations at every stage.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Execution & Handover",
    desc: "Our team oversees the execution of construction projects, ensuring timely completion and quality handover to clients, ready for occupancy and use.",
  },
];

  return (
    <div className="container" id="services">
      <h1 className="text-5xl font-bold mb-4 bg-[url('/img/villa2/1.jpeg')] bg-caver bg-center p-5 text-white rounded-2xl text-center">What We Do</h1>
      <div className="mt-10">
        {services.map((service, index) => (
          <div key={index} className="mb-8  px-1 py-3 border-b-2 border-gray-300 hover:shadow-2xl rounded-lg transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 text-background first-letter:capitalize flex items-center gap-3">
              <span>{service.icon}</span>
              {service.title}</h2>
            <p className="text-sm text-justify text-foreground">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
