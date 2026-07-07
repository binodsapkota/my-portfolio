import {
  Blocks,
  Building2,
  Cpu,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const pillars = [
  {
    title: "Enterprise & fintech software",
    summary:
      "Line-of-business platforms for regulated industries—designed for reliability, auditability, and long-term maintainability.",
    deliverables: [
      "Core banking & microfinance systems",
      "Payments & remittance platforms",
      "Insurance, ERP & operations software",
    ],
    icon: Building2,
    accent: "indigo",
  },
  {
    title: "IoT & connected systems",
    summary:
      "Hardware and software unified at the edge—access control, warehouse tracking, retail infrastructure, and device fleets.",
    deliverables: [
      "RFID/NFC access & barrier control",
      "Warehouse asset tracking & gateways",
      "ESL e-paper & wireless label systems",
    ],
    icon: Radio,
    accent: "cyan",
  },
  {
    title: "Security & identity",
    summary:
      "KYC workflows, biometric capture, and hardware-backed verification integrated into compliant product experiences.",
    deliverables: [
      "Biometric & document capture",
      "KYC and onboarding flows",
      "Security hardening & data protection",
    ],
    icon: ShieldCheck,
    accent: "rose",
  },
  {
    title: "Architecture & leadership",
    summary:
      "Technical direction for teams and products—from solution design through delivery, review standards, and release planning.",
    deliverables: [
      "Solution & cloud architecture",
      "Engineering team leadership",
      "Code review, mentoring & hiring",
    ],
    icon: Blocks,
    accent: "amber",
  },
  {
    title: "APIs & integration",
    summary:
      "Clean service boundaries and dependable integrations with payment providers, identity systems, and legacy backends.",
    deliverables: [
      "REST / Web API design",
      "Third-party & vendor integration",
      "Event-driven & queue-based patterns",
    ],
    icon: Cpu,
    accent: "violet",
  },
  {
    title: "AI-assisted delivery",
    summary:
      "Modern development velocity using Cursor, Claude, and GitHub Copilot—without compromising architecture or code quality.",
    deliverables: [
      "Accelerated full-stack delivery",
      "Refactoring & modernization",
      "Documentation & technical analysis",
    ],
    icon: Sparkles,
    accent: "mint",
  },
]

const industries = [
  "Fintech & banking",
  "Insurance",
  "Healthcare",
  "Manufacturing",
  "Retail & hospitality",
  "Logistics & warehouses",
]

const stack = [
  "ASP.NET Core",
  "C#",
  "React",
  "SQL Server",
  "PostgreSQL",
  "AWS",
  "MQTT",
  "Docker",
  "Azure DevOps",
]

const Expertise = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="expertise" className="expertise-section" aria-label="Expertise and deliverables">
      <div className="expertise-section__glow" aria-hidden="true" />
      <div className="container expertise-wrap">
        <header className="section-header animate-fade-in">
          <p className="expertise-kicker">What I deliver</p>
          <h2 className="section-title">Expertise &amp; outcomes</h2>
          <div className="section-divider animate-scale-in" aria-hidden="true" />
          <p className="section-subtitle expertise-lede">
            End-to-end engineering across web, cloud, and connected hardware—scoped for production environments
            where security, scale, and clarity matter.
          </p>
        </header>

        <div className="expertise-grid">
          {pillars.map((item, i) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`expertise-card expertise-card--${item.accent} animate-slide-up`}
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className="expertise-card__icon" aria-hidden="true">
                  <Icon strokeWidth={1.75} className="w-5 h-5" />
                </div>
                <h3 className="expertise-card__title">{item.title}</h3>
                <p className="expertise-card__summary">{item.summary}</p>
                <ul className="expertise-card__list">
                  {item.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="expertise-panels">
          <div className="expertise-panel animate-slide-up">
            <h3 className="expertise-panel__title">Industries served</h3>
            <ul className="expertise-industries">
              {industries.map((name) => (
                <li key={name}>
                  <span className="expertise-industry-chip">{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="expertise-panel animate-slide-up" style={{ animationDelay: "0.08s" }}>
            <h3 className="expertise-panel__title">Core technology stack</h3>
            <ul className="expertise-stack">
              {stack.map((tech) => (
                <li key={tech}>
                  <span className="expertise-stack-chip">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="expertise-cta">
          <button type="button" className="btn-modern primary" onClick={() => scrollTo("projects")}>
            See portfolio
          </button>
          <button type="button" className="btn-modern outline" onClick={() => scrollTo("services")}>
            View services
          </button>
        </div>
      </div>
    </section>
  )
}

export default Expertise
