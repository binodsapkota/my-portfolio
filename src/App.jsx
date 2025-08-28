import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
    <div className="App">
      <header>
        <Navbar />
      </header>
      
      <main role="main">
        <section id="hero" aria-label="Introduction">
          <Hero />
        </section>
        
        <section id="about" aria-label="About Binod Sapkota">
          <About />
        </section>
        
        <section id="skills" aria-label="Technical Skills and Expertise">
          <Skills />
        </section>
        
        <section id="projects" aria-label="Professional Projects and Work">
          <Projects />
        </section>
        
        <section id="contact" aria-label="Contact Information">
          <Contact />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
