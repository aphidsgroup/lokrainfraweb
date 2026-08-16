import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brand Schedule — Lokra Infra Construction Packages, Chennai",
  description:
    "See the brand schedule details for all 9 Lokra Infra construction packages in Chennai, with package-wise material, electrical, plumbing, waterproofing, and finish details.",
  alternates: {
    canonical: "/brand-schedule",
  },
  openGraph: {
    title: "Lokra Infra Brand Schedule — All 9 Packages",
    description:
      "Package-wise brand schedule details from Lokra Infra, shown in a customer-friendly web page format.",
    url: "https://www.lokrainfra.in/brand-schedule",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

type ScheduleRow = {
  label: string;
  value: string;
};

type BrandSchedulePackage = {
  id: string;
  level: string;
  name: string;
  rate: string;
  summary: string;
  rows: ScheduleRow[];
};

const brandSchedulePackages: BrandSchedulePackage[] = [
  {
    id: "ls-1",
    level: "LS-1",
    name: "Basic Build Package",
    rate: "₹1,899 / sq.ft.",
    summary: "Budget-friendly branded-material package with proper structural design and practical standard finishes.",
    rows: [
      { label: "Cement", value: "PPC to IS 1489 — Chettinad / Zuari / Dalmia band" },
      { label: "Steel", value: "ARS / iSTEEL / Viki / Suryadev / Tirumala / Pulkit" },
      { label: "M-sand & aggregate", value: "Forsroc / Sika; IS 383 conforming; silt within 3%" },
      { label: "Masonry / walling", value: "Machine-made solid block / Celcon / BirlaNu AAC" },
      { label: "Waterproofing", value: "Cementitious IS-marked system — Dr. Fixit / Fosroc" },
      { label: "Electrical", value: "Orbit / Kundan wire; Precision / AKG conduit; Fybros / Anchor Roma switches; IndoAsian / Havells DB, MCB, RCCB with earthing" },
      { label: "Doors & windows", value: "UPVC window profile within stated allowance; hardwood frame with engineered flush shutter; Godrej / Europa hardware" },
      { label: "Plumbing & sanitary", value: "Supreme / Finolex / Stat UPVC & CPVC; Zoloto / Leader valves; Cera / Parryware sanitaryware" },
      { label: "Flooring / tiles", value: "Confirmed at selection within stated allowance; kitchen sink stainless steel — Nirali / Futura" },
      { label: "Paint / sealants", value: "Birla / JK putty with Asian Tractor / Berger emulsion; Dr. Fixit / Fosroc sealants" },
    ],
  },
  {
    id: "ls-2",
    level: "LS-2",
    name: "Better Waterproofing Package",
    rate: "₹1,999 / sq.ft.",
    summary: "LS-1 base upgraded mainly for stronger waterproofing and slightly better basic service layouts.",
    rows: [
      { label: "Cement", value: "PPC to IS 1489 — Chettinad / Zuari / Dalmia band" },
      { label: "Steel", value: "ARS / iSTEEL / Suryadev / Tirumala / Pulkit" },
      { label: "M-sand & aggregate", value: "Forsroc / Sika; IS 383 conforming; silt within 3%" },
      { label: "Masonry / walling", value: "Celcon / BirlaNu / Aerocon / machine-made soil block" },
      { label: "Waterproofing", value: "Cementitious IS-marked system — Dr. Fixit / Fosroc; stronger waterproofing basis than LS-1" },
      { label: "Electrical", value: "Orbit / AKG wire; Anchor Roma / Fybros / GM switches; IndoAsian / Havells DB, MCB, RCCB with earthing" },
      { label: "Doors & windows", value: "Approved UPVC window system; hardwood frame with engineered flush shutter; Godrej / Europa hardware" },
      { label: "Plumbing & sanitary", value: "Finolex / Supreme / ISI-marked piping; Zoloto / Leader valves; Cera / Parryware sanitaryware" },
      { label: "Flooring / tiles", value: "Within the stated allowance confirmed at selection; better basic electrical and plumbing point layouts" },
      { label: "Paint / sealants", value: "Birla / JK putty with Asian Tractor / Berger emulsion; Sintex / Penguin / Dr. Fixit / Fosroc sealants" },
    ],
  },
  {
    id: "ls-3",
    level: "LS-3",
    name: "Quality-Checked Structure Package",
    rate: "₹2,099 / sq.ft.",
    summary: "Adds stronger structure-checking discipline with test-certificate-backed material selection and better records.",
    rows: [
      { label: "Cement", value: "PPC to IS 1489 — Dalmia / Chettinad / Zuari / Ramco band" },
      { label: "Steel", value: "ARS / iSTEEL / Suryadev / Tirumala / Pulkit with material test certificates as selected" },
      { label: "Admixtures & aggregates", value: "Forsroc / Sika plasticiser where required; IS 383 conforming M-sand and aggregate" },
      { label: "Masonry / walling", value: "BirlaNu Aerocon / Celcon AAC / chamber brick" },
      { label: "Waterproofing", value: "Shalimar / STP / Dr. Fixit cold-applied emulsion; cold-joint treatment confirmed at selection" },
      { label: "Electrical", value: "Orbit fire-resistant low smoke / Finolex wire; Precision / AKG conduit; Anchor Roma / GM switches; Havells / IndoAsian DB, MCB, RCCB" },
      { label: "Doors & windows", value: "UPVC window profile within stated allowance; hardwood frame with engineered flush shutter; Godrej / Europa hardware" },
      { label: "Plumbing & sanitary", value: "Finolex / Supreme / ISI-marked piping; Zoloto / Leader brass ball valves; Parryware sanitaryware; CP fittings by approved brand" },
      { label: "Flooring / tiles", value: "Tiles and granite within stated ₹/sq.ft allowance, confirmed at selection" },
      { label: "Paint / sealants", value: "Birla / JK putty with Asian Tractor / Berger emulsion; Dr. Fixit / Fosroc sealants" },
    ],
  },
  {
    id: "ls-4",
    level: "LS-4",
    name: "Long Warranty Structure Package",
    rate: "₹2,249 / sq.ft.",
    summary: "Moves into longer structural assurance with ready-mix concrete, stronger records, and better finish-grade hardware choices.",
    rows: [
      { label: "Cement", value: "PPC to IS 1489 — Ramco / Dalmia / UltraTech / Chettinad band" },
      { label: "Binder selection", value: "Selected per element and approved mix design; no substitution where approved binder and additive are nominated" },
      { label: "Steel", value: "ARS / iSTEEL / SAIL / Suryadev with material records" },
      { label: "Concrete", value: "ACC / UltraTech / Godrej RMC" },
      { label: "Admixtures", value: "Fosroc / Sika plasticiser and retarder" },
      { label: "Masonry / walling", value: "BirlaNu Aerocon / Renacon AAC / chamber-box red brick" },
      { label: "Waterproofing", value: "Dr. Fixit / Fosroc / Sika; teak frame and WPC internal shutters begin here" },
      { label: "Electrical", value: "Finolex fire-resistant low smoke / Orbit fire-resistant low smoke wire; Precision / AKG conduit; Legrand switches; Havells / L&T DB, MCB, RCCB with earthing" },
      { label: "Doors & windows", value: "UPVC window profile within stated allowance; teak frame, WPC internal shutters; Godrej / Dorset hardware" },
      { label: "Plumbing & sanitary", value: "Ashirvad / Premium or Nilpofan UPVC; Zoloto / Leader valves; Jaguar Esco / Hindware sanitary & CP fittings" },
      { label: "Paint / sealants", value: "Birla putty with Asian Premium / Nippon emulsion; Sintex / Penguin / Premium sealants; MS and SS 202, zinc-rich primed structural steel" },
    ],
  },
  {
    id: "ls-5",
    level: "LS-5",
    name: "Ready-Mix Quality Package",
    rate: "₹2,399 / sq.ft.",
    summary: "Brings in ready-mix quality discipline, stronger approved-binder control, and better finish-level brands and records.",
    rows: [
      { label: "Cement", value: "Approved PPC / structural binder — Ramco / Dalmia / UltraTech" },
      { label: "Binder selection", value: "Binder per element to approved mix design" },
      { label: "Steel", value: "ARS / iSTEEL / SAIL / Vizag" },
      { label: "Concrete", value: "ACC / UltraTech / Godrej RMC" },
      { label: "Admixtures", value: "Fosroc / Sika plasticiser and retarder" },
      { label: "Masonry / walling", value: "Renacon / BirlaNu Aerocon AAC / chamber brick" },
      { label: "Waterproofing", value: "Dr. Fixit / Fosroc / Sika; washed M-sand and stronger water-check basis" },
      { label: "Electrical", value: "Finolex / Polycab fire-resistant low smoke wire; Precision / AKG conduit; L&T / Havells switches; L&T / Havells DB, MCB, RCCB" },
      { label: "Doors & windows", value: "UPVC window profile within stated allowance; approved frame and shutter quality; Godrej / Dorset hardware" },
      { label: "Plumbing & sanitary", value: "Ashirvad / Finolex / Supreme premium piping; Zoloto / Leader valves; Jaguar Esco / Hindware sanitary & CP fittings" },
      { label: "Flooring / wet-area note", value: "MYK Laticrete / Weber / Roff for adhesive and grout in wet areas; flooring and sanitary allowances upgraded over LS-4" },
    ],
  },
  {
    id: "ls-6",
    level: "LS-6",
    name: "Full Engineering Package",
    rate: "₹2,549 / sq.ft.",
    summary: "Adds the full engineering-file level, stronger exposure-based material selection, and more premium finish infrastructure.",
    rows: [
      { label: "Cement", value: "Application-specific PPC or OPC — UltraTech / Ramco / Dalmia" },
      { label: "Binder selection", value: "Binder selected to approved mix design and exposure requirements" },
      { label: "Steel", value: "ARS / iSTEEL / SAIL / Vizag / ACC / UltraTech / Godrej RMC ecosystem" },
      { label: "Concrete", value: "ACC / UltraTech / Godrej RMC exposure-designed mix" },
      { label: "Admixtures", value: "Fosroc / Sika / BASF durability-grade admixtures" },
      { label: "Masonry / walling", value: "Renacon / BirlaNu Aerocon AAC / chamber brick" },
      { label: "Waterproofing", value: "Dr. Fixit / Fosroc / Sika with application-specific basis; stronger exposure note appears from here" },
      { label: "Electrical", value: "Polycab / Havells fire-resistant low-smoke wire; Precision / AKG conduit; Legrand / GM / AKG heavy-duty fittings; Legrand / L&T / Havells enhanced DB with RCCB and surge protection strategy" },
      { label: "Doors & windows", value: "UPVC profile within stated allowance; marine-grade hardware and teak/WPC shutter quality begins to improve further" },
      { label: "Plumbing & sanitary", value: "Astral / Ashirvad / premium piping; Zoloto / Leader valves; Jaguar / Hindware sanitary & CP fittings" },
      { label: "Sealants / exterior", value: "Sika / Dow weatherproof and marine-compatible sealants; structural steel and fabrication upgraded" },
    ],
  },
  {
    id: "ls-7",
    level: "LS-7",
    name: "Premium Strength Package",
    rate: "₹2,799 / sq.ft.",
    summary: "Higher-strength design logic with better exposed-site protection, stronger waterproofing, and richer finish brands.",
    rows: [
      { label: "Cement", value: "Performance-selected binder — UltraTech / Ramco / Dalmia" },
      { label: "Steel", value: "ARS / iSTEEL / SAIL / JSW / Tata; CRS on design-and-exposure basis where needed" },
      { label: "Concrete", value: "ACC / UltraTech / Godrej RMC exposure-designed mix" },
      { label: "Admixtures", value: "Fosroc / Sika / BASF durability-grade admixtures" },
      { label: "Masonry / walling", value: "Renacon / BirlaNu Aerocon AAC / premium wire-cut brick" },
      { label: "Waterproofing", value: "Sika / Forsroc crystalline and membrane systems; stronger exposure and water-table testing basis" },
      { label: "Electrical", value: "Polycab / Havells fire-resistant low-smoke system; Legrand / GM / AKG heavy-duty conduits and fittings; Legrand / L&T / Havells enhanced protection with RCBO and SPD" },
      { label: "Doors & windows", value: "UPVC profile within stated allowance; marine-grade stainless hardware and fittings; teak frame / BWP / veneered solid-core shutters" },
      { label: "Plumbing & sanitary", value: "Astral / Ashirvad premium piping; Zoloto / Sant / pressure-reducing valve where required; Jaguar sanitary & CP fittings" },
      { label: "Paint / sealants", value: "Birla putty with Asian Royale or Ultima / Protek exterior; Sika / Dow marine-compatible sealants" },
    ],
  },
  {
    id: "ls-8",
    level: "LS-8",
    name: "Coastal Protection Package",
    rate: "₹3,099 / sq.ft.",
    summary: "Specially tuned for coastal or harsh exposure sites with stronger durability-focused material selection and protection systems.",
    rows: [
      { label: "Cement", value: "Exposure-designed blended cement / binder with mineral additions — UltraTech / Ramco / Dalmia" },
      { label: "Steel", value: "ARS CRS / Suryadev CRS primary with approved alternative corrosion-resistant steel where permitted" },
      { label: "Concrete", value: "ACC / Godrej RMC / exposure-designed high-durability mix" },
      { label: "Admixtures", value: "Fosroc / Sika / BASF durability-grade admixtures" },
      { label: "Masonry / walling", value: "High-strength AAC; wire-cut or porcelain HP block options by design" },
      { label: "Waterproofing", value: "Sika / Forsroc membrane and protection systems with coastal/exposed-site logic" },
      { label: "Electrical", value: "Polycab / Finolex premium low-smoke wiring; Legrand / GM / AKG heavy-duty fittings; enhanced DB with RCCB, RCBO and SPD strategy" },
      { label: "Doors & windows", value: "Within stated ₹/sq.ft allowance confirmed at selection; leak frame, BWP and veneered solid-core shutter progression maintained" },
      { label: "Plumbing & sanitary", value: "Astral / Ashirvad / pressure-appropriate piping; Zoloto / Sant with pressure-reducing valve where required; Jaguar / Kohler sanitary & CP fittings" },
      { label: "Paint / sealants", value: "MYK Laticrete / Weber epoxy grout to wet areas; Sika / Dow weatherproof and marine-compatible sealants; PU or powder-coat finish strategy" },
    ],
  },
  {
    id: "ls-9",
    level: "LS-9",
    name: "Top Premium Life Package",
    rate: "₹3,449 / sq.ft.",
    summary: "Top-end long-life package with modular protection planning, premium hardware, and the strongest durability-oriented schedule.",
    rows: [
      { label: "Cement", value: "Durability-designed binder system — UltraTech / Dalmia / Ramco" },
      { label: "Steel", value: "ARS CRS primary / Suryadev CRS approved alternative" },
      { label: "Concrete", value: "ACC / Godrej RMC / high-durability exposure mix" },
      { label: "Admixtures", value: "Fosroc / Sika / BASF durability-grade admixture schedule" },
      { label: "Masonry / walling", value: "Engineered AAC / Porotherm HP / wire-cut design-led walling system" },
      { label: "Waterproofing", value: "Sika / Forsroc membrane and protection system; RCBO and surge protection with labelled circuit schedule" },
      { label: "Electrical", value: "Premium low-smoke wiring; Precision / AKG heavy-duty conduit; Legrand / GM premium modular switches; enhanced DB with MCB and RCCB" },
      { label: "Doors & windows", value: "Within stated allowance confirmed at selection; marine-grade stainless hardware and fittings; leak frame, BWP and veneered solid-core shutters" },
      { label: "Plumbing & sanitary", value: "Astral / Ashirvad exposure-appropriate piping; Zoloto / Sant pressure-reducing valve where required; Kohler / Jaguar sanitary & CP fittings" },
      { label: "Paint / sealants", value: "Birla putty with Asian Royale and Apex Ultima / Ultima Protek exterior; Sika / Dow marine-compatible sealants; SS 304 / SS 316 with PU or powder-coat finish" },
    ],
  },
];

export default function BrandSchedulePage() {
  return (
    <>
      <Header />
      <main className="packages-page brand-schedule-page" style={{ backgroundColor: "var(--charcoal)" }}>
        <section className="packages-hero section-py" style={{ paddingTop: "8.5rem", backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra packages-page-body">
            <div className="packages-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(320px, 0.9fr)", gap: "2rem", alignItems: "end" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div className="accent-bar" style={{ margin: 0 }} />
                  <span className="label-sm">Brand Schedule</span>
                </div>
                <h1 className="display-lg" style={{ color: "var(--warm-white)", marginBottom: "1rem" }}>
                  Exact Package Brand Details For All 9 Levels.
                </h1>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "var(--concrete)", maxWidth: "820px" }}>
                  This page turns the brand schedule into simple website cards so you can understand what each package is really made of — steel, cement, waterproofing, electricals, plumbing, windows, hardware, and finish-grade choices.
                </p>
                <div className="packages-hero-ctas" style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", marginTop: "1.4rem" }}>
                  <Link href="/packages#package-ladder" className="btn-primary">
                    <span>Back To Package Ladder</span>
                    <ArrowUpRight size={13} strokeWidth={2.4} style={{ position: "relative", zIndex: 1 }} />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    <span>Ask About Your Package</span>
                    <ArrowUpRight size={13} strokeWidth={2.4} style={{ position: "relative", zIndex: 1 }} />
                  </Link>
                </div>
              </div>

              <div className="packages-hero-summary" style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.35rem" }}>
                <div style={{ display: "grid", gap: "0.8rem" }}>
                  {[
                    "Shows package-wise brand and material details in one place.",
                    "Shown package-by-package instead of hiding details inside one big table.",
                    "Useful when customers want to understand what each package really means.",
                    "Best read after the Package Ladder if you want deeper material detail.",
                  ].map((item) => (
                    <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                      <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)" }}>
          <div className="container-lokra packages-page-body">
            <div style={{ marginBottom: "2.2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">All 9 Packages</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Package-Wise Brand Schedule Cards.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "860px" }}>
                Each card below follows the package order from LS-1 to LS-9 and keeps the brand-sheet details in a more customer-friendly reading format.
              </p>
            </div>

            <div className="packages-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
              {brandSchedulePackages.map((pkg) => (
                <article id={pkg.id} key={pkg.id} className="package-card" style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)", display: "flex", flexDirection: "column" }}>
                  <div className="package-card-head" style={{ padding: "1.35rem 1.35rem 1rem", borderBottom: "1px solid var(--border-warm)" }}>
                    <div className="package-card-top" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-start" }}>
                      <div className="package-card-title-block" style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.35rem" }}>{pkg.level}</div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", lineHeight: 1.08, textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.55rem" }}>{pkg.name}</h3>
                      </div>
                      <div className="package-card-rate" style={{ fontFamily: "var(--font-display)", fontSize: "1rem", lineHeight: 1, color: "var(--accent)", textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>
                        {pkg.rate}
                      </div>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--concrete)", marginBottom: "0.75rem" }}>{pkg.summary}</p>
                  </div>

                  <div className="package-card-meta" style={{ padding: "1.1rem 1.35rem 1.35rem", display: "grid", gap: "0.85rem" }}>
                    {pkg.rows.map((row) => (
                      <div key={`${pkg.id}-${row.label}`} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0.75rem", alignItems: "start" }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>{row.label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.68, color: "var(--warm-white)" }}>{row.value}</div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
