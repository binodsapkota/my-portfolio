import { useId } from "react"
import { Activity, CreditCard, Package, Puzzle, QrCode, Router, Tag, UserCheck, Video, Users } from "lucide-react"

const systems = [
  {
    title: "Access control & barriers",
    text: "Multi-factor entry using QR codes, RFID/NFC readers, and web cameras for identity verification. Edge nodes (Raspberry Pi or host PC) enforce access rules and trigger barrier or gate release in real time.",
    icon: QrCode,
  },
  {
    title: "Occupancy & people counting",
    text: "Entrance-level people counting integrated with barrier systems to support occupancy limits, safety reporting, and traffic-flow analytics.",
    icon: Users,
  },
  {
    title: "Events & visitor authorization",
    text: "Event management integrated with gate access: pre-registered guests, tickets, and invite lists authorize entrants automatically on arrival.",
    icon: UserCheck,
  },
  {
    title: "Multi-vendor hardware integration",
    text: "Unified integration of vendor SDKs for webcams, attendance terminals, biometric devices, RFID/NFC readers, and gate controllers—connected to a single .NET and React control plane.",
    icon: Puzzle,
  },
  {
    title: "Warehouse asset tracking",
    text: "IoT gateway deployments with RFID tags and zone readers for real-time location and movement of inventory, equipment, and pallets—synchronized with operational dashboards.",
    icon: Package,
  },
  {
    title: "ESL e-paper systems",
    text: "End-to-end electronic shelf label solutions: tag hardware, wireless gateways, firmware, and application software for pricing, promotions, template rendering, and fleet management.",
    icon: Tag,
  },
]

const protocolTags = [
  "ESL / e-paper",
  "Wireless gateways",
  "Firmware",
  "IoT gateways",
  "Warehouse asset tracking",
  "Raspberry Pi",
  "RFID & NFC readers",
  "Webcams",
  "QR codes",
  "Vendor SDKs",
  "Attendance devices",
  "Security & barrier gates",
  "Barrier / GPIO",
  "Visitor lists",
  "Pre-registration",
  "ASP.NET & React",
  "Webhooks / API",
]
const IotSection = () => {
  const gradId = useId().replace(/:/g, "g")

  return (
    <section id="iot" className="iot-section" aria-label="IoT and connected systems">
      <div className="iot-wrap container mx-auto max-w-5xl px-4 sm:px-6">
        <header className="section-header text-center mb-10 md:mb-12">
          <p className="iot-kicker text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Connected systems
          </p>
          <h2 className="section-title text-3xl md:text-4xl font-bold">IoT &amp; edge computing</h2>
          <div
            className="section-divider iot-title-rule mx-auto my-4 rounded animate-scale-in"
            aria-hidden="true"
          />
          <p className="section-subtitle text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-1">
            Integrated on-site systems: access control, occupancy monitoring, warehouse tracking, and retail
            infrastructure—unified through vendor SDKs, edge gateways, and a coherent web application layer.
          </p>
        </header>

        <figure className="iot-showcase">
          <div className="iot-mesh iot-mesh--showcase animate-slide-up" role="img" aria-label="Diagram: devices connected to an edge hub">
            <div className="iot-mesh__glow" aria-hidden="true" />
            <div className="iot-mesh__grid" aria-hidden="true" />
            <div className="iot-mesh__center" aria-hidden="true">
              <Router className="iot-mesh__hub-icon" strokeWidth={1.5} />
            </div>
            <div className="iot-mesh__node iot-mesh__node--tl" aria-hidden="true">
              <span className="iot-mesh__ping" />
              <Video className="iot-mesh__node-icon" />
            </div>
            <div className="iot-mesh__node iot-mesh__node--tr" aria-hidden="true">
              <span className="iot-mesh__ping" style={{ animationDelay: "0.4s" }} />
              <CreditCard className="iot-mesh__node-icon" />
            </div>
            <div className="iot-mesh__node iot-mesh__node--bl" aria-hidden="true">
              <span className="iot-mesh__ping" style={{ animationDelay: "0.8s" }} />
              <Activity className="iot-mesh__node-icon" />
            </div>
            <div className="iot-mesh__node iot-mesh__node--br" aria-hidden="true">
              <span className="iot-mesh__ping" style={{ animationDelay: "1.2s" }} />
              <Users className="iot-mesh__node-icon" />
            </div>
            <svg
              className="iot-mesh__svg"
              viewBox="0 0 320 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className="iot-mesh__line iot-mesh__line--a"
                d="M80 50 L160 135"
                stroke={`url(#${gradId})`}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="iot-mesh__line iot-mesh__line--b"
                d="M240 50 L160 135"
                stroke={`url(#${gradId})`}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="iot-mesh__line iot-mesh__line--c"
                d="M80 220 L160 135"
                stroke={`url(#${gradId})`}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="iot-mesh__line iot-mesh__line--d"
                d="M240 220 L160 135"
                stroke={`url(#${gradId})`}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.35" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <figcaption className="iot-showcase__caption">
            Cameras · QR · RFID/NFC · occupancy · barriers &amp; gates — integrated at the edge
          </figcaption>
        </figure>

        <h3 className="iot-block-heading">Solution areas</h3>
        <div className="iot-systems-grid">
          {systems.map((item, i) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="iot-system-card animate-slide-up"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className="iot-system-card__meta">
                  <span className="iot-system-card__index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="iot-system-card__icon" aria-hidden="true">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>
                <h4 className="iot-system-card__title">{item.title}</h4>
                <p className="iot-system-card__text">{item.text}</p>
              </article>
            )
          })}
        </div>

        <div className="iot-stack-panel">
          <p className="iot-stack-panel__label">Technology stack</p>
          <p className="iot-stack-panel__hint">
            Edge devices, gateways, and protocols integrated with ASP.NET, React, and cloud APIs
          </p>
          <ul className="iot-tag-list" aria-label="Technologies">
            {protocolTags.map((tag) => (
              <li key={tag}>
                <span className="iot-protocol-tag">{tag}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="iot-cta">
          <button
            type="button"
            className="btn-modern primary iot-cta__btn"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss an IoT initiative
          </button>
        </div>
      </div>
    </section>
  )
}

export default IotSection
