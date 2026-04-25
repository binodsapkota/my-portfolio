import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/experience'
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
      <header>
        <Navbar />
      </header>
      
      <main role="main">
        <section id="home" aria-label="Introduction">
          <Hero />
        </section>
        
        <section id="about" aria-label="About Binod Sapkota">
          <About />
        </section>

        <section id="experience" aria-label="Work Experience and Roles">
          <Experience />
        </section>
        
        <section id="skills" aria-label="Technical Skills and Expertise">
          <Skills />
        </section>

        <Services />

        <IotSection />
        
        <section id="projects" aria-label="Professional Projects and Work">
          <Projects />
        </section>

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
