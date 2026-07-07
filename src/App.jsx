import { useState, useEffect } from 'react'
import './App.css'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Services from './components/Services'
import IotSection from './components/IotSection'
import Experience from './components/experience'
import Skills from './components/Skills'
import About from './components/About'
import Education from './components/Education'
import Partnership from './components/Partnership'
import Github from './components/Github'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen" role="status" aria-label="Loading portfolio">
        <div className="loader"></div>
        <p>Loading portfolio…</p>
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
        {/* 1 — Positioning */}
        <Hero />

        {/* 2 — What I deliver */}
        <Expertise />

        {/* 3 — Proof of work */}
        <Projects />

        {/* 4 — How clients engage */}
        <Services />
        <IotSection />

        {/* 5 — Track record */}
        <Experience />
        <Skills />

        {/* 6 — Credentials & context */}
        <About />
        <Education />

        {/* 7 — Extended opportunities */}
        <Partnership />
        <Github />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
