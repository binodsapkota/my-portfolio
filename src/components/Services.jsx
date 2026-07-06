import {
  Blocks,
  Briefcase,
  Cable,
  Code2,
  Headphones,
  Radio,
  ShieldCheck,
} from "lucide-react"

const categories = [
  {
    title: "Web & enterprise applications",
    blurb:
      "Secure, scalable line-of-business software—from new product builds to modernizing established systems with minimal disruption.",
    bullets: ["ASP.NET Core & React", "Data layer & reporting", "AI-assisted delivery (Cursor, Claude, Copilot)"],
    icon: Code2,
    accent: "indigo",
  },
  {
    title: "APIs & system integration",
    blurb:
      "Well-defined service boundaries and reliable integrations with payment providers, identity systems, and legacy backends.",
    bullets: ["REST & Web API design", "Third-party & vendor integration", "Event-driven and queue-based patterns"],
    icon: Cable,
    accent: "violet",
  },
  {
    title: "IoT, access & on-site hardware",
    blurb:
      "Connected environments where physical devices—readers, cameras, gates, and sensors—integrate with your application stack.",
    bullets: ["RFID, NFC, QR, and webcams", "Raspberry Pi & vendor SDKs", "Gates, attendance, and occupancy"],
    icon: Radio,
    accent: "cyan",
  },
  {
    title: "Security, identity & device capture",
    blurb:
      "KYC workflows, biometric capture, and hardware-backed verification within auditable, compliance-aware products.",
    bullets: ["KYC & identity verification", "Biometric & signature hardware", "Security hardening & standards"],
    icon: ShieldCheck,
    accent: "rose",
  },
  {
    title: "Architecture & technical leadership",
    blurb:
      "Solution design, engineering standards, and delivery planning that remain effective as products and teams scale.",
    bullets: ["Solution & cloud architecture", "Code review & mentorship", "Roadmaps with delivery risk assessment"],
    icon: Blocks,
    accent: "amber",
  },
  {
    title: "Support & continuous improvement",
    blurb:
      "Post-launch stability, performance optimization, and incremental enhancement to sustain long-term product value.",
    bullets: ["Performance & reliability", "Upgrades & refactoring", "Operational runbooks & support"],
    icon: Headphones,
    accent: "emerald",
  },
  {
    title: "Freelance & contract engagements",
    blurb:
      "Defined-scope engagements for organizations that need senior engineering capacity without a lengthy hiring process.",
    bullets: [
      "Clear milestones and statements of work",
      "Remote delivery across time zones",
      "Enterprise-grade standards and documentation",
    ],
    icon: Briefcase,
    accent: "sky",
    wide: true,
  },
]

const Services = () => {
  return (
    <section id="services" className="services-section" aria-label="Services and offerings">
      <div className="services-section__glow" aria-hidden="true" />
      <div className="services-wrap container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="services-intro">
          <p className="services-eyebrow">Capabilities</p>
          <h2 className="services-title">Services</h2>
          <p className="services-lede">
            I provide <strong>consulting and contract delivery</strong> alongside full-time work—focused on
            <strong> production outcomes</strong>, not presentations. Engagements can target a single capability
            or combine several as your initiative requires.
          </p>
          <div className="services-cta-strip" role="status">
            <span className="services-pill">Freelance &amp; contract engagements</span>
            <span className="services-pill services-pill--dim">
              Remote · Global · Availability evenings and weekends, capacity permitting
            </span>
          </div>
        </div>

        <div className="services-bento">
          {categories.map((item, i) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`service-card service-card--${item.accent} ${item.wide ? "service-card--wide" : ""} animate-slide-up`}
                style={{ animationDelay: `${0.06 * i}s` }}
              >
                <div className="service-card__shine" aria-hidden="true" />
                <div className="service-card__icon-wrap" aria-hidden="true">
                  <Icon className="service-card__icon" strokeWidth={1.75} />
                </div>
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__blurb">{item.blurb}</p>
                <ul className="service-card__list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="services-bottom-cta">
          <p>Have a specific requirement? Share your objectives and I will outline a practical approach.</p>
          <button
            type="button"
            className="btn-modern primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request a consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
