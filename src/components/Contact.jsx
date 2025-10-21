import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const Contact = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/binod-sapkota-0a193475/', icon: '💼', color: '#0077b5' },
    { name: 'GitHub', url: 'https://github.com/binodsapkota', icon: '🐙', color: '#333' },
    { name: 'Email', url: 'mailto:er.binod2016@gmail.com', icon: '📧', color: '#ea4335' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // dispatch(addTodo(formData));

    // Format message for WhatsApp
    const whatsappMessage = `Hello Binod! I'm interested in working with you.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from your portfolio website`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp API URL with your actual number (without +)
    const whatsappNumber = '14372607299';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp using window.location.href to ensure mobile app compatibility
    window.location.href = whatsappUrl;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12 animate-fade-in">
          <h2 className="section-title text-3xl font-bold text-gray-900">Get In Touch</h2>
          <div className="section-divider w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto my-4 rounded animate-scale-in"></div>
          <p className="section-description text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Contact Information Side */}
          <div className="contact-info-side h-full">
            <div className="contact-card h-full bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up">
              <div className="contact-card-header text-center mb-4">
                <h3 className="text-base font-semibold text-gray-800">Let's Build Something Amazing</h3>
                <p className="text-xs text-gray-600 mt-1">
                  I'm at Smartworld Infotech Solutions Inc as an Engineering Lead, available for freelance projects and consulting evenings/weekends.
                </p>
              </div>
              
              <div className="contact-methods flex flex-col gap-2">
                <div className="contact-method flex items-start gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-indigo-50">
                  <div className="contact-icon-wrapper w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <span className="contact-icon text-sm text-white">📍</span>
                  </div>
                  <div className="contact-details">
                    <h4 className="text-xs font-semibold text-gray-800">Location</h4>
                    <p className="text-2xs text-gray-600">Thornhill, ON, Canada</p>
                  </div>
                </div>
                
                <div className="contact-method flex items-start gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-indigo-50">
                  <div className="contact-icon-wrapper w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <span className="contact-icon text-sm text-white">📧</span>
                  </div>
                  <div className="contact-details">
                    <h4 className="text-xs font-semibold text-gray-800">Email</h4>
                    <p className="text-2xs text-gray-600">er.binod2016@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-method flex items-start gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-indigo-50">
                  <div className="contact-icon-wrapper w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <span className="contact-icon text-sm text-white">📱</span>
                  </div>
                  <div className="contact-details">
                    <h4 className="text-xs font-semibold text-gray-800">Phone</h4>
                    <p className="text-2xs text-gray-600">Available on Request</p>
                  </div>
                </div>

                <div className="contact-method flex items-start gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-indigo-50">
                  <div className="contact-icon-wrapper w-8 h-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-lg">
                    <span className="contact-icon text-sm text-white">💬</span>
                  </div>
                  <div className="contact-details">
                    <h4 className="text-xs font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-2xs text-gray-600">+1 (437) 260-7299</p>
                    <a 
                      href="https://wa.me/14372607299?text=Hello%20Binod!%20I'm%20interested%20in%20working%20with%20you." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="whatsapp-direct-link text-2xs font-semibold px-2 py-1 rounded-full bg-green-500 text-white hover:bg-green-600 hover:shadow-md transition-all duration-300"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-section text-center mt-4">
                <h4 className="text-xs font-semibold text-gray-800 mb-2">Connect With Me</h4>
                <div className="social-grid grid grid-cols-3 gap-1">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card flex flex-col items-center gap-1 p-2 rounded-lg bg-gray-50 text-gray-800 border border-gray-100 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-glow"
                      style={{ '--social-color': social.color }}
                    >
                      <span className="social-icon text-base">{social.icon}</span>
                      <span className="social-name text-2xs font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
           <div className="contact-form-side h-full">
            <div className="form-card h-full bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="form-header text-center mb-4">
                <h3 className="text-base font-semibold text-gray-800">Start Your Project</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Tell me about your project requirements and I'll get back to you within 24 hours with a detailed proposal and timeline.
                </p>
              </div>
              
               <form className="contact-form flex flex-col gap-4" onSubmit={handleWhatsAppSubmit}>
                <div className="form-row grid grid-cols-2 gap-4">
                  <div className="form-group flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-800 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="p-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300"
                    />
                  </div>

                  <div className="form-group flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="p-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="form-group flex flex-col">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-800 mb-2">Project Type *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Web App, Mobile App, API, Consultation"
                    className="p-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="form-group flex flex-col">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-800 mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project requirements, timeline, and budget..."
                    className="p-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300 resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp w-full px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white hover:bg-green-700 hover:shadow-md transition-all duration-300 animate-pulse-glow flex items-center justify-center gap-2"
                >
                  <span className="btn-icon text-base">📱</span>
                  <span className="btn-text">Send Project Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;