import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/binod-sapkota-0a193475/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/binodsapkota', icon: '🐙' },
    { name: 'Email', url: 'mailto:er.binod2016@gmail.com', icon: '📧' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    
    // Format message for WhatsApp
    const whatsappMessage = `Hello Binod! I'm interested in working with you.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from your portfolio website`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // WhatsApp API URL (you can replace with your actual WhatsApp number)
    const whatsappNumber = '+1234567890' // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

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

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+1 (437) 260-7299</p>
                  <a 
                    href="https://wa.me/14372607299?text=Hello%20Binod!%20I'm%20interested%20in%20working%20with%20you." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-direct-link"
                  >
                    💬 Chat on WhatsApp
                  </a>
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

          <div className="contact-form-container">
            <h3>Send Message via WhatsApp</h3>
            <p className="form-description">
              Fill out the form below and it will open WhatsApp with your message ready to send.
            </p>
            
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-whatsapp">
                <span>📱</span> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 