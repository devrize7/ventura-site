import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — illustration */}
          <FadeIn>
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-lg"
                style={{ backgroundColor: "#c9a84c", opacity: 0.12 }}
              />
              <div
                className="relative rounded-lg overflow-hidden p-10 flex items-center justify-center"
                style={{ backgroundColor: "#0d1b2a", minHeight: "420px" }}
              >
                {/* SVG architectural portrait illustration */}
                <svg
                  viewBox="0 0 400 420"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-xs"
                >
                  {/* Blueprint background */}
                  <rect width="400" height="420" fill="#0d1b2a" />
                  <defs>
                    <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c9a84c" strokeWidth="0.3" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="400" height="420" fill="url(#smallGrid)" />

                  {/* House floor plan */}
                  <rect x="60" y="60" width="280" height="200" fill="none" stroke="#c9a84c" strokeWidth="2" />
                  {/* Roof */}
                  <polyline points="50,60 200,20 350,60" fill="none" stroke="#c9a84c" strokeWidth="2" />
                  {/* Interior walls */}
                  <line x1="170" y1="60" x2="170" y2="260" stroke="#c9a84c" strokeWidth="1.5" />
                  <line x1="170" y1="160" x2="340" y2="160" stroke="#c9a84c" strokeWidth="1.5" />
                  {/* Door symbols */}
                  <path d="M 130 260 Q 130 240 110 240" fill="none" stroke="#c9a84c" strokeWidth="1" />
                  <line x1="130" y1="260" x2="130" y2="240" stroke="#c9a84c" strokeWidth="1" />
                  {/* Windows */}
                  <rect x="80" y="90" width="40" height="25" fill="none" stroke="#c9a84c" strokeWidth="1" />
                  <line x1="100" y1="90" x2="100" y2="115" stroke="#c9a84c" strokeWidth="0.5" />
                  <rect x="200" y="90" width="40" height="25" fill="none" stroke="#c9a84c" strokeWidth="1" />
                  <line x1="220" y1="90" x2="220" y2="115" stroke="#c9a84c" strokeWidth="0.5" />
                  <rect x="270" y="90" width="40" height="25" fill="none" stroke="#c9a84c" strokeWidth="1" />

                  {/* Dimensions */}
                  <line x1="60" y1="290" x2="340" y2="290" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="60" y1="285" x2="60" y2="295" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="340" y1="285" x2="340" y2="295" stroke="#c9a84c" strokeWidth="0.5" />
                  <text x="200" y="310" textAnchor="middle" fill="#c9a84c" fontSize="10" fontFamily="monospace">42&apos; - 0&quot;</text>

                  <line x1="20" y1="60" x2="20" y2="260" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="15" y1="60" x2="25" y2="60" stroke="#c9a84c" strokeWidth="0.5" />
                  <line x1="15" y1="260" x2="25" y2="260" stroke="#c9a84c" strokeWidth="0.5" />
                  <text x="10" y="165" textAnchor="middle" fill="#c9a84c" fontSize="10" fontFamily="monospace" transform="rotate(-90, 10, 165)">28&apos; - 0&quot;</text>

                  {/* Logo mark */}
                  <text x="200" y="380" textAnchor="middle" fill="#c9a84c" fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">VENTURA BUILDERS GROUP</text>
                  <line x1="60" y1="358" x2="340" y2="358" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>
            </div>
          </FadeIn>

          {/* Right — text */}
          <div>
            <FadeIn delay={100}>
              <p
                className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
                style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
              >
                Our Story
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
              >
                Built on Trust,
                <br />
                Crafted with Purpose
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}
              >
                Pete and Miranda Ventura founded Ventura Builders Group with a single
                conviction: every structure should reflect the people who live and work
                inside it. With over a decade building across Greater Cincinnati, they&apos;ve
                grown a reputation not just for exceptional craftsmanship, but for the
                relationships they forge along the way.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}
              >
                From custom residences in Hyde Park to adaptive reuse projects in Norwood,
                the Ventura team approaches every build with the same care and precision —
                whether it&apos;s a family&apos;s forever home or a landmark commercial development.
                Their hands-on leadership means you deal directly with the people making
                decisions, every step of the way.
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="border-l-2 pl-4" style={{ borderColor: "#c9a84c" }}>
                  <div
                    className="font-bold text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                  >
                    Pete Ventura Jr.
                  </div>
                  <div
                    className="text-sm"
                    style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
                  >
                    Co-Founder & General Contractor
                  </div>
                </div>
                <div className="border-l-2 pl-4" style={{ borderColor: "#c9a84c" }}>
                  <div
                    className="font-bold text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                  >
                    Miranda Ventura
                  </div>
                  <div
                    className="text-sm"
                    style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
                  >
                    Co-Founder & Design Director
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
