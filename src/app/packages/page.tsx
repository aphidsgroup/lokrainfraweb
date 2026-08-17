import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowUpRight, Check, Layers3, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Construction Packages — Lokra Infra | Detailed Package Comparison Chennai",
  description:
    "Compare Lokra Infra construction packages in simple, easy-to-understand English for Chennai and Tamil Nadu homeowners.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Lokra Infra Construction Packages — Detailed Comparison",
    description:
      "An easy-to-understand Lokra Infra packages page with simple package details and side-by-side comparison tables.",
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

type ComparisonSection = {
  title: string;
  rows: MatrixRow[];
};

type ScopeCostRow = {
  item: string;
  specification: string;
  rate: string;
};

const pricePattern = /(₹\s?[\d,]+(?:–[\d,]+)?(?:\s*\/\s*sq\.ft\.)?)/g;

function renderPriceText(text: string) {
  const parts = text.split(pricePattern);

  return parts.map((part, index) => {
    if (!part) return null;
    if (pricePattern.test(part)) {
      pricePattern.lastIndex = 0;
      return (
        <span
          key={`${part}-${index}`}
          className="price-emphasis-inline"
          style={{
            color: "var(--warm-white)",
            backgroundColor: "rgba(182, 90, 42, 0.18)",
            border: "1px solid rgba(182, 90, 42, 0.32)",
            padding: "0.08rem 0.38rem",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "0.01em",
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          {part}
        </span>
      );
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

const packageHeaders = [
  "₹1,899 / sq.ft.",
  "₹1,999 / sq.ft.",
  "₹2,099 / sq.ft.",
  "₹2,249 / sq.ft.",
  "₹2,399 / sq.ft.",
  "₹2,549 / sq.ft.",
  "₹2,799 / sq.ft.",
  "₹3,099 / sq.ft.",
  "₹3,449 / sq.ft.",
];

const jumpLinks = [
  { id: "package-ladder", label: "Package Ladder" },
  { id: "brand-progress", label: "Full Comparison" },
  { id: "quick-compare", label: "Quick Compare" },
  { id: "technical-compare", label: "Technical Details" },
  { id: "scope-boundary", label: "Scope Boundary" },
  { id: "additional-works", label: "Additional Works" },
  { id: "delivery-compare", label: "Docs & Handover" },
  { id: "faq", label: "FAQ" },
];

const packageLevels: PackageLevel[] = [
  {
    id: "ls-1",
    level: "LS-1",
    name: "Basic Build Package",
    rate: "₹1,899 / sq.ft.",
    subtitle: "A budget-friendly package with branded materials and proper structural design.",
    bestFor: "Firm inland plots and first-time builders who want full engineering discipline at the most economical package level.",
    warranty: "2 years",
    reporting: "On request",
    handover: "Drawings, certificate, warranties",
    retention: "— / 6 months",
    highlights: [
      "ARS / iSTEEL / Viki / Suryadev / Tirumala / Pulkit reinforcement grade to approved structural design and MTC",
      "Design-mix structural RCC to approved structural design",
      "Foundation type and depth from site conditions and structural design",
      "Flooring allowance ₹55 / sq.ft.; sanitaryware ₹16,000 per bathroom",
      "Standard site QA with engineer-directed concrete testing",
    ],
  },
  {
    id: "ls-2",
    level: "LS-2",
    name: "Better Waterproofing Package",
    rate: "₹1,999 / sq.ft.",
    subtitle: "Adds better protection against water problems in the foundation, terrace, and outer walls.",
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
    name: "Quality-Checked Structure Package",
    rate: "₹2,099 / sq.ft.",
    subtitle: "Includes lab-tested concrete quality checks and proper records.",
    bestFor: "Good for owners who want stronger concrete checking before moving to higher packages.",
    warranty: "10 years",
    reporting: "Fortnightly with photos",
    handover: "Same + stage records",
    retention: "— / 6 months",
    highlights: [
      "Concrete cube testing at important stages, with lab certificates",
      "Continuous lintel band to all walls; pre-construction anti-termite treatment",
      "Two-coat below-ground bituminous protection before backfilling",
      "Teak main door allowance ₹38,000; AC point in bedrooms",
      "Flooring allowance ₹70 / sq.ft.; sanitaryware ₹23,000 per bathroom",
    ],
  },
  {
    id: "ls-4",
    level: "LS-4",
    name: "Long Warranty Structure Package",
    rate: "₹2,249 / sq.ft.",
    subtitle: "Gives a 15-year structural warranty with better material records and after-handover support.",
    bestFor: "Good for owners who want a longer structural warranty without moving to the full engineering-record package.",
    warranty: "15 years",
    reporting: "Fortnightly with photos",
    handover: "Same + warranty file",
    retention: "₹25 / sq.ft. / 12 months",
    highlights: [
      "15-year structural warranty on footing, column, beams and roof slab",
      "₹25 / sq.ft. kept for 12 months after handover as support retention",
      "Better steel records and stronger wall specifications",
      "Monolithic RCC staircase with granite ₹130 / sq.ft.",
      "Flooring ₹80 / sq.ft.; sanitaryware ₹28,000 per bathroom",
    ],
  },
  {
    id: "ls-5",
    level: "LS-5",
    name: "Ready-Mix Quality Package",
    rate: "₹2,399 / sq.ft.",
    subtitle: "Uses ready-mix concrete with better quality checking and records.",
    bestFor: "Good for projects that want ready-mix concrete control and proper monthly reporting.",
    warranty: "15 years",
    reporting: "Monthly written report",
    handover: "Same + test reports",
    retention: "₹25 / 12 months",
    highlights: [
      "ARS / iSTEEL / SAIL / Vizag with steel records",
      "Ready-mix structural concrete with plant batch records",
      "Water-hold test done in every wet area before finishing work",
      "Enhanced below-ground bituminous protection at junctions and penetrations",
      "Flooring ₹95 / sq.ft.; sanitaryware ₹34,000 per bathroom",
    ],
  },
  {
    id: "ls-6",
    level: "LS-6",
    name: "Full Engineering Package",
    rate: "₹2,549 / sq.ft.",
    subtitle: "Includes the full engineering file with calculations, soil report, and quality records.",
    bestFor: "Good for owners who want the full engineering file, soil report, calculations, and stronger quality records.",
    warranty: "15 years",
    reporting: "Monthly written report",
    handover: "Same + calculation report",
    retention: "₹25 / 12 months",
    highlights: [
      "Signed structural calculation report given to you",
      "Full soil test report with bore details, lab results, and safe bearing capacity",
      "Membrane terrace waterproofing with 10-year system warranty",
      "Crack-control mesh, EV charging point, and safety trip protection on all power circuits",
      "Flooring ₹110 / sq.ft.; sanitaryware ₹40,000 per bathroom",
    ],
  },
  {
    id: "ls-7",
    level: "LS-7",
    name: "Premium Strength Package",
    rate: "₹2,799 / sq.ft.",
    subtitle: "Built for better long-term strength, with more detailed design records given to you.",
    bestFor: "Good for larger homes that need better long-term strength and more complete engineering records.",
    warranty: "15 years",
    reporting: "Monthly report and review",
    handover: "Same + design model file",
    retention: "₹25 / 12 months",
    highlights: [
      "High-density concrete with controlled water-cement ratio and ready-mix throughout",
      "Structural design model file given to you",
      "Stronger below-ground protection with extra care at joints and pipe entry points",
      "Safer wiring, better circuit safety, CCTV points, LAN points, and video door phone",
      "Flooring ₹135 / sq.ft.; sanitaryware ₹50,000 per bathroom",
    ],
  },
  {
    id: "ls-8",
    level: "LS-8",
    name: "Coastal Protection Package",
    rate: "₹3,099 / sq.ft.",
    subtitle: "Made for coastal or difficult sites where salt air, groundwater, or harsh site conditions are a concern.",
    bestFor: "Good for coastal or groundwater-risk sites where extra durability protection is important.",
    warranty: "15 years",
    reporting: "Twice-a-month report and review",
    handover: "Same + durability records",
    retention: "₹25 / 12 months",
    highlights: [
      "CRS / premium steel plan where site exposure needs extra protection",
      "Low-permeability concrete mix designed for exposed sites",
      "Salt-check testing for aggregates and washed M-sand",
      "Membrane below-ground protection where groundwater or salt exposure needs it",
      "Flooring ₹150–160 / sq.ft. base allowance; sanitaryware ₹55,000 per bathroom",
    ],
  },
  {
    id: "ls-9",
    level: "LS-9",
    name: "Top Premium Life Package",
    rate: "₹3,449 / sq.ft.",
    subtitle: "Our top package with the strongest long-life planning and a dedicated site engineer.",
    bestFor: "Good for high-exposure sites where you want the strongest durability plan and closer site control.",
    warranty: "20 years",
    reporting: "Dedicated site engineer",
    handover: "Full final file with maintenance schedule",
    retention: "₹30 / sq.ft. / 24 months",
    highlights: [
      "20-year structural warranty; ₹30 / sq.ft. support retention; 24-month defect support period",
      "Full below-ground protection system with membrane, joints, protection, and drainage layer",
      "High-performance concrete designed for harsh exposure, with water-tightness checking",
      "SS316 railings, marine-grade hardware, and rust-resistant fixings",
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
      "Every 2 weeks with photos",
      "Every 2 weeks with photos",
      "Monthly written report",
      "Monthly written report",
      "Monthly report and review",
      "Twice-a-month report and review",
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
      "Same + test reports",
      "Same + calculation report",
      "Same + design model file",
      "Same + durability records",
      "Full final file + maintenance schedule",
    ],
  },
  {
    label: "Support retention / defect support",
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
      "Basic bathroom waterproofing",
      "Two waterproof coats with wall upturn",
      "Two waterproof coats with wall upturn",
      "Two waterproof coats with extra joint protection",
      "Water-hold test recorded",
      "Water-hold test recorded",
      "Water-hold test recorded",
      "Two-stage water-hold test",
      "Two-stage water-hold test with salt check",
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
      "ISI copper wiring with basic safety switches",
      "Safer branded modular electrical fittings",
      "Safer wiring with AC points",
      "Safer wiring with extra wet-area safety",
      "Safer wiring with extra safety protection",
      "Full power-circuit safety with EV point",
      "Advanced safety with CCTV and LAN points",
      "Advanced safety with CCTV and video door phone",
      "Wiring planned for home automation",
    ],
  },
  {
    label: "Plumbing system",
    values: [
      "CPVC water lines and standard drainage system",
      "Same system with approved brand materials",
      "Same system with approved brand materials",
      "Premium plumbing brand with better control valves",
      "Premium plumbing brand",
      "Premium plumbing brand",
      "Better water distribution system",
      "Better water distribution with pressure control where needed",
      "High-service plumbing layout with pressure control",
    ],
  },
  {
    label: "Testing and quality checks",
    values: [
      "Regular site checks and engineer-guided concrete testing",
      "Regular checks and better waterproofing inspection",
      "Concrete testing plan with lab certificates",
      "Lab testing with stronger material records",
      "Ready-mix batch records with quality records",
      "Engineering file with planned testing records",
      "Extra concrete checks when needed",
      "Durability checks focused on water resistance",
      "Durability checks focused on water and salt resistance",
    ],
  },
];

const engineeringRows: MatrixRow[] = [
  {
    label: "Concrete quality level",
    values: [
      "Site-mixed concrete with measured batching",
      "Site-mixed concrete with measured batching",
      "Machine-mixed concrete with batch records",
      "Machine-mixed concrete with batch records",
      "Ready-mix concrete at roof and plinth",
      "Ready-mix concrete at footing and roof",
      "Ready-mix concrete throughout",
      "Special concrete mix for exposed sites",
      "High-durability premium concrete mix",
    ],
  },
  {
    label: "Structural records",
    values: [
      "Design on file",
      "Design on file",
      "Design on file",
      "Design summary issued",
      "Design summary issued",
      "Signed calculation report given",
      "Calculation report + design model given",
      "Calculation report + design model given",
      "Full calculation and durability file",
    ],
  },
  {
    label: "Soil test records",
    values: [
      "Site check",
      "Site check",
      "Site check",
      "Site check",
      "Site check",
      "Full soil investigation included",
      "Full soil investigation included",
      "Soil investigation with site-based changes if needed",
      "Detailed soil investigation with full mapping",
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
      "Enhanced protection with membrane layer",
      "Stronger protection system",
      "Protection system designed for exposed sites",
      "Engineered membrane protection system",
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

const brandRows: MatrixRow[] = [
  {
    label: "Steel brand level",
    values: [
      "ARS / iSTEEL / Viki / Suryadev / Tirumala / Pulkit",
      "ARS / iSTEEL / Viki / Suryadev / Tirumala / Pulkit",
      "ARS / iSTEEL branded set",
      "ARS / iSTEEL / SAIL / Suryadev",
      "ARS / iSTEEL / SAIL / Vizag",
      "ARS / iSTEEL / SAIL / Vizag",
      "ARS / iSTEEL / SAIL / JSW / Tata",
      "CRS / premium steel for exposed-site needs",
      "CRS / corrosion-protection plan with premium hardware",
    ],
  },
  {
    label: "Electrical level",
    values: [
      "ISI copper wiring with basic safety switch",
      "Fire-resistant modular fittings",
      "Fire-resistant fittings + AC points",
      "Fire-resistant fittings + wet-area safety switch",
      "Fire-resistant fittings + extra safety switch",
      "Extra safety switch on all power lines + EV point",
      "Advanced safety switch + CCTV + LAN + video door phone",
      "Extra safety switches + CCTV + video door phone",
      "Automation-ready electrical planning",
    ],
  },
  {
    label: "Plumbing and bathroom level",
    values: [
      "CPVC plumbing, standard drainage, ₹16k sanitaryware",
      "Approved-brand plumbing, ₹19k sanitaryware",
      "Approved-brand plumbing, ₹23k sanitaryware",
      "Premium valves, ₹28k sanitaryware",
      "Premium plumbing brand, ₹34k sanitaryware",
      "Premium plumbing brand, ₹40k sanitaryware",
      "Better water flow system, ₹50k sanitaryware",
      "Better water flow + pressure control, ₹55k sanitaryware",
      "High-end plumbing layout, ₹60.5k sanitaryware",
    ],
  },
  {
    label: "Flooring budget level",
    values: [
      "₹55 flooring",
      "₹60 flooring",
      "₹70 flooring",
      "₹80 flooring",
      "₹95 flooring",
      "₹110 flooring",
      "₹135 flooring",
      "₹150–160 flooring base",
      "₹175–180 flooring base",
    ],
  },
];

const packageOverviewRows: MatrixRow[] = [
  {
    label: "Package name",
    values: packageLevels.map((pkg) => pkg.name),
  },
  {
    label: "Core package promise",
    values: packageLevels.map((pkg) => pkg.subtitle),
  },
  ...quickCompareRows,
];

const packageHighlightRows: MatrixRow[] = [
  {
    label: "Key inclusion 1",
    values: packageLevels.map((pkg) => pkg.highlights[0] ?? "—"),
  },
  {
    label: "Key inclusion 2",
    values: packageLevels.map((pkg) => pkg.highlights[1] ?? "—"),
  },
  {
    label: "Key inclusion 3",
    values: packageLevels.map((pkg) => pkg.highlights[2] ?? "—"),
  },
  {
    label: "Key inclusion 4",
    values: packageLevels.map((pkg) => pkg.highlights[3] ?? "—"),
  },
  {
    label: "Key inclusion 5",
    values: packageLevels.map((pkg) => pkg.highlights[4] ?? "—"),
  },
];

const masterComparisonSections: ComparisonSection[] = [
  {
    title: "Basic package details",
    rows: packageOverviewRows,
  },
  {
    title: "Material brands and finish levels",
    rows: brandRows,
  },
  {
    title: "Work quality and finish allowances",
    rows: technicalRows,
  },
  {
    title: "Engineering and waterproofing level",
    rows: engineeringRows,
  },
  {
    title: "Main things included in each package",
    rows: packageHighlightRows,
  },
];

const scopeBaseRows = [
  "Architectural and structural design",
  "Excavation, foundation and RCC structure",
  "Masonry, plastering, waterproofing",
  "Flooring, tiling, kitchen counter and dado",
  "Doors, windows, joinery and metal works",
  "Electrical and plumbing systems",
  "Painting, testing, supervision and handover",
];

const scopeStatutoryRows = [
  "Rainwater harvesting structure",
  "Underground sump and septic tank",
  "Sewer, water and EB connections",
  "Borewell and pump set",
  "Plan approval and statutory fees",
  "Abnormal foundation / piling / raft ground improvement",
  "Rock excavation, dewatering and shoring",
  "Compound wall, gate and external infrastructure",
];

const scopeUpgradeRows = [
  "Modular kitchen, wardrobes and carpentry",
  "False ceiling and TV units",
  "Premium façade elements",
  "Landscaping, paving and pergola",
  "Lift, generator, solar and automation",
  "Higher tile or sanitaryware allowance",
  "Loose furniture, appliances and curtains",
];

const clientScopeRows = [
  "Construction water and electricity",
  "Space for material storage and labour rest",
  "Land, title and boundary clarity",
  "Access permissions from association or authority",
  "Selection decisions within the agreed schedule dates",
  "Payment of statutory fees at authority rates",
];

const separatelyPricedWaterRows: ScopeCostRow[] = [
  { item: "Rainwater harvesting structure", specification: "Statutory under Chennai byelaw; verify current requirement at approval stage", rate: "₹18,000–₹85,000 by specification" },
  { item: "Underground sump", specification: "Per litre capacity", rate: "₹28 per litre" },
  { item: "Septic tank / bio tank / fire chambered tank", specification: "Per litre", rate: "₹16–₹28 per litre" },
  { item: "Soak pit", specification: "3 ft dia × 5 ft depth", rate: "₹18,000–₹28,000" },
  { item: "Borewell with pump set", specification: "Depth dependent", rate: "₹1,20,000–₹2,50,000" },
  { item: "Water softener / pressure pump", specification: "Domestic", rate: "₹18,000–₹90,000" },
  { item: "CMDA / DTCP plan approval", specification: "Within city limits", rate: "₹50–₹80 per sq.ft" },
  { item: "CMWSSB sewer connection", specification: "110 mm / 140 mm", rate: "₹24,500 / ₹26,500" },
  { item: "CMWSSB advance tax", specification: "Per dwelling unit, where unassessed", rate: "₹3,000" },
  { item: "TNEB service connection", specification: "Single or three phase, subject to TNEB sanction", rate: "₹25,000–₹45,000" },
  { item: "Soil investigation", specification: "Boreholes, tests, and report (included from LS-6)", rate: "₹18,000–₹25,000" },
  { item: "Water-table / soil water-absorption testing", specification: "For difficult or exposed sites", rate: "₹8,000–₹15,000" },
];

const separatelyPricedSiteRows: ScopeCostRow[] = [
  { item: "Compound wall, basic", specification: "4.5\" solid block to sill", rate: "₹700–₹900 per running foot" },
  { item: "Compound wall, standard", specification: "With 2 ft setback finish", rate: "₹1,400–₹1,800 per running foot" },
  { item: "Compound wall, finished", specification: "With elevation treatment", rate: "₹2,300–₹2,800 per running foot" },
  { item: "M.S. gate, 15 ft", specification: "—", rate: "₹30,000–₹45,000" },
  { item: "SS or designer gate, 15 ft", specification: "—", rate: "₹60,000–₹99,000" },
  { item: "External paving and driveway", specification: "Per sq.ft", rate: "₹120–₹280" },
  { item: "Lift shaft and site infrastructure where a lift is part of the design", specification: "Quoted on the lift specification", rate: "Quoted on the lift specification" },
  { item: "Piling / raft / ground improvement", specification: "Decided after checking the soil report", rate: "Quoted after soil investigation" },
  { item: "Rock excavation, soil replacement, dewatering", specification: "Beyond normal excavation", rate: "Measured and quoted" },
  { item: "Excess excavation and imported filling soil", specification: "Beyond standard excavation and filling assumption", rate: "Measured and quoted" },
  { item: "Road cutting and restoration", specification: "Authority permission and reinstatement", rate: "At authority rates plus works" },
  { item: "Below-ground bituminous coating at LS-1", specification: "Two coats, measured on actual treated surface area", rate: "Measured add-on, quoted on area" },
];

const separatelyPricedAccessRows: ScopeCostRow[] = [
  { item: "Existing building demolition", specification: "Dismantling, debris removal and cart-away", rate: "Measured and quoted" },
  { item: "Neighbouring structure protection", specification: "Support work for adjoining walls or buildings", rate: "Quoted based on design" },
  { item: "Temporary shoring and earth retention", specification: "For deep excavation or tight urban plots", rate: "Quoted based on design" },
  { item: "Restricted-access material handling", specification: "Manual shifting where machinery cannot reach", rate: "Quoted after site check" },
  { item: "Traffic and road occupancy", specification: "Authority permission, escort or night delivery", rate: "At authority rates plus handling" },
  { item: "Soil disposal beyond haul assumption", specification: "Cart-away past the standard distance", rate: "Per load, measured" },
  { item: "Major tree removal", specification: "Where authority permission is applicable", rate: "Quoted; statutory fee at actuals" },
];

const documentationRows = [
  "Approved architectural and structural drawings",
  "Material and brand approvals against the agreement",
  "Stage photographs at important check points",
  "Concrete pouring and curing records",
  "Cube test results",
  "Plumbing pressure test and electrical test records",
  "Pending-fix list and correction record",
  "Handover certificate and warranty letter",
  "Electrical board details and product warranty cards",
];

const higherLevelDocRows = [
  "Laboratory test certificates issued — LS-3 upward",
  "Digital project file — LS-5 and above",
  "Signed structural calculation report — LS-6 and above",
  "Soil test report — LS-6 and above",
  "Structural design model file — LS-7 and above",
  "Durability records and exposed-site design basis — LS-8 and above",
  "Full final file and maintenance schedule — LS-9",
];

const holdPointGroups = [
  {
    title: "Foundation pre-pour",
    items: [
      "Footing location against setting-out",
      "Excavation depth and founding condition",
      "PCC level and dimensions",
      "Footing dimensions and shuttering",
      "Bar diameter, spacing and laps",
      "Column starter position and verticality",
      "Pre-pour photographs and engineer approval",
    ],
  },
  {
    title: "Slab pre-pour",
    items: [
      "Formwork line, level, slab thickness and beam depth",
      "Props, supports and joint tightness",
      "Main and distribution reinforcement",
      "Electrical conduits, fan boxes and sleeves",
      "Approved grade, slump check and cube sampling",
      "Pour record and curing regime logged",
    ],
  },
  {
    title: "Pre-plaster and plumbing test",
    items: [
      "Wall alignment and plumb",
      "Conduits and junction boxes",
      "Plumbing lines and pressure-test status",
      "Door frame fixing",
      "Leakage inspection and rectification",
      "Written approval recorded before concealment",
    ],
  },
];

const handoverRows = [
  "Joint pre-handover inspection covering cracks, tile hollowness, alignment, doors, windows and locks, plumbing leakage and drainage, sanitary fixtures, electrical points and DB, paint, railings, façade and external drainage",
  "A written list of pending fixes given to you, with an agreed correction plan",
  "Rectification and joint re-inspection until the list is closed",
  "System testing and commissioning — electrical circuits, water supply, drainage and fixtures",
  "Full final cleaning of the house and the site",
  "Client walkthrough with demonstration of services, valves, DB and maintenance points",
  "Handover of keys, drawings, test records, warranties, and the full project file",
];

const buildStageRows = [
  "Project initiation — agreement, brief confirmation, and engineering kick-off",
  "Survey and engineering — total-station or setting-out survey, soil assessment, and structural design",
  "Excavation and foundation preparation — marking, excavation, PCC, and founding-level check",
  "Foundation RCC — footing reinforcement, pre-concrete check point, footing concrete, and columns",
  "Sump and plinth — below-ground damp protection, backfilling in layers, and plinth beam",
  "Ground floor structure — columns, masonry, lintels, sunshades, and staircase",
  "Intermediate floor structure — slab shuttering, reinforcement, slab pour, and curing",
  "Upper floor and roof structure — repeat of approved drawings, headroom, and parapet",
  "Concealed electrical and plumbing works — electrical chasing, conduit, plumbing pipework, and pressure test",
  "Masonry and plastering — pre-plaster inspection, internal plaster, and external plaster",
  "Waterproofing and flooring — wet areas, terrace, water-hold tests, flooring, and tiling",
  "Doors, windows, and metal works — frames, shutters, uPVC windows, grills, and railings",
  "Painting and finishes — putty, primer, interior coat, and elevation finish",
  "Fixtures, testing, and final checks — CP fittings, electrical fixtures, system tests, and final inspection",
  "Inspection and handover — pending-fix list, correction, cleaning, walkthrough, keys, and file handover",
];

const siteFitExclusionRows = [
  "LS-1 and LS-2 are not for waterlogged or weak-soil plots where the foundation demand is higher.",
  "LS-1 should not be used for coastal severe-exposure sites or harsh salt-air conditions.",
  "Very narrow access plots, complex villas, large spans, cantilevers, double-height designs, and heavy façade/glazing needs should move to a higher package or a custom engineering quote.",
  "If a premium brand requirement already starts above the package band, it should be treated as an upgrade, not assumed inside the lower package price.",
  "Declining the wrong project protects both the client’s build and Lokra’s delivery record.",
];

const foundationPolicyRows = [
  "Firm inland strata with safe bearing capacity around 180 kN/m² or above — conventional isolated footing is included in the package rate.",
  "Medium-firm sites with moderate water table — deeper or combined footing may be needed, with about 8% to 14% adjustment depending on design.",
  "Loose sand or high water-table sites — design-specific foundation and groundwater pumping are extra, commonly about ₹100 to ₹175 per sq.ft. plus pumping if required.",
  "Filled or reclaimed ground — raft, ground improvement, or piling is priced after the soil report and structural design.",
  "Rock strata or abnormal excavation — controlled excavation is measured and quoted separately.",
  "No fixed rate is issued for reclaimed land or high-exposure sites without a soil report.",
];

const brandCommitmentRows = [
  "The agreement records the grade and the named product band, not just a company name.",
  "If more than one approved brand is listed, Lokra chooses from that signed approved list during procurement.",
  "A brand list is not a brand commitment to a single item before procurement starts.",
  "If a named brand becomes genuinely unavailable, Lokra proposes an equivalent substitute only in writing and proceeds only after approval.",
  "Tiles, granite, uPVC profiles, and glazing stay within the stated allowance and approved vendor list at material-selection stage.",
  "Material invoices remain available for inspection during the project.",
];

const allowanceRows = [
  "Tile and stone allowances are material basic rates per sq.ft.; GST, transport, loading, wastage, adhesive, grout, and skirting already sit inside the package and are not deducted from the allowance.",
  "Sanitaryware and CP allowances are quoted per bathroom and scale with the house; for example, a three-bathroom home at LS-4 carries ₹84,000 total allowance.",
  "Kitchen counter allowances carry both a rate and a running-foot limit. Length beyond that limit is charged at the same rate.",
  "Tile allowance covers material within the stated rate and the standard laying format for that package. Oversized slab tiles, book-matched patterns, specialty cuts, levelling systems, epoxy, or non-standard laying methods can add installation charges.",
  "Choosing material above the allowance means only the difference is billed. Choosing below the allowance is credited.",
  "All allowances are confirmed against the approved vendor list during selection.",
];

const faqs = [
  {
    q: "How should I choose the right Lokra package?",
    a: "First check the package price range. Then compare warranty, reports, waterproofing, bathroom budget, flooring budget, and quality checks to choose the right package.",
  },
  {
    q: "Are these package details shown in website format?",
    a: "Yes. The package details are shown here in a simpler website format so you can compare them more easily.",
  },
  {
    q: "Which package is better for a normal site and which is better for a coastal or difficult site?",
    a: "The lower and middle packages suit normal inland plots. The higher packages are better for coastal areas, groundwater issues, or projects that need stronger long-life protection.",
  },
  {
    q: "Can I speak to Lokra Infra before choosing a package?",
    a: "Yes. Share your plot location and budget through the contact form, and Lokra Infra can help you choose the right package before finalising the work.",
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
    <section className="packages-data-table" style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)" }}>
      <div className="packages-data-table-head" style={{ padding: "1.5rem", borderBottom: "1px solid var(--border-warm)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.5rem" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "900px" }}>
          {description}
        </p>
        <p className="packages-mobile-table-note" style={{ marginTop: "0.75rem", fontFamily: "var(--font-body)", fontSize: "0.84rem", lineHeight: 1.6, color: "var(--muted-sand)" }}>
          On mobile, swipe this table sideways to compare all packages.
        </p>
      </div>
      <div className="packages-table-wrap" style={{ overflowX: "auto" }}>
        <table className="packages-compare-table packages-compare-table-compact" style={{ width: "100%", minWidth: "1200px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--charcoal)" }}>
              <th style={{ textAlign: "left", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Specification
              </th>
              {packageHeaders.map((header) => (
                <th key={header} style={{ textAlign: "left", verticalAlign: "top", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--warm-white)", fontFamily: "var(--font-display)", fontSize: "0.8rem", lineHeight: 1.4 }}>
                  {renderPriceText(header)}
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
                    {renderPriceText(value)}
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

function MasterComparisonTable({ title, description, sections }: { title: string; description: string; sections: ComparisonSection[] }) {
  return (
    <section className="packages-data-table packages-data-table-master" style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)" }}>
      <div className="packages-data-table-head" style={{ padding: "1.5rem", borderBottom: "1px solid var(--border-warm)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.5rem" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "900px" }}>
          {description}
        </p>
        <p className="packages-mobile-table-note" style={{ marginTop: "0.75rem", fontFamily: "var(--font-body)", fontSize: "0.84rem", lineHeight: 1.6, color: "var(--muted-sand)" }}>
          On mobile, swipe this table sideways. The first column stays visible so you can track each row more easily.
        </p>
      </div>
      <div className="packages-table-wrap packages-table-wrap-master" style={{ overflowX: "auto" }}>
        <table className="packages-compare-table packages-compare-table-master" style={{ width: "100%", minWidth: "1320px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--charcoal)" }}>
              <th style={{ textAlign: "left", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", minWidth: "240px" }}>
                Specification
              </th>
              {packageHeaders.map((header) => (
                <th key={header} style={{ textAlign: "left", verticalAlign: "top", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--warm-white)", fontFamily: "var(--font-display)", fontSize: "0.78rem", lineHeight: 1.35, minWidth: "170px" }}>
                  <span style={{ display: "block", color: "var(--accent)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                    Price
                  </span>
                  <span>{renderPriceText(header)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sections.map((section, sectionIndex) => (
              <Fragment key={section.title}>
                <tr style={{ backgroundColor: "rgba(193,154,107,0.12)" }}>
                  <td colSpan={packageHeaders.length + 1} style={{ padding: "0.9rem 1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.76rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    {section.title}
                  </td>
                </tr>
                {section.rows.map((row, rowIndex) => (
                  <tr key={`${section.title}-${row.label}`} style={{ backgroundColor: (sectionIndex + rowIndex) % 2 === 0 ? "transparent" : "rgba(245,241,234,0.02)" }}>
                    <td style={{ padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--warm-white)", fontFamily: "var(--font-display)", fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase", minWidth: "240px" }}>
                      {row.label}
                    </td>
                    {row.values.map((value, index) => (
                      <td key={`${section.title}-${row.label}-${index}`} style={{ padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--concrete)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.6, verticalAlign: "top", minWidth: "170px" }}>
                        {renderPriceText(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ScopeCostTable({ title, description, rows }: { title: string; description: string; rows: ScopeCostRow[] }) {
  return (
    <section className="packages-data-table packages-scope-table" style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)" }}>
      <div className="packages-data-table-head" style={{ padding: "1.5rem", borderBottom: "1px solid var(--border-warm)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.45rem" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "900px" }}>
          {description}
        </p>
        <p className="packages-mobile-table-note" style={{ marginTop: "0.75rem", fontFamily: "var(--font-body)", fontSize: "0.84rem", lineHeight: 1.6, color: "var(--muted-sand)" }}>
          On mobile, swipe sideways if you want to see the full rate and specification together.
        </p>
      </div>
      <div className="packages-table-wrap packages-table-wrap-scope" style={{ overflowX: "auto" }}>
        <table className="packages-compare-table packages-compare-table-scope" style={{ width: "100%", minWidth: "960px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--charcoal)" }}>
              <th style={{ textAlign: "left", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Item</th>
              <th style={{ textAlign: "left", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Specification</th>
              <th style={{ textAlign: "left", padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Rate / Basis</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.item} style={{ backgroundColor: rowIndex % 2 === 0 ? "transparent" : "rgba(245,241,234,0.02)" }}>
                <td style={{ padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--warm-white)", fontFamily: "var(--font-display)", fontSize: "0.83rem", lineHeight: 1.5, textTransform: "uppercase", minWidth: "220px" }}>{row.item}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--concrete)", fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.65, minWidth: "360px" }}>{row.specification}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid var(--border-warm)", color: "var(--accent)", fontFamily: "var(--font-display)", fontSize: "0.9rem", lineHeight: 1.6, minWidth: "220px" }}>{renderPriceText(row.rate)}</td>
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
      <main className="packages-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section
          className="packages-hero"
          style={{
            paddingTop: "9rem",
            paddingBottom: "3.5rem",
            backgroundColor: "var(--carbon)",
            borderBottom: "1px solid var(--border-warm)",
          }}
        >
          <div className="container-lokra packages-page-body">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Packages</span>
            </div>
            <div className="packages-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(280px,0.85fr)", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "end" }}>
              <div>
                <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "920px", marginBottom: "1.25rem" }}>
                  Simple Construction Package Comparison For Easy Decision-Making.
                </h1>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem,1.15vw,1.05rem)", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "760px", marginBottom: "1.75rem" }}>
                  This page helps you compare all 9 packages in simple English. You can quickly see the price, key materials, warranty, and what is included in each package.
                </p>
                <div className="hero-ctas packages-hero-ctas" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="#brand-progress" className="btn-primary">
                    <span>Compare Packages</span>
                    <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                  </Link>
                  <Link href="/contact" className="btn-outline-dark">
                    Talk To Lokra Infra
                  </Link>
                </div>
              </div>
              <div className="packages-hero-summary" style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)", padding: "1.5rem" }}>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    { icon: Layers3, label: "Levels", value: "9 package levels" },
                    { icon: ShieldCheck, label: "Rate Range", value: "₹1,899 to ₹3,449 / sq.ft." },
                    { icon: Check, label: "Format", value: "Easy comparison tables, cards, and FAQs" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: "0.9rem", alignItems: "start" }}>
                      <div style={{ width: 42, height: 42, border: "1px solid var(--border-warm)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <item.icon size={16} style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.3rem" }}>{item.label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", lineHeight: 1.55, color: "var(--warm-white)", fontWeight: item.label === "Rate Range" ? 700 : 500 }}>
                          {renderPriceText(item.value)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="packages-jump-shell" style={{ position: "sticky", top: "76px", zIndex: 10, backgroundColor: "rgba(11,11,10,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-warm)" }}>
          <div className="container-lokra packages-page-body packages-jump-links" style={{ paddingTop: "0.9rem", paddingBottom: "0.9rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
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

        <section id="package-ladder" className="section-py" style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)" }}>
          <div className="container-lokra packages-page-body">
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Package Ladder</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                All 9 Packages Shown As Simple Cards.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "860px" }}>
                These cards give a simple package-by-package summary with price, warranty, reports, handover, and major inclusions before you move into the full comparison table. If you want the exact brand-sheet details behind each package, open the Brand Schedule page from the matching card.
              </p>
            </div>

            <div className="packages-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem" }}>
              {packageLevels.map((pkg) => (
                <article className="package-card" key={pkg.id} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)", display: "flex", flexDirection: "column" }}>
                  <div className="package-card-head" style={{ padding: "1.35rem 1.35rem 1rem", borderBottom: "1px solid var(--border-warm)" }}>
                    <div className="package-card-top" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "flex-start" }}>
                      <div className="package-card-title-block" style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.35rem" }}>
                          {pkg.level}
                        </div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", lineHeight: 1.05, textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.55rem" }}>
                          {pkg.name}
                        </h3>
                      </div>
                      <div className="package-card-rate" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", lineHeight: 1, color: "var(--warm-white)", textAlign: "right", whiteSpace: "nowrap", flexShrink: 0, fontWeight: 700, backgroundColor: "rgba(182, 90, 42, 0.12)", border: "1px solid rgba(182, 90, 42, 0.24)", padding: "0.36rem 0.58rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.12)", marginTop: "0.1rem" }}>
                        {renderPriceText(pkg.rate)}
                      </div>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--concrete)" }}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="package-card-meta" style={{ padding: "1.1rem 1.35rem", display: "grid", gap: "0.85rem", borderBottom: "1px solid var(--border-warm)" }}>
                    {[
                      ["Structural warranty", pkg.warranty],
                      ["Reporting", pkg.reporting],
                      ["Handover", pkg.handover],
                      ["Retention / DLP", pkg.retention],
                    ].map(([label, value]) => (
                      <div key={label} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "0.75rem", alignItems: "start" }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>{label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.65, color: "var(--warm-white)", fontWeight: String(value).includes("₹") ? 700 : 500 }}>{renderPriceText(String(value))}</div>
                      </div>
                    ))}
                  </div>

                  <div className="package-card-highlights" style={{ padding: "1.1rem 1.35rem 1.3rem", display: "grid", gap: "0.8rem" }}>
                    {pkg.highlights.map((item) => (
                      <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                        <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--concrete)" }}>{renderPriceText(item)}</span>
                      </div>
                    ))}

                    <div style={{ paddingTop: "0.25rem" }}>
                      <Link href={`/brand-schedule#${pkg.id}`} className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                        <span>View Exact Brand Schedule</span>
                        <ArrowUpRight size={13} strokeWidth={2.4} style={{ position: "relative", zIndex: 1 }} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="brand-progress" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra packages-page-body" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Full 9-Package Comparison</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Compare All 9 Packages In One Easy Table.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "940px" }}>
                After the package cards, this full table lets you compare all 9 packages side by side by price, warranty, materials, finishes, and important features.
              </p>
            </div>
            <MasterComparisonTable
              title="Main package comparison table"
              description="Each column starts with the package price, so it is easier to scan. The rows below show what changes from one package to the next."
              sections={masterComparisonSections}
            />
          </div>
        </section>

        <section id="quick-compare" className="section-py" style={{ backgroundColor: "var(--charcoal)", borderTop: "1px solid var(--border-warm)" }}>
          <div className="container-lokra packages-page-body" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Quick Compare</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Start With The Main Differences.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "900px" }}>
                If you want a quick summary first, check these points: warranty, reporting, handover documents, and defect period.
              </p>
            </div>
            <ComparisonTable
              title="Quick package summary"
              description="This table shows the main differences without making you read every package card first."
              rows={quickCompareRows}
            />
          </div>
        </section>

        <section id="technical-compare" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra packages-page-body" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Technical Compare</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Waterproofing, Finish Budget, Systems, And Quality Checks.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "920px" }}>
                This section shows the practical differences between packages, like waterproofing, flooring budget, bathroom budget, electrical work, plumbing, and quality checks.
              </p>
            </div>
            <ComparisonTable
              title="Finishes, systems, and quality checks"
              description="Use this table to see what really changes in the work quality, finish budget, and checking process." 
              rows={technicalRows}
            />
            <ComparisonTable
              title="Engineering level"
              description="This table shows how the engineering side improves from one package to the next, including concrete quality, documents, foundation protection, and terrace waterproofing."
              rows={engineeringRows}
            />
          </div>
        </section>

        <section id="scope-boundary" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra packages-page-body" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Scope Boundary</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                What Is Included, What Depends On The Site, And What The Owner Must Handle.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "940px" }}>
                This section shows what is inside the package, what is site-dependent, what is an upgrade, and where lower packages should not be used without stronger engineering.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                {
                  title: "A — Included in package price",
                  copy: "These works are included in the package rate.",
                  items: scopeBaseRows,
                },
                {
                  title: "B — Site and approval related works",
                  copy: "These items usually depend on the site or approvals and are usually charged separately.",
                  items: scopeStatutoryRows,
                },
                {
                  title: "C — Optional upgrades",
                  copy: "These are optional upgrades you can add if needed.",
                  items: scopeUpgradeRows,
                },
              ].map((group) => (
                <div key={group.title} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.45rem" }}>{group.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--accent)", marginBottom: "0.9rem" }}>{group.copy}</p>
                  <div style={{ display: "grid", gap: "0.7rem" }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                        <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.45rem" }}>Owner responsibilities and approvals</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--concrete)", marginBottom: "0.9rem", maxWidth: "900px" }}>
                Some things must be arranged by the owner or depend on the site, not on the package price alone.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.8rem 1rem" }}>
                {clientScopeRows.map((item) => (
                  <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                    <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                {
                  title: "Where lower packages should not be used",
                  copy: "This helps you see where lower packages may not suit the site or the design requirement.",
                  items: siteFitExclusionRows,
                },
                {
                  title: "Foundation and soil basis before quoting",
                  copy: "This explains how site condition changes the footing choice and extra-cost logic.",
                  items: foundationPolicyRows,
                },
              ].map((group) => (
                <div key={group.title} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.45rem" }}>{group.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--accent)", marginBottom: "0.9rem" }}>{group.copy}</p>
                  <div style={{ display: "grid", gap: "0.7rem" }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                        <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="additional-works" className="section-py" style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)" }}>
          <div className="container-lokra packages-page-body" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Separately Priced / Additional Works</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                Extra Works And Extra Costs You Should Know About.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "940px" }}>
                This section shows the common extra costs outside the package price, like water and drainage works, approvals, EB connection, compound wall, difficult excavation, demolition, neighbour protection, and foundation changes that depend on the soil report.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                {
                  title: "How the brand list works",
                  copy: "A brand list is not the same as a brand promise to one specific item before procurement starts.",
                  items: brandCommitmentRows,
                },
                {
                  title: "How to read an allowance",
                  copy: "Allowances are not vague placeholders. They follow a clear rate, format, and difference-billing logic.",
                  items: allowanceRows,
                },
              ].map((group) => (
                <div key={group.title} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)", padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.45rem" }}>{group.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--accent)", marginBottom: "0.9rem" }}>{group.copy}</p>
                  <div style={{ display: "grid", gap: "0.7rem" }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                        <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <ScopeCostTable
              title="Water, drainage, approval, and utility works"
              description="These are common extra-cost items that are usually priced separately from the main package rate."
              rows={separatelyPricedWaterRows}
            />
            <ScopeCostTable
              title="Compound wall, site works, and difficult-site extra costs"
              description="These are common extra costs when the site or design needs more work than the standard package."
              rows={separatelyPricedSiteRows}
            />
            <ScopeCostTable
              title="Access, demolition, and neighbour protection works"
              description="These items are often not visible in the main package rate, but they can increase cost and site difficulty."
              rows={separatelyPricedAccessRows}
            />
          </div>
        </section>

        <section id="delivery-compare" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra packages-page-body" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div className="accent-bar" style={{ margin: 0 }} />
                <span className="label-sm">Documentation, Hold Points & Handover</span>
              </div>
              <h2 className="display-md" style={{ color: "var(--warm-white)", marginBottom: "0.9rem" }}>
                The Audit Trail Behind The Package — Not Just The Build Stages.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "920px" }}>
                This section doesn’t just describe materials. It also shows the build sequence, checkpoints, records, testing, and handover quality, so you can understand how the package is managed and closed out.
              </p>
            </div>
            <div style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.9rem" }}>Fifteen stages from agreement to keys</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--accent)", marginBottom: "0.9rem", maxWidth: "920px" }}>
                This section explains Lokra’s full delivery path, not just the material list, so homeowners can see what the engineering-and-execution flow looks like before handover.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.8rem 1rem" }}>
                {buildStageRows.map((item) => (
                  <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                    <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              <div style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.9rem" }}>Every package documentation trail</h3>
                <div style={{ display: "grid", gap: "0.7rem" }}>
                  {documentationRows.map((item) => (
                    <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                      <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.9rem" }}>Added at higher levels</h3>
                <div style={{ display: "grid", gap: "0.7rem" }}>
                  {higherLevelDocRows.map((item) => (
                    <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                      <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {holdPointGroups.map((group) => (
                <div key={group.title} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.9rem" }}>{group.title}</h3>
                  <div style={{ display: "grid", gap: "0.7rem" }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                        <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.9rem" }}>Final checks, cleaning, and handover</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.8rem 1rem" }}>
                {handoverRows.map((item) => (
                  <div key={item} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: "0.65rem", alignItems: "start" }}>
                    <Check size={14} style={{ color: "var(--accent)", marginTop: "0.2rem" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--concrete)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-py" style={{ backgroundColor: "var(--charcoal)" }}>
          <div className="container-lokra packages-page-body" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1.05fr)", gap: "clamp(2rem, 5vw, 4rem)" }}>
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
          <div className="container-lokra packages-page-body" style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.02, letterSpacing: "-0.03em", textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "1rem" }}>
              Want Help Selecting The Right Package For Your Site?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "760px", margin: "0 auto 1.75rem" }}>
              Share your plot location, site condition, and budget range. Lokra Infra can help you shortlist the package that best fits your site and long-term needs.
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
