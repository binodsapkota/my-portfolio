import { useId } from "react"
import { Activity, CreditCard, Puzzle, QrCode, Router, UserCheck, Video, Users } from "lucide-react"

const systems = [
  {
    title: "Access control & barrier",
    text: "Multi-factor entry: QR codes, RFID and NFC card readers, and web cameras for capture or liveness—verified on a Raspberry Pi (or PC) at the edge, then barrier or security gate release when the rules pass.",
    icon: QrCode,
  },
  {
    title: "People count",
    text: "People counting at the entrance using the barrier and sensors so occupancy and flow stay accurate for safety, reporting, and capacity limits.",
    icon: Users,
  },
  {
    title: "Events & visitor auth",
    text: "Event management tied to the gate: visitors are authorized automatically on arrival from invite lists, tickets, or pre-registration—no manual check-in bottleneck at the entrance.",
    icon: UserCheck,
  },
  {
    title: "Hardware & vendor SDKs",
    text: "I integrate many device types through their official or vendor SDKs: webcams, attendance and biometric machines, RFID/NFC readers, and security / barrier gate controllers—wired into your .NET and React stack for a single control plane.",
    icon: Puzzle,
  },
]

const protocolTags = [
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
            Gates &amp; venues
          </p>
          <h2 className="section-title text-3xl md:text-4xl font-bold">IoT &amp; the edge</h2>
          <div
            className="section-divider iot-title-rule mx-auto my-4 rounded animate-scale-in"
            aria-hidden="true"
          />
          <p className="section-subtitle text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-1">
            On-site access and flow: cards, readers, and webcams; QR and events; all tied together with vendor
            SDKs where it matters. From attendance terminals to security gates, one coherent edge-and-web
            system.
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
            Webcam · QR · RFID/NFC · people count · barrier / gate — integrated at the edge
          </figcaption>
        </figure>

        <h3 className="iot-block-heading">Systems</h3>
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
          <p className="iot-stack-panel__label">Edge, gate &amp; web</p>
          <p className="iot-stack-panel__hint">
            Cameras, readers, attendance units, and gates—connected with vendor SDKs and your web stack
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
            Talk about a connected product
          </button>
        </div>
      </div>
    </section>
  )
}

export default IotSection
