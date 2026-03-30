import Image from "next/image";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  category: string;
  detail: string;
  description: string;
  image: string | null;
  imageAlt: string | null;
  badge: string | null;
}

const projects: Project[] = [
  {
    title: "The Allison Project",
    category: "Adaptive Reuse",
    detail: "Norwood, Cincinnati — 40 Residences",
    description:
      "Adaptive reuse of a historic Cincinnati school into 23 condominiums and 17 new townhomes surrounding a central plaza. Designed with MĀCHINA architects.",
    image: "/allison-aerial-2.png",
    imageAlt: "The Allison Project aerial render",
    badge: null,
  },
  {
    title: "Silver St. — Norwood, OH",
    category: "Residential Remodel",
    detail: "Full gut renovation, before → after",
    description:
      "Complete gut renovation of a Norwood single-family home — new systems, finishes, and layout — delivered on time and sold at a strong return.",
    image: null,
    imageAlt: null,
    badge: "SOLD",
  },
  {
    title: "Melrose Ave. — Norwood, OH",
    category: "Historic Restoration",
    detail: "1890 home restored, featured on WCPO",
    description:
      "Restored an 1890 Melrose Avenue home from duplex to stunning single-family residence. Preserved original stained-glass windows, three-dimensional tile fireplace, and thick wood trim throughout.",
    image: "/allison-patio.png",
    imageAlt: "Ventura historic restoration project",
    badge: null,
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
                {/* Image or placeholder */}
                <div className="relative" style={{ aspectRatio: "16/10", backgroundColor: "#0d1b2a" }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    /* Placeholder for Silver St. — no photo yet */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="24,4 44,40 4,40" fill="none" stroke="#c9a84c" strokeWidth="2" />
                        <rect x="17" y="28" width="6" height="12" fill="#c9a84c" opacity="0.6" />
                        <rect x="25" y="28" width="6" height="12" fill="#c9a84c" opacity="0.6" />
                        <rect x="19" y="20" width="10" height="8" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.8" />
                      </svg>
                      <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)", color: "rgba(201,168,76,0.5)" }}>
                        Photo coming soon
                      </span>
                    </div>
                  )}
                  {project.badge && (
                    <span
                      className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded"
                      style={{ backgroundColor: "#c9a84c", color: "#0d1b2a", fontFamily: "var(--font-inter)" }}
                    >
                      {project.badge}
                    </span>
                  )}
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
