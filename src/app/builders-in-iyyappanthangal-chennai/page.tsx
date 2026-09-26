import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Iyyappanthangal, Chennai | Lokra Infra",
  description:
    "Planning a home build in Iyyappanthangal? Start with your site details, compare Lokra Infra's published package scope, and clarify approvals and site-dependent work before a quote.",
  keywords: [
    "builders in iyyappanthangal chennai",
    "home construction iyyappanthangal chennai",
    "building contractors iyyappanthangal chennai",
    "house construction cost iyyappanthangal",
  ],
  alternates: { canonical: "/builders-in-iyyappanthangal-chennai" },
  openGraph: {
    title: "Builders in Iyyappanthangal, Chennai | Lokra Infra",
    description:
      "A practical Iyyappanthangal construction brief: published package comparisons, approval questions, and site-dependent scope before a quote.",
    url: "https://www.lokrainfra.in/builders-in-iyyappanthangal-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I share for an Iyyappanthangal construction enquiry?",
    a: "Share the plot location, dimensions or drawings if you have them, the building type, and your budget direction. Mention an existing structure, access limitation, drainage concern, or requirement for extra floors early. Those points affect the scope before a rate can mean much.",
  },
  {
    q: "What is Lokra Infra's published starting package rate?",
    a: "The current public package ladder starts at ₹1,899 per sq.ft. It is a starting point for comparison, not a final quote. The project total depends on the site, drawings, finishes, allowances, exclusions, and work outside the published package.",
  },
  {
    q: "How do the first package steps differ?",
    a: "The published ₹1,999 per sq.ft. package adds waterproofing measures. The ₹2,099 per sq.ft. package adds concrete quality checks and fortnightly photo reporting. Read the package inclusions and exclusions before comparing either rate with another builder's quote.",
  },
  {
    q: "Are approval fees and statutory work included in a residential package?",
    a: "Do not assume they are. Lokra Infra lists approvals and statutory fees as separate or site-dependent work. Planning-permission requirements depend on the plot and proposed building, so confirm the responsibility, documents, fees, and timeline for the actual site in writing.",
  },
  {
    q: "Can I discuss renovation or commercial work in Iyyappanthangal?",
    a: "Yes. Say what you are planning at the start. A new home, renovation, and commercial build need different information and scope, so the residential package ladder may not apply in the same way to every job.",
  },
];

const summaryCards = [
  {
    title: "Start with the plot",
    desc: "Location, dimensions, access, building type, and existing-site conditions make a first builder discussion useful.",
  },
  {
    title: "Compare written scope",
    desc: "The public package ladder begins at ₹1,899 per sq.ft. Compare inclusions, allowances, exclusions, and site-dependent work before treating a rate as a project total.",
  },
  {
    title: "Settle permissions early",
    desc: "Ask who will prepare and submit planning-permission documents, what the actual scope is, and what remains outside the construction package.",
  },
];

const sections = [
  {
    title: "Bring the right details to an Iyyappanthangal builder discussion",
    body: "Start with the site rather than a headline rate. Note the exact plot location, dimensions, road access, number of floors you are considering, and whether you have drawings or approvals already. An older building, a shared boundary, difficult access, or a drainage concern should be raised early. These are scope questions, not small print.",
    bullets: [
      "Exact plot location and access",
      "Dimensions and available drawings",
      "New build, renovation, or commercial use",
      "Existing-site conditions",
    ],
  },
  {
    title: "Compare the package scope before the headline rate",
    body: "Lokra Infra publishes a nine-step package ladder from ₹1,899 to ₹3,449 per sq.ft. The number is only useful alongside the scope. Packages differ in waterproofing, testing, reporting, documentation, allowances, and site fit. Ask for the written package details before comparing one builder's rate with another's.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the first three package steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Read the waterproofing package guide" },
      { href: "/quality-checked-structure-package-chennai", label: "Read the quality-record package guide" },
    ],
  },
  {
    title: "Keep planning permission separate from a construction promise",
    body: "Planning permission is a formal process, not something a builder can safely promise without checking the plot and proposal. CMDA states that planning-permission applications use its online process and that documents are submitted online. Confirm which authority applies, who prepares the documents, what information is still needed, and whether statutory fees are outside the construction scope.",
    links: [
      { href: "https://cmdachennai.gov.in/onlineppa.html", label: "CMDA online planning-permission information" },
      { href: "/process", label: "See Lokra Infra's published project process" },
    ],
  },
  {
    title: "Ask where the package boundary sits",
    body: "A construction package does not erase site-specific work. Before comparing builders, ask what is included, what is an allowance, what is priced separately, and how changes will be approved. Lokra Infra's packages page identifies approvals and statutory fees, connections, borewell work, compound walls, difficult-ground work, demolition, and restricted-access handling as separate or site-dependent items. Confirm what applies to your plot in writing.",
    bullets: [
      "Inclusions and exclusions",
      "Allowance amounts and material selections",
      "Approval and connection responsibilities",
      "Site-specific or difficult-ground work",
    ],
  },
  {
    title: "Choose the service route that matches the job",
    body: "The published package ladder is most useful for a home-construction comparison. If you are renovating an existing property, planning a commercial space, or need civil work, use the matching service route rather than forcing the job into a standard residential package. It keeps the discussion about the work you actually need.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
      { href: "/services", label: "See all services" },
    ],
  },
  {
    title: "Contact Lokra Infra",
    body: "For an Iyyappanthangal project discussion, share the location, project type, drawings if available, and budget direction. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/builders-in-kattupakkam-chennai", label: "Builders in Kattupakkam" },
      { href: "/builders-in-poonamallee-chennai", label: "Builders in Poonamallee" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-iyyappanthangal-chennai"
      eyebrow="Iyyappanthangal construction planning"
      title="Builders in Iyyappanthangal, Chennai"
      intro="If you are planning a build in Iyyappanthangal, begin with the plot and a written scope. Lokra Infra's published packages give you a way to compare price, waterproofing, quality records, and allowances before a builder conversation turns into a quote."
      serviceName="Builders in Iyyappanthangal, Chennai"
      serviceDescription="Lokra Infra discusses construction planning in Iyyappanthangal, Chennai, using a site brief and published package comparisons to clarify scope before a quote."
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
          label: "Discuss an Iyyappanthangal site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have an Iyyappanthangal site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}
