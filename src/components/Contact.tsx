"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, wire this to an API endpoint / email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#f8f5ef" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}
            >
              Get In Touch
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
            >
              Start Your Project
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={100}>
              <div>
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                >
                  Reach Us Directly
                </h3>

                <div className="space-y-5">
                  <a
                    href="tel:5136266960"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#0d1b2a" }}
                    >
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M2 3a2 2 0 012-2h2.5a1 1 0 01.95.684l1 3a1 1 0 01-.27 1.036l-1.37 1.37a12.05 12.05 0 005.1 5.1l1.37-1.37a1 1 0 011.036-.27l3 1a1 1 0 01.684.95V16a2 2 0 01-2 2C5.372 18 2 10.627 2 3z" fill="#c9a84c"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}>Phone</div>
                      <div className="font-semibold group-hover:underline" style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}>(513) 626-6960</div>
                    </div>
                  </a>

                  <a
                    href="mailto:pete@venturabuildersgroup.com"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#0d1b2a" }}
                    >
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="#c9a84c"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="#c9a84c"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}>Email</div>
                      <div className="font-semibold group-hover:underline break-all" style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}>pete@venturabuildersgroup.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#0d1b2a" }}
                    >
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" fill="#c9a84c"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-inter)", color: "#c9a84c" }}>Service Area</div>
                      <div className="font-semibold" style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}>Greater Cincinnati, OH</div>
                      <div className="text-sm" style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}>Including Northern KY</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-xl p-6" style={{ backgroundColor: "#0d1b2a" }}>
                <p
                  className="text-white/70 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  We respond to every inquiry within one business day. For urgent
                  matters, Pete is reachable directly at the number above.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                    Currently accepting new projects
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form — 3 cols */}
          <FadeIn delay={150} className="lg:col-span-3">
            {submitted ? (
              <div
                className="rounded-xl p-12 text-center flex flex-col items-center justify-center h-full"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#c9a84c" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M5 13l4 4L19 7" stroke="#0d1b2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b2a" }}
                >
                  Message Received
                </h3>
                <p
                  className="text-base"
                  style={{ fontFamily: "var(--font-inter)", color: "#4a5568" }}
                >
                  Thank you — Pete or Miranda will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl p-8 bg-white shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2 font-semibold"
                      style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 transition-all"
                      style={{
                        fontFamily: "var(--font-inter)",
                        borderColor: "#e2e8f0",
                        color: "#0d1b2a",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2 font-semibold"
                      style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        fontFamily: "var(--font-inter)",
                        borderColor: "#e2e8f0",
                        color: "#0d1b2a",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2 font-semibold"
                      style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        fontFamily: "var(--font-inter)",
                        borderColor: "#e2e8f0",
                        color: "#0d1b2a",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      placeholder="(513) 555-0100"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2 font-semibold"
                      style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}
                    >
                      Project Type
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all bg-white"
                      style={{
                        fontFamily: "var(--font-inter)",
                        borderColor: "#e2e8f0",
                        color: form.projectType ? "#0d1b2a" : "#a0aec0",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    >
                      <option value="">Select one…</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="remodel">Remodel</option>
                      <option value="investment">Investment Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-wider mb-2 font-semibold"
                    style={{ fontFamily: "var(--font-inter)", color: "#0d1b2a" }}
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 text-sm outline-none transition-all resize-none"
                    style={{
                      fontFamily: "var(--font-inter)",
                      borderColor: "#e2e8f0",
                      color: "#0d1b2a",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    placeholder="Briefly describe your project, timeline, and location…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-semibold text-sm tracking-wide rounded-lg transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: "#0d1b2a",
                    color: "#c9a84c",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a2f45")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d1b2a")}
                >
                  Send Message
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
