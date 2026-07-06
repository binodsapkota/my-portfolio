import { Handshake, LineChart, Lightbulb, Mail, MessageSquare, Users2 } from "lucide-react"

const focusAreas = [
  {
    title: "Product & go-to-market",
    text: "Align technical roadmap with market entry—from prototype through early customer validation.",
    icon: LineChart,
  },
  {
    title: "Technical partnership",
    text: "Long-term build partnerships where domain expertise and engineering depth combine across web, data, and devices.",
    icon: Handshake,
  },
  {
    title: "New ventures",
    text: "Early-stage feasibility, architecture assessment, and honest technical evaluation before formal commitment.",
    icon: Lightbulb,
  },
  {
    title: "Relationship & fit",
    text: "Initial confidential discussions focused on alignment of goals, expectations, and working style.",
    icon: Users2,
  },
]

const VENTURE_EMAIL = "er.binod2016@gmail.com"
const VENTURE_SUBJECT = "Partnership or venture inquiry"

const Partnership = () => {
  const mailtoHref = `mailto:${VENTURE_EMAIL}?subject=${encodeURIComponent(VENTURE_SUBJECT)}`

  return (
    <section id="partnership" className="partnership-section" aria-label="Business partnership and new ventures">
      <div className="partnership-section__aurora" aria-hidden="true" />
      <div className="partnership-wrap container mx-auto max-w-5xl px-4 sm:px-6">
        <header className="partnership-header text-center mb-10 md:mb-12">
          <p className="partnership-eyebrow">Strategic collaboration</p>
          <h2 className="partnership-title">Partnerships &amp; ventures</h2>
          <p className="partnership-subtitle max-w-2xl mx-auto">
            I welcome structured conversations regarding <strong>business partnerships</strong>,{" "}
            <strong>joint product development</strong>, and <strong>new venture opportunities</strong>—where
            objectives are clear, expectations are aligned, and there is potential for durable value.
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
            This section is for exploratory discussion only and does not constitute legal or investment advice.
            Formal arrangements should be documented with appropriate professional counsel.
          </p>
        </div>

        <div className="partnership-cta">
          <button
            type="button"
            className="btn-modern primary partnership-cta__primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageSquare className="w-4 h-4" strokeWidth={2.25} />
            Contact form
          </button>
          <a href={mailtoHref} className="partnership-cta__email btn-modern outline">
            <Mail className="w-4 h-4" strokeWidth={2.25} />
            Email: partnership inquiry
          </a>
        </div>
        <p className="partnership-hint">
          Please include &quot;partnership&quot; or &quot;venture&quot; in the subject line for efficient routing.
        </p>
      </div>
    </section>
  )
}

export default Partnership
