import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Building Contractors in Chennai | Compare Scope Before a Quote | Lokra Infra",
  description:
    "Looking for building contractors in Chennai? Use this practical checklist to compare scope, package inclusions, site-dependent work, records, and project type before a quote.",
  keywords: [
    "building contractors chennai",
    "construction company chennai",
    "residential building contractors chennai",
    "commercial building contractors chennai",
    "house construction cost chennai",
  ],
  alternates: {
    canonical: "/building-contractors-chennai",
  },
  openGraph: {
    title: "Building Contractors in Chennai | Lokra Infra",
    description:
      "A practical Chennai contractor-comparison guide: define the work, read the package scope, and settle site-dependent items before a quote.",
    url: "https://www.lokrainfra.in/building-contractors-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What should I send before asking a Chennai building contractor for a quote?",
    a: "Send the plot location, dimensions, proposed building use, likely floor count, drawings if you have them, and a budget direction. Include photos or notes about an existing structure, limited access, drainage, a shared boundary, or demolition. A contractor still needs to assess the site, but this gives the first discussion something concrete to work from.",
  },
  {
    q: "Does Lokra Infra's published package rate give me a final project cost?",
    a: "No. The published residential package ladder runs from ₹1,899 to ₹3,449 per sq.ft. It is a way to compare scope, not a final quote for every site. Drawings, selections, allowances, exclusions, site conditions, and work outside the package can change the total.",
  },
  {
    q: "What work may sit outside a construction package?",
    a: "Lokra Infra lists approvals and statutory fees, rainwater harvesting, sumps, septic tanks, utility connections, borewell work, compound walls, external infrastructure, difficult ground work, rock excavation, dewatering, and shoring as site- or approval-related items. Confirm which items apply to the actual plot in writing.",
  },
  {
    q: "How should I compare two contractor proposals?",
    a: "Put the drawings, included work, exclusions, allowances, material selections, quality checks, reporting, handover documents, and change process beside each other. A lower per-square-foot number is only comparable if the scope is comparable too.",
  },
  {
    q: "Can I use the residential package ladder for renovation or commercial work?",
    a: "Not automatically. A new home, renovation, commercial build, and civil requirement have different scope questions. Describe the work first, then use the matching service discussion instead of treating a residential package as a shortcut for every job.",
  },
];

export default function BuildingContractorsChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/building-contractors-chennai"
      eyebrow="Chennai contractor comparison"
      title="Building Contractors in Chennai"
      intro="A contractor search usually ends with a quote request. Start a step earlier. Define the site, the work, and the package boundary so you can compare proposals on the same basis instead of comparing a single rate."
      serviceName="Building Contractors in Chennai"
      serviceDescription="Lokra Infra provides construction discussions in Chennai for residential, commercial, renovation, and civil requirements, beginning with scope, site information, and published package comparisons where relevant."
      discoveryPaths={[
        {
          href: "/packages",
          label: "Compare published packages",
          desc: "Read the public residential package ladder from ₹1,899 to ₹3,449 per sq.ft., including inclusions and site-dependent work.",
        },
        {
          href: "/process",
          label: "Review the project process",
          desc: "See the project stages Lokra Infra publishes before you start a construction discussion.",
        },
        {
          href: "/chennai-areas",
          label: "Find your Chennai area",
          desc: "Start with the area page closest to the site, then bring the plot details to the conversation.",
        },
      ]}
      summaryCards={[
        {
          title: "Start with the actual site",
          desc: "Location, dimensions, access, existing structures, and the proposed use belong in the first brief. They can affect the work before a rate means much.",
        },
        {
          title: "Read the scope with the rate",
          desc: "The published residential ladder starts at ₹1,899 per sq.ft., but the inclusions, allowances, exclusions, and site-dependent work matter just as much.",
        },
        {
          title: "Put decisions in writing",
          desc: "Ask how selections, changes, quality checks, reporting, and handover documents will be recorded. It makes two proposals easier to compare.",
        },
      ]}
      sections={[
        {
          title: "Build a useful first brief",
          body: "A short brief saves time on both sides. Include the exact site location, plot dimensions, intended use, likely floor count, available drawings, and the budget direction you are working with. Add photographs or notes about access, an existing structure, drainage, a shared boundary, or demolition. This does not replace a site assessment. It stops the first conversation from becoming a guess based on a headline rate.",
          bullets: [
            "Plot location, dimensions, and access",
            "New home, renovation, commercial, or civil work",
            "Drawings, photos, and existing-site conditions",
            "Budget direction and decisions already made",
          ],
        },
        {
          title: "Treat a rate as a comparison point, not a project total",
          body: "Lokra Infra publishes nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. The package page explains what changes between levels, including waterproofing, testing, reporting, handover records, warranties, and finish allowances. Use that information to compare like with like. The final project total still depends on the drawings, selections, site conditions, exclusions, and work outside the package.",
          links: [
            { href: "/packages", label: "Compare all published packages" },
            { href: "/affordable-construction-packages-chennai", label: "Compare the first three package steps" },
            { href: "/waterproofing-construction-package-chennai", label: "Review the waterproofing package guide" },
            { href: "/quality-checked-structure-package-chennai", label: "Review the quality-record package guide" },
          ],
        },
        {
          title: "Separate the building scope from plot and approval work",
          body: "A package can describe the house while the plot creates separate decisions. Lokra Infra identifies approvals and statutory fees, rainwater harvesting, sumps, septic tanks, water and electricity connections, borewell work, compound walls, external infrastructure, difficult ground work, rock excavation, dewatering, and shoring as site- or approval-related items. Ask which of these apply, who handles them, and how they will be priced before treating a package as the whole project.",
          bullets: [
            "Approvals, statutory fees, and submissions",
            "Water, sewer, and electrical connections",
            "Boundary walls, gates, and external work",
            "Ground conditions, demolition, and site access",
          ],
        },
        {
          title: "Compare contractor proposals line by line",
          body: "The most useful comparison is a written one. Put the drawings, included work, exclusions, allowances, material selections, testing, reporting, handover documents, and change process beside each other. Ask what happens when a selection changes or a site condition appears after work begins. A lower rate only helps if it covers the same work and leaves the same decisions outside the price.",
          links: [
            { href: "/packages", label: "Use the package comparison as a checklist" },
            { href: "/process", label: "See Lokra Infra's published process" },
          ],
        },
        {
          title: "Use the service route that matches the job",
          body: "The published package ladder is for residential construction comparisons. If your requirement is an existing-home renovation, commercial work, or a civil service, say that at the start. The scope, surveys, approvals, and cost discussion may be different, and a standard house package may not answer the question you actually have.",
          links: [
            { href: "/home-construction-chennai", label: "Home construction in Chennai" },
            { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
            { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
            { href: "/civil-contractors-chennai", label: "Civil contractors in Chennai" },
          ],
        },
        {
          title: "Contact Lokra Infra",
          body: "For a Chennai construction discussion, share the site location, project type, available drawings, and budget direction. Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com.",
          links: [
            { href: "/contact", label: "Contact Lokra Infra" },
            { href: "/chennai-areas", label: "Explore Chennai construction areas" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share the site, the work you have in mind, and your budget direction. The first conversation can start with the right questions."
    />
  );
}
