import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by listening. In-depth conversations about your goals, timeline, budget, and the story you want your space to tell. We walk the site, study the context, and ask the questions most builders skip.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="20" r="8" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="20" r="2" fill="#c9a84c"/>
        <line x1="20" y1="2" x2="20" y2="8" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="32" x2="20" y2="38" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2" y1="20" x2="8" y2="20" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="32" y1="20" x2="38" y2="20" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our design team — working alongside Cincinnati's best architects — translates discovery into detailed plans. We iterate until every square foot reflects your vision, before budgets are locked and permits are filed.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="4" y="4" width="32" height="32" rx="2" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="14" x2="36" y2="14" stroke="#c9a84c" strokeWidth="1"/>
        <line x1="14" y1="14" x2="14" y2="36" stroke="#c9a84c" strokeWidth="1"/>
        <path d="M 20 20 L 28 28" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2" fill="#c9a84c"/>
        <circle cx="28" cy="28" r="2" fill="#c9a84c"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    description:
      "Ground breaks with complete transparency. You receive regular updates, site access, and a dedicated project manager. Our crews are on-site daily — not subbed out and forgotten. Quality is never negotiated away for speed.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <polygon points="20,2 38,36 2,36" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
        <rect x="14" y="24" width="6" height="12" fill="#c9a84c" opacity="0.4"/>
        <rect x="20" y="24" width="6" height="12" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <rect x="16" y="17" width="8" height="7" stroke="#c9a84c" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We hand over keys only when everything is right. A thorough walkthrough, complete documentation, and lasting relationships mean you're never left figuring it out alone after move-in day.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M 8 20 L 16 28 L 32 12" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="20" cy="20" r="18" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              How We Work
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
            >
              Our Process
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px" style={{ backgroundColor: "rgba(201,168,76,0.2)" }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* Number + icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: "#c9a84c", backgroundColor: "white" }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="absolute -top-2 -right-2 text-xs font-bold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: "#c9a84c",
                        color: "#0d1b2a",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}
                  >
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
