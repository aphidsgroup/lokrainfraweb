"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const header = ref.current!.querySelector(".testi-header");
      const grid = ref.current!.querySelector(".testi-grid");
      const cards = ref.current!.querySelectorAll(".testi-card");
      if (header) gsap.from(header, { y: 36, opacity: 0, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: header, start: "top 85%" } });
      if (cards.length) gsap.from(cards, { y: 32, opacity: 0, duration: 0.75, stagger: 0.14, ease: "power2.out", scrollTrigger: { trigger: grid || ref.current, start: "top 82%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const CLIENT_PRIORITIES = [
    {
      title: "Clear Scope Before Work Starts",
      detail:
        "Clients want to know what is included, what is excluded, and how the job will move from planning to handover before site work begins.",
      context: "Scope clarity and decision discipline",
    },
    {
      title: "Regular Site Updates",
      detail:
        "Serious project owners expect visible progress, milestone clarity, and timely communication instead of having to chase for updates.",
      context: "Structured communication during execution",
    },
    {
      title: "Accountability On Quality",
      detail:
        "The biggest trust driver in construction is not a slogan. It is whether workmanship, materials, and finishing decisions are reviewed with discipline at the right time.",
      context: "Quality checks, execution review, and handover discipline",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-py"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="container-lokra">
        {/* Header */}
        <div
          className="testi-header"
          style={{ marginBottom: "4rem", maxWidth: "640px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "var(--accent)",
              }}
            />
            <span className="label-sm light">What Serious Clients Care About</span>
          </div>
          <h2
            className="display-md"
            style={{ color: "var(--text-dark)" }}
          >
            Trust In Construction Comes From Process, Visibility, And Accountability
          </h2>
        </div>

        {/* Testimonials grid */}
        <div
          className="testi-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
            backgroundColor: "var(--border-light)",
          }}
        >
          {CLIENT_PRIORITIES.map((t) => (
            <div
              key={t.title}
              className="testi-card"
              style={{
                backgroundColor: "var(--warm-white)",
                padding: "clamp(1.75rem, 3vw, 2.75rem)",
                position: "relative",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--stone-white)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--warm-white)";
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  lineHeight: 1,
                  color: "var(--accent)",
                  opacity: 1,
                  marginBottom: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                CLIENT PRIORITY
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem, 1.3vw, 1.125rem)",
                  lineHeight: 1.4,
                  color: "var(--text-dark)",
                  marginBottom: "1rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                {t.title}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                  lineHeight: 1.75,
                  color: "var(--text-dark)",
                  marginBottom: "2rem",
                  fontWeight: 400,
                }}
              >
                {t.detail}
              </p>

              <div
                style={{
                  borderTop: "1px solid var(--border-light)",
                  paddingTop: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-dark)",
                    marginBottom: "0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.context}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--text-dark-2)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Engineering-led construction expectations
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-dark-2)",
            marginTop: "1.5rem",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Client-specific references and project discussions are shared during direct conversations based on project fit, scope, and confidentiality.
        </p>
      </div>
    </section>
  );
}
