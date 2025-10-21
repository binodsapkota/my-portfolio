import { useState, useEffect } from "react"
import avatar from '../assets/IMG_9527.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["Full-Stack Developer", "Engineering Lead", "Freelance Developer", "Solution Architect"]

  useEffect(() => {
    const interval = setInterval(() => setCurrentText((prev) => (prev + 1) % texts.length), 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="modern-hero" id="home">
      <div className="modern-hero-container">
        <div className="modern-hero-text">
          <h1>
            Hi, I'm <span className="accent">Binod Sapkota</span>
          </h1>
          <h2 className="dynamic-text">{texts[currentText]}</h2>
          <p>
            Experienced Full-Stack Developer & Engineering Lead at Smartworld Infotech Solutions Inc.
            I build scalable, secure enterprise-grade applications using .NET and React. Let's bring your ideas to life.
          </p>
          <div className="hero-actions">
            <button className="btn-modern primary" onClick={() => scrollToSection("projects")}>
              View My Work
            </button>
            <button className="btn-modern outline" onClick={() => scrollToSection("contact")}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="modern-hero-avatar">
          <div className="avatar-glass">
            <img src={avatar} alt="Avatar" className="avatar-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
