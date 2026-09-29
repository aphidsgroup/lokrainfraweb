import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Poonamallee, Chennai | Lokra Infra",
  description:
    "Planning a home build in Poonamallee? Compare Lokra Infra's published package scope, site-dependent items, and the questions worth settling before a quote.",
  keywords: [
    "builders in poonamallee chennai",
    "home construction poonamallee chennai",
    "building contractors poonamallee chennai",
    "house construction cost poonamallee",
  ],
  alternates: { canonical: "/builders-in-poonamallee-chennai" },
  openGraph: {
    title: "Builders in Poonamallee, Chennai | Lokra Infra",
    description:
      "A practical Poonamallee construction brief: compare published packages, site-dependent work, and the questions to settle before a quote.",
    url: "https://www.lokrainfra.in/builders-in-poonamallee-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I share for a Poonamallee construction enquiry?",
    a: "Share the plot location, dimensions or drawings if you have them, the type of building you are considering, and a budget direction. Mention an existing structure, access limitation, or drainage concern early. Those details affect the scope before a rate can mean much.",
  },
  {
    q: "What is Lokra Infra's published starting package rate?",
    a: "The current public package ladder starts at ₹1,899 per sq.ft. This is a comparison starting point rather than a final quote. The final project total can change with site conditions, drawings, finishes, allowances, exclusions, and work outside the published package.",
  },
  {
    q: "How do the first package steps differ?",
    a: "The published ₹1,999 per sq.ft. step adds waterproofing measures. The ₹2,099 per sq.ft. step adds concrete quality checks and fortnightly photo reporting. Read the full package inclusions and exclusions before comparing a rate with another builder's quote.",
  },
  {
    q: "Which costs may sit outside a residential package?",
    a: "The packages page lists separate or site-dependent work such as approvals and statutory fees, borewell and connections, compound walls, abnormal foundation work, demolition, and restricted-access handling. Confirm the written scope for the actual site instead of assuming these items are included.",
  },
  {
    q: "Are planning-permission fees included in the package rate?",
    a: "Do not assume they are. Lokra Infra lists approvals and statutory fees as separate or site-dependent work. Planning-permission requirements depend on the plot and proposed building, so confirm the authority, documents, responsibility, fees, and expected timing for the actual site in writing.",
  },
  {
    q: "Can I discuss a renovation or commercial requirement in Poonamallee?",
    a: "Yes. State the project type at the start. A new home, renovation, and commercial build need different information and scope, so the residential package ladder may not apply in the same way to every requirement.",
  },
];

const summaryCards = [
  {
    title: "Start with a site brief",
    desc: "A plot location, dimensions, building type, and any existing conditions make the first discussion more useful than a headline-rate request.",
  },
  {
    title: "Published rates need a written scope",
    desc: "Lokra Infra's public package ladder begins at ₹1,899 per sq.ft. Compare its inclusions, allowances, exclusions, and site-dependent work before treating it as a project total.",
  },
  {
    title: "Check permissions before committing",
    desc: "Ask which planning authority applies, who will prepare the documents, and which fees or approvals sit outside the construction package.",
  },
  {
    title: "Keep decisions on record",
    desc: "Ask how changes, selections, tests, and handover documents are recorded. It is easier to compare builders when the scope is written down.",
  },
];

const sections = [
  {
    title: "Bring the right details to a Poonamallee builder discussion",
    body: "Begin with the plot and the building you want to make. Note the exact site location, dimensions, road access, number of floors you are considering, and whether drawings or approvals are already available. If there is an older building, a shared boundary, difficult access, or a drainage concern, say so at the start. These are scope questions, not small print.",
    bullets: [
      "Exact plot location and access",
      "Dimensions and available drawings",
      "New build, renovation, or commercial use",
      "Existing-site conditions",
    ],
  },
  {
    title: "Compare the package scope before the headline rate",
    body: "Lokra Infra publishes a nine-step package ladder from ₹1,899 to ₹3,449 per sq.ft. The price is only useful alongside the scope. The lower steps and higher steps differ in areas such as waterproofing, testing, reporting, documentation, allowances, and site fit. Compare the written package details with the same care you would give any other quote.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the first three package steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Read the waterproofing package guide" },
      { href: "/quality-checked-structure-package-chennai", label: "Read the quality-record package guide" },
    ],
  },
  {
    title: "Ask where the package boundary sits",
    body: "A construction package does not remove site-specific work. Before you compare builders, ask what is included, what is an allowance, what is priced separately, and how changes will be approved. Lokra Infra's packages page identifies items such as approval fees, connections, borewell work, compound walls, difficult ground conditions, demolition, and restricted-access handling as separate or site-dependent. Confirm what applies to the actual plot in writing.",
    bullets: [
      "Inclusions and exclusions",
      "Allowance amounts and material selections",
      "Approval and connection responsibilities",
      "Site-specific or difficult-ground work",
    ],
  },
  {
    title: "Keep planning permission separate from a construction promise",
    body: "Planning permission is a formal process, not something a builder can safely promise before checking the plot and proposal. CMDA provides an online planning-permission route. Confirm which authority applies, who will prepare the documents, what information is still needed, and whether statutory fees are outside the construction scope.",
    links: [
      { href: "https://cmdachennai.gov.in/onlineppa.html", label: "CMDA online planning-permission information" },
      { href: "/process", label: "See Lokra Infra's published project process" },
    ],
  },
  {
    title: "Choose the service route that matches the job",
    body: "The published package ladder is most useful for a home-construction comparison. If you are renovating an existing property, planning a commercial space, or need civil work, start with the matching service route rather than forcing it into a standard residential package. That keeps the early conversation about the work you actually need.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
      { href: "/services", label: "See all services" },
    ],
  },
  {
    title: "Contact Lokra Infra",
    body: "For a Poonamallee project discussion, share the site location, project type, drawings if available, and budget direction. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/process", label: "See the published project process" },
      { href: "/builders-in-mangadu-chennai", label: "Builders in Mangadu" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-poonamallee-chennai"
      eyebrow="Poonamallee construction planning"
      title="Builders in Poonamallee, Chennai"
      intro="If you are planning a build in Poonamallee, start with the site and a written scope. Lokra Infra's published packages give you a way to compare price, waterproofing, quality records, and allowances before a builder conversation turns into a quote."
      serviceName="Builders in Poonamallee, Chennai"
      serviceDescription="Lokra Infra discusses construction planning in Poonamallee, Chennai, using a site brief and published package comparisons to clarify scope before a quote."
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
          label: "Discuss a Poonamallee site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Poonamallee site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}
