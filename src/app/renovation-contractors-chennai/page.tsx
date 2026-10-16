import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Renovation Contractors in Chennai | Scope Before You Quote | Lokra Infra",
  description:
    "Planning a renovation in Chennai? Start with the existing condition, the work that stays, the work that changes, and the decisions needed before a contractor can price it properly.",
  keywords: [
    "renovation contractors chennai",
    "home renovation chennai",
    "building renovation contractor chennai",
    "commercial renovation chennai",
    "structural renovation chennai",
  ],
  alternates: {
    canonical: "/renovation-contractors-chennai",
  },
  openGraph: {
    title: "Renovation Contractors in Chennai | Lokra Infra",
    description:
      "A practical guide to briefing and comparing a Chennai renovation contractor before the first quote.",
    url: "https://www.lokrainfra.in/renovation-contractors-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What renovation work can Lokra Infra discuss in Chennai?",
    a: "Lokra Infra lists renovation and structural upgrades among its residential and commercial services. Start by explaining the existing property, the work you want changed, and whether the space will stay occupied while work is underway.",
  },
  {
    q: "What should I share before asking for a renovation quote?",
    a: "Share the location, photos, approximate age and use of the property, the rooms or systems you want changed, drawings if you have them, and any known leaks, cracks, access limits, or previous alterations. Say what must stay in use during the work as well.",
  },
  {
    q: "Can I use a new-home package rate as a renovation price?",
    a: "No. Lokra's published ₹1,899 to ₹3,449 per sq.ft. ladder is for residential construction-package comparisons. Renovation work depends on the existing condition, demolition or protection needs, access, retained elements, and the final scope, so it needs a separate review.",
  },
  {
    q: "Why can a renovation scope change after work starts?",
    a: "Some conditions are only visible after finishes are opened or equipment is moved. A useful proposal says how discoveries, owner changes, and replacement choices will be recorded before additional work proceeds.",
  },
  {
    q: "Can Lokra discuss commercial renovation as well as home renovation?",
    a: "Yes. For a commercial property, include the intended use, operating hours, access rules, and whether the business needs to remain open during the work. Those details can change the sequence and boundaries of the job.",
  },
];

export default function RenovationContractorsChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/renovation-contractors-chennai"
      eyebrow="Chennai renovation planning"
      title="Renovation Contractors in Chennai"
      intro="A renovation quote only makes sense after the existing property is described properly. Start with what stays, what changes, what is already wrong, and what cannot be disrupted. That gives a contractor something real to assess."
      serviceName="Renovation Contractors in Chennai"
      serviceDescription="Lokra Infra discusses residential and commercial renovation requirements in Chennai from the existing condition, proposed work, site constraints, and a written scope."
      discoveryPaths={[
        {
          href: "/services",
          label: "Check the service fit",
          desc: "See Lokra Infra's published renovation, commercial, residential, and civil service categories before you frame the enquiry.",
        },
        {
          href: "/building-contractors-chennai",
          label: "Compare contractor proposals",
          desc: "Use the Chennai contractor guide to compare inclusions, exclusions, records, and change handling.",
        },
        {
          href: "/chennai-areas",
          label: "Find your area route",
          desc: "Bring the property location into the first conversation along with the existing-condition brief.",
        },
      ]}
      summaryCards={[
        {
          title: "Existing condition first",
          desc: "Photos, drawings, known defects, access limits, and parts of the property that must remain in use belong in the first brief.",
        },
        {
          title: "Separate retained work from new work",
          desc: "A scope should show what is being removed, repaired, protected, replaced, or left untouched. That makes the quote easier to read.",
        },
        {
          title: "Record changes as they arise",
          desc: "Ask how discoveries behind existing finishes and owner decisions will be documented before extra work is added to the job.",
        },
      ]}
      sections={[
        {
          title: "Write a renovation brief before asking for a rate",
          body: "You do not need a finished design to begin a renovation discussion. You do need a clear picture of the property. Note the location, how the space is used today, which rooms or systems need attention, what you want to keep, and what needs to change. Add photos, existing drawings, and anything you already know about leaks, cracks, old alterations, service lines, limited access, neighbours, or parking. If people or a business will remain on site, say that early.",
          bullets: [
            "Property location and current use",
            "Photos, drawings, and known problem areas",
            "Work to retain, protect, remove, or replace",
            "Access, occupancy, and timing constraints",
          ],
        },
        {
          title: "Do not price renovation work like a new build",
          body: "New construction begins with an empty or prepared site. Renovation starts with an existing building and more unknowns. Lokra's public residential package ladder, from ₹1,899 to ₹3,449 per sq.ft., is useful for comparing new-home package scope. It is not a renovation rate card. Existing conditions, demolition, temporary protection, access, retained finishes, and the final intervention can all affect renovation pricing.",
          links: [
            { href: "/packages", label: "Read the residential package scope" },
            { href: "/building-contractors-chennai", label: "Compare contractor scope before a quote" },
          ],
        },
        {
          title: "Ask for a scope that separates the moving parts",
          body: "A usable renovation proposal should make the boundaries visible. Read the included work, exclusions, allowances, material choices, protection requirements, and any work that depends on a site assessment or approval. If a wall, floor, ceiling, or service line is being changed, ask what is assumed and what happens if the condition behind it is different from expected.",
          bullets: [
            "Demolition, disposal, and protection",
            "Repairs, upgrades, and new finishes",
            "Materials, allowances, and owner selections",
            "Items that depend on site findings or permissions",
          ],
        },
        {
          title: "Plan around an occupied home or operating business",
          body: "Renovation often has a live-use constraint that a new build does not. For a home, that might be access to bedrooms, bathrooms, cooking, or parking. For a commercial space, it might be customer access, deliveries, operating hours, or the areas that must stay open. Put those constraints into the first brief so the discussion can deal with sequencing rather than treating them as a surprise later.",
          links: [
            { href: "/commercial-construction-chennai", label: "Review commercial construction planning" },
            { href: "/home-construction-chennai", label: "Review residential construction planning" },
          ],
        },
        {
          title: "Agree on how changes will be handled",
          body: "A renovation can uncover work that was not visible at the start. That is not a reason to accept an open-ended estimate. Ask how site discoveries will be explained, how options will be priced, who approves a change, and what record you will receive before added work begins. The same applies when you change a finish, fixture, layout, or material after the scope is agreed.",
          links: [
            { href: "/process", label: "Review Lokra Infra's published process" },
            { href: "/contact", label: "Discuss a renovation requirement" },
          ],
        },
        {
          title: "Talk to Lokra Infra with the useful details ready",
          body: "For a Chennai renovation discussion, share the property location, its current use, what you want changed, any existing drawings or photos, the parts of the property that must keep working, and your budget direction. Lokra Infra's services page covers renovation and structural upgrades for residential and commercial requirements.",
          links: [
            { href: "/contact", label: "Contact Lokra Infra" },
            { href: "/services", label: "Browse all services" },
            { href: "/chennai-areas", label: "Explore Chennai areas" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share the current condition, the changes you want, and the parts of the property that cannot be disrupted."
    />
  );
}
