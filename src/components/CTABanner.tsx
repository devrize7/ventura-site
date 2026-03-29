"use client";

import FadeIn from "./FadeIn";

export default function CTABanner() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#0d1b2a" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="800" height="300" fill="url(#ctaGrid)" />
        </svg>
      </div>

      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#c9a84c" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
          >
            Ready to Build?
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s Create Something
            <br />
            <span style={{ color: "#c9a84c" }}>Extraordinary Together</span>
          </h2>
          <p
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Whether you&apos;re planning a dream home, a commercial development, or your
            next investment property — the Ventura team is ready to turn your vision
            into something that lasts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 font-semibold text-sm tracking-wide rounded transition-all duration-200 cursor-pointer w-full sm:w-auto"
              style={{
                backgroundColor: "#c9a84c",
                color: "#0d1b2a",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8842e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
            >
              Start a Conversation
            </button>
            <a
              href="tel:5136266960"
              className="px-8 py-4 font-semibold text-sm tracking-wide rounded border transition-all duration-200 w-full sm:w-auto text-center"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c"; (e.currentTarget as HTMLElement).style.color = "#c9a84c"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
            >
              (513) 626-6960
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
