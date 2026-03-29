"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Featured Project", href: "#featured-project" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Design",
  "Build",
  "Remodel",
  "Residential",
  "Commercial",
  "Investment Properties",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#060f1a" }}>
      {/* Gold top bar */}
      <div className="h-1" style={{ backgroundColor: "#c9a84c" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="18,2 34,32 2,32" fill="none" stroke="#c9a84c" strokeWidth="2" />
                <rect x="12" y="20" width="5" height="12" fill="#c9a84c" />
                <rect x="19" y="20" width="5" height="12" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
                <rect x="14" y="14" width="8" height="6" fill="none" stroke="#c9a84c" strokeWidth="1.5" />
              </svg>
              <div>
                <div className="text-white font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>
                  Ventura
                </div>
                <div className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
                  Builders Group
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.5)" }}
            >
              Crafting exceptional residential and commercial spaces across Greater
              Cincinnati since 2014. Built on trust, delivered with precision.
            </p>
            <div className="flex gap-3">
              {/* Social placeholders */}
              {["in", "fb", "ig"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold cursor-pointer transition-colors duration-200 hover:bg-[#c9a84c] hover:text-[#0d1b2a]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0 text-left"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0 text-left"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-inter)", color: "rgba(201,168,76,0.6)" }}>Phone</div>
                <a
                  href="tel:5136266960"
                  className="text-sm hover:text-[#c9a84c] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.7)" }}
                >
                  (513) 626-6960
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-inter)", color: "rgba(201,168,76,0.6)" }}>Email</div>
                <a
                  href="mailto:pete@venturabuildersgroup.com"
                  className="text-sm hover:text-[#c9a84c] transition-colors duration-200 break-all"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.7)" }}
                >
                  pete@venturabuildersgroup.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-inter)", color: "rgba(201,168,76,0.6)" }}>Location</div>
                <p className="text-sm" style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.7)" }}>
                  Greater Cincinnati, OH<br />
                  Including Northern KY
                </p>
              </div>
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-2 text-xs px-4 py-2.5 rounded font-semibold tracking-wide cursor-pointer transition-colors duration-200"
                style={{
                  backgroundColor: "#c9a84c",
                  color: "#0d1b2a",
                  fontFamily: "var(--font-inter)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8842e")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.3)" }}
          >
            © {new Date().getFullYear()} Ventura Builders Group. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.3)" }}
          >
            Cincinnati, Ohio · Licensed & Insured · OH Contractor License
          </p>
        </div>
      </div>
    </footer>
  );
}
