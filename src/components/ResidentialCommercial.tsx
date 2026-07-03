"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RESIDENTIAL = [
  "Independent Homes",
  "Villas & Bungalows",
  "Apartment Development",
  "Plot + Construction",
  "Home Renovation",
  "Structural Upgrades",
];

const COMMERCIAL = [
  "Office Spaces",
  "Retail Outlets",
  "Commercial Complexes",
  "Showrooms & Studios",
  "Industrial Structures",
  "Turnkey Commercial",
];

export default function ResidentialCommercial() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const left = ref.current!.querySelector(".rc-left");
      const right = ref.current!.querySelector(".rc-right");
      if (left) gsap.from(left, { x: -40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
      if (right) gsap.from(right, { x: 40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capability"
      ref={ref}
      className="section-py"
      style={{ backgroundColor: "var(--carbon)" }}
    >
      <div className="container-lokra">
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div className="accent-bar" style={{ margin: 0 }} />
            <span className="label-sm">Our Capability</span>
          </div>
          <h2 className="display-md" style={{ color: "var(--warm-white)" }}>
            Residential &amp; Commercial — Both Segments, One Standard
          </h2>
        </div>

        {/* Split panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5px",
            backgroundColor: "var(--border-warm)",
          }}
        >
          {/* Residential */}
          <div
            className="rc-left"
            style={{
              backgroundColor: "var(--charcoal)",
              padding: "clamp(2rem, 4vw, 4rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background texture number */}
            <div
              style={{
                position: "absolute",
                right: "-0.5rem",
                bottom: "-1rem",
                fontFamily: "var(--font-display)",
                fontSize: "12rem",
                fontWeight: 900,
                color: "rgba(245,241,234,0.025)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              R
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "6px 12px",
                border: "1px solid var(--accent-border)",
                backgroundColor: "var(--accent-subtle)",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.5625rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Residential
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "var(--warm-white)",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Homes Built To Last
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--concrete)",
                marginBottom: "2.5rem",
                maxWidth: "400px",
              }}
            >
              From independent homes to multi-unit apartment development,
              Lokra Infra brings the same engineering discipline to residential
              projects that it applies to large-scale commercial work.
            </p>

            <ul style={{ listStyle: "none", marginBottom: "2.5rem" }}>
              {RESIDENTIAL.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--border-warm)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--warm-white)",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="btn-outline-dark"
              style={{ display: "inline-flex" }}
            >
              Residential Services
            </Link>
          </div>

          {/* Commercial */}
          <div
            className="rc-right"
            style={{
              backgroundColor: "var(--graphite)",
              padding: "clamp(2rem, 4vw, 4rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "-0.5rem",
                bottom: "-1rem",
                fontFamily: "var(--font-display)",
                fontSize: "12rem",
                fontWeight: 900,
                color: "rgba(245,241,234,0.025)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              C
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "6px 12px",
                border: "1px solid rgba(182,90,42,0.3)",
                backgroundColor: "var(--accent-subtle)",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.5625rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Commercial
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "var(--warm-white)",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Spaces Built For Performance
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--concrete)",
                marginBottom: "2.5rem",
                maxWidth: "400px",
              }}
            >
              Our commercial construction capability is built on the same
              engineering-led process as our residential work — with the added
              complexity of commercial specifications, tenant requirements, and
              longer delivery timelines.
            </p>

            <ul style={{ listStyle: "none", marginBottom: "2.5rem" }}>
              {COMMERCIAL.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(245,241,234,0.07)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--warm-white)",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="btn-outline-dark"
              style={{ display: "inline-flex" }}
            >
              Commercial Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
