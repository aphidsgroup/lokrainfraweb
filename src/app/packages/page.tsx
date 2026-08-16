import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Layers3, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Construction Packages — Lokra Infra | Detailed Package Comparison Chennai",
  description:
    "Compare Lokra Infra construction packages in text-first detail — Material-Contract Entry, Enhanced Envelope, Verified Structural, Assured Structural, Engineered Essential, Engineered Standard, High-Performance, Coastal Durability, and Extended-Life Signature.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Lokra Infra Construction Packages — Detailed Comparison",
    description:
      "A text-first Lokra Infra packages comparison page with package ladder, detailed inclusions, and row-by-row package comparison tables.",
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
  rate: string;
  subtitle: string;
  bestFor: string;
  warranty: string;
  reporting: string;
  handover: string;
  retention: string;
  highlights: string[];
};

type MatrixRow = {
  label: string;
  values: string[];
};

const packageHeaders = [
  "LS-1 ₹1,899",
  "LS-2 ₹1,999",
  "LS-3 ₹2,099",
  "LS-4 ₹2,249",
  "LS-5 ₹2,399",
  "LS-6 ₹2,549",
  "LS-7 ₹2,799",
  "LS-8 ₹3,099",
  "LS-9 ₹3,449",
];

const jumpLinks = [
  { id: "package-ladder", label: "Package Ladder" },
  { id: "quick-compare", label: "Quick Compare" },
  { id: "technical-compare", label: "Technical Details" },
  { id: "delivery-compare", label: "Warranty & Handover" },
  { id: "faq", label: "FAQ" },
];

