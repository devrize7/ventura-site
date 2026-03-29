"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#0d1b2a" }}>
      {/* SVG architectural background illustration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Blueprint grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#grid)" />

          {/* Building outline - main structure */}
          <rect x="200" y="200" width="800" height="480" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
          {/* Roof / pediment */}
          <polyline points="180,200 600,80 1020,200" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
          {/* Columns */}
          {[280, 380, 480, 580, 680, 780, 880].map((x, i) => (
            <g key={i}>
              <rect x={x} y="200" width="18" height="480" fill="none" stroke="#c9a84c" strokeWidth="1" />
              <rect x={x - 4} y="196" width="26" height="8" fill="none" stroke="#c9a84c" strokeWidth="1" />
              <rect x={x - 4} y="672" width="26" height="8" fill="none" stroke="#c9a84c" strokeWidth="1" />
            </g>
          ))}
          {/* Windows */}
          {[250, 370, 490, 610, 730, 850].map((x, i) => (
            <g key={i}>
              <rect x={x} y="250" width="60" height="80" fill="none" stroke="#c9a84c" strokeWidth="1" />
              <line x1={x + 30} y1="250" x2={x + 30} y2="330" stroke="#c9a84c" strokeWidth="0.5" />
              <line x1={x} y1="290" x2={x + 60} y2="290" stroke="#c9a84c" strokeWidth="0.5" />
              <rect x={x} y="370" width="60" height="80" fill="none" stroke="#c9a84c" strokeWidth="1" />
              <line x1={x + 30} y1="370" x2={x + 30} y2="450" stroke="#c9a84c" strokeWidth="0.5" />
              <line x1={x} y1="410" x2={x + 60} y2="410" stroke="#c9a84c" strokeWidth="0.5" />
            </g>
          ))}
          {/* Door */}
          <rect x="540" y="560" width="120" height="120" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
          <path d="M 540 560 Q 600 510 660 560" fill="none" stroke="#c9a84c" strokeWidth="1" />

          {/* Compass rose - bottom right */}
          <g transform="translate(1080, 720)">
            <circle cx="0" cy="0" r="40" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="#c9a84c" strokeWidth="0.3" />
            <line x1="0" y1="-40" x2="0" y2="40" stroke="#c9a84c" strokeWidth="0.5" />
            <line x1="-40" y1="0" x2="40" y2="0" stroke="#c9a84c" strokeWidth="0.5" />
            <polygon points="0,-40 -5,-25 0,-15 5,-25" fill="#c9a84c" />
            <text x="0" y="-48" textAnchor="middle" fill="#c9a84c" fontSize="8" fontFamily="serif">N</text>
          </g>
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,27,42,0.95) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.9) 100%)" }} />

      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "#c9a84c" }} />

      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 font-medium"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Greater Cincinnati, Ohio
        </p>

        {/* Main headline */}
        <h1
          className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Design.
          <br />
          <span style={{ color: "#c9a84c" }}>Build.</span>
          <br />
          Remodel.
        </h1>

        {/* Subtext */}
        <p
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Ventura Builders Group crafts exceptional residential and commercial
          spaces across Greater Cincinnati — where vision meets craftsmanship.
        </p>

        {/* CTAs */}
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
            Start Your Project
          </button>
          <button
            onClick={() => scrollTo("#featured-project")}
            className="px-8 py-4 font-semibold text-sm tracking-wide rounded border transition-all duration-200 cursor-pointer w-full sm:w-auto"
            style={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "white",
              backgroundColor: "transparent",
              fontFamily: "var(--font-inter)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "white"; }}
          >
            View Our Work
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
