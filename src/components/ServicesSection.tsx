"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    title: "Residential Construction",
    desc: "Independent homes, villas, and apartment development executed with structural clarity and disciplined site coordination from foundation to handover.",
    tags: ["Villas", "Apartments", "Independent Homes"],
  },
  {
    num: "02",
    title: "Commercial Construction",
    desc: "Office spaces, retail outlets, and commercial buildings built to specification with engineering-led planning and transparent scope management.",
    tags: ["Offices", "Retail", "Commercial Complexes"],
  },
  {
    num: "03",
    title: "Turnkey Project Execution",
    desc: "End-to-end project delivery from civil works to interior finishing. Single point of accountability, structured timelines, and quality review at every phase.",
    tags: ["End-to-End", "Single Accountability", "Structured Delivery"],
  },
  {
    num: "04",
    title: "Renovation & Structural Upgrades",
    desc: "Structured renovation with site assessment, scope clarity, and engineering review. No scope creep. No surprise billing.",
    tags: ["Renovation", "Structural Repair", "Upgrades"],
  },
  {
    num: "05",
    title: "Infrastructure & Civil Works",
    desc: "Civil infrastructure projects planned and executed with technical discipline — roads, compound works, drainage, and site development.",
    tags: ["Civil Works", "Site Development", "Infrastructure"],
  },
  {
    num: "06",
    title: "JV & Development Partnerships",
    desc: "Structured joint venture conversations for landowners and development partners. Feasibility-first, transparent terms, engineering credibility.",
    tags: ["Joint Ventures", "Landowner First", "Development"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-py"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="container-lokra">
        {/* Header */}
        <Reveal style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "flex-end",
              gap: "2rem",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
                <span className="label-sm light">What We Do</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--text-dark)", maxWidth: "520px" }}>
                Full-Spectrum Construction Capability
              </h2>
            </div>
            <Link href="/services" className="btn-text" style={{ color: "var(--accent)", whiteSpace: "nowrap" }}>
              All Services <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>

        {/* Services list */}
        <div>
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.num} delay={i * 60}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "2rem 0",
                  borderBottom: "1px solid var(--border-light)",
                  borderTop: i === 0 ? "1px solid var(--border-light)" : "none",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.25,0,0,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "var(--stone-white)";
                  el.style.paddingLeft = "1rem";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "transparent";
                  el.style.paddingLeft = "0";
                }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--accent)" }}>
                  {svc.num}
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.0625rem,1.5vw,1.3125rem)", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--text-dark)", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-dark-2)", maxWidth: "520px" }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap", marginTop: "0.875rem" }}>
                    {svc.tags.map((t) => (
                      <span key={t} style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid var(--accent-border,rgba(182,90,42,0.25))", padding: "3px 8px", backgroundColor: "rgba(182,90,42,0.06)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight size={18} strokeWidth={1.5} style={{ color: "var(--concrete)", flexShrink: 0 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
