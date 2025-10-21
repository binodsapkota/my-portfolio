const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-8 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-fade-in">
          <div className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up">
            <h3 className="text-base font-semibold text-white mb-2">Binod Sapkota</h3>
            <p className="text-xs text-gray-300">Full-Stack Developer & Engineering Lead</p>
            <p className="text-xs text-gray-300">Smartworld Infotech Solutions Inc</p>
            <p className="text-xs text-gray-300">Available for freelance & consulting</p>
          </div>
          
          <div className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-sm font-semibold text-white mb-2">Quick Links</h4>
            <ul className="footer-links flex flex-col gap-1">
              <li><a href="#about" className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300">About</a></li>
              <li><a href="#skills" className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300">Skills</a></li>
              <li><a href="#projects" className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300">Projects</a></li>
              <li><a href="#contact" className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-sm font-semibold text-white mb-2">Services</h4>
            <ul className="footer-links flex flex-col gap-1">
              <li className="text-xs text-gray-300">Custom Web Applications</li>
              <li className="text-xs text-gray-300">Enterprise Solutions</li>
              <li className="text-xs text-gray-300">API Development</li>
              <li className="text-xs text-gray-300">Technical Consultation</li>
            </ul>
          </div>
          
          <div className="footer-section h-full bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-sm font-semibold text-white mb-2">Connect</h4>
            <ul className="footer-links flex flex-col gap-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/binod-sapkota-0a193475/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                >
                  <span className="text-sm">💼</span> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/binodsapkota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                >
                  <span className="text-sm">🐙</span> GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:er.binod2016@gmail.com"
                  className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                >
                  <span className="text-sm">📧</span> Email
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs text-gray-300 hover:text-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                >
                  <span className="text-sm">💬</span> Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom text-center">
          <div className="footer-divider w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-4 rounded animate-scale-in"></div>
          <p className="text-xs text-gray-300">&copy; {currentYear} Binod Sapkota. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;