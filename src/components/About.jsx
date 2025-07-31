const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a seasoned Software Engineering Leader with over a decade of experience in full-stack development 
              using .NET technologies. My journey spans from hands-on development to engineering leadership, 
              where I've successfully led teams and delivered enterprise-grade solutions across diverse domains.
            </p>
            
            <p>
              With 5+ years in engineering leadership roles, I specialize in building scalable, secure applications 
              for finance, health, and manufacturing sectors. I'm passionate about mentoring teams, implementing 
              DevOps practices, and driving technical excellence through agile methodologies.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Enterprise Solutions</p>
              </div>
              <div className="stat">
                <h4>30K+</h4>
                <p>Users Served</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-avatar">
              <div className="avatar-placeholder">
                <span>🏢</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-features">
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h4>Engineering Leadership</h4>
            <p>Led teams of 10+ developers, introduced agile processes, and managed multi-team product roadmaps.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h4>Full Stack Expertise</h4>
            <p>Deep expertise in .NET technologies, ReactJS, and cloud-native development with AWS.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🤝</div>
            <h4>Team Building</h4>
            <p>Mentored junior engineers into senior contributors and promoted DevOps-first engineering practices.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">💡</div>
            <h4>Solution Architecture</h4>
            <p>Designed and delivered scalable, secure enterprise applications for fintech and healthcare domains.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 