const packageLevels: PackageLevel[] = [
  {
    id: "ls-1",
    level: "LS-1",
    name: "Material-Contract Entry",
    rate: "₹1,899 / sq.ft.",
    subtitle: "Full structural engineering at an economical named-brand specification.",
    bestFor: "Firm inland plots and first-time builders who want full engineering discipline at the most economical package level.",
    warranty: "2 years",
    reporting: "On request",
    handover: "Drawings, certificate, warranties",
    retention: "— / 6 months",
    highlights: [
      "ARS / iSTEEL / Vikil / Suryadev / Tirumala / Pulkit reinforcement grade to approved structural design and MTC",
      "Design-mix structural RCC to approved structural design",
      "Foundation type and depth from site conditions and structural design",
      "Flooring allowance ₹55 / sq.ft.; sanitaryware ₹16,000 per bathroom",
      "Standard site QA with engineer-directed concrete testing",
    ],
  },
  {
    id: "ls-2",
    level: "LS-2",
    name: "Enhanced Envelope",
    rate: "₹1,999 / sq.ft.",
    subtitle: "Moisture protection below ground, on the terrace and through the external walls.",
    bestFor: "Inland plots where terrace, external wall, and below-ground moisture control are key upgrade priorities.",
    warranty: "5 years",
    reporting: "On request",
    handover: "Same",
    retention: "— / 6 months",
    highlights: [
      "Two-coat below-ground bituminous protection applied before backfilling",
      "Terrace weathering course with waterproof coating",
      "Waterproofing admixture in external plaster, balcony, and sunken slab coating",
      "Flooring allowance ₹60 / sq.ft.; sanitaryware ₹19,000 per bathroom",
      "Enhanced waterproofing inspection workflow",
    ],
  },
  {
    id: "ls-3",
    level: "LS-3",
    name: "Verified Structural",
    rate: "₹2,099 / sq.ft.",
    subtitle: "Documented laboratory concrete testing under an approved QA plan.",
    bestFor: "Owners who want documented concrete quality control and laboratory certificates before moving higher into long-warranty packages.",
    warranty: "10 years",
    reporting: "Fortnightly with photos",
    handover: "Same + stage records",
    retention: "— / 6 months",
    highlights: [
      "Laboratory cube testing at scheduled structural pours under the approved QA plan, with certificates issued",
      "Continuous lintel band to all walls; pre-construction anti-termite treatment",
      "Two-coat below-ground bituminous protection before backfilling",
      "Teak main door allowance ₹38,000; AC point in bedrooms",
      "Flooring allowance ₹70 / sq.ft.; sanitaryware ₹23,000 per bathroom",
    ],
  },
  {
    id: "ls-4",
    level: "LS-4",
    name: "Assured Structural",
    rate: "₹2,249 / sq.ft.",
    subtitle: "Fifteen years of structural warranty, backed by retention and traceability.",
    bestFor: "Owners seeking long structural warranty backed by retention and traceability without stepping into full engineering dossier territory.",
    warranty: "15 years",
    reporting: "Fortnightly with photos",
    handover: "Same + warranty file",
    retention: "₹25 / sq.ft. / 12 months",
    highlights: [
      "15-year structural warranty on footing, column, beams and roof slab",
      "₹25 / sq.ft. of chargeable built-up area retained for 12 months from handover",
      "Documented reinforcement traceability and stronger masonry/spec progression",
      "Monolithic RCC staircase with granite ₹130 / sq.ft.",
      "Flooring ₹80 / sq.ft.; sanitaryware ₹28,000 per bathroom",
    ],
  },
  {
    id: "ls-5",
    level: "LS-5",
    name: "Engineered Essential",
    rate: "₹2,399 / sq.ft.",
    subtitle: "Controlled ready-mix structural concrete with documented concrete QA.",
    bestFor: "Projects wanting batch-plant concrete control and a stronger QA backbone with more formal monthly reporting.",
    warranty: "15 years",
    reporting: "Monthly written report",
    handover: "+ test reports",
    retention: "₹25 / 12 months",
    highlights: [
      "ARS / iSTEEL / SAIL / Vizag with documented traceability",
      "Ready-mix structural concrete with plant batching certificates",
      "Recorded ponding test on every wet area before finishes",
      "Enhanced below-ground bituminous protection at junctions and penetrations",
      "Flooring ₹95 / sq.ft.; sanitaryware ₹34,000 per bathroom",
    ],
  },
  {
    id: "ls-6",
    level: "LS-6",
    name: "Engineered Standard",
    rate: "₹2,549 / sq.ft.",
    subtitle: "The full engineering dossier — calculations, geotechnical report and QA records.",
    bestFor: "Owners who want the full engineering dossier in hand: geotechnical investigation, calculations, and more complete QA reporting.",
    warranty: "15 years",
    reporting: "Monthly written report",
    handover: "+ calculation report",
    retention: "₹25 / 12 months",
    highlights: [
      "Signed structural calculation report issued to you",
      "Formal geotechnical investigation with bore log, SPT, laboratory results and SBC",
      "Membrane terrace waterproofing with 10-year system warranty",
      "Glass-fibre mesh crack control; EV charging point; RCCB on all power circuits",
      "Flooring ₹110 / sq.ft.; sanitaryware ₹40,000 per bathroom",
    ],
  },
  {
    id: "ls-7",
    level: "LS-7",
    name: "High-Performance",
    rate: "₹2,799 / sq.ft.",
    subtitle: "Low-permeability durability design with the analysis model handed to you.",
    bestFor: "Larger homes wanting durability-designed concrete, stronger systems integration, and the structural analysis model in hand.",
    warranty: "15 years",
    reporting: "Monthly report and review",
    handover: "+ analysis model",
    retention: "₹25 / 12 months",
    highlights: [
      "Low-permeability concrete with controlled water-cement ratio and ready-mix throughout",
      "Structural analysis model file issued to you",
      "Performance-based below-grade protection with joint and penetration detailing",
      "FR-LSH wiring, RCBO protection, CCTV conduit, LAN and video door phone",
      "Flooring ₹135 / sq.ft.; sanitaryware ₹50,000 per bathroom",
    ],
  },
  {
    id: "ls-8",
    level: "LS-8",
    name: "Coastal Durability",
    rate: "₹3,099 / sq.ft.",
    subtitle: "Exposure-designed durability where chloride, groundwater, or coastal conditions warrant it.",
    bestFor: "Chloride-exposed or groundwater-risk sites where durability design and exposure-specific protection become essential, not optional.",
    warranty: "15 years",
    reporting: "Fortnightly report and review",
    handover: "+ durability records",
    retention: "₹25 / 12 months",
    highlights: [
      "CRS / premium reinforcement strategy where exposure design requires it",
      "Exposure-designed low-permeability concrete with SCM strategy and controlled water-cement ratio",
      "Chloride-tested aggregate and washed M-sand; laboratory chloride testing",
      "Membrane below-grade protection where groundwater or chloride exposure warrants",
      "Flooring ₹150–160 / sq.ft. base allowance; sanitaryware ₹55,000 per bathroom",
    ],
  },
  {
    id: "ls-9",
    level: "LS-9",
    name: "Extended-Life Signature",
    rate: "₹3,449 / sq.ft.",
    subtitle: "An integrated extended-life durability system with a dedicated site engineer.",
    bestFor: "Maximum design-life intent on high-exposure sites where durability, traceability, and execution oversight all need to be elevated together.",
    warranty: "20 years",
    reporting: "Dedicated site engineer",
    handover: "Full dossier with maintenance schedule",
    retention: "₹30 / sq.ft. / 24 months",
    highlights: [
      "20-year structural warranty; ₹30 / sq.ft. retention; 24-month defect liability",
      "Engineered below-grade system with membrane, joints, protection and drainage layer",
      "Exposure-designed high-performance concrete with permeability verification",
      "SS316 railings, marine-grade hardware and corrosion-resistant fixings",
      "Flooring ₹175–180 / sq.ft. base allowance; sanitaryware ₹60,500 per bathroom",
    ],
  },
];

