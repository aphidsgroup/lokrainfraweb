"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    num: "01",
    title: "Engineering-Led Planning",
    desc:
      "Every project begins with structural assessment, site review, and engineering clarity — not assumptions. Our planning phase is as rigorous as our execution.",
  },
  {
    num: "02",
    title: "Transparent Scope & Communication",
    desc:
      "Clients receive clear scope documentation, phased timelines, and regular site updates. No ambiguity. No hidden changes. Structured communication throughout.",
  },
  {
    num: "03",
    title: "Site Discipline",
    desc:
      "Our site teams operate with coordinated daily schedules, quality checkpoints, and accountability at every stage. Discipline on-site produces quality off-site.",
  },
  {
    num: "04",
    title: "Quality-Focused Execution",
    desc:
      "Material selection, workmanship standards, and structural review are embedded in our delivery process — not added as afterthoughts at handover.",
  },
  {
    num: "05",
    title: "Residential & Commercial Capability",
    desc:
      "We operate across both residential and commercial segments with equal competence. From independent homes to commercial office blocks.",
  },
  {
    num: "06",
    title: "Chennai Market Understanding",
    desc:
      "Built in and for Chennai. We understand the regulatory environment, contractor ecosystem, material suppliers, and client expectations of this market.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const header = ref.current!.querySelector(".why-header");
      const pillars = ref.current!.querySelectorAll(".why-pillar");
      const grid = ref.current!.querySelector(".why-grid");
      if (header) gsap.from(header, { y: 36, opacity: 0, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: header, start: "top 85%" } });
      if (pillars.length) gsap.from(pillars, { y: 28, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: grid || ref.current, start: "top 82%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-lokra"
      ref={ref}
      className="section-py"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="container-lokra">
        {/* Header */}
        <div
          className="why-header"
          style={{ marginBottom: "4.5rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div className="accent-bar" style={{ margin: 0 }} />
            <span className="label-sm">Why Lokra Infra</span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "end",
            }}
          >
            <h2
              className="display-md"
              style={{ color: "var(--warm-white)" }}
            >
              Built On Clarity, Discipline, And Construction Credibility
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.75,
                color: "var(--concrete)",
              }}
            >
              We are not a brokerage or a referral network. Lokra Infra is a
              hands-on construction and infrastructure company with real site
              presence, engineering-led planning, and a disciplined delivery
              record.
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            borderTop: "1px solid var(--border-warm)",
            borderLeft: "1px solid var(--border-warm)",
          }}
        >
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="why-pillar"
              style={{
                padding: "2.5rem",
                borderRight: "1px solid var(--border-warm)",
                borderBottom: "1px solid var(--border-warm)",
                transition: "background-color 0.35s cubic-bezier(0.25,0,0,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--graphite)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "var(--accent)",
                  marginBottom: "1.5rem",
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(0.9375rem, 1.3vw, 1.125rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color: "var(--warm-white)",
                  marginBottom: "1rem",
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "var(--concrete)",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
