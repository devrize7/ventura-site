import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Pete and Miranda didn't just build our home — they listened to every detail of what we wanted and delivered something we didn't even know was possible. The craftsmanship on every finish is extraordinary.",
    name: "Sarah & Tom H.",
    role: "Hyde Park Custom Home",
    initials: "SH",
  },
  {
    quote:
      "From the first meeting to the ribbon cutting, Ventura Builders was professional, communicative, and on budget. Our retail tenants were so impressed they signed early. The construction quality speaks for itself.",
    name: "Marcus D.",
    role: "Rookwood Commons Retail",
    initials: "MD",
  },
  {
    quote:
      "As a developer, I've worked with a lot of contractors. The Ventura team is different — they genuinely care about the outcome, not just the contract. Our Anderson Township project sold out before we finished. That says everything.",
    name: "Jennifer W.",
    role: "Investment Townhomes",
    initials: "JW",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              What Clients Say
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
            >
              100% Client Satisfaction
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 120}>
              <div
                className="rounded-xl p-8 flex flex-col h-full"
                style={{ backgroundColor: "#f8f5ef" }}
              >
                {/* Quote mark */}
                <svg
                  viewBox="0 0 40 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-6 mb-5 opacity-60"
                >
                  <path
                    d="M0 30 L8 0 L18 0 L10 30 Z M22 30 L30 0 L40 0 L32 30 Z"
                    fill="#c9a84c"
                  />
                </svg>

                <p
                  className="text-base leading-relaxed flex-1 mb-6"
                  style={{ fontFamily: "var(--font-inter)", color: "#2d3748" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      backgroundColor: "#0d1b2a",
                      color: "#c9a84c",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} viewBox="0 0 16 16" fill="#c9a84c" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                      <path d="M8 1l1.5 4.5H14l-3.7 2.7 1.4 4.3L8 9.8l-3.7 2.7 1.4-4.3L2 5.5h4.5z" />
                    </svg>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