const quickCompareRows: MatrixRow[] = [
  {
    label: "Structural warranty",
    values: ["2 years", "5 years", "10 years", "15 years", "15 years", "15 years", "15 years", "15 years", "20 years"],
  },
  {
    label: "Client reporting",
    values: [
      "On request",
      "On request",
      "Fortnightly with photos",
      "Fortnightly with photos",
      "Monthly written report",
      "Monthly written report",
      "Monthly report and review",
      "Fortnightly report and review",
      "Dedicated site engineer",
    ],
  },
  {
    label: "Handover documentation",
    values: [
      "Drawings, certificate, warranties",
      "Same",
      "Same + stage records",
      "Same + warranty file",
      "+ test reports",
      "+ calculation report",
      "+ analysis model",
      "+ durability records",
      "Full dossier + maintenance schedule",
    ],
  },
  {
    label: "Retention / defect liability",
    values: [
      "— / 6 mo",
      "— / 6 mo",
      "— / 6 mo",
      "₹25 / sq.ft. / 12 mo",
      "₹25 / sq.ft. / 12 mo",
      "₹25 / sq.ft. / 12 mo",
      "₹25 / sq.ft. / 12 mo",
      "₹25 / sq.ft. / 12 mo",
      "₹30 / sq.ft. / 24 mo",
    ],
  },
];

