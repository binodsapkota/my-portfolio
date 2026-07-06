import { Cloud, Code2, Database, Palette, Radio, Sparkles } from "lucide-react"

const skillCategories = [
  {
    category: "Backend & .NET",
    accent: "indigo",
    Icon: Code2,
    skills: [
      { name: "C#", level: 95 },
      { name: "ASP.NET Core", level: 90 },
      { name: "Web API", level: 90 },
    ],
  },
  {
    category: "Frontend & UI",
    accent: "mint",
    Icon: Palette,
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    category: "Database & DevOps",
    accent: "coral",
    Icon: Database,
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "Git", level: 90 },
      { name: "Azure DevOps", level: 85 },
    ],
  },
  {
    category: "Leadership & Cloud",
    accent: "amber",
    Icon: Cloud,
    skills: [
      { name: "Team leadership", level: 90 },
      { name: "AWS", level: 80 },
      { name: "Solution architecture", level: 90 },
    ],
  },
  {
    category: "IoT & edge",
    accent: "cyan",
    Icon: Radio,
    skills: [
      { name: "MQTT & messaging", level: 78 },
      { name: "Device APIs & telemetry", level: 80 },
      { name: "SDKs & device integration", level: 78 },
    ],
  },
  {
    category: "AI-assisted development",
    accent: "violet",
    Icon: Sparkles,
    skills: [
      { name: "Cursor", level: 88 },
      { name: "Claude", level: 85 },
      { name: "GitHub Copilot", level: 82 },
    ],
  },
]

const additionalSkills = [
  { name: "Vendor SDKs & device APIs", category: "IoT & access" },
  { name: "RFID, NFC, QR & webcams", category: "IoT & access" },
  { name: "Raspberry Pi & edge gateways", category: "IoT & access" },
  { name: "Barriers & security gates", category: "IoT & access" },
  { name: "Attendance & biometric devices", category: "IoT & access" },
  { name: "Event visitor & pre-registration", category: "IoT & access" },
  { name: "People counting & occupancy", category: "IoT & access" },
  { name: "MQTT, telemetry & dashboards", category: "IoT & access" },
  { name: "Fintech & payments", category: "Industries & solutions" },
  { name: "Core banking", category: "Industries & solutions" },
  { name: "Insurance", category: "Industries & solutions" },
  { name: "Healthcare", category: "Industries & solutions" },
  { name: "Manufacturing & ERP", category: "Industries & solutions" },
  { name: "Retail, POS & hospitality", category: "Industries & solutions" },
  { name: "Real estate", category: "Industries & solutions" },
  { name: "Education & HR systems", category: "Industries & solutions" },
  { name: "Content & workflow CMS", category: "Industries & solutions" },
  { name: "KYC & ID verification", category: "Security & trust" },
  { name: "Webcam & biometric capture", category: "Security & trust" },
  { name: "Security standards & hardening", category: "Security & trust" },
  { name: "API & data protection", category: "Security & trust" },
  { name: "Biometric (Futronic) scanners", category: "Hardware" },
  { name: "Evolis & signature capture", category: "Hardware" },
  { name: "Document & card readers", category: "Hardware" },
  { name: "BLE beacons (where needed)", category: "Hardware" },
  { name: "SQL Server", category: "Data & platform" },
  { name: "PostgreSQL", category: "Data & platform" },
  { name: "Stored procedures & T-SQL", category: "Data & platform" },
  { name: "Query optimization", category: "Data & platform" },
  { name: "Schema & reporting", category: "Data & platform" },
  { name: "Code reviews", category: "Delivery & practice" },
  { name: "Mentorship", category: "Delivery & practice" },
  { name: "Solution architecture", category: "Delivery & practice" },
  { name: "Cloud-native & DevOps", category: "Delivery & practice" },
  { name: "Jira & delivery tooling", category: "Delivery & practice" },
  { name: "Cursor, Claude & Copilot", category: "Delivery & practice" },
  { name: "AI-accelerated development", category: "Delivery & practice" },
]

const additionalExpertiseOrder = [
  "IoT & access",
  "Industries & solutions",
  "Security & trust",
  "Hardware",
  "Data & platform",
  "Delivery & practice",
]

const getCategoryColor = (category) => {
  const colors = {
    "IoT & access": "#22d3ee",
    "Industries & solutions": "#34d399",
    "Security & trust": "#fb7185",
    Hardware: "#818cf8",
    "Data & platform": "#fbbf24",
    "Delivery & practice": "#a78bfa",
  }
  return colors[category] || "#818cf8"
}

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__veil" aria-hidden="true" />
      <div className="skills-inner container mx-auto max-w-6xl px-4 sm:px-5">
        <header className="skills-head">
          <p className="skills-head__kicker">Technical foundation</p>
          <h2 className="skills-head__title">Skills &amp; technologies</h2>
          <p className="skills-head__lede">
            Depth across backend, frontend, data, cloud, IoT, and AI-assisted delivery—the stack and practices
            applied on production systems.
          </p>
        </header>

        <div className="skills-core">
          {skillCategories.map((cat, categoryIndex) => {
            const Icon = cat.Icon
            return (
              <div
                key={cat.category}
                className={`skill-pillar skill-pillar--${cat.accent} animate-slide-up`}
                style={{ animationDelay: `${0.06 * categoryIndex}s` }}
              >
                <div className="skill-pillar__head">
                  <span className="skill-pillar__icon-wrap" aria-hidden="true">
                    <Icon className="skill-pillar__lucide" strokeWidth={1.85} />
                  </span>
                  <h3 className="skill-pillar__name">{cat.category}</h3>
                </div>
                <ul className="skill-pillar__list">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="skill-meter">
                      <div className="skill-meter__row">
                        <span className="skill-meter__label">{skill.name}</span>
                        <span className="skill-meter__value">{skill.level}%</span>
                      </div>
                      <div className="skill-meter__track" role="presentation">
                        <div
                          className="skill-meter__fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="skills-expertise">
          <h3 className="skills-expertise__title">Additional expertise</h3>
          <p className="skills-expertise__intro">
            Industry domains, hardware integration, security, data platform work, and delivery practices.
          </p>

          <div className="skills-expertise__grid">
            {Object.entries(
              additionalSkills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = []
                acc[skill.category].push(skill.name)
                return acc
              }, {})
            )
              .sort(
                (a, b) =>
                  additionalExpertiseOrder.indexOf(a[0]) -
                  additionalExpertiseOrder.indexOf(b[0])
              )
              .map(([category, skills], index) => (
                <div
                  key={category}
                  className="expertise-card animate-slide-up"
                  style={{ animationDelay: `${0.04 * index}s` }}
                >
                  <h4
                    className="expertise-card__label"
                    style={{ color: getCategoryColor(category) }}
                  >
                    {category}
                  </h4>
                  <div className="expertise-card__chips">
                    {skills
                      .slice()
                      .sort((x, y) => x.localeCompare(y))
                      .map((skill) => (
                        <span
                          key={skill}
                          className="expertise-chip"
                          style={{ borderLeft: `3px solid ${getCategoryColor(category)}` }}
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
