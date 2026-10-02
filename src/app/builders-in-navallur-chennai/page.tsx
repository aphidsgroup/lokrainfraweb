import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Navallur, Chennai | Lokra Infra",
  description:
    "Planning a home build in Navallur? Compare published package scope, site-dependent work, and the questions to settle before requesting a construction quote.",
  keywords: [
    "builders in navallur chennai",
    "home construction navallur chennai",
    "building contractors navallur chennai",
    "house construction cost navallur",
  ],
  alternates: { canonical: "/builders-in-navallur-chennai" },
  openGraph: {
    title: "Builders in Navallur, Chennai | Lokra Infra",
    description:
      "A practical Navallur construction brief: compare package scope, site work, and records before you request a quote.",
    url: "https://www.lokrainfra.in/builders-in-navallur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I send before asking for a Navallur construction quote?",
    a: "Send the plot location, dimensions, intended use, number of floors you are considering, available drawings, and a budget range. Mention an existing structure, restricted access, drainage concerns, or a shared boundary early, because those details can change the scope.",
  },
  {
    q: "What is Lokra Infra's published starting package rate?",
    a: "The public residential package ladder starts at ₹1,899 per sq.ft. That is a comparison starting point, not a final quote. Drawings, site conditions, finishes, allowances, exclusions, and separate work can affect the project total.",
  },
  {
    q: "How do the first three package levels differ?",
    a: "The ₹1,899 entry package is followed by a ₹1,999 package with additional waterproofing measures and a ₹2,099 package with concrete quality checks, stage records, and fortnightly photo reporting. Read the full package scope before comparing rates.",
  },
  {
    q: "Which work may sit outside a residential package?",
    a: "Ask for this in writing. Lokra Infra identifies approvals and statutory fees, utility connections, borewell work, compound walls, demolition, restricted access, and difficult ground conditions as separate or site-dependent items on its package page.",
  },
  {
    q: "Can I use a residential package rate for renovation or commercial work?",
    a: "Not as a direct substitute. Renovation, commercial work, and a new home each need a different scope discussion. Explain the job first so the team can point you to the relevant service route.",
  },
];

const summaryCards = [
  {
    title: "Start with the plot",
    desc: "A builder needs the location, dimensions, intended use, and existing conditions before a rate can become a useful project discussion.",
  },
  {
    title: "Compare scope, not just rate",
    desc: "The published price ladder begins at ₹1,899 per sq.ft. Compare inclusions, allowances, exclusions, and records beside each number.",
  },
  {
    title: "Keep site work separate",
    desc: "Approvals, connections, access constraints, and unusual ground conditions need their own written treatment rather than an assumption inside a package rate.",
  },
];

const sections = [
  {
    title: "Prepare a short Navallur site brief",
    body: "A good first construction conversation does not need a finished design, but it does need the basics. Note the plot location, dimensions, road access, building use, likely floor count, and any drawings you already have. If the property has an old structure, drainage concern, shared wall, or limited vehicle access, include that too. The brief gives a builder something concrete to assess before anyone starts comparing package prices.",
    bullets: [
      "Plot location, dimensions, and road access",
      "Building use and likely floor count",
      "Drawings, photos, and existing structures",
      "Budget range and finish expectations",
    ],
  },
  {
    title: "Read the price with the package scope",
    body: "Lokra Infra publishes nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. The levels are not interchangeable. The first three change the published waterproofing provisions, quality checks, reporting, documentation, and allowances. Read the inclusion list and the scope boundary first, then decide which package is worth discussing for the actual site. A lower rate is only comparable when the work behind it is comparable too.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Review the waterproofing step" },
      { href: "/quality-checked-structure-package-chennai", label: "Review the quality-record step" },
    ],
  },
  {
    title: "Separate the house package from plot work",
    body: "A residential package can describe the building, while the plot still creates separate decisions. Ask what the published package includes and what needs its own estimate, allowance, or specialist review. Lokra Infra's package information calls out approvals and statutory fees, water and power connections, borewell work, compound walls, demolition, restricted access, and difficult ground as items that can need separate treatment. This is worth resolving before you compare headline figures.",
    bullets: [
      "Approvals and statutory fees",
      "Water, sewer, and power connections",
      "Boundary walls, gates, and external work",
      "Demolition, access limits, and ground conditions",
    ],
  },
  {
    title: "Ask how decisions and records are handled",
    body: "A written scope is more useful than a quick per-square-foot answer. Ask how changes are approved, which selections are allowances, what quality checks apply at the package level, and what drawings, test records, reports, or warranty material you receive at handover. Those answers help you compare builders on the work you are actually buying.",
    links: [
      { href: "/process", label: "See Lokra Infra's published process" },
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/building-contractors-chennai", label: "Building contractors in Chennai" },
      { href: "/services", label: "See all services" },
    ],
  },
  {
    title: "Discuss a Navallur requirement with Lokra Infra",
    body: "Send the site location, project type, available drawings, and budget direction for a focused discussion. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. You can call 93446 43324 or email lokrainfra@gmail.com.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/chennai-areas", label: "Explore Chennai construction areas" },
      { href: "/builders-in-kelambakkam-chennai", label: "Builders in Kelambakkam" },
      { href: "/builders-in-padur-chennai", label: "Builders in Padur" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-navallur-chennai"
      eyebrow="Navallur construction planning"
      title="Builders in Navallur, Chennai"
      intro="If you are planning a build in Navallur, begin with the plot and a written scope. Lokra Infra's published packages let you compare rates, allowances, waterproofing, and quality records before a builder conversation turns into a quote."
      serviceName="Builders in Navallur, Chennai"
      serviceDescription="Lokra Infra discusses construction planning for Navallur enquiries using a site brief and published package comparisons to clarify scope before a quote."
      discoveryPaths={[
        {
          href: "/packages",
          label: "Compare published packages",
          desc: "Read the public price ladder from ₹1,899 per sq.ft. and the scope behind each level.",
        },
        {
          href: "/process",
          label: "Understand the process",
          desc: "See the planning, site assessment, and execution stages Lokra Infra publishes for a project discussion.",
        },
        {
          href: "/contact",
          label: "Discuss a Navallur site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Navallur site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}
