"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const POINTS = [
  { title: "Landowner-First Clarity", desc: "We begin every partnership conversation with a clear understanding of your position, goals, and expectations — before any development direction is presented. No assumptions. No premature proposals." },
  { title: "Feasibility Assessment", desc: "A thorough site and regulatory feasibility review is conducted before we present any development structure. You receive the information you need to make an informed decision — not a pitch designed to close you." },
  { title: "Transparent Development Terms", desc: "Revenue sharing, scope definitions, and delivery timelines are all documented with clarity. Verbal commitments are not our standard. Structured agreements are." },
  { title: "Verified Execution Capability", desc: "Our construction track record across residential and commercial projects is available for review. We do not ask partners to take our capabilities on faith." },
  { title: "Engineering-Led Development", desc: "Development proposals are built on structural feasibility, not optimistic projections. What we commit to is what can be engineered, planned, and delivered within the site's actual constraints." },
  { title: "Structured Communication", desc: "From initial discussion through development completion, every stage of the partnership is managed with regular updates, documented decisions, and clear progress tracking." },
];

export default function JVPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", landLocation: "", landArea: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: "9rem", paddingBottom: "5rem", backgroundColor: "var(--graphite,#25231F)", borderBottom: "1px solid var(--border-warm)" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">JV & Partnerships</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "800px", marginBottom: "1.5rem" }}>
              Structured Development Conversations For Landowners & Partners
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "600px" }}>
              If you own land in or around Chennai and are considering development, Lokra Infra offers a credible, engineering-led development conversation — not a speculative pitch. We approach joint ventures with the same clarity we bring to construction planning.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra">
            <div className="page-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem,6vw,7rem)", alignItems: "start" }}>
              {/* Left: who */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
                  <span className="label-sm">Who This Is For</span>
                </div>
                <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "1.75rem" }}>
                  Landowners & Development Partners
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    "Landowners with a plot in Chennai looking to develop",
                    "Individuals exploring residential or commercial development potential",
                    "Business partners seeking a credible construction execution partner",
                    "NRI landowners needing a trusted local development team",
                    "Investors evaluating Chennai real estate development opportunities",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem 0", borderBottom: "1px solid var(--border-warm)" }}>
                      <div style={{ width: "6px", height: "6px", backgroundColor: "var(--accent)", marginTop: "0.5rem", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--warm-white)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: what we offer */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
                  <span className="label-sm">What We Offer</span>
                </div>
                <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "1.75rem" }}>
                  Clarity Before Commitment
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {POINTS.map((pt, i) => (
                    <div key={pt.title} style={{ padding: "1.5rem 0", borderBottom: i < POINTS.length - 1 ? "1px solid var(--border-warm)" : "none" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontWeight: 600, textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{pt.title}</h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--concrete)" }}>{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="section-py" style={{ backgroundColor: "var(--warm-white)" }}>
          <div className="container-lokra">
            <div className="page-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem,6vw,7rem)", alignItems: "start" }}>
              {/* Left: context */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
                  <span className="label-sm light">Start the Conversation</span>
                </div>
                <h2 className="display-md" style={{ color: "var(--text-dark)", marginBottom: "1.5rem" }}>
                  Share Your Land Details
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--text-dark-2)", marginBottom: "2rem" }}>
                  Share your land location and basic details. Our team will review and come back with an initial feasibility perspective — no commitment required on either side.
                </p>
                <div style={{ backgroundColor: "var(--stone-white)", padding: "1.75rem", borderLeft: "2px solid var(--accent)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
                    Response Timeline
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-dark-2)", lineHeight: 1.6 }}>
                    We respond to all partnership inquiries within 2 business days. Initial feasibility discussion within 1 week of receiving site details.
                  </p>
                </div>
              </div>

              {/* Right: form */}
              <div style={{ backgroundColor: "var(--stone-white)", padding: "2.5rem", border: "1px solid var(--border-light)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "3rem 0" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.5rem" }}>✓</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "1rem" }}>Inquiry Received</h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-dark-2)", lineHeight: 1.7 }}>
                      Thank you. Our team will review your details and respond within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "2rem" }}>
                      Partnership Inquiry
                    </h3>

                    {[
                      { id: "jv-name", label: "Your Name", type: "text", key: "name", placeholder: "Full name" },
                      { id: "jv-phone", label: "Phone Number", type: "tel", key: "phone", placeholder: "+91 00000 00000" },
                      { id: "jv-email", label: "Email Address", type: "email", key: "email", placeholder: "you@example.com" },
                      { id: "jv-location", label: "Land Location", type: "text", key: "landLocation", placeholder: "Area / locality in Chennai" },
                      { id: "jv-area", label: "Approximate Land Area", type: "text", key: "landArea", placeholder: "e.g. 2400 sq ft / 5 grounds" },
                    ].map((field) => (
                      <div key={field.id} style={{ marginBottom: "1.25rem" }}>
                        <label htmlFor={field.id} style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark)", display: "block", marginBottom: "0.5rem" }}>
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          style={{ width: "100%", padding: "0.875rem 1rem", backgroundColor: "var(--warm-white)", border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-dark)", outline: "none" }}
                        />
                      </div>
                    ))}

                    <div style={{ marginBottom: "1.75rem" }}>
                      <label htmlFor="jv-message" style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark)", display: "block", marginBottom: "0.5rem" }}>
                        Additional Context
                      </label>
                      <textarea
                        id="jv-message"
                        rows={4}
                        placeholder="Development intent, questions, or any relevant details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: "100%", padding: "0.875rem 1rem", backgroundColor: "var(--warm-white)", border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-dark)", resize: "vertical", outline: "none" }}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      <span>Submit Partnership Inquiry</span>
                      <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
