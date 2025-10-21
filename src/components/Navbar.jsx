import { useState, useEffect } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")

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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <h2 className="nav-logo">
          Binod<span className="nav-highlight"> Sapkota</span>
        </h2>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {["home", "about", "experience", "skills", "projects", "contact", "github"].map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="nav-item"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
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