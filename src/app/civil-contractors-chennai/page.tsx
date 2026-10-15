import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Civil Contractors in Chennai | Scope Checklist Before You Quote | Lokra Infra",
  description:
    "Looking for civil contractors in Chennai? Start with a site brief and use this checklist to compare drainage, grading, boundary, foundation-linked, and approval-related scope before a quote.",
  keywords: [
    "civil contractors in chennai",
    "civil contractor chennai",
    "civil works contractor chennai",
    "site development contractor chennai",
    "drainage contractor chennai",
  ],
  alternates: {
    canonical: "/civil-contractors-chennai",
  },
  openGraph: {
    title: "Civil Contractors in Chennai | Lokra Infra",
    description:
      "A practical guide for comparing civil-work scope in Chennai before you request a quote for site development, drainage, boundary, or foundation-linked work.",
    url: "https://www.lokrainfra.in/civil-contractors-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What civil work can Lokra Infra discuss in Chennai?",
    a: "Lokra's published civil and infrastructure scope includes roads, drainage systems, compound boundary works, site grading, and foundation-level infrastructure. The right fit depends on the actual site, drawings, and whether the civil work is a standalone requirement or part of a larger build.",
  },
  {
    q: "What should I share before asking for a civil-work quote?",
    a: "Share the exact site location, photos, dimensions or survey information if available, intended work, existing levels or drainage concerns, access constraints, utility details, drawings, and the budget direction. A site assessment may still be needed, but this gives the first discussion a usable starting point.",
  },
  {
    q: "Can a civil-work rate be finalised without a site visit?",
    a: "A headline rate rarely settles the job. Existing ground conditions, access, levels, connections, demolition, dewatering, shoring, and the connection to later building work can change the scope. Ask what has been assumed and what remains to be confirmed at the site.",
  },
  {
    q: "Does Lokra's residential package price cover standalone civil work?",
    a: "Not automatically. Lokra's published residential packages run from ₹1,899 to ₹3,449 per sq.ft. and are intended for comparing residential construction scope. Standalone civil work needs its own scope review and should not be priced by borrowing a house-package rate.",
  },
  {
    q: "How should I compare two civil contractor proposals?",
    a: "Compare the same drawings or written scope line by line. Check measurements, material specifications, disposal, temporary works, testing, utility coordination, exclusions, change handling, payment stages, and the documents you will receive at closeout.",
  },
];

export default function CivilContractorsChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/civil-contractors-chennai"
      eyebrow="Civil-work scope checklist"
      title="Civil Contractors in Chennai"
      intro="Civil work is easy to under-scope. A request for drainage, grading, a boundary wall, or foundation-linked work can hide questions about levels, access, utilities, temporary work, and what comes next. Put those questions into the first brief before comparing quotes."
      serviceName="Civil Contractors in Chennai"
      serviceDescription="Lokra Infra discusses civil and infrastructure work in Chennai, including roads, drainage, compound boundary works, site grading, and foundation-level infrastructure, based on the actual site and scope."
      discoveryPaths={[
        {
          href: "/services",
          label: "Review civil services",
          desc: "See the civil and infrastructure work Lokra Infra publishes alongside its construction services.",
        },
        {
          href: "/projects#featured-project",
          label: "Review project proof",
          desc: "Look through published project material before deciding whether the delivery approach fits the work.",
        },
        {
          href: "/chennai-areas",
          label: "Find your Chennai area",
          desc: "Use the area closest to the site, then bring the plot and civil-work details to the discussion.",
        },
      ]}
      summaryCards={[
        {
          title: "Write the site condition down",
          desc: "Levels, access, existing structures, drainage paths, utilities, and soil-related findings can affect the work before any rate is meaningful.",
        },
        {
          title: "Separate scope from assumptions",
          desc: "A proposal should show what is measured and included, what still needs checking, and what is outside the quoted work.",
        },
        {
          title: "Plan the handoff",
          desc: "Civil work often feeds into a later building phase. Agree how levels, drains, boundaries, and records will be handed over before work starts.",
        },
      ]}
      sections={[
        {
          title: "Build a useful civil-work brief",
          body: "Start with the site rather than a generic rate request. State the location, plot dimensions, photos, intended work, and any drawing or survey information you have. Add what you know about access, current ground levels, rainwater movement, existing structures, nearby boundaries, utilities, and the next construction phase. This does not replace a site assessment. It gives a contractor something concrete to assess.",
          bullets: [
            "Site location, dimensions, and access",
            "Photos, drawings, surveys, and available levels",
            "Existing drains, utilities, structures, and boundaries",
            "The next phase: building, external works, or closeout",
          ],
        },
        {
          title: "Define the work before asking for a price",
          body: "Lokra Infra's published civil and infrastructure scope includes roads, drainage systems, compound boundary works, site grading, and foundation-level infrastructure. Those labels are a starting point, not a complete scope. For each item, ask what is being measured, what material or finish is assumed, where the work starts and stops, and who coordinates any connection to the building, utility, or adjacent property.",
          links: [
            { href: "/services", label: "Review civil and infrastructure services" },
            { href: "/building-contractors-chennai", label: "Compare broader building-contractor scope" },
            { href: "/home-construction-chennai", label: "Plan a residential build" },
          ],
        },
        {
          title: "Ask what the site can change",
          body: "Civil work meets conditions that are not visible in a short online brief. Existing levels, access for equipment, demolition, rock, water, dewatering, shoring, buried services, and utility coordination can change the work or the sequence. Put these into a written assumptions and exclusions list. If something remains unknown, record what needs to be checked instead of treating it as included by default.",
          bullets: [
            "Ground, water, and existing-condition checks",
            "Access, storage, debris removal, and temporary work",
            "Utility routes and connection responsibilities",
            "Boundary conditions and coordination with later work",
          ],
        },
        {
          title: "Keep authority and connection work visible",
          body: "Do not assume a contractor's base scope includes every permission, fee, submission, or utility connection. Identify the applicable local authority, the party responsible for each submission, and the documents needed for the actual site. Lokra's package information also treats approvals, statutory fees, water and electrical connections, and external infrastructure as separate or site-dependent matters. Confirm the same boundary in writing for civil work.",
          links: [
            { href: "/packages#scope-boundary", label: "Read the published scope boundary" },
            { href: "/process", label: "Review Lokra's published process" },
          ],
        },
        {
          title: "Compare civil proposals line by line",
          body: "Use one written brief when you compare contractors. Check the measurements, drawings, material specifications, excavation or disposal assumptions, temporary works, testing, drainage falls, utility coordination, exclusions, change handling, payment stages, and closeout records. If a lower quote leaves any of those items unclear, it is not yet a like-for-like comparison.",
          links: [
            { href: "/contact", label: "Share your site and scope details" },
            { href: "/projects", label: "Browse project categories" },
          ],
        },
        {
          title: "Contact Lokra Infra",
          body: "For a Chennai civil-work discussion, share the site location, work required, photos or drawings, known constraints, and budget direction. You can call Lokra Infra on 93446 43324 or email lokrainfra@gmail.com. The first discussion should establish the scope and unanswered site questions before anyone treats a number as a complete quote.",
          links: [
            { href: "/contact", label: "Contact Lokra Infra" },
            { href: "/chennai-areas", label: "Explore Chennai construction areas" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share the site, the civil work required, and what you already know. Start with the conditions that will shape the scope."
    />
  );
}
