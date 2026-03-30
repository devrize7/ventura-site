import Image from "next/image";
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
          {/* Left — photo gallery */}
          <FadeIn>
            <div className="flex flex-col gap-3">
              {/* Hero image */}
              <div className="rounded-xl overflow-hidden relative" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/allison-sw.png"
                  alt="The Allison Project — Southwest corner render"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/allison-nw.png"
                    alt="The Allison Project — Northwest corner render"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 17vw"
                  />
                </div>
                <div className="rounded-lg overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/allison-north.png"
                    alt="The Allison Project — North elevation render"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 17vw"
                  />
                </div>
                <div className="rounded-lg overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/allison-site-plan.png"
                    alt="The Allison Project — Site plan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 17vw"
                  />
                </div>
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
