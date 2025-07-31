import { useState } from 'react'

const Contact = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/binod-sapkota-0a193475/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/binodsapkota', icon: '🐙' },
    { name: 'Email', url: 'mailto:er.binod2016@gmail.com', icon: '📧' }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm seeking senior engineering or architecture roles in forward-looking teams 
              building impactful software products. Open to opportunities that leverage my 
              expertise in .NET technologies, React, and engineering leadership.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Thornhill, ON, Canada</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>er.binod2016@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>Available on Request</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <span>{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="work-authorization">
              <h4>Work Authorization</h4>
              <p>Holder of a closed employer-specific Canadian Work Permit (W1). 
              Authorized to work for current sponsoring employer. Open to future 
              opportunities with LMIA sponsorship or permit transfer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 