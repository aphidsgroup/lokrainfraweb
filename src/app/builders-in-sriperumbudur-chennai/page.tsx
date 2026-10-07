import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Sriperumbudur, Chennai | Lokra Infra",
  description:
    "Planning construction in Sriperumbudur? Use Lokra Infra's published package scope and a pre-quote checklist to compare a construction proposal before you decide.",
  keywords: [
    "builders in sriperumbudur chennai",
    "home construction sriperumbudur chennai",
    "building contractors sriperumbudur chennai",
    "house construction cost sriperumbudur",
  ],
  alternates: { canonical: "/builders-in-sriperumbudur-chennai" },
  openGraph: {
    title: "Builders in Sriperumbudur, Chennai | Lokra Infra",
    description:
      "A Sriperumbudur construction checklist for comparing package scope, site work, permissions, and records before a quote.",
    url: "https://www.lokrainfra.in/builders-in-sriperumbudur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I share before asking for a Sriperumbudur construction quote?",
    a: "Share the plot location, dimensions, proposed use, likely floor count, drawings if available, and a budget range. Add photos and mention an existing structure, access limitation, drainage concern, or shared boundary that could affect the work.",
  },
  {
    q: "Is the public package rate a final project price?",
    a: "No. Lokra Infra's package ladder starts at ₹1,899 per sq.ft., but that figure is a comparison starting point. The final total depends on drawings, site conditions, selections, allowances, exclusions, and work outside the published package.",
  },
  {
    q: "What changes between the first three package levels?",
    a: "The ₹1,899 per sq.ft. package is the entry level. The ₹1,999 level adds waterproofing measures. The ₹2,099 level adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty. Review the package page before treating two rates as comparable.",
  },
  {
    q: "What should I ask about work outside the package?",
    a: "Ask for a written list of allowances, exclusions, and site-dependent items. Lokra Infra identifies approvals and statutory fees, utility connections, borewell work, compound walls, demolition, access constraints, and difficult-ground work as items that may need separate treatment.",
  },
  {
    q: "Can I discuss renovation or commercial construction in Sriperumbudur?",
    a: "Yes. State the actual job at the beginning. A renovation, commercial space, and new home need different information and scope, so a residential package does not automatically apply to each one.",
  },
];

const summaryCards = [
  {
    title: "A rate needs a scope",
    desc: "A per-square-foot figure becomes comparable only when the drawings, inclusions, allowances, and exclusions sit beside it.",
  },
  {
    title: "Site work affects the total",
    desc: "Access, demolition, drainage, foundations, connections, and boundary work should be identified before comparing one quote with another.",
  },
  {
    title: "Plan the permission route",
    desc: "Confirm the authority, documents, responsible professional, fees, and timing for the actual proposal before relying on an assumed approval path.",
  },
];

const sections = [
  {
    title: "Build a useful Sriperumbudur project brief",
    body: "Before asking a builder for a number, prepare a short brief. Include the plot location, dimensions, building use, likely floor count, available drawings, and the budget range you are working with. Call out anything unusual, such as an older structure, limited vehicle access, drainage concerns, a shared wall, or a property that will stay occupied during the work. The brief is not a substitute for site assessment. It gives the first conversation something real to work from.",
    bullets: [
      "Location, dimensions, and road access",
      "Building use and likely floor count",
      "Drawings, photos, and existing structures",
      "Budget range and decisions already made",
    ],
  },
  {
    title: "Read the rate alongside the written package",
    body: "Lokra Infra publishes nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. The steps differ in waterproofing, quality checks, reporting, documentation, and allowances. Start with the inclusions and the scope boundary, then decide whether the entry level or an upgrade fits the site and the records you want at handover. A lower rate only tells you something useful when it covers the same work.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Review the waterproofing step" },
      { href: "/quality-checked-structure-package-chennai", label: "Review the quality-record step" },
    ],
  },
  {
    title: "Separate the building from site-specific work",
    body: "A package can describe the house, while the plot still creates separate decisions. Ask which work is included in the published package and which needs its own estimate or allowance. Lokra Infra's package page calls out approvals and statutory fees, borewell work, utility connections, compound walls, demolition, restricted access, and difficult ground conditions as separate or site-dependent. Check that list before comparing a headline rate.",
    bullets: [
      "Approvals and statutory fees",
      "Water, sewer, and power connections",
      "Boundary walls, gates, and external work",
      "Demolition, access limits, and ground conditions",
    ],
  },
  {
    title: "Set permission responsibilities early",
    body: "Permission is a formal part of project planning. CMDA's online information says applications and documents are submitted through online routes, but the right path depends on the plot and proposed building. Confirm the applicable authority, who will arrange drawings and submissions, which documents are still needed, and whether related fees sit outside the construction scope. Get those answers in writing before making commitments.",
    links: [
      { href: "https://www.cmdachennai.gov.in/onlineppa.html", label: "CMDA online planning-permission information" },
      { href: "/process", label: "See Lokra Infra's published process" },
    ],
  },
  {
    title: "Match the service route to the job",
    body: "Use the residential package ladder for a home-construction comparison. If the requirement is a renovation, a commercial build, or civil work, make that clear from the first enquiry. The scope, information needed, and pricing approach can change. Starting on the right route prevents a standard house package from becoming a rough answer to another job.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
      { href: "/services", label: "See all services" },
    ],
  },
  {
    title: "Contact Lokra Infra about a Sriperumbudur site",
    body: "Send the site location, project type, available drawings, and budget direction for a Sriperumbudur discussion. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/builders-in-poonamallee-chennai", label: "Builders in Poonamallee" },
      { href: "/builders-in-kundrathur-chennai", label: "Builders in Kundrathur" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-sriperumbudur-chennai"
      eyebrow="Sriperumbudur construction planning"
      title="Builders in Sriperumbudur, Chennai"
      intro="If you are planning a Sriperumbudur build, start with the plot and a written scope. Lokra Infra's published packages give you a way to compare price, waterproofing, quality records, and allowances before a builder conversation turns into a quote."
      serviceName="Builders in Sriperumbudur, Chennai"
      serviceDescription="Lokra Infra discusses construction planning in Sriperumbudur, Chennai, using a site brief and published package comparisons to clarify scope before a quote."
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
          label: "Discuss a Sriperumbudur site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Sriperumbudur site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}
