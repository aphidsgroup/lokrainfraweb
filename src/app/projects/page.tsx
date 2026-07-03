import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Lokra Infra | Construction Portfolio Chennai",
  description:
    "Lokra Infra construction project portfolio — residential homes, villas, apartment developments, commercial spaces, civil works, and JV development projects across Chennai.",
};

const CATEGORIES = [
  { id: "homes", num: "01", label: "Premium Homes", desc: "Bespoke independent homes built with precision engineering and refined material execution across Chennai residential zones." },
  { id: "villas", num: "02", label: "Independent Villas", desc: "Architect-designed villas with structural clarity, high-quality material selection, and disciplined site-coordinated delivery." },
  { id: "apartments", num: "03", label: "Apartment Development", desc: "Multi-unit residential development from structural planning through finishing — delivered as a coordinated single-team project." },
  { id: "commercial", num: "04", label: "Commercial Spaces", desc: "Offices, retail outlets, and commercial buildings engineered for long-term performance and practical usability." },
  { id: "civil", num: "05", label: "Infrastructure & Civil", desc: "Civil works and site infrastructure executed with technical discipline — roads, drainage, compound structures, and site development." },
  { id: "jv", num: "06", label: "JV Development Projects", desc: "Partnership-driven development projects structured with feasibility clarity and engineering execution credibility for landowners." },
];

const BG_SHADES = ["#1A1816", "#1E1C19", "#201F1D", "#1C1B17", "#211F1C", "#191817"];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{ paddingTop: "9rem", paddingBottom: "4rem", backgroundColor: "var(--carbon)", borderBottom: "1px solid var(--border-warm)" }}
        >
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Our Work</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "720px", marginBottom: "1.5rem" }}>
              Our Project Portfolio
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "520px", marginBottom: "2.5rem" }}>
              Lokra Infra delivers residential, commercial, and infrastructure projects across Chennai with engineering discipline and structured execution.
            </p>
            <div style={{ display: "inline-flex", padding: "1rem 1.5rem", backgroundColor: "var(--charcoal)", borderLeft: "2px solid var(--accent)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--concrete)" }}>
                📸 Active project gallery in development. Contact us to review project references and site documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories grid */}
        <section className="section-py" style={{ backgroundColor: "var(--carbon)" }}>
          <div className="container-lokra">
            <div
              className="page-grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5px",
                backgroundColor: "var(--border-warm)",
                marginBottom: "4rem",
              }}
            >
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat.id}
                  style={{
                    backgroundColor: BG_SHADES[i],
                    aspectRatio: "4 / 3",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Texture overlay */}
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,rgba(245,241,234,0.02) 0,rgba(245,241,234,0.02) 1px,transparent 1px,transparent 40px)" }} />
                  {/* Gradient */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(11,11,10,0.85) 0%,transparent 65%)" }} />
                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "0.5rem" }}>
                      {cat.num}
                    </span>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.9375rem,1.4vw,1.125rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--warm-white)", marginBottom: "0.5rem" }}>
                      {cat.label}
                    </h2>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--muted-sand,#C4B6A4)" }}>
                      {cat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to contact */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", color: "var(--concrete)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Looking for project references or want to discuss a project similar to these categories?<br />
                Our team will walk you through relevant site documentation and execution examples.
              </p>
              <Link href="/contact" className="btn-primary">
                <span>Request Project References</span>
                <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
