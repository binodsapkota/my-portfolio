const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: "#expertise", label: "Expertise" },
    { href: "#projects", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#iot", label: "IoT" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "Background" },
    { href: "#education", label: "Education" },
    { href: "#partnership", label: "Partnerships" },
    { href: "#contact", label: "Contact" },
    { href: "#github", label: "GitHub" },
  ]

  return (
    <footer className="footer py-8 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-fade-in">
          <div className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up">
            <h3 className="text-base font-semibold text-white mb-2">Binod Sapkota</h3>
            <p className="text-xs text-gray-300">Full-Stack Developer &amp; Engineering Lead</p>
            <p className="text-xs text-gray-300">Enterprise · Fintech · IoT</p>
            <p className="text-xs text-gray-300">Thornhill, Ontario, Canada</p>
          </div>

          <div
            className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-sm font-semibold text-white mb-2">Navigate</h4>
            <ul className="footer-links flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs text-gray-300 hover:text-yellow-400 transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h4 className="text-sm font-semibold text-white mb-2">What I deliver</h4>
            <ul className="footer-links flex flex-col gap-1">
              <li className="text-xs text-gray-300">Enterprise &amp; fintech platforms</li>
              <li className="text-xs text-gray-300">IoT &amp; edge systems</li>
              <li className="text-xs text-gray-300">Security &amp; KYC integration</li>
              <li className="text-xs text-gray-300">Architecture &amp; team leadership</li>
              <li className="text-xs text-gray-300">Consulting &amp; contract delivery</li>
            </ul>
          </div>

          <div
            className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h4 className="text-sm font-semibold text-white mb-2">Connect</h4>
            <ul className="footer-links flex flex-col gap-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/binod-sapkota-0a193475/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/binodsapkota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:er.binod2016@gmail.com" className="text-xs text-gray-300 hover:text-yellow-400 transition-all duration-300">
                  er.binod2016@gmail.com
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs text-gray-300 hover:text-yellow-400 transition-all duration-300">
                  Contact form
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <div className="footer-divider w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-4 rounded animate-scale-in" />
          <p className="text-xs text-gray-300">&copy; {currentYear} Binod Sapkota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
