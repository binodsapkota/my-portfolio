import { GraduationCap, Target, Users } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Delivery focus",
    text: "Defined scope, transparent communication, and production-ready outcomes—from MVPs to enterprise rollouts.",
  },
  {
    icon: Users,
    title: "Leadership experience",
    text: "Led a 30+ engineer organization; established code review practices, hiring, and technical direction.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.E., Information Technology — Cosmos College of Management and Technology, Pokhara University, 2008.",
  },
]

const About = () => {
  return (
    <section id="about" className="about-section about-section--compact">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">Background</h2>
          <div className="section-divider animate-scale-in" aria-hidden="true" />
          <p className="section-subtitle">
            Thirteen years of progressive responsibility in software engineering—since December 2012—across
            Canada and Nepal.
          </p>
        </div>

        <div className="about-story">
          <div className="about-story__main animate-slide-up">
            <p>
              I am a full-stack developer and engineering lead specializing in .NET, React, cloud architecture,
              and IoT integration. My career spans fintech scale-ups, cooperative banking, insurance, healthcare,
              manufacturing, and connected environments where software meets physical devices.
            </p>
            <p>
              I apply AI-assisted development tools—Cursor, Claude, and GitHub Copilot—as part of a disciplined
              workflow to accelerate delivery while preserving architectural integrity, security standards, and
              long-term maintainability.
            </p>
            <p>
              Beyond full-time engineering, I accept selected consulting and contract engagements with the same
              rigor applied to enterprise delivery: clear milestones, documented decisions, and systems built to
              operate in production.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="about-highlight animate-slide-up"
                  style={{ animationDelay: `${0.08 * i}s` }}
                >
                  <div className="about-highlight__icon" aria-hidden="true">
                    <Icon strokeWidth={1.75} className="w-5 h-5" />
                  </div>
                  <h3 className="about-highlight__title">{item.title}</h3>
                  <p className="about-highlight__text">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
