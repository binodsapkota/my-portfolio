import { Award, GraduationCap } from "lucide-react"

const degreePrograms = [
  {
    id: 1,
    degree: "B.E. in Information Technology (BE IT)",
    institution: "Cosmos College of Management and Technology, Pokhara University",
    location: "Nepal",
    period: "2008",
    highlights: [
      "Foundation in information technology and software engineering, with emphasis on enterprise systems, integration, and full-stack development.",
    ],
  },
]

const certifications = []

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

const Education = () => {
  return (
    <section id="education" className="education-section" aria-label="Education and certifications">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">Education &amp; credentials</h2>
          <div className="section-divider animate-scale-in"></div>
          <p className="section-subtitle">
            Academic foundation in information technology, complemented by continuous professional development
            in architecture, security, and modern delivery practices.
          </p>
        </div>

        <div className="education-degrees">
          <h3 className="education-block-title">
            <GraduationCap className="education-block-icon" strokeWidth={2} aria-hidden="true" />
            Education
          </h3>
          <div className="education-grid">
            {degreePrograms.map((item, index) => (
              <article
                key={item.id}
                className="education-card animate-slide-up"
                style={{ animationDelay: `${0.08 * index}s` }}
              >
                <h4 className="education-degree">{item.degree}</h4>
                <p className="education-school">{item.institution}</p>
                <p className="education-meta">
                  {item.location}
                  {item.period ? ` · ${item.period}` : ""}
                </p>
                {item.highlights?.length > 0 && (
                  <ul className="education-highlights">
                    {item.highlights.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>

        {certifications.length > 0 && (
          <div className="education-certs">
            <h3 className="education-block-title">
              <Award className="education-block-icon" strokeWidth={2} aria-hidden="true" />
              Certifications
            </h3>
            <ul className="education-cert-list">
              {certifications.map((c, i) => (
                <li key={i} className="education-cert-item">
                  <span className="education-cert-name">{c.name}</span>
                  {(c.issuer || c.year) && (
                    <span className="education-cert-meta">
                      {[c.issuer, c.year].filter(Boolean).join(" · ")}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="education-footnote">
          For credential verification or academic transcripts, please{" "}
          <button type="button" className="education-link-btn" onClick={scrollToContact}>
            contact me
          </button>
          .
        </p>
      </div>
    </section>
  )
}

export default Education
