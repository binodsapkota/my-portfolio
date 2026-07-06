import avatar from "../assets/avatar.js"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">About</h2>
          <div className="section-divider animate-scale-in"></div>
          <p className="section-subtitle">
            Engineering leader and full-stack developer focused on reliable, secure systems for regulated and
            operationally demanding environments.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="profile-card animate-zoom-in">
              <div className="profile-avatar">
                <div className="avatar-circle animate-pulse-glow">
                  <img
                    src={avatar}
                    alt="Portrait of Binod Sapkota, software engineering lead and full-stack developer"
                    className="avatar-image"
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="status">
                  <span className="status-dot animate-pulse"></span>
                  Open to engagements
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <h4>13+</h4>
                  <p>Years of experience</p>
                </div>
                <div className="stat animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <h4>50+</h4>
                  <p>Projects delivered</p>
                </div>
                <div className="stat animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <h4>30K+</h4>
                  <p>Platform users served</p>
                </div>
              </div>
            </div>

            <div className="info-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="info-icon">👨‍💻</div>
              <h3>Background</h3>
              <p>
                I am a full-stack developer and engineering lead with 13+ years of experience delivering
                enterprise-grade applications. I specialize in .NET, React, cloud architecture, and IoT
                integration, and I apply AI-assisted development tools—Cursor, Claude, and GitHub Copilot—to
                improve delivery velocity while maintaining architectural rigor and code quality.
              </p>
            </div>

            <div className="info-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="info-icon">🚀</div>
              <h3>Domain experience</h3>
              <p>
                My work spans financial services, healthcare, insurance, manufacturing, and connected systems.
                I have delivered solutions for fintech startups, cooperatives, and established enterprises—with
                consistent emphasis on security, maintainability, and clear user experience.
              </p>
            </div>

            <div className="info-card animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="info-icon">💼</div>
              <h3>Consulting &amp; contract work</h3>
              <p>
                I take on selected freelance and consulting engagements with the same standards applied to
                full-time delivery: defined scope, transparent communication, and production-ready outcomes
                whether the engagement is a focused module or a full product build.
              </p>
            </div>
          </div>

          <div className="about-right">
            {[
              {
                icon: "🚀",
                title: "Full-stack delivery",
                desc: "End-to-end ownership from data model and APIs through to production UI",
              },
              {
                icon: "💼",
                title: "Proven execution",
                desc: "Consistent delivery against scope, timeline, and quality expectations",
              },
              {
                icon: "🔒",
                title: "Security & compliance",
                desc: "Enterprise-grade practices for identity, data protection, and auditability",
              },
              {
                icon: "☁️",
                title: "Cloud & scale",
                desc: "Architectures designed for growth on AWS and modern deployment pipelines",
              },
              {
                icon: "✨",
                title: "AI-assisted engineering",
                desc: "Cursor, Claude, and Copilot integrated into a disciplined development workflow",
              },
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
