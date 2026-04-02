import FadeIn from "./FadeIn";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="6" y="6" width="36" height="36" rx="2" stroke="#c9a84c" strokeWidth="2" fill="none"/>
        <line x1="6" y1="18" x2="42" y2="18" stroke="#c9a84c" strokeWidth="1.5"/>
        <line x1="18" y1="18" x2="18" y2="42" stroke="#c9a84c" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#c9a84c"/>
        <line x1="24" y1="26" x2="36" y2="26" stroke="#c9a84c" strokeWidth="1.5"/>
        <line x1="24" y1="32" x2="36" y2="32" stroke="#c9a84c" strokeWidth="1.5"/>
        <line x1="24" y1="38" x2="32" y2="38" stroke="#c9a84c" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Design",
    description:
      "Thoughtful architectural and interior design that balances aesthetics with function. We collaborate with top local architects to develop detailed plans before a single nail is driven.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <polygon points="24,4 44,40 4,40" stroke="#c9a84c" strokeWidth="2" fill="none"/>
        <rect x="18" y="28" width="6" height="12" fill="#c9a84c" opacity="0.3" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="24" y="28" width="6" height="12" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="20" y="20" width="8" height="8" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Build",
    description:
      "New construction from foundation to finish. Our crews deliver on schedule and on budget, with rigorous quality control at every phase — residential subdivisions, multi-family, or ground-up commercial.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="1" stroke="#c9a84c" strokeWidth="2" fill="none"/>
        <rect x="14" y="14" width="8" height="8" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="26" y="14" width="8" height="8" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="14" y="26" width="8" height="8" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <path d="M26 30 L34 22" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 30 L34 30 L34 22" stroke="#c9a84c" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Remodel",
    description:
      "Breathing new life into existing structures is our specialty. From gut renovations to full historic restorations, we respect the character of each property while modernizing it for today's living.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="6" y="16" width="36" height="26" rx="1" stroke="#c9a84c" strokeWidth="2" fill="none"/>
        <polyline points="4,18 24,6 44,18" stroke="#c9a84c" strokeWidth="2" fill="none"/>
        <rect x="18" y="28" width="6" height="14" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="24" y="28" width="6" height="14" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="22" width="6" height="6" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="32" y="22" width="6" height="6" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Residential",
    description:
      "From single-family renovations to condo communities like The Allison, we develop residential properties designed around how people truly live — built to stand for generations.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="10" width="40" height="34" rx="1" stroke="#c9a84c" strokeWidth="2" fill="none"/>
        <rect x="4" y="10" width="40" height="10" fill="#c9a84c" opacity="0.15"/>
        <line x1="4" y1="20" x2="44" y2="20" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="10" y="26" width="8" height="8" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="22" y="26" width="8" height="8" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="34" y="26" width="6" height="18" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="36" width="12" height="8" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Commercial",
    description:
      "Office buildings, retail centers, and mixed-use developments. We understand the business case behind every square foot and develop commercial properties positioned to perform.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="#c9a84c" strokeWidth="2" fill="none"/>
        <path d="M24 16 L24 24 L30 28" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 10 L20 14" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 10 L28 14" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="38" x2="36" y2="38" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 38 L18 42 M30 38 L30 42" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Investment Properties",
    description:
      "We identify undervalued properties, acquire them, and execute full renovations or ground-up builds — then bring them to market. Adaptive reuse, infill development, and portfolio growth — done right.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#f8f5ef" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              What We Do
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
            >
              What We Do
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80}>
              <div
                className="bg-white rounded-lg p-8 border border-transparent hover:border-[#c9a84c] transition-all duration-300 group hover:shadow-lg h-full"
                style={{ borderColor: "rgba(201,168,76,0.15)" }}
              >
                <div className="mb-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
