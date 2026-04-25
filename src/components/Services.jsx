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
    blurb: "Scalable, secure line-of-business software—from greenfield products to long-running systems that need to evolve without drama.",
    bullets: ["ASP.NET Core & React", "Databases & reporting", "Multi-tenant & role rules"],
    icon: Code2,
    accent: "indigo",
  },
  {
    title: "APIs & system integration",
    blurb: "Clear boundaries between services, honest contracts, and solid integrations with payment, identity, and legacy backends.",
    bullets: ["REST & Web API design", "Third-party & vendor hooks", "Queue-friendly patterns"],
    icon: Cable,
    accent: "violet",
  },
  {
    title: "IoT, access & on-site hardware",
    blurb: "Physical sites that need more than a browser: readers, cameras, barriers, and edge logic wired into your app stack.",
    bullets: ["RFID, NFC, QR, webcams", "Raspberry Pi & vendor SDKs", "Gates, attendance, people flow"],
    icon: Radio,
    accent: "cyan",
  },
  {
    title: "Security, ID & device capture",
    blurb: "KYC-style flows, scanners, and capture hardware folded into a compliant, auditable product experience.",
    bullets: ["KYC & verification UX", "Biometric & signature hardware", "Hardening & standards alignment"],
    icon: ShieldCheck,
    accent: "rose",
  },
  {
    title: "Architecture & platform leadership",
    blurb: "From diagram to release train: design reviews, team alignment, and pragmatic choices that still work six months later.",
    bullets: ["Solution & cloud architecture", "Code review & mentoring", "Roadmaps with delivery risk in mind"],
    icon: Blocks,
    accent: "amber",
  },
  {
    title: "Ongoing support & product care",
    blurb: "Stability, performance, and small wins that compound—so your users trust the system every day, not just at launch.",
    bullets: ["Performance & reliability", "Upgrades & refactors", "On-call friendly runbooks"],
    icon: Headphones,
    accent: "emerald",
  },
  {
    title: "Freelance & contract work",
    blurb: "Independent engagements on top of my day job: scoped builds, advisory sprints, or hands-on coding when you need senior help without a long hiring cycle.",
    bullets: [
      "Fixed milestones and clear SOWs",
      "Remote-first, global time zones",
      "Same standards as enterprise—just a shorter path to yes",
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
          <p className="services-eyebrow">What I work on</p>
          <h2 className="services-title">Services that ship</h2>
          <p className="services-lede">
            <strong>Freelancing and consulting</strong> sit alongside my full-time work—engagements built around
            <strong> real products</strong>, not slide decks. Pick a lane or blend a few: I design, build, and own
            outcomes with you.
          </p>
          <div className="services-cta-strip" role="status">
            <span className="services-pill">Freelance and contract-friendly</span>
            <span className="services-pill services-pill--dim">Global · Remote · Evenings and weekends, capacity permitting</span>
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
          <p>Have a different shape of project? Describe the goals and we will map them to a plan.</p>
          <button
            type="button"
            className="btn-modern primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a conversation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
