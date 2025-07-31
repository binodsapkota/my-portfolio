import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "MoneyFex - Fintech Platform",
      description: "Led full-stack architecture and development for UK-based fintech startup, scaling to 30K+ users in its first year. Developed secure international money transfer and remittance platform using ASP.NET Core, ReactJS, PostgreSQL, and AWS.",
      image: "💳",
      technologies: ["ASP.NET Core", "ReactJS", "PostgreSQL", "AWS", "KYC Integration"],
      category: "fintech",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Core Banking System",
      description: "Led team in building ASP.NET MVC-based core banking solution with comprehensive financial management features, user authentication, and secure transaction processing.",
      image: "🏦",
      technologies: ["ASP.NET MVC", "SQL Server", "JavaScript", "jQuery", "KnockoutJS"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Insurance Management System",
      description: "Developed comprehensive insurance management platform with policy management, claims processing, and customer portal features for healthcare and manufacturing sectors.",
      image: "🛡️",
      technologies: ["ASP.NET Core", "ReactJS", "SQL Server", "Web API", "REST Services"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "KYC Integration System",
      description: "Integrated hardware-based KYC features including Futronic fingerprint scanners, Evolis signature pads, and webcam verification for secure identity verification.",
      image: "🔐",
      technologies: ["C#", "Hardware Integration", "Security Standards", "Web API", "ReactJS"],
      category: "security",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Manufacturing ERP System",
      description: "Built enterprise resource planning system for manufacturing sector with inventory management, production tracking, and supply chain optimization features.",
      image: "🏭",
      technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "Azure DevOps", "Docker"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Healthcare Management Platform",
      description: "Developed secure healthcare management system with patient records, appointment scheduling, and compliance features for healthcare providers.",
      image: "🏥",
      technologies: ["ASP.NET Core", "PostgreSQL", "ReactJS", "Security Standards", "HIPAA Compliance"],
      category: "healthcare",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'security', label: 'Security' },
    { id: 'healthcare', label: 'Healthcare' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in working together?</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 