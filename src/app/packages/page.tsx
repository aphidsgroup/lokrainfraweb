import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, FileText, Layers3, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Construction Packages — Lokra Infra | Detailed Package Comparison Chennai",
  description:
    "Compare Lokra Infra construction packages in detail — Material-Contract Entry, Enhanced Envelope, Verified Structural, Assured Structural, Engineered Essential, Engineered Standard, High-Performance, Coastal Durability, and Extended-Life Signature.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Lokra Infra Construction Packages — Detailed Comparison",
    description:
      "A detailed Lokra Infra packages page with engineering-first construction package comparison, rate ladder, and exact package comparison sheets.",
    url: "https://www.lokrainfra.in/packages",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
  keywords: [
    "construction packages Chennai",
    "house construction package comparison Chennai",
    "construction cost per sq ft Chennai",
    "villa construction package Chennai",
    "Lokra Infra packages",
    "residential construction packages Tamil Nadu",
    "engineering-led construction packages",
  ],
};

type PackageLevel = {
  id: string;
  level: string;
  name: string;
  subtitle: string;
  rate: string;
  highlights: string[];
  bestFor: string;
  image: string;
};

const packageLevels: PackageLevel[] = [
  {
    id: "ls-1",
    level: "LS-1",
    name: "Material-Contract Entry",
    subtitle: "Full structural engineering at an economical named-brand specification.",
    rate: "₹1,899 / sq.ft.",
    image: "/packages/page-008.jpg",
    highlights: [
      "ARS / iSTEEL / Vikil / Suryadev / Tirumala / Pulkit reinforcement grade to approved structural design and MTC",
      "Design-mix structural RCC to approved structural design",
      "Foundation type and depth from site conditions and structural design",
      "Flooring allowance ₹55 / sq.ft.; sanitaryware ₹16,000 per bathroom",
      "Slump monitoring, pre-pour hold points and cube sampling at required structural pours",
      "2-year structural warranty and 6-month defect liability",
    ],
    bestFor:
      "First-time builders on firm inland plots seeking full engineering at an economical specification.",
  },
  {
    id: "ls-2",
    level: "LS-2",
    name: "Enhanced Envelope",
    subtitle: "Moisture protection below ground, on the terrace and through the external walls.",
    rate: "₹1,999 / sq.ft.",
    image: "/packages/page-015.jpg",
    highlights: [
      "Two-coat below-ground bituminous protection applied before backfilling",
      "Terrace weathering course with waterproof coating",
      "Waterproofing admixture in external plaster, balcony and sunken slab coating",
      "ARS / iSTEEL / Suryadev / Tirumala / Pulkit reinforcement, grade to approved structural design and MTC",
      "Flooring allowance ₹60 / sq.ft.; sanitaryware ₹19,000 per bathroom",
      "5-year structural warranty and 3-year waterproofing workmanship warranty",
    ],
    bestFor:
      "Inland plots where terrace, external wall and below-ground moisture protection matter.",
  },
  {
    id: "ls-3",
    level: "LS-3",
    name: "Verified Structural",
    subtitle: "Documented laboratory concrete testing under an approved QA plan.",
    rate: "₹2,099 / sq.ft.",
    image: "/packages/page-022.jpg",
    highlights: [
      "Laboratory cube testing at scheduled structural pours under the approved QA plan, with certificates issued",
      "Continuous lintel band to all walls; pre-construction anti-termite treatment",
      "Two-coat below-ground bituminous protection before backfilling",
      "Teak main door allowance ₹38,000; AC point in bedrooms",
      "Flooring allowance ₹70 / sq.ft.; sanitaryware ₹23,000 per bathroom",
      "10-year structural warranty with fortnightly photographic progress record",
    ],
    bestFor:
      "Owners who want documented concrete quality control and laboratory certificates.",
  },
  {
    id: "ls-4",
    level: "LS-4",
    name: "Assured Structural",
    subtitle: "Fifteen years of structural warranty, backed by retention and traceability.",
    rate: "₹2,249 / sq.ft.",
    image: "/packages/page-029.jpg",
    highlights: [
      "15-year structural warranty on footing, column, beams and roof slab",
      "₹25 / sq.ft. of chargeable built-up area retained for 12 months from handover",
      "ARS / iSTEEL / SAIL / Suryadev with documented traceability; 8-inch AAC external masonry",
      "Monolithic RCC staircase with granite ₹130 / sq.ft.",
      "Digital total-station survey; RCCB protection on wet-area circuits",
      "Flooring ₹80 / sq.ft.; sanitaryware ₹28,000 per bathroom",
    ],
    bestFor:
      "Owners seeking long structural warranty backed by retention and traceability.",
  },
  {
    id: "ls-5",
    level: "LS-5",
    name: "Engineered Essential",
    subtitle: "Controlled ready-mix structural concrete with documented concrete QA.",
    rate: "₹2,399 / sq.ft.",
    image: "/packages/page-036.jpg",
    highlights: [
      "ARS / iSTEEL / SAIL / Vizag with documented traceability",
      "Ready-mix structural concrete with plant batching certificates",
      "Recorded ponding test on every wet area before finishes",
      "Enhanced below-ground bituminous protection at junctions and penetrations",
      "Laboratory water quality testing; rebound hammer where technically indicated",
      "Monthly written progress report; flooring ₹95 / sq.ft.",
    ],
    bestFor:
      "Projects wanting batch-plant concrete control and documented QA.",
  },
  {
    id: "ls-6",
    level: "LS-6",
    name: "Engineered Standard",
    subtitle: "The full engineering dossier — calculations, geotechnical report and QA records.",
    rate: "₹2,549 / sq.ft.",
    image: "/packages/page-043.jpg",
    highlights: [
      "Signed structural calculation report issued to you",
      "Formal geotechnical investigation with bore log, SPT, laboratory results and SBC",
      "Membrane terrace waterproofing with 10-year system warranty",
      "ARS / iSTEEL / SAIL / Vizag with mill test certificates and dossier traceability",
      "Glass-fibre mesh crack control; EV charging point; RCCB on all power circuits",
      "Flooring ₹110 / sq.ft.; sanitaryware ₹40,000 per bathroom",
    ],
    bestFor:
      "Owners who want the full engineering dossier in hand.",
  },
  {
    id: "ls-7",
    level: "LS-7",
    name: "High-Performance",
    subtitle: "Low-permeability durability design with the analysis model handed to you.",
    rate: "₹2,799 / sq.ft.",
    image: "/packages/page-050.jpg",
    highlights: [
      "Low-permeability concrete with controlled water-cement ratio and ready-mix throughout",
      "Structural analysis model file issued to you",
      "Performance-based below-grade protection with joint and penetration detailing",
      "ARS / iSTEEL / SAIL / JSW / Tata with premium traceability where exposure design requires it",
      "FR-LSH wiring, RCBO protection, CCTV conduit, LAN and video door phone",
      "Bathroom tiling to ceiling; kitchen dado 2 ft above counter; flooring ₹135 / sq.ft.",
    ],
    bestFor:
      "Larger homes wanting durability-designed concrete and analysis documentation.",
  },
  {
    id: "ls-8",
    level: "LS-8",
    name: "Coastal Durability",
    subtitle: "Exposure-designed durability where chloride, groundwater or coastal conditions warrant it.",
    rate: "₹3,099 / sq.ft.",
    image: "/packages/page-057.jpg",
    highlights: [
      "ARS CRS / Suryadev CRS where exposure design requires CRS; premium approved brands where design permits",
      "Exposure-designed low-permeability concrete with SCM strategy and controlled water-cement ratio",
      "Chloride-tested aggregate and washed M-sand; laboratory chloride testing",
      "Membrane below-grade protection where groundwater or chloride exposure warrants",
      "Corrosion-resistant external hardware, railings and window hardware",
      "Cool-roof terrace finish; flooring ₹150–₹160 / sq.ft. base allowance in large-format finishes",
    ],
    bestFor:
      "Sites with chloride, groundwater or coastal exposure identified by assessment.",
  },
  {
    id: "ls-9",
    level: "LS-9",
    name: "Extended-Life Signature",
    subtitle: "An integrated extended-life durability system with a dedicated site engineer.",
    rate: "₹3,449 / sq.ft.",
    image: "/packages/page-064.jpg",
    highlights: [
      "20-year structural warranty; ₹30 / sq.ft. retention; 24-month defect liability",
      "Engineered below-grade system with membrane, joints, protection and drainage layer",
      "Exposure-designed high-performance concrete with permeability verification",
      "ARS CRS primary / Suryadev CRS alternative to a project-specific corrosion-protection strategy",
      "SS316 railings, marine-grade window hardware and corrosion-resistant fixings",
      "Dedicated site engineer; comprehensive durability and maintenance dossier",
    ],
    bestFor:
      "Long-horizon homes on high-exposure sites wanting maximum design life.",
  },
];

