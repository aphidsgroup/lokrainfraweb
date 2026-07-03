import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Lokra Infra | Construction & Infrastructure Chennai",
  description:
    "Full-spectrum construction services in Chennai: residential construction, commercial construction, turnkey execution, renovation, civil works, and JV development partnerships.",
};

const SERVICES = [
  {
    num: "01",
    title: "Residential Construction",
    desc: "From independent homes and villas to multi-unit apartment development, we deliver residential projects with engineering discipline and structured site coordination. Every project begins with a thorough site assessment and scope definition — not assumptions. Foundation to handover, one accountable team.",
    tags: ["Independent Homes", "Villas", "Apartment Development", "Plot + Construction"],
  },
  {
    num: "02",
    title: "Commercial Construction",
    desc: "Office spaces, retail outlets, showrooms, and commercial complexes built to specification with engineering-led planning and transparent scope management. We coordinate structural, MEP, and finishing works under a single execution framework — keeping timelines and costs visible throughout.",
    tags: ["Offices", "Retail Outlets", "Commercial Complexes", "Showrooms"],
  },
  {
    num: "03",
    title: "Turnkey Project Execution",
    desc: "End-to-end project delivery from civil works through interior finishing. Single point of accountability, structured milestone timelines, and quality review at every phase. No handoffs between fragmented contractors. No scope ambiguity. One delivery partner from ground-breaking to handover.",
    tags: ["End-to-End", "Single Accountability", "Milestone Delivery", "Finishing Works"],
  },
  {
    num: "04",
    title: "Renovation & Structural Upgrades",
    desc: "Structured renovation with prior site assessment, engineering scope review, and transparent billing. We approach renovation with the same discipline as new construction — no open-ended estimates, no scope creep, no surprise additions mid-project. Ideal for both residential and commercial properties.",
    tags: ["Residential Renovation", "Commercial Refits", "Structural Repair", "Upgrades"],
  },
  {
    num: "05",
    title: "Infrastructure & Civil Works",
    desc: "Civil infrastructure projects planned and executed with technical discipline. Roads, compound boundary works, drainage systems, site grading, and foundation-level infrastructure. Whether standalone civil works or part of a larger development, our engineering-led approach applies across all scales.",
    tags: ["Roads & Drainage", "Compound Works", "Site Development", "Foundation Works"],
  },
  {
    num: "06",
    title: "JV & Development Partnerships",
    desc: "Structured joint venture conversations for landowners and development partners. Feasibility-first assessment before any development direction. Transparent revenue-sharing terms, clear scope definitions, and a verified construction execution track. We approach partnerships with the same clarity we bring to construction.",
    tags: ["Joint Ventures", "Landowner Partnership", "Development Feasibility", "Revenue Sharing"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            paddingTop: "9rem",
            paddingBottom: "4rem",
            backgroundColor: "var(--charcoal)",
            borderBottom: "1px solid var(--border-warm)",
          }}
        >
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">What We Build</span>
            </div>
            <h1
              className="display-lg"
              style={{ color: "var(--warm-white)", maxWidth: "760px", marginBottom: "1.5rem" }}
            >
              Full-Spectrum Construction Capability
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "560px" }}>
              Lokra Infra operates across residential, commercial, turnkey, renovation, civil, and development partnership segments — with the same engineering-led execution standard applied to every project type.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section className="section-py" style={{ backgroundColor: "var(--warm-white)" }}>
          <div className="container-lokra">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: "2.5rem",
                  padding: "3rem 0",
                  borderBottom: "1px solid var(--border-light)",
                  borderTop: i === 0 ? "1px solid var(--border-light)" : "none",
                }}
              >
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--accent)" }}>
                    {svc.num}
                  </span>
                </div>
                <div>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,1.8vw,1.5rem)", fontWeight: 700, letterSpacing: "-0.01em", textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "1rem" }}
                  >
                    {svc.title}
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--text-dark-2)", maxWidth: "640px", marginBottom: "1.5rem" }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid rgba(182,90,42,0.25)", padding: "4px 10px", backgroundColor: "rgba(182,90,42,0.06)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)", padding: "4rem 0" }}>
          <div className="container-lokra" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
                Ready to Discuss a Project?
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,2vw,1.5rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--warm-white)" }}>
                Share Your Requirement — We&rsquo;ll Guide The Next Steps.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              <span>Start a Project Inquiry</span>
              <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
