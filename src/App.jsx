import { useState, useEffect } from 'react'
import './App.css'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Services from './components/Services'
import IotSection from './components/IotSection'
import Projects from './components/Projects'
import Partnership from './components/Partnership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Github from './components/Github'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen" role="status" aria-label="Loading portfolio">
        <div className="loader"></div>
        <p>Loading Portfolio...</p>
      </div>
    )
  }

  return (
    <div className="App app-shell">
      <Seo />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header>
        <Navbar />
      </header>

      <main id="main-content" role="main">
        <section id="home" aria-label="Introduction">
          <Hero />
        </section>
        
        <section id="about" aria-label="About Binod Sapkota">
          <About />
        </section>

        <section id="experience" aria-label="Work Experience and Roles">
          <Experience />
        </section>

        <Education />
        
        <section id="skills" aria-label="Technical Skills and Expertise">
          <Skills />
        </section>

        <section id="projects" aria-label="Professional Projects and Work">
          <Projects />
        </section>

        <Services />

        <IotSection />

        <Partnership />

        <section id="contact" aria-label="Contact Information">
          <Contact />

        </section>
        <Github />

      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
