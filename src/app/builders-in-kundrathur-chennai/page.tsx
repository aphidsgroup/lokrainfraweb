import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Kundrathur, Chennai | Lokra Infra",
  description:
    "Planning construction in Kundrathur? Use Lokra Infra's published package ladder and a clear pre-quote checklist to compare scope before you decide.",
  keywords: [
    "builders in kundrathur chennai",
    "home construction kundrathur chennai",
    "building contractors kundrathur chennai",
    "house construction cost kundrathur",
  ],
  alternates: { canonical: "/builders-in-kundrathur-chennai" },
  openGraph: {
    title: "Builders in Kundrathur, Chennai | Lokra Infra",
    description:
      "A Kundrathur construction checklist for comparing package scope, site work, permissions, and records before a quote.",
    url: "https://www.lokrainfra.in/builders-in-kundrathur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is useful to send before asking for a Kundrathur construction quote?",
    a: "Send the plot location, dimensions, proposed use, number of floors you are considering, drawings if available, and a budget range. Add photos if access, an existing structure, drainage, or a shared boundary may affect the work.",
  },
  {
    q: "Does the published rate give me a final project cost?",
    a: "No. Lokra Infra's published ladder starts at ₹1,899 per sq.ft., but it is a package comparison point. The final total depends on the drawings, site conditions, selections, allowances, exclusions, and work that sits outside the package.",
  },
  {
    q: "What changes between the first three published package steps?",
    a: "The ₹1,899 step is the entry point. The ₹1,999 step adds waterproofing measures. The ₹2,099 step adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty. Read the package page for the complete scope before comparing rates.",
  },
  {
    q: "What should I ask about items outside the package?",
    a: "Ask for a written list of allowances, exclusions, and site-dependent items. Lokra Infra identifies approvals and statutory fees, connections, borewell work, compound walls, demolition, restricted access, and difficult ground conditions as items that may need separate treatment.",
  },
  {
    q: "Should permission planning be settled before construction pricing?",
    a: "It should be discussed early. Confirm the applicable authority, document preparation, professional responsibility, fees, and timing for the plot. Do not treat a package rate as a promise that approval work is included.",
  },
  {
    q: "Can the same package ladder be used for renovation or commercial work?",
    a: "Not automatically. A renovation, commercial space, and new home have different scope questions. Start with the relevant service discussion instead of assuming a residential package maps directly to every job.",
  },
];

const summaryCards = [
  {
    title: "A rate needs a scope",
    desc: "A per-square-foot figure only becomes comparable when the drawings, inclusions, allowances, and exclusions are beside it.",
  },
  {
    title: "Site work can change the total",
    desc: "Access, demolition, drainage, foundations, connections, and boundary work should be identified before you compare one quote with another.",
  },
  {
    title: "Permissions need their own plan",
    desc: "Confirm the authority, documents, responsible professional, fees, and timing for the actual proposal before relying on an assumed approval path.",
  },
  {
    title: "Records are part of the handover",
    desc: "Ask what drawings, test records, reports, warranties, and change approvals you will receive at each package level.",
  },
];

const sections = [
  {
    title: "A practical Kundrathur pre-quote checklist",
    body: "Before you ask a builder for a number, prepare a short brief. Include the plot location, dimensions, building use, floor count, available drawings, and the budget range you are working with. Mark anything unusual: an old structure, limited vehicle access, drainage concerns, a shared wall, or work that needs to continue while the property is occupied. A brief does not replace a site assessment. It gives the first conversation a useful starting point.",
    bullets: [
      "Location, dimensions, and road access",
      "Building use and likely floor count",
      "Drawings, photos, and existing structures",
      "Budget range and decisions already made",
    ],
  },
  {
    title: "Read the rate together with the package",
    body: "Lokra Infra publishes nine residential package steps from ₹1,899 to ₹3,449 per sq.ft. They are not interchangeable. The first three steps differ in waterproofing, quality checks, reporting, documentation, and allowances. Start by reading the inclusions and the scope boundary, then decide whether the entry level or an upgrade fits the site and the level of records you want. A lower rate only helps if it covers the same work.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Review the waterproofing step" },
      { href: "/quality-checked-structure-package-chennai", label: "Review the quality-record step" },
    ],
  },
  {
    title: "Separate house work from plot work",
    body: "A package can describe the house, while the plot still creates separate decisions. Ask which work is included in the published package and which needs its own estimate or allowance. Lokra Infra's package page calls out approvals and statutory fees, borewell work, utility connections, compound walls, demolition, restricted access, and difficult ground conditions as separate or site-dependent. That list is worth checking before you compare a headline rate.",
    bullets: [
      "Approvals and statutory fees",
      "Water, sewer, and power connections",
      "Boundary walls, gates, and external work",
      "Demolition, access limits, and ground conditions",
    ],
  },
  {
    title: "Set the permission responsibilities early",
    body: "Permission is a formal part of project planning. CMDA's online information explains that applications and payments use online routes, but the right path depends on the plot and proposed building. Confirm the applicable authority, who will arrange drawings and submissions, which documents are still needed, and whether the related fees are outside the construction scope. Put those answers in writing before treating a construction discussion as a commitment.",
    links: [
      { href: "https://cmdachennai.gov.in/onlineppa.html", label: "CMDA online planning-permission information" },
      { href: "/process", label: "See Lokra Infra's published process" },
    ],
  },
  {
    title: "Choose a service that matches the job",
    body: "Use the residential package ladder for a home-construction comparison. If the work is a renovation, a commercial fit-out, or a civil requirement, say that at the beginning. The scope, information needed, and way costs are discussed can be different. Starting on the right service route prevents a standard house package from being used as a rough answer to a different job.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
      { href: "/services", label: "See all services" },
    ],
  },
  {
    title: "Contact Lokra Infra about a Kundrathur site",
    body: "Send the site location, project type, available drawings, and budget direction for a Kundrathur discussion. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/builders-in-mangadu-chennai", label: "Builders in Mangadu" },
      { href: "/chennai-areas", label: "Explore Chennai construction areas" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-kundrathur-chennai"
      eyebrow="Kundrathur construction planning"
      title="Builders in Kundrathur, Chennai"
      intro="Planning a Kundrathur build starts with a site brief, not a headline rate. Use Lokra Infra's published packages to compare scope and records, then ask what the plot adds before you commit to a quote."
      serviceName="Builders in Kundrathur, Chennai"
      serviceDescription="Lokra Infra discusses construction planning in Kundrathur, Chennai, using a site brief and published package comparisons to clarify scope before a quote."
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
          label: "Discuss a Kundrathur site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Kundrathur site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}
