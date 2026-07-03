"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    title: "Landowner-First Clarity",
    desc: "We begin every partnership conversation with a clear understanding of the landowner's position, expectations, and long-term goals — before any development proposal.",
  },
  {
    title: "Feasibility Assessment",
    desc: "Our team conducts a thorough site and feasibility review before presenting any development direction — giving partners the information they need to make informed decisions.",
  },
  {
    title: "Transparent Terms",
    desc: "Development agreements are structured with clear revenue sharing, scope definitions, and delivery timelines. No ambiguity. No verbal-only commitments.",
  },
  {
    title: "Credible Execution Track",
    desc: "Partners and landowners can review our residential and commercial delivery track record — construction capability is demonstrated, not claimed.",
  },
];

export default function JVSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const content = ref.current!.querySelector(".jv-content");
      if (content) gsap.from(content, { y: 40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="jv-partnerships"
      ref={ref}
      style={{
        backgroundColor: "var(--graphite)",
        borderTop: "1px solid var(--border-warm)",
      }}
      className="section-py"
    >
      <div className="container-lokra">
        <div
          className="jv-content"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 7vw, 8rem)",
            alignItems: "center",
          }}
        >
          {/* Left: editorial block */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              <div className="accent-bar" style={{ margin: 0 }} />
              <span className="label-sm">JV &amp; Partnerships</span>
            </div>

            <h2
              className="display-md"
              style={{ color: "var(--warm-white)", marginBottom: "1.5rem" }}
            >
              Structured Development Conversations For Landowners &amp; Partners
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.75,
                color: "var(--concrete)",
                marginBottom: "2rem",
              }}
            >
              If you own land in or around Chennai and are considering
              development, Lokra Infra offers a credible, engineering-led
              development conversation — not a speculative pitch. We approach
              joint ventures with the same clarity we bring to construction
              planning.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.75,
                color: "var(--concrete)",
                marginBottom: "3rem",
              }}
            >
              For business stakeholders and investors, we offer structured
              development partnerships with transparent project scope, clear
              financial models, and verified construction execution capability.
            </p>

            <Link href="/jv-partnerships" className="btn-primary">
              <span>Discuss a Partnership</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                style={{ position: "relative", zIndex: 1 }}
              />
            </Link>
          </div>

          {/* Right: points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {POINTS.map((pt, i) => (
              <div
                key={pt.title}
                style={{
                  padding: "2rem 0",
                  borderBottom:
                    i < POINTS.length - 1
                      ? "1px solid var(--border-warm)"
                      : "none",
                  borderTop: i === 0 ? "1px solid var(--border-warm)" : "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "var(--warm-white)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {pt.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "var(--concrete)",
                  }}
                >
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem 3rem",
            backgroundColor: "var(--carbon)",
            borderLeft: "3px solid var(--accent)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.375rem",
              }}
            >
              For Landowners &amp; Development Partners
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.2vw, 1.125rem)",
                color: "var(--warm-white)",
                fontWeight: 400,
              }}
            >
              Share your land details. We will present a structured feasibility
              overview — no commitment required.
            </p>
          </div>
          <Link href="/jv-partnerships" className="btn-outline-dark">
            Start the Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
