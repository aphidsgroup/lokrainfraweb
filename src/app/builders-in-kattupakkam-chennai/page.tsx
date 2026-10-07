import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Kattupakkam, Chennai | Lokra Infra",
  description:
    "Planning construction in Kattupakkam? Use Lokra Infra's published package scope and a site-brief checklist to compare a construction quote before you commit.",
  keywords: [
    "builders in kattupakkam chennai",
    "home construction kattupakkam chennai",
    "building contractors kattupakkam chennai",
    "house construction cost kattupakkam",
  ],
  alternates: { canonical: "/builders-in-kattupakkam-chennai" },
  openGraph: {
    title: "Builders in Kattupakkam, Chennai | Lokra Infra",
    description:
      "A Kattupakkam construction checklist for comparing package scope, site work, permissions, and records before a quote.",
    url: "https://www.lokrainfra.in/builders-in-kattupakkam-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I send before asking for a Kattupakkam construction quote?",
    a: "Send the plot location, dimensions, proposed building use, likely floor count, drawings if you have them, and a budget range. Include photos where access, an old structure, drainage, or a shared boundary may affect the work.",
  },
  {
    q: "Does Lokra Infra's published rate give me a final project cost?",
    a: "No. The public package ladder starts at ₹1,899 per sq.ft., but it is a comparison point rather than a final quote. Drawings, site conditions, selections, allowances, exclusions, and work outside the package affect the project total.",
  },
  {
    q: "How do the first three published package levels differ?",
    a: "The ₹1,899 per sq.ft. package is the entry level. The ₹1,999 level adds waterproofing measures, and the ₹2,099 level adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty. Read the package page for the full scope before comparing rates.",
  },
  {
    q: "Are approvals and utility connections included in the package rate?",
    a: "Do not assume they are. Lokra Infra lists approvals and statutory fees, utility connections, borewell work, compound walls, and difficult-ground work as separate or site-dependent items. Confirm what applies to the actual plot in writing.",
  },
  {
    q: "Can I enquire about renovation or commercial work in Kattupakkam?",
    a: "Yes. Explain the project type at the start. A new home, renovation, and commercial build need different information and may not use the published residential package ladder in the same way.",
  },
];

const summaryCards = [
  {
    title: "Start with the plot",
    desc: "Location, dimensions, road access, building use, and existing conditions make the first builder conversation more useful.",
  },
  {
    title: "Compare written scope",
    desc: "The published package ladder begins at ₹1,899 per sq.ft. Compare inclusions, allowances, exclusions, and site-dependent work before using a rate as a project total.",
  },
  {
    title: "Separate the permission plan",
    desc: "Confirm the responsible authority, documents, professional roles, fees, and timing for the site rather than treating approval as an assumption.",
  },
];

const sections = [
  {
    title: "Prepare a short Kattupakkam site brief",
    body: "A construction rate is only a useful starting point once the builder understands the job. Note the plot location, dimensions, road access, intended use, and likely floor count. Bring available drawings and photos. If the site has an old structure, limited access, a drainage issue, or a shared boundary, raise it early. Those details can change the scope before anyone can sensibly price the work.",
    bullets: [
      "Plot location, dimensions, and road access",
      "Building use and likely floor count",
      "Drawings, photos, and existing conditions",
      "Budget direction and finish expectations",
    ],
  },
  {
    title: "Use the package ladder for a like-for-like comparison",
    body: "Lokra Infra publishes nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. They are not interchangeable. The package tables set out differences in waterproofing, concrete checks, reporting, handover records, and finish allowances. Read the written scope alongside the rate. A lower price does not help if it covers less work or shifts costs into allowances and exclusions.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Review the waterproofing step" },
      { href: "/quality-checked-structure-package-chennai", label: "Review the quality-record step" },
    ],
  },
  {
    title: "Keep plot work visible in the discussion",
    body: "The house package and the plot are related, but they are not the same thing. Lokra Infra's package page identifies approvals and statutory fees, water and power connections, borewell work, compound walls, demolition, difficult ground, and restricted access as separate or site-dependent work. Ask which of these apply to the site, what is included, and what needs its own estimate before comparing quotes.",
    bullets: [
      "Approvals and statutory fees",
      "Water, sewer, and power connections",
      "Boundary walls, gates, and external work",
      "Demolition, access limits, and ground conditions",
    ],
  },
  {
    title: "Set permission responsibilities before construction starts",
    body: "Planning permission is a formal process that depends on the plot and proposal. CMDA says planning-permission applications and document submissions use online routes. Confirm the applicable authority, who will prepare drawings and submissions, what documents are still needed, and how statutory fees are handled. Put the responsibility split in writing before treating a construction discussion as a commitment.",
    links: [
      { href: "https://www.cmdachennai.gov.in/onlineppa.html", label: "CMDA online planning-permission information" },
      { href: "/process", label: "See Lokra Infra's published process" },
    ],
  },
  {
    title: "Choose the route that matches the work",
    body: "The residential package ladder is a helpful comparison tool for a home build. If the job is a renovation, a commercial space, or civil work, say so from the first enquiry. The scope, information required, and pricing approach can be different. Starting with the right route avoids forcing a standard house package onto a different kind of project.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
      { href: "/services", label: "See all services" },
    ],
  },
  {
    title: "Contact Lokra Infra about a Kattupakkam site",
    body: "Send the site location, project type, available drawings, and budget direction for a Kattupakkam discussion. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/builders-in-iyyappanthangal-chennai", label: "Builders in Iyyappanthangal" },
      { href: "/builders-in-poonamallee-chennai", label: "Builders in Poonamallee" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-kattupakkam-chennai"
      eyebrow="Kattupakkam construction planning"
      title="Builders in Kattupakkam, Chennai"
      intro="If you are planning a Kattupakkam build, begin with the plot and a written scope. Lokra Infra's published packages let you compare price, waterproofing, quality records, and allowances before a builder conversation turns into a quote."
      serviceName="Builders in Kattupakkam, Chennai"
      serviceDescription="Lokra Infra discusses construction planning in Kattupakkam, Chennai, using a site brief and published package comparisons to clarify scope before a quote."
      discoveryPaths={[
        {
          href: "/packages",
          label: "Compare published packages",
          desc: "Read the public construction price ladder from ₹1,899 per sq.ft. and the scope behind each level.",
        },
        {
          href: "/process",
          label: "Understand the process",
          desc: "See the planning, site assessment, and execution stages Lokra Infra publishes for a project discussion.",
        },
        {
          href: "/contact",
          label: "Discuss a Kattupakkam site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Kattupakkam site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}
