import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Full-Stack Developer",
    "Engineering Lead", 
    "Freelance Developer",
    "Solution Architect"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Binod Sapkota</span>
            </h1>
            <p className="hero-description">
              Experienced Full-Stack Developer & Engineering Lead currently working at Smartworld Infotech Solutions Inc. 
              Available for freelance projects and consulting work. Specializing in .NET technologies, React, 
              and enterprise solutions. Ready to bring your ideas to life with scalable, secure applications.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <span>BS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 