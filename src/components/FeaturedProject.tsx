import FadeIn from "./FadeIn";

const specs = [
  { label: "Total Residences", value: "40" },
  { label: "Site Area", value: "2.06 ac" },
  { label: "Condominiums", value: "23" },
  { label: "Townhomes", value: "17" },
  { label: "Total Sq Ft", value: "89,909" },
  { label: "Green Space", value: "19.68%" },
  { label: "Parking Spaces", value: "76" },
  { label: "Architect", value: "MĀCHINA" },
];

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-24" style={{ backgroundColor: "#0d1b2a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              Featured Project
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Allison Project
            </h2>
            <p className="text-white/60 mt-3" style={{ fontFamily: "var(--font-inter)" }}>
              Norwood, Cincinnati, Ohio
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — site plan SVG */}
          <FadeIn>
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#1a2f45", padding: "2px" }}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#0a1828" }}>
                <svg
                  viewBox="0 0 560 480"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  {/* Background */}
                  <rect width="560" height="480" fill="#0a1828" />

                  {/* Grid */}
                  <defs>
                    <pattern id="siteGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#c9a84c" strokeWidth="0.2" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="560" height="480" fill="url(#siteGrid)" />

                  {/* Site boundary */}
                  <rect x="40" y="40" width="480" height="400" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="8,4" />

                  {/* Green spaces */}
                  <rect x="180" y="180" width="200" height="120" rx="4" fill="#2d5a27" opacity="0.6" stroke="#4a9940" strokeWidth="1" />
                  <text x="280" y="247" textAnchor="middle" fill="#4a9940" fontSize="9" fontFamily="monospace">CENTRAL PLAZA</text>

                  {/* Allison School building (historic) */}
                  <rect x="60" y="80" width="200" height="140" rx="2" fill="#1a2f45" stroke="#c9a84c" strokeWidth="2" />
                  <text x="160" y="140" textAnchor="middle" fill="#c9a84c" fontSize="8" fontFamily="monospace" fontWeight="bold">ALLISON SCHOOL</text>
                  <text x="160" y="155" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">(HISTORIC)</text>
                  <text x="160" y="170" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">23 CONDOMINIUMS</text>
                  <text x="160" y="185" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">811–1,190 SQ FT</text>
                  {/* School windows */}
                  {[75, 105, 135, 165, 195, 225].map((x, i) => (
                    <rect key={i} x={x} y={90} width={18} height={22} fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6" />
                  ))}
                  {[75, 105, 135, 165, 195, 225].map((x, i) => (
                    <rect key={i} x={x} y={122} width={18} height={22} fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6" />
                  ))}

                  {/* Townhome blocks — 5 blocks */}
                  {/* Block A - top right */}
                  <rect x="310" y="60" width="180" height="70" rx="2" fill="#1a2f45" stroke="#c9a84c" strokeWidth="1.5" />
                  <text x="400" y="90" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">BLOCK A — 4 TOWNHOMES</text>
                  <text x="400" y="103" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">~2,400 SQ FT EA</text>
                  {[320, 354, 388, 422, 456].map((x, i) => (
                    <line key={i} x1={x} y1={60} x2={x} y2={130} stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
                  ))}

                  {/* Block B - right */}
                  <rect x="450" y="160" width="70" height="160" rx="2" fill="#1a2f45" stroke="#c9a84c" strokeWidth="1.5" />
                  <text x="485" y="237" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace" transform="rotate(-90, 485, 240)">BLOCK B — 3 TH</text>
                  {[450, 473, 496].map((x, i) => (
                    <line key={i} x1={x} y1={160} x2={x} y2={320} stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
                  ))}

                  {/* Block C - bottom right */}
                  <rect x="310" y="350" width="180" height="70" rx="2" fill="#1a2f45" stroke="#c9a84c" strokeWidth="1.5" />
                  <text x="400" y="380" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">BLOCK C — 4 TOWNHOMES</text>
                  {[320, 354, 388, 422, 456].map((x, i) => (
                    <line key={i} x1={x} y1={350} x2={x} y2={420} stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
                  ))}

                  {/* Block D - bottom left */}
                  <rect x="60" y="340" width="180" height="70" rx="2" fill="#1a2f45" stroke="#c9a84c" strokeWidth="1.5" />
                  <text x="150" y="370" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">BLOCK D — 3 TOWNHOMES</text>
                  {[70, 100, 130, 160, 190, 220].map((x, i) => (
                    <line key={i} x1={x} y1={340} x2={x} y2={410} stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
                  ))}

                  {/* Block E - left */}
                  <rect x="40" y="240" width="80" height="90" rx="2" fill="#1a2f45" stroke="#c9a84c" strokeWidth="1.5" />
                  <text x="80" y="283" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace" transform="rotate(-90, 80, 285)">BLOCK E — 3 TH</text>

                  {/* Parking areas */}
                  <rect x="310" y="155" width="130" height="20" rx="1" fill="#c9a84c" opacity="0.15" stroke="#c9a84c" strokeWidth="0.8" />
                  <text x="375" y="168" textAnchor="middle" fill="#c9a84c" fontSize="6" fontFamily="monospace">42 SURFACE PARKING</text>

                  <rect x="60" y="240" width="115" height="18" rx="1" fill="#c9a84c" opacity="0.1" stroke="#c9a84c" strokeWidth="0.8" />
                  <text x="118" y="252" textAnchor="middle" fill="#c9a84c" fontSize="6" fontFamily="monospace">34 GARAGE</text>

                  {/* North arrow */}
                  <g transform="translate(510, 430)">
                    <circle cx="0" cy="0" r="16" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
                    <polygon points="0,-14 -4,-4 0,0 4,-4" fill="#c9a84c" />
                    <polygon points="0,0 -4,-4 0,6 4,-4" fill="#c9a84c" opacity="0.3" />
                    <text x="0" y="-18" textAnchor="middle" fill="#c9a84c" fontSize="7" fontFamily="monospace">N</text>
                  </g>

                  {/* Title block */}
                  <rect x="40" y="440" width="460" height="30" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
                  <text x="280" y="458" textAnchor="middle" fill="#c9a84c" fontSize="8" fontFamily="monospace" opacity="0.7">
                    THE ALLISON PROJECT — SITE PLAN — NORWOOD, CINCINNATI, OH — 89,909 SF / 2.06 AC
                  </text>
                </svg>
              </div>
            </div>
          </FadeIn>

          {/* Right — details */}
          <div>
            <FadeIn delay={150}>
              <div className="mb-8">
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Adaptive Reuse of a Historic Cincinnati Landmark
                </h3>
                <p
                  className="leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.7)" }}
                >
                  The Allison Project transforms the historic Allison Elementary School
                  site in Norwood into a vibrant mixed-use residential community. The
                  project preserves and restores the beloved school building — converting
                  it into 23 unique condominiums ranging from 811 to 1,190 sq ft —
                  while adding 17 new townhomes in five contextually-designed blocks
                  surrounding a central community plaza.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.7)" }}
                >
                  Designed in partnership with MĀCHINA (Covington, KY), the development
                  expands green space from just 5% to nearly 20% of the site — creating
                  a true neighborhood within a neighborhood, with 76 parking spaces and
                  active streetscapes that reconnect to Norwood&apos;s existing fabric.
                </p>
              </div>
            </FadeIn>

            {/* Spec grid */}
            <FadeIn delay={250}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.2)" }}>
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 text-center"
                    style={{ backgroundColor: "#0d1b2a" }}
                  >
                    <div
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-playfair)", color: "#c9a84c" }}
                    >
                      {spec.value}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.5)" }}
                    >
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Tags */}
            <FadeIn delay={350}>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Adaptive Reuse", "Historic Preservation", "Mixed-Use", "23 Condos", "17 Townhomes", "Norwood, OH"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      fontFamily: "var(--font-inter)",
                      borderColor: "rgba(201,168,76,0.3)",
                      color: "rgba(201,168,76,0.8)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
