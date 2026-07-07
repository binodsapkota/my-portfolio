import { useState, useEffect } from "react"

const NAV_PRIMARY = [
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "iot", label: "IoT" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
]

const NAV_CTA = [
  { id: "contact", label: "Contact" },
  { id: "github", label: "GitHub" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light")
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`modern-navbar ${isScrolled ? "scrolled" : ""}`} aria-label="Primary">
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
            {NAV_PRIMARY.map((item) => (
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
            {NAV_CTA.map((item) => (
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

        <button
          type="button"
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>

        <button type="button" className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle theme">
          <span className="theme-icon">{theme === "light" ? "☀️" : "🌙"}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
