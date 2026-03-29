import FadeIn from "./FadeIn";

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "50+", label: "Properties Built" },
  { value: "40", label: "Residences Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#c9a84c" }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div
                  className="text-4xl sm:text-5xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm tracking-widest uppercase font-semibold"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(13,27,42,0.75)" }}
                >
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
