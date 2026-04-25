import { useState, useEffect } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light")
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const topOffset = element.offsetTop
      window.scrollTo({
        top: topOffset, 
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <h2 className="nav-logo">
          Binod<span className="nav-highlight"> Sapkota</span>
        </h2>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "skills", label: "Skills" },
            { id: "services", label: "Services" },
            { id: "iot", label: "IoT" },
            { id: "projects", label: "Projects" },
            { id: "partnership", label: "Partners" },
            { id: "contact", label: "Contact" },
            { id: "github", label: "Github" },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-item"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="theme-toggle" onClick={toggleTheme}>
          <span className="theme-icon">
            {theme === "light" ? "☀️" : "🌙"}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar