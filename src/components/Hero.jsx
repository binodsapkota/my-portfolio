import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Software Engineering Leader', 'Full Stack Developer', '.NET Specialist', 'React Developer']

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
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Binod Sapkota</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="animated-text">{texts[currentText]}</span>
            </h2>
            <p className="hero-description">
              Experienced Software Engineering Leader with 10+ years in full-stack development using .NET technologies, 
              including 5+ years in engineering leadership roles. Proven track record of delivering scalable, secure, 
              enterprise-grade applications across finance, health, and manufacturing domains.
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
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>👨‍💼</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero 