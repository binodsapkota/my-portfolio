const Skills = () => {
  const skillCategories = [
    {
      category: "Backend & .NET",
      skills: [
        { name: "C#", level: 95 },
        { name: "ASP.NET Core", level: 90 },
        { name: ".NET Framework", level: 85 },
        { name: "Web API", level: 90 },
        { name: "RESTful Services", level: 85 }
      ]
    },
    {
      category: "Frontend & UI",
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 85 },
        { name: "KnockoutJS", level: 80 },
        { name: "jQuery", level: 75 }
      ]
    },
    {
      category: "Database & DevOps",
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Git", level: 90 },
        { name: "Azure DevOps", level: 85 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      category: "Leadership & Cloud",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Agile/Scrum", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Solution Architecture", level: 90 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Expertise</h3>
          <div className="skills-tags">
            <span className="skill-tag">KYC Integrations</span>
            <span className="skill-tag">Futronic Scanners</span>
            <span className="skill-tag">Evolis Signature Pads</span>
            <span className="skill-tag">Webcam Verification</span>
            <span className="skill-tag">Fintech Solutions</span>
            <span className="skill-tag">Healthcare Systems</span>
            <span className="skill-tag">Manufacturing Apps</span>
            <span className="skill-tag">Stored Procedures</span>
            <span className="skill-tag">Query Optimization</span>
            <span className="skill-tag">Security Standards</span>
            <span className="skill-tag">Code Reviews</span>
            <span className="skill-tag">Mentorship</span>
            <span className="skill-tag">Jira</span>
            <span className="skill-tag">Cloud-Native</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 