const comparisonSheets = [
  {
    title: "Package rate confirmation and pricing logic",
    description:
      "These sheets show the PDF-backed rate confirmation rule, non-negotiable responsibility split, add-on pricing logic, and the exact one-step-up engineering upgrade chart.",
    images: [
      "/packages/page-002.jpg",
      "/packages/page-004.jpg",
      "/packages/page-006.jpg",
      "/packages/page-007.jpg",
    ],
  },
  {
    title: "Exact package comparison matrices",
    description:
      "These are the exact PDF comparison sheets rendered directly from the package book so visitors can compare package inclusions without guesswork.",
    images: [
      "/packages/page-071.jpg",
      "/packages/page-072.jpg",
      "/packages/page-073.jpg",
    ],
  },
  {
    title: "Progression, notes, rates and exclusions",
    description:
      "These pages capture the progression logic, owner decision guidance, and the detailed notes around what the rate covers, what never changes, and addon category logic.",
    images: [
      "/packages/page-074.jpg",
      "/packages/page-075.jpg",
      "/packages/page-076.jpg",
      "/packages/page-077.jpg",
      "/packages/page-078.jpg",
      "/packages/page-079.jpg",
      "/packages/page-080.jpg",
      "/packages/page-081.jpg",
      "/packages/page-082.jpg",
      "/packages/page-083.jpg",
      "/packages/page-084.jpg",
    ],
  },
];

