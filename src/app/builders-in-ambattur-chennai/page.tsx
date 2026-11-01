import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Ambattur, Chennai | Lokra Infra",
  description:
    "Planning construction in Ambattur? Use a site brief, written scope, and Lokra Infra's published package details to compare a proposal before you decide.",
  keywords: [
    "builders in ambattur chennai",
    "home construction ambattur chennai",
    "building contractors ambattur chennai",
    "house construction cost ambattur",
  ],
  alternates: { canonical: "/builders-in-ambattur-chennai" },
  openGraph: {
    title: "Builders in Ambattur, Chennai | Lokra Infra",
    description:
      "An Ambattur construction checklist for comparing package scope, site work, permissions, and records before a quote.",
    url: "https://www.lokrainfra.in/builders-in-ambattur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I share before asking for an Ambattur construction quote?",
    a: "Share the plot location, dimensions, intended use, likely floor count, drawings if you have them, and your budget range. Add photos and mention anything that could affect the work, such as an existing building, tight access, drainage concerns, a shared wall, or an occupied site.",
  },
  {
    q: "Is Lokra Infra's public package rate a final project price?",
    a: "No. Lokra Infra's public residential package ladder runs from ₹1,899 to ₹3,449 per sq.ft. It helps you compare scope. The final total depends on drawings, selections, site conditions, allowances, exclusions, and work that is outside the published package.",
  },
  {
    q: "What changes between the first three package levels?",
    a: "₹1,899 per sq.ft. is the entry level. ₹1,999 adds waterproofing measures. ₹2,099 adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty. Read the package details before treating two headline rates as comparable.",
  },
  {
    q: "What should I ask about work outside the package?",
    a: "Ask for a written list of allowances, exclusions, and site-dependent items. Lokra Infra identifies approvals and statutory fees, utility connections, borewell work, compound walls, demolition, restricted access, and difficult ground conditions as items that can need separate treatment.",
  },
  {
    q: "Can the same package rate be used for renovation or commercial work?",
    a: "Not automatically. Renovation, commercial work, and a new home each need a different scope review. Start by describing the actual job instead of assuming a residential house package applies to everything.",
  },
];

const summaryCards = [
  {
    title: "Compare scope, not slogans",
    desc: "A per-square-foot rate only means something when the drawings, inclusions, allowances, and exclusions are on the page with it.",
  },
  {
    title: "The plot still matters",
    desc: "Access, demolition, drainage, foundations, service connections, and boundary work can change the work around the building itself.",
  },
  {
    title: "Keep permissions separate",
    desc: "Confirm the authority, documents, responsible professional, fees, and timing for the actual proposal before you assume a route is included.",
  },
];

const sections = [
  {
    title: "Start with an Ambattur site brief",
    body: "A useful first conversation needs more than a built-up-area number. Put together the plot location, dimensions, building use, likely floor count, available drawings, and budget direction. Note anything unusual too: an old structure, narrow access, drainage concerns, a shared boundary, or a building that will remain occupied during work. This does not replace a site assessment. It stops the first quote discussion from being built on guesses.",
    bullets: [
      "Location, dimensions, and road access",
      "Building use and likely floor count",
      "Drawings, photos, and existing structures",
      "Budget range and decisions already made",
    ],
  },
  {
    title: "Read the rate alongside the written package",
    body: "Lokra Infra publishes nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. The early steps do different jobs: ₹1,999 adds waterproofing measures, while ₹2,099 adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty. Compare the inclusions and scope boundary first. A lower rate is only useful if it covers the same work.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Review the waterproofing step" },
      { href: "/quality-checked-structure-package-chennai", label: "Review the quality-record step" },
    ],
  },
  {
    title: "Separate the house package from plot work",
    body: "A house package can describe the building, while the plot can create separate decisions. Ask which work is included, what has an allowance, and what needs its own estimate. Lokra Infra's package page calls out approvals and statutory fees, borewell work, utility connections, compound walls, demolition, restricted access, and difficult ground conditions as separate or site-dependent. Check those items before you compare a headline rate.",
    bullets: [
      "Approvals and statutory fees",
      "Water, sewer, and power connections",
      "Boundary walls, gates, and external work",
      "Demolition, access limits, and ground conditions",
    ],
  },
  {
    title: "Set permission responsibilities before you commit",
    body: "Permission planning needs named responsibilities. CMDA publishes online planning-permission information, but the right route depends on the plot and the proposed building. Confirm the authority, who will arrange drawings and submissions, what documents are still needed, and whether related fees are outside the construction scope. Get the answers in writing before treating an early discussion as a commitment.",
    links: [
      { href: "https://www.cmdachennai.gov.in/onlineppa.html", label: "CMDA online planning-permission information" },
      { href: "/process", label: "See Lokra Infra's published process" },
    ],
  },
  {
    title: "Use the service route that matches the job",
    body: "Use the residential package ladder for a home-construction comparison. If the job is renovation, a commercial build, or standalone civil work, say so from the first enquiry. The scope, information needed, and way costs are discussed can change. It is better to start with the right route than force a standard house package into a rough answer for a different job.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
      { href: "/civil-contractors-chennai", label: "Civil contractors in Chennai" },
    ],
  },
  {
    title: "Contact Lokra Infra about an Ambattur site",
    body: "Send the site location, project type, available drawings, and budget direction for an Ambattur discussion. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/builders-in-mogappair-chennai", label: "Builders in Mogappair" },
      { href: "/builders-in-avadi-chennai", label: "Builders in Avadi" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-ambattur-chennai"
      eyebrow="Ambattur construction planning"
      title="Builders in Ambattur, Chennai"
      intro="Planning an Ambattur build starts with a site brief and a written scope, not a headline rate. Use Lokra Infra's published packages to compare the work, records, and allowances before you commit to a quote."
      serviceName="Builders in Ambattur, Chennai"
      serviceDescription="Lokra Infra discusses construction planning in Ambattur, Chennai, using a site brief and published package comparisons to clarify scope before a quote."
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
          label: "Discuss an Ambattur site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have an Ambattur site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}