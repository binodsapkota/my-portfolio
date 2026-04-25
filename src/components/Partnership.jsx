import { Handshake, LineChart, Lightbulb, Mail, MessageSquare, Users2 } from "lucide-react"

const focusAreas = [
  {
    title: "Product & GTM",
    text: "Shared roadmap from prototype to market—where technology choices and first customers actually match.",
    icon: LineChart,
  },
  {
    title: "Technical partnership",
    text: "Longer-term build-and-own relationships: you bring domain, I bring delivery depth across web, data, and devices.",
    icon: Handshake,
  },
  {
    title: "New ventures & ideas",
    text: "Early-stage exploration: validation, architecture, and honest feasibility before anyone signs a cap table.",
    icon: Lightbulb,
  },
  {
    title: "People & trust",
    text: "Introductory, confidential calls. Chemistry and clarity first—formal terms only when it makes sense for both sides.",
    icon: Users2,
  },
]

const VENTURE_EMAIL = "er.binod2016@gmail.com"
const VENTURE_SUBJECT = "Partnership or new venture discussion"

const Partnership = () => {
  const mailtoHref = `mailto:${VENTURE_EMAIL}?subject=${encodeURIComponent(VENTURE_SUBJECT)}`

  return (
    <section id="partnership" className="partnership-section" aria-label="Business partnership and new ventures">
      <div className="partnership-section__aurora" aria-hidden="true" />
      <div className="partnership-wrap container mx-auto max-w-5xl px-4 sm:px-6">
        <header className="partnership-header text-center mb-10 md:mb-12">
          <p className="partnership-eyebrow">Beyond client work</p>
          <h2 className="partnership-title">Partnership and new ventures</h2>
          <p className="partnership-subtitle max-w-2xl mx-auto">
            I am open to thoughtful conversations about <strong>business partnerships</strong>,{" "}
            <strong>joint products</strong>, and <strong>new venture opportunities</strong>—where there is
            a clear problem, aligned expectations, and room to build something durable together.
          </p>
        </header>

        <div className="partnership-panels">
          {focusAreas.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="partnership-panel animate-slide-up"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className="partnership-panel__icon" aria-hidden="true">
                  <Icon strokeWidth={1.75} className="w-5 h-5" />
                </div>
                <h3 className="partnership-panel__title">{item.title}</h3>
                <p className="partnership-panel__text">{item.text}</p>
              </div>
            )
          })}
        </div>

        <div className="partnership-footnote">
          <p>
            This is not legal or investment advice. If we move forward, details belong in the right documents with
            the right advisors—here, we are simply finding fit.
          </p>
        </div>

        <div className="partnership-cta">
          <button
            type="button"
            className="btn-modern primary partnership-cta__primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageSquare className="w-4 h-4" strokeWidth={2.25} />
            Open the contact form
          </button>
          <a
            href={mailtoHref}
            className="partnership-cta__email btn-modern outline"
          >
            <Mail className="w-4 h-4" strokeWidth={2.25} />
            Email: partnership or venture idea
          </a>
        </div>
        <p className="partnership-hint">Mention &quot;partnership&quot; or &quot;venture&quot; in your subject or first line so I can triage it quickly.</p>
      </div>
    </section>
  )
}

export default Partnership
