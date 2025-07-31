const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Binod Sapkota</h3>
            <p>
              Software Engineering Leader with 10+ years of experience in full-stack development 
              using .NET technologies and React. Specialized in enterprise solutions and team leadership.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/in/binod-sapkota-0a193475/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/binodsapkota" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:er.binod2016@gmail.com">Email</a></li>
              <li><a href="#contact">Contact Form</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>&copy; {currentYear} Binod Sapkota. All rights reserved.</p>
          <p>Built with ❤️ using React & Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 