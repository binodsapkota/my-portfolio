import { useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    id: 1,
    company: "Smartworld Infotech Solutions Inc",
    title: "Software Developer / Engineering Lead",
    location: "Canada",
    startDate: "Aug 2025",
    endDate: "Present",
    description: [
      "Leading enterprise-grade application architecture and full-stack development.",
      "Driving innovation with React, .NET, and cloud-native technologies.",
      "Collaborating with cross-functional teams on scalable solutions.",
    ],
  },
  {
    id: 2,
    company: "Riddha Soft Pvt. Ltd.",
    title: "Software Developer / Engineering Lead",
    location: "Kathmandu, Nepal",
    startDate: "Sept 2016",
    endDate: "June 2025",
    description: [
      "Developed full-stack fintech and ERP platforms using ASP.NET Core and ReactJS.",
      "Led MoneyFex (UK remittance platform) with 30K+ active users.",
      "Integrated biometric KYC (Futronic, Evolis) and automated CI/CD pipelines.",
      "Managed a 10+ person dev team, conducted code reviews, and interviews.",
    ],
  },
  {
    id: 3,
    company: "InfoDevelopers Pvt. Ltd.",
    title: "Software Developer",
    location: "Lalitpur, Nepal",
    startDate: "Dec 2012",
    endDate: "July 2016",
    description: [
      "Built enterprise applications for banks and insurance companies.",
      "Developed reusable components using ASP.NET MVC and SQL Server.",
      "Optimized complex queries and participated in architecture discussions.",
    ],
  },
]

export default function Experience() {
  const [selected, setSelected] = useState(experiences[0])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="experience-section">
      <div className="container" ref={ref}>
        <div className="section-header animate-fade-in">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider animate-scale-in"></div>
          <p className="section-subtitle">
            A journey through leadership, architecture, and full-stack development across top tech firms.
          </p>
        </div>

        <div className="experience-layout">
          {/* Sidebar */}
          <motion.div
            className="experience-sidebar"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="timeline-line"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`experience-item ${
                  selected.id === exp.id ? "active" : ""
                }`}
              >
                {/* Date above company */}
                <div
                  className={`experience-date-top ${
                    selected.id === exp.id ? "highlight" : ""
                  }`}
                >
                  {exp.startDate} — {exp.endDate}
                </div>

                {/* Timeline dot */}
                <motion.span
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                ></motion.span>

                {/* Company Button */}
                <button
                  onClick={() => setSelected(exp)}
                  className={`company-button ${
                    selected.id === exp.id ? "active" : ""
                  }`}
                >
                  {exp.company}
                </button>
              </div>
            ))}
          </motion.div>

          {/* Detail Card */}
          <div className="experience-details">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="experience-card"
                >
                  <h3 className="experience-title">
                    {selected.title}{" "}
                    <span className="highlight">@{selected.company}</span>
                  </h3>
                  <p className="experience-dates">
                    {selected.startDate} — {selected.endDate}
                  </p>
                  <p className="experience-location">{selected.location}</p>

                  <ul className="experience-list">
                    {selected.description.map((desc, i) => (
                      <li key={i}>
                        <span className="arrow">▹</span> {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
