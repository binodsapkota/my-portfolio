import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"
import avatar from "../assets/avatar.js"

const roles = [
  "Full-Stack Developer",
  "Engineering Lead",
  "Solution Architect",
  "IoT & Connected Systems",
  "Technical Consultant",
]

const stats = [
  { value: "13+", label: "Years of experience" },
  { value: "50+", label: "Projects delivered" },
  { value: "30K+", label: "Users on flagship platform" },
]

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrentText((prev) => (prev + 1) % roles.length), 2500)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="modern-hero" id="home" aria-label="Introduction">
      <div className="modern-hero-container">
        <div className="modern-hero-text">
          <div className="hero-meta">
            <span className="hero-status">
              <span className="hero-status__dot" aria-hidden="true" />
              Open to freelance and consulting engagements
            </span>
            <span className="hero-location">
              <MapPin className="hero-location__icon" strokeWidth={2} aria-hidden="true" />
              Thornhill, Ontario, Canada
            </span>
          </div>

          <h1>
            <span className="accent">Binod Sapkota</span>
          </h1>

          <h2 className="dynamic-text" aria-live="polite">
            {roles[currentText]}
          </h2>

          <p className="hero-lede">
            I build production-grade software across the full stack—enterprise platforms, fintech systems,
            and IoT solutions that connect cloud services with on-site hardware.
          </p>

          <dl className="hero-stats">
            {stats.map((item) => (
              <div key={item.label} className="hero-stat">
                <dt className="hero-stat__value">{item.value}</dt>
                <dd className="hero-stat__label">{item.label}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-actions">
            <button type="button" className="btn-modern primary" onClick={() => scrollToSection("expertise")}>
              What I deliver
            </button>
            <button type="button" className="btn-modern outline" onClick={() => scrollToSection("projects")}>
              View portfolio
            </button>
            <button type="button" className="btn-modern outline hero-actions__tertiary" onClick={() => scrollToSection("contact")}>
              Get in touch
            </button>
          </div>
        </div>

        <div className="modern-hero-avatar">
          <div className="avatar-glass">
            <img
              src={avatar}
              alt="Binod Sapkota — Full-Stack Developer and Engineering Lead in Thornhill, Ontario, Canada"
              className="avatar-image"
              width={280}
              height={280}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