const technicalRows: MatrixRow[] = [
  {
    label: "Wet-area waterproofing",
    values: [
      "Cementitious + coving",
      "Two-coat + upturn",
      "Two-coat + upturn",
      "Two-coat + junction penetrations",
      "Ponding test recorded",
      "Ponding test recorded",
      "Ponding test recorded",
      "Two-stage ponding test",
      "Two-stage ponding test + chloride check",
    ],
  },
  {
    label: "Flooring allowance",
    values: ["₹55", "₹60", "₹70", "₹80", "₹95", "₹110", "₹135", "₹150–160 base", "₹175–180 base"],
  },
  {
    label: "Sanitaryware per bathroom",
    values: ["₹16,000", "₹19,000", "₹23,000", "₹28,000", "₹34,000", "₹40,000", "₹50,000", "₹55,000", "₹60,500"],
  },
  {
    label: "Electrical system",
    values: [
      "ISI copper, MCB",
      "FR-branded modular",
      "FR, AC points",
      "FR, RCCB wet areas",
      "FR, RCCB",
      "RCCB all power, EV",
      "RCBO, CCTV, LAN",
      "RCCB, RCBO, CCTV, VDP",
      "Automation-ready electrical stack",
    ],
  },
  {
    label: "Plumbing system",
    values: [
      "CPVC SDR 11, SWR inspection caps",
      "Same, approved brand",
      "Same, approved brand",
      "Premium brand, isolation valves",
      "Premium brand",
      "Premium brand",
      "Manifold distribution",
      "Manifold, PRV where needed",
      "Manifold + PRV, high-service layout",
    ],
  },
  {
    label: "Testing and QA",
    values: [
      "Standard site QA + engineer-directed concrete testing",
      "Standard QA + enhanced waterproofing inspection",
      "Laboratory concrete testing programme + certificates",
      "Laboratory testing + stronger traceability",
      "RMC batch records + documented QA",
      "Engineering dossier + formal testing programme",
      "Performance concrete QA; NDT where indicated",
      "Durability and exposure QA; permeability focus",
      "Durability + exposure QA; permeability and chloride focus",
    ],
  },
];

const engineeringRows: MatrixRow[] = [
  {
    label: "Concrete control progression",
    values: [
      "Site design mix, weigh-batched",
      "Site design mix, weigh-batched",
      "Machine-mixed, batch records",
      "Machine-mixed, batch records",
      "RMC at roof and plinth",
      "RMC footing and roof",
      "RMC throughout",
      "Exposure-designed mix",
      "High-performance durability mix",
    ],
  },
  {
    label: "Structural documentation",
    values: [
      "Design on file",
      "Design on file",
      "Design on file",
      "Design summary issued",
      "Design summary issued",
      "Signed calculations issued",
      "Calculations + model issued",
      "Calculations + model issued",
      "Full calculation and durability dossier",
    ],
  },
  {
    label: "Geotechnical documentation",
    values: [
      "Site assessment",
      "Site assessment",
      "Site assessment",
      "Site assessment",
      "Site assessment",
      "Full investigation included",
      "Full investigation included",
      "Investigation with adaptation where needed",
      "Investigation with performance mapping",
    ],
  },
  {
    label: "Below-ground protection",
    values: [
      "Standard DPC coating + plinth beam",
      "Two-coat bituminous",
      "Two-coat bituminous",
      "Two-coat bituminous",
      "Enhanced junction detail",
      "Enhanced protection with membrane logic",
      "Performance-based protection",
      "Exposure-designed protection strategy",
      "Engineered membrane system",
    ],
  },
  {
    label: "Terrace waterproofing",
    values: [
      "Cement finish",
      "Weathering course + coating",
      "Weathering course + coating",
      "Coating + flood test",
      "Coating + flood test",
      "Membrane, 10-year warranty",
      "Membrane + protection screed",
      "Membrane + cool roof",
      "Engineered membrane + cool roof",
    ],
  },
];

