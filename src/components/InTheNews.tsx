import FadeIn from "./FadeIn";

export default function InTheNews() {
  return (
    <section id="in-the-news" className="py-24" style={{ backgroundColor: "#f8f5ef" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              Press
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
            >
              VBG in the News
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="max-w-2xl mx-auto">
            <a
              href="https://www.wcpo.com/home/home-tour/home-tour-19th-century-norwood-house-with-21st-century-amenities-offers-the-best-of-both-worlds"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Source badge */}
              <div className="px-8 pt-8 pb-0 flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded font-black text-white text-sm px-3 py-1.5 tracking-tight flex-shrink-0"
                  style={{ backgroundColor: "#003087", fontFamily: "var(--font-inter)" }}
                >
                  <span style={{ color: "#ffffff" }}>WCPO</span>
                  <span className="ml-1 text-xs font-bold" style={{ color: "#c9a84c" }}>9</span>
                </div>
                <span
                  className="text-xs uppercase tracking-wider font-medium"
                  style={{ fontFamily: "var(--font-inter)", color: "#718096" }}
                >
                  ABC Cincinnati
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="text-xl font-bold mb-4 leading-snug group-hover:text-[#c9a84c] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                >
                  Home Tour: 19th-century Norwood house with 21st-century amenities offers the best of both worlds
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}
                >
                  Ventura restored an 1890 Melrose Avenue home from duplex to stunning single-family residence,
                  preserving original stained-glass windows, three-dimensional tile fireplace, and thick wood trim
                  while adding modern amenities throughout.
                </p>
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                  style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
                >
                  Read the Article
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
