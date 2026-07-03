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

  const TESTIMONIALS = [
    {
      quote:
        "The site coordination was exceptional from day one. We had clear communication throughout, and the structural quality exceeded our expectations.",
      name: "Homeowner, Velachery",
      project: "Independent Home — 3200 sq ft",
    },
    {
      quote:
        "What we appreciated most was the transparency. No surprise costs. No scope changes without prior discussion. The delivery was on schedule.",
      name: "Business Owner, Anna Nagar",
      project: "Commercial Office — Ground Floor",
    },
    {
      quote:
        "The JV process was handled with professionalism. Clear terms, fair structure, and a team that understood our land's development potential.",
      name: "Landowner, Tambaram",
      project: "JV Development — Residential Complex",
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
            <span className="label-sm light">Client Perspective</span>
          </div>
          <h2
            className="display-md"
            style={{ color: "var(--text-dark)" }}
          >
            Built On Clarity, Site Discipline, And Long-Term Trust
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
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
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
                  fontFamily: "Georgia, serif",
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "var(--accent)",
                  opacity: 0.3,
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                &ldquo;
              </div>

              <blockquote
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                  lineHeight: 1.75,
                  color: "var(--text-dark)",
                  fontStyle: "italic",
                  marginBottom: "2rem",
                  fontWeight: 300,
                }}
              >
                {t.quote}
              </blockquote>

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
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--text-dark-2)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.project}
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
          * Testimonials are representative placeholders. Real client
          references available on request.
        </p>
      </div>
    </section>
  );
}
