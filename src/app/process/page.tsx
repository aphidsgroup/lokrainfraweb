import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Process — Lokra Infra | How We Work",
  description:
    "Lokra Infra's 6-phase construction delivery process — from project understanding and site assessment through engineering planning, execution, quality review, and handover.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Our Process — Lokra Infra | How We Work",
    description:
      "Lokra Infra's 6-phase construction delivery process — from project understanding and site assessment through engineering planning, execution, quality review, and handover.",
    url: "https://www.lokrainfra.in/process",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const STEPS = [
  {
    num: "01",
    title: "Project Understanding",
    desc: "We begin with a structured conversation about your project requirement — scope, site, budget range, and timeline expectations. This is not a sales meeting. It is a practical discussion to understand whether we are the right fit for your project, and whether your project is the right fit for our execution approach.",
    duration: "1–2 Sessions",
  },
  {
    num: "02",
    title: "Site & Scope Assessment",
    desc: "Our team visits the site, evaluates existing conditions, and provides a clear scope outline based on physical reality — not assumptions. We assess soil conditions, access, setback requirements, structural constraints, and local regulatory conditions before committing to any direction.",
    duration: "3–7 Days",
  },
  {
    num: "03",
    title: "Planning & Cost Direction",
    desc: "We develop an engineering-led project plan with phased cost visibility. Clear scope, clear pricing model, structured breakdown. No vague lump-sum estimates that change after agreement. The planning phase produces a document you can review, question, and build confidence from before signing off.",
    duration: "7–14 Days",
  },
  {
    num: "04",
    title: "Execution Roadmap",
    desc: "A detailed execution timeline is established before construction begins. Material procurement schedules, subcontractor coordination plans, milestone targets, and quality checkpoints are all defined. This roadmap becomes the operating document for the entire project — visible to you at every stage.",
    duration: "3–5 Days",
  },
  {
    num: "05",
    title: "Site Coordination",
    desc: "Our on-site team manages daily execution, material delivery, and quality review at each structural phase. Regular client updates are provided with site documentation — photos, progress notes, and milestone confirmations. You are never left wondering what is happening on your site.",
    duration: "Project Duration",
  },
  {
    num: "06",
    title: "Quality Review & Handover",
    desc: "Final structural review, finishing checks, punch-list completion, and a comprehensive walkthrough before handover. We do not declare a project complete until it meets our quality standards — and yours. Handover documentation, warranty information, and post-completion support are all part of the process.",
    duration: "7–14 Days",
  },
];

const processFaqs = [
  {
    q: "How early should I speak to Lokra Infra before starting construction?",
    a: "Ideally, before finalising the execution model or locking the build budget. Early discussion helps align site reality, scope, timing, and cost direction before decisions become expensive to change.",
  },
  {
    q: "At what stage do I get cost clarity?",
    a: "Cost direction is shaped during the planning phase after site and scope assessment. That is when the project moves from broad expectation to a clearer execution path with better visibility on what is included and how the work will be phased.",
  },
  {
    q: "Will I receive updates during construction?",
    a: "Yes. The process is built around visible milestones, site coordination, and regular progress communication so you are not left guessing what is happening on site.",
  },
  {
    q: "What happens before handover?",
    a: "Before handover, the project goes through final quality review, finishing checks, correction of pending items, and a client walkthrough. The goal is to close the project in a controlled way, not rush to the keys stage.",
  },
];

const processFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: processFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const processPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Lokra Infra Process",
  url: "https://www.lokrainfra.in/process",
  description:
    "Lokra Infra's structured six-phase construction delivery process from project understanding and site assessment through planning, execution, quality review, and handover.",
  about: {
    "@type": "Service",
    name: "Engineering-led construction delivery process",
    provider: {
      "@type": "Organization",
      name: "Lokra Infra",
      url: "https://www.lokrainfra.in",
    },
    areaServed: "Chennai, Tamil Nadu, India",
  },
};

const processBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lokrainfra.in/" },
    { "@type": "ListItem", position: 2, name: "Process", item: "https://www.lokrainfra.in/process" },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processFaqSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: "9rem", paddingBottom: "5rem", backgroundColor: "var(--charcoal)", borderBottom: "1px solid var(--border-warm)" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">How We Work</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "800px", marginBottom: "1.5rem" }}>
              A Structured Approach To Every Project
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "600px" }}>
              Our process is not a generic construction template. It is a disciplined project methodology developed from delivering residential and commercial projects across Chennai&rsquo;s demanding market — where clarity and site discipline matter more than promises.
            </p>
          </div>
        </section>

        {/* Process steps */}
        <section className="section-py" style={{ backgroundColor: "var(--warm-white)" }}>
          <div className="container-lokra">
            {/* Intro banner */}
            <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5px", backgroundColor: "var(--border-light)", marginBottom: "5rem" }}>
              {[["6-Phase Model", "From first conversation to final handover"], ["Single Team", "One accountable partner throughout"], ["Client Visible", "Progress documented at every milestone"]].map(([title, desc]) => (
                <div key={title} style={{ backgroundColor: "var(--stone-white)", padding: "2rem", borderLeft: "2px solid var(--accent)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--text-dark)", marginBottom: "0.5rem" }}>{title}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-dark-2)" }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div style={{ maxWidth: "800px" }}>
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: "2rem",
                    paddingBottom: i < STEPS.length - 1 ? "3.5rem" : "0",
                    position: "relative",
                  }}
                >
                  {/* Connecting line */}
                  {i < STEPS.length - 1 && (
                    <div style={{ position: "absolute", left: "27px", top: "56px", bottom: "0", width: "1px", backgroundColor: "var(--border-light)" }} />
                  )}

                  {/* Step circle */}
                  <div style={{ width: "56px", height: "56px", border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--accent)", flexShrink: 0, position: "relative", zIndex: 1 }}>
                    {step.num}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: "0.875rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.875rem", flexWrap: "wrap" }}>
                      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem,1.5vw,1.25rem)", fontWeight: 700, letterSpacing: "-0.01em", textTransform: "uppercase", color: "var(--text-dark)" }}>
                        {step.title}
                      </h2>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid rgba(182,90,42,0.25)", padding: "4px 10px", whiteSpace: "nowrap" }}>
                        {step.duration}
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--text-dark-2)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--warm-white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="container-lokra" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">FAQ</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--text-dark)", marginBottom: "1.5rem" }}>
              Common Questions About How Lokra Works
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {processFaqs.map((faq) => (
                <details key={faq.q} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--stone-white)", padding: "1rem 1.1rem" }}>
                  <summary style={{ cursor: "pointer", listStyle: "none", fontFamily: "var(--font-display)", fontSize: "0.92rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", lineHeight: 1.5 }}>
                    {faq.q}
                  </summary>
                  <p style={{ marginTop: "0.85rem", fontFamily: "var(--font-body)", fontSize: "0.93rem", lineHeight: 1.75, color: "var(--text-dark-2)" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)", padding: "4rem 0" }}>
          <div className="container-lokra" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
                Start the Process
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,2vw,1.5rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--warm-white)" }}>
                Ready to Begin with Phase One?
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              <span>Discuss Your Project</span>
              <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
