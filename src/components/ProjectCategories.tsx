"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    id: "premium-homes",
    label: "Premium Homes",
    desc: "Bespoke independent homes built with precision engineering and refined material execution.",
    size: "large", // spans 2 cols
    accent: "#B65A2A",
  },
  {
    id: "villas",
    label: "Independent Villas",
    desc: "Architect-designed villas with structural clarity and site-coordinated delivery.",
    size: "small",
    accent: "#B65A2A",
  },
  {
    id: "apartments",
    label: "Apartment Development",
    desc: "Multi-unit residential development from planning to structural completion.",
    size: "small",
    accent: "#B65A2A",
  },
  {
    id: "commercial",
    label: "Commercial Spaces",
    desc: "Office, retail, and commercial buildings engineered for long-term performance.",
    size: "small",
    accent: "#B65A2A",
  },
  {
    id: "civil",
    label: "Infrastructure & Civil",
    desc: "Civil works and site infrastructure executed with technical discipline.",
    size: "small",
    accent: "#B65A2A",
  },
  {
    id: "jv",
    label: "JV Development",
    desc: "Partnership-driven development projects for landowners and investors.",
    size: "large",
    accent: "#B65A2A",
  },
];

// Placeholder color blocks representing project images
const COLORS = [
  "#1A1816",
  "#252220",
  "#201F1D",
  "#1E1C1A",
  "#222019",
  "#1C1B18",
];

export default function ProjectCategories() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const header = ref.current!.querySelector(".proj-header");
      const grid = ref.current!.querySelector(".proj-grid");
      const cards = ref.current!.querySelectorAll(".proj-card");
      if (header) gsap.from(header, { y: 36, opacity: 0, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: header, start: "top 85%" } });
      if (cards.length) gsap.from(cards, { y: 32, opacity: 0, duration: 0.75, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: grid || ref.current, start: "top 82%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-py"
      style={{ backgroundColor: "var(--carbon)" }}
    >
      <div className="container-lokra">
        {/* Header */}
        <div
          className="proj-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div className="accent-bar" style={{ margin: 0 }} />
              <span className="label-sm">Project Categories</span>
            </div>
            <h2
              className="display-md"
              style={{ color: "var(--warm-white)" }}
            >
              What We Build
            </h2>
          </div>
          <Link
            href="/projects"
            className="btn-text"
            style={{ color: "var(--accent)" }}
          >
            View All Projects <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Project grid — 3 columns on desktop */}
        <div
          className="proj-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1.5px",
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className="proj-card project-card"
              style={{
                gridColumn: cat.size === "large" ? "span 2" : "span 1",
                aspectRatio:
                  cat.size === "large" ? "16 / 7" : "4 / 3",
                backgroundColor: COLORS[i],
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background texture */}
              <div
                className="card-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: COLORS[i],
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(245,241,234,0.02) 0px, rgba(245,241,234,0.02) 1px, transparent 1px, transparent 40px)",
                }}
              />

              {/* Overlay */}
              <div className="card-overlay" />
              <div className="card-overlay-hover" />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  padding: "clamp(1.25rem, 3vw, 2rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.5625rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {`0${i + 1}`}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(0.9375rem, 1.5vw, 1.3125rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    color: "var(--warm-white)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    lineHeight: 1.55,
                    color: "var(--muted-sand)",
                    maxWidth: "320px",
                  }}
                >
                  {cat.desc}
                </p>
              </div>

              {/* Corner arrow */}
              <div
                style={{
                  position: "absolute",
                  top: "clamp(1rem, 2vw, 1.5rem)",
                  right: "clamp(1rem, 2vw, 1.5rem)",
                  zIndex: 2,
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                className="card-arrow"
              >
                <ArrowUpRight
                  size={18}
                  style={{ color: "var(--warm-white)" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            color: "var(--concrete)",
            marginTop: "2.5rem",
            textAlign: "center",
            opacity: 0.6,
          }}
        >
          Project imagery will be updated with completed projects. Contact us to
          discuss your requirement.
        </p>
      </div>
    </section>
  );
}
