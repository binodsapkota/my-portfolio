import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "MoneyFex - Fintech Platform",
      description: "Led full-stack architecture and development for UK-based fintech startup, scaling to 30K+ users in its first year.",
      image: "💳",
      technologies: ["ASP.NET Core", "ReactJS", "PostgreSQL", "AWS"],
      category: "fintech",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Core Banking System",
      description: "Led team in building ASP.NET MVC-based core banking solution with comprehensive financial management features.",
      image: "🏦",
      technologies: ["ASP.NET MVC", "SQL Server", "JavaScript", "jQuery"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Insurance Management System",
      description: "Developed comprehensive insurance management platform with policy management and claims processing.",
      image: "🛡️",
      technologies: ["ASP.NET Core", "ReactJS", "SQL Server", "Web API"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "KYC Integration System",
      description: "Integrated hardware-based KYC features including fingerprint scanners and webcam verification.",
      image: "🔐",
      technologies: ["C#", "Hardware Integration", "Web API", "ReactJS"],
      category: "security",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Manufacturing ERP System",
      description: "Built enterprise resource planning system for manufacturing sector with inventory management.",
      image: "🏭",
      technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "Docker"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Healthcare Management Platform",
      description: "Developed secure healthcare management system with patient records and appointment scheduling.",
      image: "🏥",
      technologies: ["ASP.NET Core", "PostgreSQL", "ReactJS", "HIPAA"],
      category: "healthcare",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Content Management System",
      description: "Built comprehensive CMS platform with rich text editor and media management capabilities.",
      image: "📝",
      technologies: ["ASP.NET MVC", "SQL Server", "JavaScript", "Bootstrap"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Inventory Management System",
      description: "Developed robust inventory tracking system with barcode scanning and real-time updates.",
      image: "📦",
      technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "SignalR"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "HR Management System",
      description: "Built comprehensive HR platform with employee management and payroll processing.",
      image: "👥",
      technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "Web API"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 10,
      title: "Real Estate Management",
      description: "Developed property management system with listing management and client portal.",
      image: "🏠",
      technologies: ["ASP.NET Core", "PostgreSQL", "ReactJS", "Payment"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "School Management System",
      description: "Built comprehensive education management platform with student records and grade management.",
      image: "🎓",
      technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "SignalR"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 12,
      title: "Restaurant POS System",
      description: "Developed point-of-sale system with menu management and order processing.",
      image: "🍽️",
      technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "Payment"],
      category: "enterprise",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'security', label: 'Security' },
    { id: 'healthcare', label: 'Healthcare' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12 animate-fade-in">
          <h2 className="section-title text-3xl font-bold text-gray-900">My Work & Projects</h2>
          <div className="section-divider w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto my-4 rounded animate-scale-in"></div>
          <p className="section-description text-gray-600 max-w-2xl mx-auto">
            A showcase of enterprise solutions and custom applications I've delivered as a freelance developer.
          </p>
        </div>

        <div className="project-filters flex justify-center gap-2 mb-8 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105'
                  : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-md'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-500 hover:border-glow animate-slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="project-image h-24 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-3">
                <div className="project-icon text-3xl text-white opacity-80">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title text-base font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="project-description text-sm text-gray-600 line-clamp-3 mb-3">{project.description}</p>
                <div className="project-technologies flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-indigo-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-2">
                  <a
                    href={project.liveUrl}
                    className="project-link text-xs font-semibold px-3 py-1 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="project-link secondary text-xs font-semibold px-3 py-1 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-gray-300 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta text-center mt-12 animate-fade-in bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl">
          <p className="text-gray-600 mb-4 font-semibold">Interested in working together?</p>
          <button
            className="btn btn-primary px-6 py-2 text-sm font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 animate-pulse-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;