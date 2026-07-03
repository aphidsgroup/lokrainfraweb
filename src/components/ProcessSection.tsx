"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Project Understanding",
    desc:
      "We begin with a structured conversation about your project requirement — scope, site, budget range, and timeline expectations. No obligation, no sales pressure.",
  },
  {
    num: "02",
    title: "Site & Scope Assessment",
    desc:
      "Our team visits the site, evaluates existing conditions, and provides a clear scope outline. We assess what is feasible before committing to any direction.",
  },
  {
    num: "03",
    title: "Planning & Cost Direction",
    desc:
      "We develop an engineering-led project plan with phased cost visibility. Clear scope, clear pricing model, structured breakdown — no vague estimates.",
  },
  {
    num: "04",
    title: "Execution Roadmap",
    desc:
      "A detailed execution timeline is established before construction begins. Material procurement, subcontractor coordination, and milestone tracking are set in advance.",
  },
  {
    num: "05",
    title: "Site Coordination",
    desc:
      "Our on-site team manages daily execution, material delivery, and quality review at each structural phase. Regular client updates with site documentation.",
  },
  {
    num: "06",
    title: "Quality Review & Handover",
    desc:
      "Final structural review, finishing checks, and a comprehensive walkthrough before handover. We deliver what was planned — nothing less.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const header = ref.current!.querySelector(".proc-header");
      const list = ref.current!.querySelector(".proc-list");
      const steps = ref.current!.querySelectorAll(".proc-step");
      if (header) gsap.from(header, { y: 36, opacity: 0, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: header, start: "top 85%" } });
      if (steps.length) gsap.from(steps, { y: 24, opacity: 0, duration: 0.65, stagger: 0.12, ease: "power2.out", scrollTrigger: { trigger: list || ref.current, start: "top 82%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="section-py"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="container-lokra">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 6vw, 7rem)",
            alignItems: "start",
          }}
        >
          {/* Left: sticky header */}
          <div
            className="proc-header"
            style={{
              position: "sticky",
              top: "100px",
            }}
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
              <span className="label-sm light">How We Work</span>
            </div>
            <h2
              className="display-md"
              style={{ color: "var(--text-dark)", marginBottom: "1.75rem" }}
            >
              A Structured Approach To Every Project
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.75,
                color: "var(--text-dark-2)",
                marginBottom: "2.5rem",
              }}
            >
              Our process is not a generic construction template. It is a
              disciplined project methodology developed from delivering
              residential and commercial projects across Chennai&rsquo;s
              demanding market.
            </p>

            {/* Progress bar visual */}
            <div
              style={{
                backgroundColor: "var(--stone-white)",
                padding: "1.5rem",
                borderLeft: "2px solid var(--accent)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-dark)",
                  marginBottom: "0.5rem",
                }}
              >
                6-Phase Delivery Model
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--text-dark-2)",
                  lineHeight: 1.5,
                }}
              >
                From first conversation to final handover — every phase is
                structured, documented, and client-visible.
              </p>
            </div>
          </div>

          {/* Right: steps */}
          <div className="proc-list">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="proc-step"
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "1.5rem",
                  paddingBottom: i < STEPS.length - 1 ? "3rem" : "0",
                  position: "relative",
                }}
              >
                {/* Connecting line */}
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "23px",
                      top: "48px",
                      bottom: "0",
                      width: "1px",
                      backgroundColor: "var(--border-light)",
                    }}
                  />
                )}

                {/* Step number circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid var(--border-light)",
                    backgroundColor: "var(--warm-white)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--accent)",
                    flexShrink: 0,
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div style={{ paddingTop: "0.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(0.9375rem, 1.3vw, 1.125rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      textTransform: "uppercase",
                      color: "var(--text-dark)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "var(--text-dark-2)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
