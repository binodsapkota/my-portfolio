import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
const Contact = () => {
  
  const todos=useSelector(state=>state.todos);
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    name: '',//todos[0].text,
    email: '',
    subject: '',
    message: ''
  })
  
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/binod-sapkota-0a193475/', icon: '💼', color: '#0077b5' },
    { name: 'GitHub', url: 'https://github.com/binodsapkota', icon: '🐙', color: '#333' },
    { name: 'Email', url: 'mailto:er.binod2016@gmail.com', icon: '📧', color: '#ea4335' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    
    //dispatch(addTodo(formData))

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
    
    // WhatsApp API URL with your actual number
    const whatsappNumber = '+14372607299'
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
          <p className="section-description">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Side */}
          <div className="contact-info-side">
            <div className="contact-card">
              <div className="contact-card-header">
                <h3>Let's Build Something Amazing Together</h3>
                <p>
                  I'm currently working at Smartworld Infotech Solutions Inc as an Engineering Lead, but I'm also 
                  available for freelance projects and consulting work during evenings and weekends.
                </p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">📍</span>
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Thornhill, ON, Canada</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">📧</span>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>er.binod2016@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon-wrapper">
                    <span className="contact-icon">📱</span>
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>Available on Request</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon-wrapper whatsapp">
                    <span className="contact-icon">💬</span>
                  </div>
                  <div className="contact-details">
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

              <div className="social-section">
                <h4>Connect With Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      style={{ '--social-color': social.color }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="contact-form-side">
            <div className="form-card">
              <div className="form-header">
                <h3>Start Your Project</h3>
                <p>Tell me about your project requirements and I'll get back to you within 24 hours with a detailed proposal and timeline.</p>
              </div>
              
              <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
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
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Project Type *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Web App, Mobile App, API, Consultation"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project requirements, timeline, and budget..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-whatsapp">
                  <span className="btn-icon">📱</span>
                  <span className="btn-text">Send Project Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 