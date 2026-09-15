import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Vengavasal, Chennai | Lokra Infra",
  description:
    "Planning a home build in Vengavasal? Compare Lokra Infra's published construction packages, define the site scope, and discuss execution with the team.",
  keywords: [
    "builders in vengavasal chennai",
    "home construction vengavasal",
    "building contractors vengavasal chennai",
    "house construction vengavasal",
  ],
  alternates: { canonical: "/builders-in-vengavasal-chennai" },
  openGraph: {
    title: "Builders in Vengavasal, Chennai | Lokra Infra",
    description:
      "A practical starting point for Vengavasal home-construction planning: site scope, package comparison, and the questions to settle before work begins.",
    url: "https://www.lokrainfra.in/builders-in-vengavasal-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Does Lokra Infra work on projects in Vengavasal?",
    a: "Yes. Lokra Infra lists Vengavasal among the areas where it has an ongoing project. The public listing stays at area level, so project details, images, timelines, and client information are not published.",
  },
  {
    q: "What is the published starting price for construction?",
    a: "Lokra Infra's public package ladder starts at ₹1,899 per sq.ft. The right package depends on the site, scope, finish choices, and the protection or documentation you want included. It is a starting point for comparison, not a project quote.",
  },
  {
    q: "What should I bring to a first construction discussion?",
    a: "Bring the site location, plot dimensions or available drawings, the type of building you want, and your budget direction. If you already have approvals, a soil report, or a design brief, share those too.",
  },
  {
    q: "Can I compare packages before deciding on a builder?",
    a: "Yes. The packages page shows the public price ladder and the scope differences between levels. Use it to ask specific questions about materials, waterproofing, quality records, and exclusions before you compare offers.",
  },
];

const summaryCards = [
  {
    title: "Area-level project reference",
    desc: "Vengavasal appears on Lokra Infra's ongoing-projects page. The company publishes the area only while work is under execution.",
  },
  {
    title: "Price before promises",
    desc: "Start with the published ₹1,899 per sq.ft. package entry point, then compare what changes as scope and protection needs change.",
  },
  {
    title: "A useful first meeting",
    desc: "A site location, dimensions, intended use, and budget direction make the first discussion far more concrete than a generic quote request.",
  },
];

const sections = [
  {
    title: "Start with the site, not a headline rate",
    body: "A construction price only means something when the scope is clear. Before comparing builders for a Vengavasal site, write down what you are building, the plot dimensions, whether drawings already exist, and where you need help. That turns a broad enquiry into a conversation about structure, finishes, services, and the work that sits outside the construction package.",
    bullets: [
      "Site location and plot dimensions",
      "Home, villa, extension, or other scope",
      "Drawings, approvals, and reports already available",
      "Budget direction and finish expectations",
    ],
  },
  {
    title: "Use the package ladder as a comparison tool",
    body: "Lokra Infra publishes a package ladder rather than one catch-all rate. The first public step is ₹1,899 per sq.ft. Moving up the ladder changes the published material, waterproofing, quality-record, and finish allowances. Read the inclusions and exclusions alongside the rate. A lower number without a matching scope does not tell you what the finished building will cost.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Read the ₹1,899 to ₹2,099 comparison" },
      { href: "/waterproofing-construction-package-chennai", label: "See the waterproofing-focused step" },
    ],
  },
  {
    title: "Questions worth asking a Vengavasal builder",
    body: "Ask for a written scope before you compare a price. It should make clear which materials, tests, drawings, site supervision, and handover records are included. Ask how changes will be recorded, what needs a separate allowance, and which site conditions may affect the final scope. Those answers are more useful than a quick per-square-foot number.",
    bullets: [
      "What is included and excluded in writing?",
      "Which site checks happen before construction starts?",
      "How are changes and extra work documented?",
      "Which records are handed over at completion?",
    ],
  },
  {
    title: "See the published work and process",
    body: "Lokra Infra keeps current-project information limited to the area while work is in progress. You can review the completed-project page for published work, then use the process page to understand how a project moves from scope discussion to handover. That gives you a clearer basis for a Vengavasal enquiry without filling the page with claims that cannot be verified publicly.",
    links: [
      { href: "/projects/ongoing", label: "View ongoing projects by area" },
      { href: "/projects/completed", label: "View completed projects" },
      { href: "/process", label: "Read the construction process" },
      { href: "/contact", label: "Discuss a Vengavasal site" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-vengavasal-chennai"
      eyebrow="Vengavasal construction planning"
      title="Builders in Vengavasal, Chennai"
      intro="If you are planning a home build in Vengavasal, begin with the site and the written scope. Lokra Infra has an ongoing project in the area, listed publicly at area level only. This page helps you prepare for a practical discussion about package fit, execution, and the information needed before a quote can mean anything."
      serviceName="Builders in Vengavasal, Chennai"
      serviceDescription="Lokra Infra supports construction planning in Vengavasal, Chennai, with published package comparisons and scope-led project discussions."
      discoveryPaths={[
        {
          href: "/packages",
          label: "Compare by price",
          desc: "Start with the published package ladder from ₹1,899 per sq.ft. and read the scope behind each level.",
        },
        {
          href: "/projects/ongoing",
          label: "Review area-level work",
          desc: "See the public ongoing-projects list, which includes Vengavasal without publishing private project details.",
        },
        {
          href: "/process",
          label: "Understand the process",
          desc: "Read how Lokra Infra approaches scope, planning, execution, and handover before you enquire.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Vengavasal site in mind? Share the location, scope, and budget direction so the discussion can start with real project information."
    />
  );
}
