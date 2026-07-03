"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PROJECT_TYPES = ["Residential Construction", "Commercial Construction", "Turnkey Execution", "Renovation & Upgrades", "Infrastructure & Civil", "JV / Development Partnership", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", projectType: "", message: "" });
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
        <section style={{ paddingTop: "9rem", paddingBottom: "4rem", backgroundColor: "var(--carbon)", borderBottom: "1px solid var(--border-warm)" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Get in Touch</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "720px", marginBottom: "1.5rem" }}>
              Let&rsquo;s Discuss Your Next Project With Clarity.
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "540px" }}>
              Share your requirement and our team will guide the next steps with a practical, engineering-led approach. No obligation. No sales pressure. Just a structured conversation.
            </p>
          </div>
        </section>

        {/* Split: Info + Form */}
        <section className="section-py" style={{ backgroundColor: "var(--warm-white)" }}>
          <div className="container-lokra">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(3rem,7vw,7rem)", alignItems: "start" }}>

              {/* Left: Contact Info */}
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "2rem" }}>
                  Contact Information
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    { icon: MapPin, label: "Office Location", value: "Chennai, Tamil Nadu, India", sub: "Serving Chennai & surrounding districts" },
                    { icon: Phone, label: "Phone", value: "+91 00000 00000", sub: "Mon–Sat, 9am – 6pm IST" },
                    { icon: Mail, label: "Email", value: "info@lokrainfra.com", sub: "We respond within 1 business day" },
                    { icon: Clock, label: "Response Time", value: "Within 1 Business Day", sub: "For project inquiries & partnerships" },
                  ].map((item, i) => (
                    <div key={item.label} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.75rem 0", borderBottom: i < 3 ? "1px solid var(--border-light)" : "none" }}>
                      <div style={{ width: "44px", height: "44px", border: "1px solid var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: "var(--stone-white)" }}>
                        <item.icon size={16} style={{ color: "var(--accent)" }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark-2)", marginBottom: "0.25rem" }}>{item.label}</p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-dark)", fontWeight: 500, marginBottom: "0.25rem" }}>{item.value}</p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--text-dark-2)" }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick links */}
                <div style={{ marginTop: "3rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-dark-2)", marginBottom: "1.25rem" }}>
                    Looking For
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[{ label: "JV & Development Partnerships", href: "/jv-partnerships" }, { label: "Our Services", href: "/services" }, { label: "Our Process", href: "/process" }].map((link) => (
                      <Link key={link.href} href={link.href} className="btn-text" style={{ justifyContent: "flex-start" }}>
                        {link.label} <ArrowUpRight size={12} strokeWidth={2.5} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div style={{ backgroundColor: "var(--stone-white)", padding: "clamp(2rem,4vw,3rem)", border: "1px solid var(--border-light)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "3rem 0" }}>
                    <div style={{ width: "56px", height: "56px", backgroundColor: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", color: "white", fontSize: "1.5rem" }}>✓</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                      Inquiry Received
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--text-dark-2)", lineHeight: 1.7, maxWidth: "320px", margin: "0 auto" }}>
                      Thank you for reaching out. Our team will review your project details and respond within 1 business day.
                    </p>
                    <button onClick={() => setSubmitted(false)} style={{ marginTop: "2rem", fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", background: "none", border: "none", cursor: "pointer" }}>
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "2rem" }}>
                      Project Inquiry Form
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                      {[
                        { id: "contact-name", label: "Full Name", type: "text", key: "name", placeholder: "Your name", required: true },
                        { id: "contact-phone", label: "Phone Number", type: "tel", key: "phone", placeholder: "+91 00000 00000", required: true },
                      ].map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark)", display: "block", marginBottom: "0.5rem" }}>
                            {field.label} {field.required && <span style={{ color: "var(--accent)" }}>*</span>}
                          </label>
                          <input id={field.id} type={field.type} required={field.required} placeholder={field.placeholder} value={formData[field.key as keyof typeof formData]} onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                            style={{ width: "100%", padding: "0.875rem 1rem", backgroundColor: "var(--warm-white)", border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-dark)", outline: "none" }}
                          />
                        </div>
                      ))}
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <label htmlFor="contact-email" style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark)", display: "block", marginBottom: "0.5rem" }}>
                        Email Address <span style={{ color: "var(--accent)" }}>*</span>
                      </label>
                      <input id="contact-email" type="email" required placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: "100%", padding: "0.875rem 1rem", backgroundColor: "var(--warm-white)", border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-dark)", outline: "none" }}
                      />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <label htmlFor="contact-type" style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark)", display: "block", marginBottom: "0.5rem" }}>
                        Project Type <span style={{ color: "var(--accent)" }}>*</span>
                      </label>
                      <select id="contact-type" required value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        style={{ width: "100%", padding: "0.875rem 1rem", backgroundColor: "var(--warm-white)", border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: formData.projectType ? "var(--text-dark)" : "var(--text-dark-2)", outline: "none", appearance: "none", cursor: "pointer" }}
                      >
                        <option value="">Select project type...</option>
                        {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div style={{ marginBottom: "1.75rem" }}>
                      <label htmlFor="contact-message" style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dark)", display: "block", marginBottom: "0.5rem" }}>
                        Project Details <span style={{ color: "var(--accent)" }}>*</span>
                      </label>
                      <textarea id="contact-message" rows={5} required placeholder="Describe your project — location, approximate size, timeline, and any specific requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: "100%", padding: "0.875rem 1rem", backgroundColor: "var(--warm-white)", border: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-dark)", resize: "vertical", outline: "none", lineHeight: 1.65 }}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      <span>Send Project Inquiry</span>
                      <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                    </button>

                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-dark-2)", marginTop: "1rem", textAlign: "center", lineHeight: 1.5 }}>
                      We respond within 1 business day. Your information is not shared with third parties.
                    </p>
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
