const Skills = () => {
  const skillCategories = [
    {
      category: "Backend & .NET",
      icon: "⚙️",
      color: "#667eea",
      skills: [
        { name: "C#", level: 95, icon: "🔷" },
        { name: "ASP.NET Core", level: 90, icon: "🌐" },
        { name: ".NET Framework", level: 85, icon: "📦" },
        { name: "Web API", level: 90, icon: "🔌" },
        { name: "RESTful Services", level: 85, icon: "🔄" }
      ]
    },
    {
      category: "Frontend & UI",
      icon: "🎨",
      color: "#64ffda",
      skills: [
        { name: "ReactJS", level: 85, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "📜" },
        { name: "HTML/CSS", level: 85, icon: "🌍" },
        { name: "KnockoutJS", level: 80, icon: "🔗" },
        { name: "jQuery", level: 75, icon: "💫" }
      ]
    },
    {
      category: "Database & DevOps",
      icon: "🗄️",
      color: "#ff6b6b",
      skills: [
        { name: "SQL Server", level: 90, icon: "💾" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "Git", level: 90, icon: "📝" },
        { name: "Azure DevOps", level: 85, icon: "☁️" },
        { name: "Docker", level: 75, icon: "🐳" }
      ]
    },
    {
      category: "Leadership & Cloud",
      icon: "🚀",
      color: "#feca57",
      skills: [
        { name: "Team Leadership", level: 90, icon: "👥" },
        { name: "Agile/Scrum", level: 85, icon: "🔄" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "CI/CD", level: 85, icon: "⚡" },
        { name: "Solution Architecture", level: 90, icon: "🏗️" }
      ]
    }
  ]

  const additionalSkills = [
    { name: "KYC Integrations", category: "Security" },
    { name: "Futronic Scanners", category: "Hardware" },
    { name: "Evolis Signature Pads", category: "Hardware" },
    { name: "Webcam Verification", category: "Security" },
    { name: "Fintech Solutions", category: "Domain" },
    { name: "Healthcare Systems", category: "Domain" },
    { name: "Manufacturing Apps", category: "Domain" },
    { name: "Stored Procedures", category: "Database" },
    { name: "Query Optimization", category: "Database" },
    { name: "Security Standards", category: "Security" },
    { name: "Code Reviews", category: "Leadership" },
    { name: "Mentorship", category: "Leadership" },
    { name: "Jira", category: "Tools" },
    { name: "Cloud-Native", category: "Architecture" }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Security': '#ff6b6b',
      'Hardware': '#667eea',
      'Domain': '#64ffda',
      'Database': '#feca57',
      'Leadership': '#ff9ff3',
      'Tools': '#54a0ff',
      'Architecture': '#5f27cd'
    }
    return colors[category] || '#667eea'
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-card">
              <div className="category-header" style={{ '--category-color': category.color }}>
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.category}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar-container">
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: category.color
                          }}
                        ></div>
                      </div>
                      <div className="skill-marker" style={{ left: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills-section">
          <div className="section-header">
            <h3>Additional Expertise & Specializations</h3>
            <p>Domain knowledge and specialized skills across various industries</p>
          </div>
          
          <div className="skills-categories">
            {Object.entries(
              additionalSkills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = []
                acc[skill.category].push(skill.name)
                return acc
              }, {})
            ).map(([category, skills]) => (
              <div key={category} className="expertise-category">
                <h4 className="expertise-title" style={{ color: getCategoryColor(category) }}>
                  {category}
                </h4>
                <div className="expertise-tags">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="expertise-tag"
                      style={{ 
                        backgroundColor: `${getCategoryColor(category)}20`,
                        borderColor: getCategoryColor(category)
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 