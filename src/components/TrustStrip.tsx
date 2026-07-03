"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "15+", label: "Years of Site Experience" },
  { value: "80+", label: "Projects Completed" },
  { value: "4", label: "Project Types Delivered" },
  { value: "100%", label: "Engineering-Led Approach" },
];

const CAPABILITIES = [
  "Residential Construction",
  "Commercial Construction",
  "Turnkey Execution",
  "JV Development",
  "Infrastructure & Civil",
  "Renovation & Upgrades",
];

export default function TrustStrip() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const stats = ref.current!.querySelectorAll(".trust-stat");
      const caps = ref.current!.querySelectorAll(".trust-cap");
      if (stats.length) {
        gsap.from(stats, {
          y: 32, opacity: 0, duration: 0.75, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        });
      }
      if (caps.length) {
        gsap.from(caps, {
          opacity: 0, x: -12, duration: 0.5, stagger: 0.07, ease: "power2.out",
          scrollTrigger: { trigger: caps[0].closest("div") || ref.current, start: "top 88%" },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trust"
      ref={ref}
      style={{
        backgroundColor: "var(--carbon)",
        borderTop: "1px solid var(--border-warm)",
        borderBottom: "1px solid var(--border-warm)",
      }}
    >
      {/* Stats row */}
      <div
        className="container-lokra"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
          }}
        >
          {STATS.map((s) => (
            <div key={s.value} className="trust-stat">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "var(--warm-white)",
                  marginBottom: "0.5rem",
                }}
              >
                {s.value.replace(/(\+|%)/g, "")}
                <span style={{ color: "var(--accent)" }}>
                  {s.value.match(/\+|%/) ? s.value.match(/\+|%/)![0] : ""}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--concrete)",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities ticker/list */}
      <div
        className="trust-caps"
        style={{
          borderTop: "1px solid var(--border-warm)",
          backgroundColor: "var(--charcoal)",
          padding: "1.25rem var(--container-x)",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0",
            flexWrap: "wrap",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
          }}
        >
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap}
              className="trust-cap"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--concrete)",
                  padding: "0 1.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                {cap}
              </span>
              {i < CAPABILITIES.length - 1 && (
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    opacity: 0.5,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
