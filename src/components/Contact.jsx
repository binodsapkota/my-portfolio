import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"

const EMAIL = "er.binod2016@gmail.com"
const WHATSAPP = "14372607299"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`

const linkItems = [
  { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail, external: false },
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: MessageCircle, external: true },
  {
    href: "https://www.linkedin.com/in/binod-sapkota-0a193475/",
    label: "LinkedIn",
    Icon: Linkedin,
    external: true,
  },
  { href: "https://github.com/binodsapkota", label: "GitHub", Icon: Github, external: true },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Inquiry from portfolio website

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.location.href = `https://wa.me/${WHATSAPP}?text=${encodedMessage}`
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="container mx-auto px-4">
        <div className="contact-minimal">
          <header className="contact-minimal__head">
            <h2 className="contact-minimal__title">Contact</h2>
            <p className="contact-minimal__lede">
              Available for consulting, contract work, and technical discussions. Email is preferred for
              documents and proposals; WhatsApp is suitable for brief coordination.
            </p>
          </header>

          <nav className="contact-minimal__links" aria-label="Ways to reach out">
            {linkItems.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                className="contact-minimal__link"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="contact-minimal__link-icon" strokeWidth={1.75} aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>

          <p className="contact-minimal__location">
            <MapPin className="contact-minimal__location-icon" strokeWidth={1.75} aria-hidden="true" />
            Thornhill, ON, Canada
          </p>

          <div className="contact-minimal__panel">
            <p className="contact-minimal__form-hint">
              Submit the form to open WhatsApp with your message pre-filled.
            </p>
            <form className="contact-minimal__form" onSubmit={handleWhatsAppSubmit}>
              <div className="contact-minimal__field">
                <label htmlFor="contact-name" className="contact-minimal__label">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-minimal__input"
                  placeholder="Your name"
                />
              </div>
              <div className="contact-minimal__field">
                <label htmlFor="contact-email" className="contact-minimal__label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-minimal__input"
                  placeholder="you@example.com"
                />
              </div>
              <div className="contact-minimal__field">
                <label htmlFor="contact-subject" className="contact-minimal__label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-minimal__input"
                  placeholder="Project scope, consulting, or partnership"
                />
              </div>
              <div className="contact-minimal__field">
                <label htmlFor="contact-message" className="contact-minimal__label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-minimal__input contact-minimal__textarea"
                  placeholder="Brief description of your requirements and timeline."
                />
              </div>
              <button type="submit" className="contact-minimal__submit">
                <MessageCircle className="contact-minimal__submit-icon" strokeWidth={2} aria-hidden="true" />
                Open in WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
