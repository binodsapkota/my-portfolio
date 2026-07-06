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
        <button
          type="button"
          className="nav-logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          Binod<span className="nav-highlight"> Sapkota</span>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="nav-links__primary">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "services", label: "Services" },
              { id: "iot", label: "IoT" },
              { id: "partnership", label: "Partners" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="nav-item"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-links__cta" aria-label="Contact and code">
            {[
              { id: "contact", label: "Contact" },
              { id: "github", label: "GitHub" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="nav-item nav-item--cta"
              >
                {item.label}
              </a>
            ))}
          </div>
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