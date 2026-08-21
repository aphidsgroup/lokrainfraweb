import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in OMR, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports OMR-area construction planning across homes, villas, commercial builds, civil scope, and renovation discussions with clearer execution framing and milestone visibility.",
  keywords: [
    "builders in omr chennai",
    "construction company omr chennai",
    "home construction omr chennai",
    "commercial construction omr chennai",
    "civil contractors omr chennai",
  ],
  alternates: { canonical: "/builders-in-omr-chennai" },
  openGraph: {
    title: "Builders in OMR, Chennai | Lokra Infra",
    description:
      "OMR construction planning for homes, villas, commercial builds, renovation, and civil scope with clearer execution structure.",
    url: "https://www.lokrainfra.in/builders-in-omr-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  { q: "Why start with an OMR-specific builder page instead of a generic Chennai page?", a: "OMR behaves more like a corridor than one single micro-locality, so buyers often compare homes, villas, commercial work, and enabling civil scope across a wider stretch. A corridor page helps frame the requirement more realistically before narrowing into smaller area decisions." },
  { q: "Can Lokra discuss residential and commercial construction around OMR?", a: "Yes. OMR is one of the clearer mixed-use growth corridors in the current rollout, so this page is designed to support both residential and commercial discussions depending on the project requirement." },
  { q: "Does OMR fit villa and premium residential intent too?", a: "Yes. The current competitor evidence and corridor relevance both support villa-style and premium residential intent here, especially where package fit and execution visibility matter." },
  { q: "Should civil and site-development scope be discussed separately in OMR projects?", a: "Often yes. Civil enabling work, grading, drainage, access, or foundation-linked scope can influence the execution path early, so it is better to surface that before treating the project as a standard build only." },
  { q: "What should I share before an OMR project discussion?", a: "Share the site location, current stage, intended use, drawings if available, and whether the requirement is home, villa, commercial, civil, or renovation-led. That makes the first conversation much more useful." },
];

export default function BuildersInOmrChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-omr-chennai"
      eyebrow="OMR Corridor Build Planning"
      title="Builders in OMR, Chennai"
      intro="OMR is one of the strongest corridor-level expansion targets because it carries mixed residential, villa, commercial, and enabling civil demand. Lokra Infra uses this page to frame OMR projects more clearly than a generic city page can — especially where scope, package fit, and execution sequencing need to be understood early."
      serviceName="Builders in OMR, Chennai"
      serviceDescription="Construction planning in the OMR corridor across homes, villas, commercial builds, renovation, and civil-linked scope with clearer execution framing and milestone visibility."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to an OMR-area builder." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your OMR project." },
        { href: "/services", label: "Browse By Service Type", desc: "Move straight into home, villa, commercial, civil, or renovation service pages if you already know the scope." },
      ]}
      summaryCards={[
        { title: "Corridor-Level Fit", desc: "Useful because OMR behaves as a broader project corridor, not just one isolated locality keyword." },
        { title: "Mixed-Use Relevance", desc: "Supports home, villa, commercial, civil, and renovation conversations better than a narrow single-service angle." },
        { title: "Better First Filter", desc: "Helps buyers frame the requirement before deciding whether a smaller locality page is even needed." },
      ]}
      sections={[
        { title: "Why OMR Comes First In The Locality Rollout", body: "OMR has both competitor locality evidence and strong corridor-level fit for Lokra's current service stack. That makes it a safer expansion target than publishing many thin micro-locality pages too early.", bullets: ["Competitor corridor signal", "Residential + commercial fit", "Villa relevance", "Civil and renovation adjacency"] },
        { title: "What OMR Buyers Usually Need Clarified", body: "Projects in OMR can vary widely in use, scale, and execution complexity. The useful first step is to clarify whether the requirement is home construction, villa planning, commercial build, renovation, or civil enabling work before jumping into a generic builder comparison.", bullets: ["Home construction", "Villa construction", "Commercial construction", "Civil + site scope"] },
        { title: "Use Lokra's Existing Chennai Pages To Narrow The Requirement", body: "This corridor page is meant to route the buyer into the right service track. Once the requirement is clearer, Lokra's city-level pages for home, commercial, civil, villa, and renovation work can do the deeper comparison job.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/commercial-construction-chennai", label: "Commercial Construction Chennai" },
          { href: "/civil-contractors-chennai", label: "Civil Contractors Chennai" },
          { href: "/villa-construction-chennai", label: "Villa Construction Chennai" },
          { href: "/renovation-contractors-chennai", label: "Renovation Contractors Chennai" },
        ] },
        { title: "Why OMR Needs Better Scope Framing Before Execution", body: "Corridor projects often look easy from a keyword perspective but still need better scope framing around access, usage, package depth, finish expectations, and whether enabling works need to be separated from the main build.", bullets: ["Scope before quote", "Corridor-specific use cases", "Package-fit review", "Execution sequencing"] },
        { title: "Start With A Better OMR Brief", body: "Bring the site location, whether the project is residential or commercial, any drawings available, and whether the requirement includes civil or renovation work. A better first discussion will reduce ambiguity before the project moves forward.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/packages", label: "Compare Package Depth" },
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss An OMR Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The OMR Requirement And We'll Help You Route It Into The Right Execution Path Clearly."
    />
  );
}
