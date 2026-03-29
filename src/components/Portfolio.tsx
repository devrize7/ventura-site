import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Hyde Park Custom Residence",
    category: "Residential",
    detail: "4,200 sq ft | Custom Build | Hyde Park, Cincinnati",
    description:
      "A four-bedroom modern craftsman with open-plan entertaining spaces, a chef's kitchen, and a three-car garage — completed on time and within budget.",
    svgContent: (
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" fill="#0a1828" />
        <defs>
          <pattern id="p1" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c9a84c" strokeWidth="0.2" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="260" fill="url(#p1)" />
        {/* House */}
        <rect x="80" y="100" width="240" height="130" fill="none" stroke="#c9a84c" strokeWidth="2" />
        <polyline points="70,100 200,40 330,100" fill="none" stroke="#c9a84c" strokeWidth="2" />
        <rect x="160" y="165" width="50" height="65" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
        <rect x="90" y="120" width="45" height="35" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
        <line x1="112" y1="120" x2="112" y2="155" stroke="#c9a84c" strokeWidth="0.8" />
        <line x1="90" y1="137" x2="135" y2="137" stroke="#c9a84c" strokeWidth="0.8" />
        <rect x="265" y="120" width="45" height="35" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
        <line x1="287" y1="120" x2="287" y2="155" stroke="#c9a84c" strokeWidth="0.8" />
        <line x1="265" y1="137" x2="310" y2="137" stroke="#c9a84c" strokeWidth="0.8" />
        {/* Garage */}
        <rect x="80" y="175" width="70" height="55" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
        <line x1="80" y1="195" x2="150" y2="195" stroke="#c9a84c" strokeWidth="0.8" />
        <line x1="80" y1="205" x2="150" y2="205" stroke="#c9a84c" strokeWidth="0.8" />
        <line x1="115" y1="175" x2="115" y2="230" stroke="#c9a84c" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    title: "Rookwood Commons Retail",
    category: "Commercial",
    detail: "12,000 sq ft | Retail Center | Norwood, Cincinnati",
    description:
      "A neighborhood retail strip with anchor tenant spaces and outdoor plazas, fully leased prior to construction completion.",
    svgContent: (
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" fill="#0a1828" />
        <defs>
          <pattern id="p2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c9a84c" strokeWidth="0.2" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="260" fill="url(#p2)" />
        {/* Building */}
        <rect x="40" y="80" width="320" height="150" fill="none" stroke="#c9a84c" strokeWidth="2" />
        <rect x="40" y="80" width="320" height="30" fill="#c9a84c" opacity="0.1" />
        <line x1="40" y1="110" x2="360" y2="110" stroke="#c9a84c" strokeWidth="1.5" />
        {/* Storefronts */}
        {[50, 155, 260].map((x, i) => (
          <g key={i}>
            <rect x={x} y="110" width="90" height="120" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
            <rect x={x + 5} y="120" width="80" height="60" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
            <rect x={x + 30} y="185" width="30" height="45" fill="none" stroke="#c9a84c" strokeWidth="1" />
            <line x1={x + 45} y1="185" x2={x + 45} y2="230" stroke="#c9a84c" strokeWidth="0.5" />
          </g>
        ))}
        {/* Canopy */}
        <path d="M 40 110 L 360 110" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4,3" />
      </svg>
    ),
  },
  {
    title: "Anderson Township Townhomes",
    category: "Investment",
    detail: "8 units | Mixed-Use | Anderson Township",
    description:
      "Eight contemporary townhomes with private rooftop terraces and first-floor flex spaces, now fully sold out prior to certificate of occupancy.",
    svgContent: (
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="260" fill="#0a1828" />
        <defs>
          <pattern id="p3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c9a84c" strokeWidth="0.2" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="260" fill="url(#p3)" />
        {/* 4 townhomes visible */}
        {[30, 115, 200, 285].map((x, i) => (
          <g key={i}>
            <rect x={x} y="80" width="70" height="160" fill="none" stroke="#c9a84c" strokeWidth="2" />
            <polyline points={`${x - 4},80 ${x + 35},50 ${x + 74},80`} fill="none" stroke="#c9a84c" strokeWidth="1.5" />
            {/* Rooftop */}
            <rect x={x + 10} y="60" width="50" height="20" fill="#c9a84c" opacity="0.1" stroke="#c9a84c" strokeWidth="0.8" />
            {/* Windows */}
            <rect x={x + 8} y="95" width="24" height="20" fill="none" stroke="#c9a84c" strokeWidth="1" />
            <rect x={x + 38} y="95" width="24" height="20" fill="none" stroke="#c9a84c" strokeWidth="1" />
            <rect x={x + 8} y="130" width="24" height="20" fill="none" stroke="#c9a84c" strokeWidth="1" />
            <rect x={x + 38} y="130" width="24" height="20" fill="none" stroke="#c9a84c" strokeWidth="1" />
            {/* Door */}
            <rect x={x + 20} y="200" width="30" height="40" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
            <circle cx={x + 46} cy={220} r="2" fill="#c9a84c" />
          </g>
        ))}
      </svg>
    ),
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24" style={{ backgroundColor: "#f8f5ef" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              Our Work
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
            >
              Selected Projects
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <div style={{ backgroundColor: "#0d1b2a" }}>
                  {project.svgContent}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="text-xs tracking-widest uppercase font-semibold mb-2"
                    style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs mb-3"
                    style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
                  >
                    {project.detail}
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
