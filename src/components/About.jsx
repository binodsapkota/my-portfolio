import avatar from '../assets/IMG_9527.jpg';
const About = () => {
  return (
    <section id="about" className="about-section bg-[#f0f2f5]">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider animate-scale-in"></div>
          <p className="section-subtitle">
            Passionate Full-Stack Developer & Engineering Lead crafting scalable, secure, and elegant digital solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* === LEFT SIDE: Profile + Info Cards === */}
          <div className="about-left">
            <div className="profile-card animate-zoom-in">
             <div className="profile-avatar">
                <div className="avatar-circle animate-pulse-glow">
                  <img src={avatar} alt="Avatar" className="avatar-image" />
                </div>
                <div className="status">
                  <span className="status-dot animate-pulse"></span>
                  Available for Projects
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h4>12+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <h4>50+</h4>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <h4>30K+</h4>
                  <p>Users Served</p>
                </div>
              </div>
            </div>

            <div className="info-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="info-icon">👨‍💻</div>
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full-Stack Developer and Engineering Lead with over 10 years of experience
                building enterprise-grade applications. Currently working at Smartworld Infotech Solutions Inc,
                I'm also available for freelance projects and consulting work. I specialize in delivering scalable
                solutions using .NET technologies, React, and modern cloud practices.
              </p>
            </div>

            <div className="info-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="info-icon">🚀</div>
              <h3>My Expertise</h3>
              <p>
                My expertise spans across financial technology, healthcare systems, manufacturing ERP solutions,
                and custom enterprise applications. I've successfully delivered projects for clients ranging from
                fintech startups to established manufacturing companies, always focusing on quality, security,
                and user experience.
              </p>
            </div>

            <div className="info-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="info-icon">💼</div>
              <h3>Freelance & Consulting</h3>
              <p>
                As a freelance developer, I bring the same level of professionalism and technical excellence
                to every project, whether it's a small business solution or a complex enterprise system.
              </p>
            </div>
          </div>

          {/* === RIGHT SIDE: Feature Cards Vertical === */}
          <div className="about-right">
            {[
              { icon: "🚀", title: "Full-Stack Expertise", desc: "End-to-end development from database design to user interface" },
              { icon: "💼", title: "Project Delivery", desc: "Proven track record of on-time, on-budget project completion" },
              { icon: "🔒", title: "Security Focus", desc: "Enterprise-grade security and compliance standards" },
              { icon: "☁️", title: "Cloud Ready", desc: "Scalable, cloud-native solutions with AWS expertise" },
            ].map((item, i) => (
              <div key={i} className="feature-card animate-slide-right" style={{ animationDelay: `${0.2 * (i + 1)}s` }}>
                <div className="feature-icon animate-bounce">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About