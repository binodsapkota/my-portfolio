const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text-section">
              <div className="about-intro">
                <div className="intro-icon">👨‍💻</div>
                <h3>Who I Am</h3>
                <p>
                  I'm a passionate Full-Stack Developer and Engineering Lead with over 10 years of experience 
                  building enterprise-grade applications. Currently working at Smartworld Infotech Solutions Inc, 
                  I'm also available for freelance projects and consulting work. I specialize in delivering 
                  scalable solutions using .NET technologies, React, and modern cloud practices.
                </p>
              </div>
              
              <div className="about-expertise">
                <div className="expertise-icon">🚀</div>
                <h3>My Expertise</h3>
                <p>
                  My expertise spans across financial technology, healthcare systems, manufacturing ERP solutions, 
                  and custom enterprise applications. I've successfully delivered projects for clients ranging from 
                  fintech startups to established manufacturing companies, always focusing on quality, security, and user experience.
                </p>
              </div>
              
              <div className="about-freelance">
                <div className="freelance-icon">💼</div>
                <h3>Freelance & Consulting</h3>
                <p>
                  As a freelance developer, I bring the same level of professionalism and technical excellence 
                  to every project, whether it's a small business solution or a complex enterprise system.
                </p>
              </div>
            </div>

            <div className="about-visual">
              <div className="profile-card">
                <div className="profile-avatar">
                  <div className="avatar-circle">
                    <span>BS</span>
                  </div>
                  <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span className="status-text">Available for Projects</span>
                  </div>
                </div>
                
                <div className="profile-stats">
                  <div className="stat-item">
                    <div className="stat-icon">⏰</div>
                    <div className="stat-content">
                      <h4>10+</h4>
                      <p>Years Experience</p>
                    </div>
                  </div>
                  
                  <div className="stat-item">
                    <div className="stat-icon">📊</div>
                    <div className="stat-content">
                      <h4>20+</h4>
                      <p>Projects Delivered</p>
                    </div>
                  </div>
                  
                  <div className="stat-item">
                    <div className="stat-icon">👥</div>
                    <div className="stat-content">
                      <h4>30K+</h4>
                      <p>Users Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h4>Full-Stack Expertise</h4>
              <p>End-to-end development from database design to user interface</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💼</div>
              <h4>Project Delivery</h4>
              <p>Proven track record of on-time, on-budget project completion</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h4>Security Focus</h4>
              <p>Enterprise-grade security and compliance standards</p>
            </div>
            <div className="feature">
              <div className="feature-icon">☁️</div>
              <h4>Cloud Ready</h4>
              <p>Scalable, cloud-native solutions with AWS expertise</p>
            </div>
          </div>

          <div className="about-timeline-section">
            <div className="timeline-header">
              <div className="timeline-icon">📅</div>
              <h3>Professional Experience</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-marker current"></div>
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>Software Developer / Engineering Lead</h4>
                    <div className="timeline-meta">
                      <span className="timeline-company">Smartworld Infotech Solutions Inc</span>
                      <span className="timeline-location">Canada</span>
                      <span className="timeline-duration">December 2024 – Present</span>
                    </div>
                  </div>
                  <ul>
                    <li>Currently working on enterprise solutions and full-stack development</li>
                    <li>Leading development initiatives and technical architecture</li>
                    <li>Collaborating with cross-functional teams on innovative projects</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item right">
                <div className="timeline-marker"></div>
                <div className="timeline-year">2016-2025</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>Software Developer / Engineering Lead</h4>
                    <div className="timeline-meta">
                      <span className="timeline-company">Riddha Soft Pvt. Ltd.</span>
                      <span className="timeline-location">Kathmandu, Nepal</span>
                      <span className="timeline-duration">Sept 2016 – June 2025</span>
                    </div>
                  </div>
                  <ul>
                    <li>Developed full-stack applications using ASP.NET Core, ReactJS, and SQL Server</li>
                    <li>Led the architecture and development of MoneyFex, a UK-based money transfer platform with 30K+ users</li>
                    <li>Integrated biometric KYC systems (Futronic, Evolis) and real-time verification</li>
                    <li>Collaborated with QA and DevOps teams to implement CI/CD pipelines and automated testing</li>
                    <li>Managed development team (10+), conducted code reviews and technical interviews</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item left">
                <div className="timeline-marker"></div>
                <div className="timeline-year">2012-2016</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>Software Developer</h4>
                    <div className="timeline-meta">
                      <span className="timeline-company">InfoDevelopers Pvt. Ltd.</span>
                      <span className="timeline-location">Lalitpur, Nepal</span>
                      <span className="timeline-duration">Dec 2012 – July 2016</span>
                    </div>
                  </div>
                  <ul>
                    <li>Contributed to large-scale web applications for banks and insurance companies</li>
                    <li>Built reusable components using ASP.NET MVC and ADO.NET</li>
                    <li>Created stored procedures, triggers, and optimized complex SQL queries</li>
                    <li>Participated in requirement analysis, system design, and documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 