const faqs = [
  {
    q: "How should I compare Lokra Infra packages?",
    a: "Start with the 9-level package ladder, then review the exact comparison sheets rendered from the package PDF. This lets you compare rate, warranty position, QA depth, waterproofing, durability decisions, and fit for your site condition side by side.",
  },
  {
    q: "Are the rates on this packages page final?",
    a: "The page reflects the current package-book rates shown in the PDF. Final rate confirmation should still follow Lokra Infra's package rate confirmation rule, site condition review, and approved scope before execution.",
  },
  {
    q: "Which package is right for inland vs coastal or groundwater-risk plots?",
    a: "For inland plots, earlier packages may be suitable depending on the engineering brief. For chloride, groundwater, coastal, or high-exposure conditions, the higher durability packages exist specifically to address those conditions with stronger protection strategies.",
  },
  {
    q: "Can I request the full package consultation before deciding?",
    a: "Yes. Use the contact form to discuss your project requirement, site context, and target package level. Lokra Infra can then guide the most suitable package path before final commitment.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section
          style={{
            paddingTop: "9rem",
            paddingBottom: "4rem",
            backgroundColor: "var(--carbon)",
            borderBottom: "1px solid var(--border-warm)",
          }}
        >
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Packages</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
                gap: "clamp(2rem, 5vw, 5rem)",
                alignItems: "end",
              }}
            >
              <div>
                <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "900px", marginBottom: "1.5rem" }}>
                  A Detailed Construction Packages Page Built For Clear, Engineering-First Comparison.
                </h1>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.9375rem,1.15vw,1.0625rem)",
                    lineHeight: 1.8,
                    color: "var(--concrete)",
                    maxWidth: "680px",
                    marginBottom: "2rem",
                  }}
                >
                  Compare Lokra Infra&rsquo;s 9 specification levels — from Material-Contract Entry to Extended-Life Signature — using the same package logic, rate ladder, and comparison sheets from the provided package deck. Built for visitors who want to compare clearly, not guess.
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="#package-ladder" className="btn-primary">
                    <span>Compare Packages</span>
                    <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                  </Link>
                  <Link href="/contact" className="btn-outline-dark">
                    Request Package Guidance
                  </Link>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid var(--border-warm)",
                  backgroundColor: "var(--charcoal)",
                  padding: "1.5rem",
                }}
              >
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    { icon: Layers3, label: "Levels", value: "9 specification levels" },
                    { icon: FileText, label: "Rate Range", value: "₹1,899 to ₹3,449 / sq.ft." },
                    { icon: ShieldCheck, label: "Coverage", value: "Warranty, QA, durability and site-fit comparison" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: "0.875rem", alignItems: "start" }}>
                      <div style={{ width: 42, height: 42, border: "1px solid var(--border-warm)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <item.icon size={16} style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.35rem" }}>{item.label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--warm-white)", lineHeight: 1.5 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="package-ladder" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra">
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Package Ladder</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "1rem" }}>
                Nine Specification Levels, Ordered For Fast Comparison.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "820px" }}>
                Each card below surfaces the core promise, headline inclusions, and ideal fit from the package deck. For exact matrix-level comparison, scroll to the PDF-backed comparison sheets further below.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
              {packageLevels.map((pkg) => (
                <article key={pkg.id} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <img src={pkg.image} alt={`${pkg.name} package sheet`} style={{ width: "100%", height: "auto", display: "block", borderBottom: "1px solid var(--border-warm)" }} />
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.35rem" }}>{pkg.level}</div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", lineHeight: 1.05, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.75rem" }}>{pkg.name}</h3>
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--accent)", textAlign: "right", whiteSpace: "nowrap" }}>{pkg.rate}</div>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--concrete)", marginBottom: "1.25rem" }}>{pkg.subtitle}</p>
                    <div style={{ display: "grid", gap: "0.8rem", marginBottom: "1.25rem" }}>
                      {pkg.highlights.map((item) => (
                        <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                          <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--warm-white)" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ borderTop: "1px solid var(--border-warm)", paddingTop: "1rem" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.45rem" }}>Best suited for</div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--concrete)" }}>{pkg.bestFor}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)" }}>
          <div className="container-lokra">
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Exact PDF Comparison Sheets</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "1rem" }}>
                The Package Book, Rendered Directly Into The Website.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "860px" }}>
                To keep the website package comparison detailed and trustworthy, the exact package-book sheets below are rendered straight from the provided PDF. This keeps the comparison visible, reviewable, and faithful to the source package deck.
              </p>
            </div>

            <div style={{ display: "grid", gap: "3rem" }}>
              {comparisonSheets.map((group) => (
                <section key={group.title} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)", padding: "clamp(1.25rem, 2vw, 2rem)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--warm-white)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}>{group.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--concrete)", marginBottom: "1.5rem", maxWidth: "900px" }}>{group.description}</p>
                  <div style={{ display: "grid", gap: "1rem" }}>
                    {group.images.map((image) => (
                      <div key={image} style={{ border: "1px solid var(--border-warm)", backgroundColor: "#fff", overflow: "auto" }}>
                        <img src={image} alt="Lokra package comparison sheet" style={{ width: "100%", height: "auto", display: "block" }} />
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div className="accent-bar" style={{ margin: 0 }} />
                  <span className="label-sm">FAQ</span>
                </div>
                <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "1rem" }}>
                  Common Questions Before You Choose A Package.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "560px" }}>
                  This page is designed to help serious owners compare clearly. For final package selection, site condition, budget intent and scope clarity should still be reviewed with Lokra Infra directly.
                </p>
              </div>
              <div style={{ display: "grid", gap: "1rem" }}>
                {faqs.map((faq) => (
                  <details key={faq.q} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem 1.25rem 1.1rem" }}>
                    <summary style={{ cursor: "pointer", listStyle: "none", fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", lineHeight: 1.45 }}>{faq.q}</summary>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--concrete)", marginTop: "0.9rem" }}>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="container-lokra" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "1rem" }}>
              Need Help Choosing The Right Package For Your Site?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "760px", margin: "0 auto 1.75rem" }}>
              Share your project location, site condition, and target budget band. Lokra Infra can help you shortlist the package level that fits your plot, durability requirement, and execution expectations.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                <span>Discuss My Project</span>
                <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
              </Link>
              <Link href="tel:9344643324" className="btn-outline-dark">
                Call Lokra Infra
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
