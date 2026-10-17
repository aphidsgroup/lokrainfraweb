import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Vandalur, Chennai | Scope and package guide | Lokra Infra",
  description:
    "Planning a home build in Vandalur? Start with the plot, the written scope, and Lokra Infra's published construction-package comparison before asking for a rate.",
  keywords: [
    "builders in vandalur chennai",
    "home construction vandalur chennai",
    "building contractors vandalur chennai",
    "house construction vandalur",
    "construction cost vandalur chennai",
  ],
  alternates: { canonical: "/builders-in-vandalur-chennai" },
  openGraph: {
    title: "Builders in Vandalur, Chennai | Lokra Infra",
    description:
      "A practical guide to preparing a Vandalur home-construction brief and comparing a published package scope before you request a quote.",
    url: "https://www.lokrainfra.in/builders-in-vandalur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I prepare before speaking to a Vandalur builder?",
    a: "Bring the exact plot location, dimensions, the kind of home you want, any drawings or approvals already available, photographs, and your budget direction. Flag an existing structure, a shared boundary, limited access, drainage concerns, or demolition early. Those details affect the scope behind a rate.",
  },
  {
    q: "Does Lokra Infra publish a starting construction price?",
    a: "Yes. The public residential package ladder starts at ₹1,899 per sq.ft. It is a comparison starting point, not a final project quote. Drawings, selections, site conditions, allowances, exclusions, and work outside the package can change the total.",
  },
  {
    q: "What changes between the first three package steps?",
    a: "The ₹1,899 entry step is followed by a ₹1,999 step with stronger below-ground, terrace, and external-wall moisture protection. The ₹2,099 step adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty. Read the package scope before comparing rates.",
  },
  {
    q: "What may sit outside a residential construction package?",
    a: "Approval and statutory work, rainwater harvesting, sumps, utility connections, borewell work, compound walls, external works, and difficult-ground measures can be separate or site-dependent. Ask which items apply to the plot and how they will be handled in writing.",
  },
  {
    q: "How should I compare two Vandalur contractor proposals?",
    a: "Use the same drawings or written brief for both. Compare inclusions, exclusions, allowances, materials, testing, reporting, handover records, change handling, and the work that depends on site conditions. A lower rate is useful only when the scope is comparable.",
  },
];

const summaryCards = [
  {
    title: "Bring the plot information",
    desc: "Location, dimensions, access, photos, and any available drawings make the first conversation more useful than a request for a generic per-square-foot rate.",
  },
  {
    title: "Read scope with price",
    desc: "Lokra Infra's published residential ladder starts at ₹1,899 per sq.ft., but the inclusions, allowances, exclusions, and site-dependent items matter just as much.",
  },
  {
    title: "Keep the unknowns visible",
    desc: "Existing structures, water, ground conditions, approvals, and access can affect the job. Put assumptions and open questions in writing before comparing offers.",
  },
];

const sections = [
  {
    title: "Start with a Vandalur site brief",
    body: "A useful construction discussion starts with the actual plot, not a headline rate. State the precise location, plot dimensions, what you plan to build, the likely floor count, and whether drawings already exist. Add photos and note anything that could affect execution, such as an existing building, a shared wall, narrow access, drainage, demolition, storage limits, or a neighbour's structure. The brief does not replace a site assessment. It gives a builder something real to assess.",
    bullets: [
      "Plot location, dimensions, and access",
      "Proposed home, floors, and required spaces",
      "Available drawings, approvals, and reports",
      "Existing conditions and decisions already made",
    ],
  },
  {
    title: "Use the package ladder as a comparison tool",
    body: "Lokra Infra publishes nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. The price steps describe differences in waterproofing, quality checks, reporting, handover records, warranties, and finish allowances. They help you ask better questions, but they are not a substitute for a project scope. Read the inclusions and exclusions beside the rate, then identify the package step that matches the site and the records you expect to receive.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the first three price steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Review the waterproofing-focused step" },
      { href: "/quality-checked-structure-package-chennai", label: "Review the quality-record step" },
    ],
  },
  {
    title: "Separate the house package from plot work",
    body: "A house package does not automatically settle every item required on a plot. Lokra Infra's published package boundary identifies approvals and statutory fees, rainwater harvesting, sumps, sewer, water and electrical connections, borewell work, compound walls, external infrastructure, difficult ground conditions, rock excavation, dewatering, and shoring as separate or site-dependent matters. Ask what applies to your site, who handles it, and how it will be measured or priced before treating a package as the entire project.",
    bullets: [
      "Approvals, fees, and authority submissions",
      "Water, sewer, electrical, and borewell requirements",
      "Boundary walls, gates, and external works",
      "Ground conditions, access, demolition, and temporary work",
    ],
    links: [
      { href: "/packages#scope-boundary", label: "Read the published scope boundary" },
      { href: "/civil-contractors-chennai", label: "Plan civil-work scope" },
    ],
  },
  {
    title: "Compare contractor proposals line by line",
    body: "Ask each contractor to respond to the same written brief. Then compare the drawings, included work, exclusions, allowances, material selections, testing, reporting, handover documents, payment stages, and change process. If one proposal assumes standard access while another includes restricted handling, or one includes an allowance while another names a specific finish, the rates are not yet comparable. Clarify the difference before deciding.",
    links: [
      { href: "/building-contractors-chennai", label: "Use the Chennai contractor checklist" },
      { href: "/process", label: "Review Lokra Infra's published process" },
    ],
  },
  {
    title: "Take the right question to the first discussion",
    body: "For a Vandalur home-construction conversation, share the site location, plot information, the home you have in mind, drawings or photos, known constraints, and budget direction. If you are comparing the ₹1,899, ₹1,999, and ₹2,099 steps, say whether moisture protection, quality records, reporting, or another requirement is driving the decision. That gives the discussion a useful starting point without pretending the first rate is a completed quote.",
    links: [
      { href: "/contact", label: "Discuss a Vandalur site" },
      { href: "/home-construction-chennai", label: "Plan home construction in Chennai" },
      { href: "/chennai-areas", label: "Explore Chennai construction areas" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-vandalur-chennai"
      eyebrow="Vandalur construction planning"
      title="Builders in Vandalur, Chennai"
      intro="If you are planning a home build in Vandalur, begin with the plot and the written scope. Lokra Infra publishes a residential package ladder that can help you compare construction options, but a useful quote still depends on the site, drawings, selections, and work outside the package."
      serviceName="Builders in Vandalur, Chennai"
      serviceDescription="Lokra Infra discusses home-construction planning in Vandalur, Chennai, using plot information, a written scope, and published package comparisons where relevant."
      discoveryPaths={[
        {
          href: "/packages",
          label: "Compare by price",
          desc: "Read the published residential package ladder from ₹1,899 per sq.ft. and the scope behind every step.",
        },
        {
          href: "/building-contractors-chennai",
          label: "Compare contractor scope",
          desc: "Use a practical checklist to read inclusions, exclusions, records, and site-dependent work before comparing quotes.",
        },
        {
          href: "/process",
          label: "Review the process",
          desc: "See the stages Lokra Infra publishes from the first discussion through handover.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share the plot, the home you have in mind, and the budget direction. Start the Vandalur discussion with the details that shape the scope."
    />
  );
}