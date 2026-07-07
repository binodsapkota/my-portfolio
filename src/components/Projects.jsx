import { useState } from "react"

const isPublicUrl = (url) => {
  if (typeof url !== "string" || !url.trim() || url === "#") return false
  return /^https?:\/\//i.test(url) || url.startsWith("mailto:")
}

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

const CATEGORY_LABEL = {
  fintech: "Fintech",
  enterprise: "Enterprise",
  security: "Security",
  healthcare: "Healthcare",
  iot: "IoT",
}

const projects = [
  {
    id: 1,
    title: "MoneyFex — Fintech Platform",
    description:
      "Led full-stack architecture and delivery for a UK remittance platform, scaling to 30,000+ registered users within the first year of operation.",
    image: "💳",
    technologies: ["ASP.NET Core", "ReactJS", "PostgreSQL", "AWS"],
    category: "fintech",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Empower",
    description:
      "Core banking platform for microfinance and cooperative institutions—covering lending, deposits, member accounts, and day-to-day operational workflows.",
    image: "🏦",
    technologies: ["ASP.NET MVC", "SQL Server", "JavaScript", "jQuery"],
    category: "fintech",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Insurance Management System",
    description:
      "Enterprise insurance platform with end-to-end policy administration and claims processing workflows.",
    image: "🛡️",
    technologies: ["ASP.NET Core", "ReactJS", "SQL Server", "Web API"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "KYC Integration System",
    description:
      "Hardware-integrated KYC solution with fingerprint scanners, document capture, and webcam-based identity verification.",
    image: "🔐",
    technologies: ["C#", "Hardware Integration", "Web API", "ReactJS"],
    category: "security",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Manufacturing ERP System",
    description:
      "Manufacturing ERP with inventory control, production workflows, and operational reporting for industrial clients.",
    image: "🏭",
    technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "Docker"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Healthcare Management Platform",
    description:
      "Healthcare management system with secure patient records, scheduling, and HIPAA-conscious data handling.",
    image: "🏥",
    technologies: ["ASP.NET Core", "PostgreSQL", "ReactJS", "HIPAA"],
    category: "healthcare",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 7,
    title: "Content Management System",
    description:
      "Content management platform with rich-text authoring, media library, and publishing workflows.",
    image: "📝",
    technologies: ["ASP.NET MVC", "SQL Server", "JavaScript", "Bootstrap"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Inventory Management System",
    description:
      "Inventory management with barcode scanning, stock-level tracking, and real-time updates via SignalR.",
    image: "📦",
    technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "SignalR"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 9,
    title: "HR Management System",
    description:
      "HR platform covering employee records, payroll processing, and workforce administration.",
    image: "👥",
    technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "Web API"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 10,
    title: "Real Estate Management",
    description:
      "Property management system with listing administration, client portal, and integrated payments.",
    image: "🏠",
    technologies: ["ASP.NET Core", "PostgreSQL", "ReactJS", "Payment"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 11,
    title: "School Management System",
    description:
      "Education management system for student records, academic grading, and institutional reporting.",
    image: "🎓",
    technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "SignalR"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 12,
    title: "Restaurant POS System",
    description:
      "Point-of-sale system with menu management, order processing, and payment integration.",
    image: "🍽️",
    technologies: ["ASP.NET Core", "SQL Server", "ReactJS", "Payment"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 13,
    title: "Access control — QR, RFID/NFC & barriers",
    description:
      "Multi-factor access control using QR, RFID/NFC readers, and web cameras. Edge nodes evaluate credentials and control barrier or gate release in real time.",
    image: "🚧",
    technologies: ["Raspberry Pi", "QR", "RFID / NFC", "Webcams", "Barrier I/O", "ASP.NET / React"],
    category: "iot",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 14,
    title: "Entrance occupancy counting",
    description:
      "People-counting system at controlled entrances for occupancy monitoring, capacity enforcement, and flow analytics.",
    image: "👣",
    technologies: ["Sensors", "Raspberry Pi", "Counting logic", "Dashboard"],
    category: "iot",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 15,
    title: "Event access & visitor authorization",
    description:
      "Event platform with automated gate authorization driven by registration lists, tickets, and pre-approved invites.",
    image: "🎫",
    technologies: ["Visitor API", "Pre-registration", "Gate integration", "Web app"],
    category: "iot",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 16,
    title: "Multi-vendor device integration",
    description:
      "Unified application layer integrating manufacturer SDKs for webcams, biometrics, RFID/NFC, attendance terminals, and gate controllers.",
    image: "🔧",
    technologies: ["Vendor SDKs", "Webcams", "RFID / NFC", "Attendance", "Gates", "C# / Web API"],
    category: "iot",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 17,
    title: "Warehouse asset tracking — IoT gateways",
    description:
      "RFID-based warehouse tracking with zone readers, edge gateways, and a live dashboard for asset location and movement.",
    image: "📡",
    technologies: ["IoT gateways", "RFID", "MQTT", "Edge compute", "ASP.NET / React", "Dashboard"],
    category: "iot",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 18,
    title: "ESL e-paper — hardware & software",
    description:
      "Electronic shelf label platform: e-paper hardware, wireless gateways, firmware, and application software for pricing sync, templates, and fleet management.",
    image: "🏷️",
    technologies: ["E-paper / ESL", "Wireless gateways", "Firmware", "POS / ERP sync", "ASP.NET / React", "Bulk updates"],
    category: "iot",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

const filters = [
  { id: "all", label: "All" },
  { id: "fintech", label: "Fintech" },
  { id: "enterprise", label: "Enterprise" },
  { id: "security", label: "Security" },
  { id: "healthcare", label: "Healthcare" },
  { id: "iot", label: "IoT" },
]

function ProjectCard({ project, index, featured }) {
  const showLive = isPublicUrl(project.liveUrl)
  const showGh = isPublicUrl(project.githubUrl)

  return (
    <article
      className={`proj-card ${featured ? "proj-card--featured" : ""} animate-slide-up`}
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="proj-card__header">
        <div className="proj-card__emoji" aria-hidden="true">
          {project.image}
        </div>
        <span className="proj-card__category">{CATEGORY_LABEL[project.category]}</span>
      </div>

      {featured ? <span className="proj-card__badge">Featured</span> : null}

      <h3 className="proj-card__title">{project.title}</h3>

      <p className={`proj-card__desc ${featured ? "proj-card__desc--featured" : ""}`}>{project.description}</p>

      <ul className="proj-card__tags">
        {project.technologies.map((tech, techIndex) => (
          <li key={techIndex}>
            <span className="proj-card__tag">{tech}</span>
          </li>
        ))}
      </ul>

      <div className="proj-card__actions">
        {showLive ? (
          <a
            href={project.liveUrl}
            className="proj-card__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        ) : (
          <button type="button" className="proj-card__btn" onClick={scrollToContact}>
            Request details
          </button>
        )}
        {showGh ? (
          <a
            href={project.githubUrl}
            className="proj-card__btn proj-card__btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const matchesFilter = (project) =>
    activeFilter === "all" || project.category === activeFilter

  const featuredVisible = projects.filter((p) => p.featured && matchesFilter(p))
  const restVisible = projects.filter((p) => !p.featured && matchesFilter(p))

  const empty = featuredVisible.length === 0 && restVisible.length === 0

  return (
    <section id="projects" className="projects-section">
      <div className="container mx-auto px-4">
        <header className="proj-hero animate-fade-in">
          <h2 className="proj-hero__title">Portfolio</h2>
          <p className="proj-hero__lede">
            Representative engagements across fintech, enterprise, security, healthcare, and IoT.
            Featured work reflects technical leadership; the full grid shows breadth. Confidential builds
            are available on request.
          </p>
        </header>

        <div className="project-filters proj-filters-bar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {featuredVisible.length > 0 && (
          <div className="proj-block">
            <h3 className="proj-subhead">Featured work</h3>
            <div className="proj-grid proj-grid--featured">
              {featuredVisible.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} featured />
              ))}
            </div>
          </div>
        )}

        {restVisible.length > 0 && (
          <div className="proj-block">
            <h3 className={`proj-subhead proj-subhead--muted ${featuredVisible.length > 0 ? "proj-subhead--spaced" : ""}`}>
              {featuredVisible.length > 0 ? "More projects" : "Projects"}
            </h3>
            <div className="proj-grid">
              {restVisible.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} featured={false} />
              ))}
            </div>
          </div>
        )}

        {empty && (
          <p className="proj-empty">No projects match this filter. Select another category or view all.</p>
        )}

        <div className="projects-cta proj-cta-wrap">
          <p>Interested in a similar engagement?</p>
          <button type="button" className="btn-primary proj-cta-btn" onClick={scrollToContact}>
            Schedule a consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