const faqs = [
  {
    q: "How should I compare Lokra Infra packages?",
    a: "Start with the package ladder to narrow the right budget band, then use the quick-compare and technical tables to compare warranty, reporting, sanitary allowances, waterproofing, QA depth, and best-fit use case.",
  },
  {
    q: "Does this page use the package details from the PDF in text form?",
    a: "Yes. This page is rebuilt as a text-first comparison surface so the package details are readable directly on the website instead of being shown mainly as slide images.",
  },
  {
    q: "Which packages are better for inland sites versus groundwater or coastal exposure?",
    a: "The earlier levels suit standard inland plots, while the higher durability levels are designed for stronger groundwater, chloride, coastal, or long-life design requirements. The technical compare tables above make that progression easier to read.",
  },
  {
    q: "Can I talk to Lokra Infra before selecting a package?",
    a: "Yes. Share your plot location, site context, and target budget through the contact form, and Lokra Infra can help shortlist the right package level before finalizing scope.",
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

function ComparisonTable({ title, description, rows }: { title: string; description: string; rows: MatrixRow[] }) {
  return (
    <section style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)" }}>
      <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border-warm)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.5rem" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "900px" }}>
          {description}
        </p>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", minWidth: "1200px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--charcoal)" }}>
              <th style={{ textAlign: "left", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Specification
              </th>
              {packageHeaders.map((header) => (
                <th key={header} style={{ textAlign: "left", verticalAlign: "top", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--warm-white)", fontFamily: "var(--font-display)", fontSize: "0.8rem", lineHeight: 1.4 }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.label} style={{ backgroundColor: rowIndex % 2 === 0 ? "transparent" : "rgba(245,241,234,0.02)" }}>
                <td style={{ padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--warm-white)", fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.04em", textTransform: "uppercase", minWidth: "220px" }}>
                  {row.label}
                </td>
                {row.values.map((value, index) => (
                  <td key={`${row.label}-${index}`} style={{ padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--concrete)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.6, verticalAlign: "top" }}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section
          style={{
            paddingTop: "9rem",
            paddingBottom: "3.5rem",
            backgroundColor: "var(--carbon)",
            borderBottom: "1px solid var(--border-warm)",
          }}
        >
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Packages</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(280px,0.85fr)", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "end" }}>
              <div>
                <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "920px", marginBottom: "1.25rem" }}>
                  Text-First Construction Package Comparison, Built For Clear Decision-Making.
                </h1>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem,1.15vw,1.05rem)", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "760px", marginBottom: "1.75rem" }}>
                  This packages page is rebuilt as a true comparison surface: nine package levels, readable inclusions, row-by-row technical differences, and structured text that makes the package details easy to compare directly on the website.
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="#package-ladder" className="btn-primary">
                    <span>Compare Packages</span>
                    <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                  </Link>
                  <Link href="/contact" className="btn-outline-dark">
                    Talk To Lokra Infra
                  </Link>
                </div>
              </div>
              <div style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)", padding: "1.5rem" }}>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    { icon: Layers3, label: "Levels", value: "9 package levels" },
                    { icon: ShieldCheck, label: "Rate Range", value: "₹1,899 to ₹3,449 / sq.ft." },
                    { icon: Check, label: "Format", value: "Cards + tables + FAQ, optimized for easier comparison" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: "0.9rem", alignItems: "start" }}>
                      <div style={{ width: 42, height: 42, border: "1px solid var(--border-warm)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <item.icon size={16} style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.3rem" }}>{item.label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.55, color: "var(--warm-white)" }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ position: "sticky", top: "76px", zIndex: 10, backgroundColor: "rgba(11,11,10,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-warm)" }}>
          <div className="container-lokra" style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {jumpLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--concrete)",
                  border: "1px solid var(--border-warm)",
                  padding: "0.7rem 0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <section id="package-ladder" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra">
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Package Ladder</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Nine Package Levels, Laid Out As Real Comparison Cards.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "860px" }}>
                Instead of forcing visitors to read slide images, each package below shows the level, rate, core promise, fit, warranty position, and major inclusions directly in text.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem" }}>
              {packageLevels.map((pkg) => (
                <article key={pkg.id} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "1.35rem 1.35rem 1rem", borderBottom: "1px solid var(--border-warm)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.35rem" }}>
                          {pkg.level}
                        </div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", lineHeight: 1.05, textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.55rem" }}>
                          {pkg.name}
                        </h3>
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--accent)", textAlign: "right", whiteSpace: "nowrap" }}>
                        {pkg.rate}
                      </div>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--concrete)" }}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div style={{ padding: "1.1rem 1.35rem", display: "grid", gap: "0.85rem", borderBottom: "1px solid var(--border-warm)" }}>
                    {[
                      ["Best for", pkg.bestFor],
                      ["Structural warranty", pkg.warranty],
                      ["Reporting", pkg.reporting],
                      ["Handover", pkg.handover],
                      ["Retention / DLP", pkg.retention],
                    ].map(([label, value]) => (
                      <div key={label} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "0.75rem", alignItems: "start" }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>{label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--warm-white)" }}>{value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: "1.1rem 1.35rem 1.3rem", display: "grid", gap: "0.8rem" }}>
                    {pkg.highlights.map((item) => (
                      <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                        <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quick-compare" className="section-py" style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)" }}>
          <div className="container-lokra" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Quick Compare</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Start With Warranty, Reporting, And Handover Differences.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "900px" }}>
                If a visitor needs a faster decision path, these rows usually separate the package levels first: warranty depth, reporting discipline, handover documentation, and retention / defect liability structure.
              </p>
            </div>
            <ComparisonTable
              title="Package decision basics"
              description="This first table makes the most decision-critical differences scannable without digging through every package detail card individually."
              rows={quickCompareRows}
            />
          </div>
        </section>

        <section id="technical-compare" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Technical Compare</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Waterproofing, Allowances, Systems, And QA — In Table Form.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "920px" }}>
                This section turns the key technical differences into readable rows so site owners can compare package progression directly: wet-area protection, flooring and sanitary budgets, electrical stack, plumbing quality, and QA depth.
              </p>
            </div>
            <ComparisonTable
              title="Interior systems, allowances, and QA progression"
              description="Use this table when the comparison is less about headline marketing and more about what changes materially in execution quality, allowances, and validation." 
              rows={technicalRows}
            />
            <ComparisonTable
              title="Engineering progression"
              description="This table focuses on the structural and engineering progression across the package ladder: concrete control, documentation depth, below-ground strategy, and terrace waterproofing maturity."
              rows={engineeringRows}
            />
          </div>
        </section>

        <section id="delivery-compare" className="section-py" style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)" }}>
          <div className="container-lokra">
            <div style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">How To Read The Ladder</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                {[
                  {
                    title: "Early ladder",
                    text: "LS-1 to LS-3 suit standard inland builds where the main upgrade path is moisture control and documented structural QA.",
                  },
                  {
                    title: "Mid ladder",
                    text: "LS-4 to LS-6 shift into stronger documentation, longer structural assurance, retention-backed accountability, and a fuller engineering dossier.",
                  },
                  {
                    title: "High-durability ladder",
                    text: "LS-7 to LS-9 are for larger, higher-exposure, longer-life, or system-heavier builds where durability design and stronger service coordination matter more.",
                  },
                ].map((item) => (
                  <div key={item.title} style={{ border: "1px solid var(--border-warm)", padding: "1.1rem", backgroundColor: "var(--carbon)" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.55rem" }}>{item.title}</h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--concrete)" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1.05fr)", gap: "clamp(2rem, 5vw, 4rem)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">FAQ</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Common Questions Before Choosing A Package.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "560px" }}>
                This page is designed to make the package comparison readable directly on the website. Final package fit should still be aligned to site condition, project intent, and budget band with Lokra Infra directly.
              </p>
            </div>
            <div style={{ display: "grid", gap: "1rem" }}>
              {faqs.map((faq) => (
                <details key={faq.q} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.15rem 1.2rem" }}>
                  <summary style={{ cursor: "pointer", listStyle: "none", fontFamily: "var(--font-display)", fontSize: "1rem", lineHeight: 1.45, textTransform: "uppercase", color: "var(--warm-white)" }}>
                    {faq.q}
                  </summary>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--concrete)", marginTop: "0.85rem" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="container-lokra" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.02, letterSpacing: "-0.03em", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "1rem" }}>
              Want Help Selecting The Right Package For Your Site?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "760px", margin: "0 auto 1.75rem" }}>
              Share your plot location, site condition, and budget direction. Lokra Infra can help you shortlist the package level that best fits your site and durability requirements.
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
