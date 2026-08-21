import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Builders in Kolathur, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports Kolathur construction planning for homes, building-contractor comparisons, renovation-linked work, and budget-conscious package decisions starting from ₹1,899 / sq.ft.",
  keywords: [
    "builders in kolathur chennai",
    "affordable builders in kolathur chennai",
    "budget construction company kolathur chennai",
    "low cost construction company kolathur chennai",
    "home construction kolathur chennai",
    "renovation contractors kolathur chennai",
  ],
  alternates: { canonical: "/builders-in-kolathur-chennai" },
  openGraph: {
    title: "Affordable Builders in Kolathur, Chennai | Lokra Infra",
    description:
      "Kolathur construction planning for homes, renovation-linked work, and budget-conscious package comparisons starting from ₹1,899 / sq.ft.",
    url: "https://www.lokrainfra.in/builders-in-kolathur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Why is Kolathur in the competitor-proof rollout batch?",
    a: "Kolathur is directly justified by competitor locality signals, especially the kind of locality-specific builder pages already visible in the market. That makes it a stronger direct-response route for Lokra than a random area page with no evidence behind it.",
  },
  {
    q: "Can Lokra discuss affordable or low-cost construction options in Kolathur?",
    a: "Yes. Lokra can discuss real package paths starting from ₹1,899 / sq.ft., then ₹1,999 and ₹2,099 depending on scope and protection needs. The useful comparison is what the package includes and whether it fits the site — not just the lowest headline number.",
  },
  {
    q: "Why does Kolathur also connect to renovation intent?",
    a: "Kolathur works well for a page that supports both home-construction and renovation-linked comparisons, because that gives the route more useful scope than a thin single-angle builder page.",
  },
  {
    q: "How should I compare builders in Kolathur safely?",
    a: "Compare package fit, scope clarity, branded materials, reporting discipline, and whether the builder supports new-build or renovation needs properly. Lowest-price language without scope clarity is not enough.",
  },
  {
    q: "What should I share before discussing a Kolathur project?",
    a: "Share whether the requirement is a new home build, contractor comparison, renovation, or mixed scope, plus the exact site location and budget direction. That helps identify the right package path early.",
  },
];

export default function BuildersInKolathurChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-kolathur-chennai"
      eyebrow="Kolathur Locality Build Planning"
      title="Affordable Builders in Kolathur, Chennai"
      intro="Kolathur is one of the most important direct-response localities in this rollout because competitor signals already show demand for locality-specific builder pages here. Lokra's version is built to answer that demand with home-construction, contractor-comparison, and renovation-linked routing — plus truthful package-led affordability starting from ₹1,899 / sq.ft. where it fits."
      serviceName="Affordable Builders in Kolathur, Chennai"
      serviceDescription="Construction planning in Kolathur for homes, contractor comparison, renovation-linked work, and budget-conscious package decisions starting from ₹1,899 / sq.ft."
      summaryCards={[
        { title: "Direct Competitor Response", desc: "Kolathur is the clearest third-batch locality for directly answering a live locality-level competitor signal." },
        { title: "Affordable + Scope-Aware", desc: "Useful for buyers who want low-cost planning language grounded in the real package ladder, not fake cheapest claims." },
        { title: "Home + Renovation Relevance", desc: "A stronger fit because Kolathur can connect new-build and renovation-linked demand instead of forcing a one-angle page." },
      ]}
      sections={[
        { title: "Why Kolathur Is A Direct-Response Locality", body: "Kolathur is the strongest direct-response page in this batch because market evidence already shows locality-specific construction demand here. Lokra's version needs to answer that with better scope clarity and stronger service-fit rather than simply copying the market pattern.", bullets: ["Competitor locality proof", "Home-construction fit", "Renovation overlap", "Budget-conscious demand"] },
        { title: "Use Affordable Language Truthfully", body: "The safe way to target affordable or low-cost builder searches in Kolathur is to tie the copy to the real package ladder. Lokra can honestly say packages start from ₹1,899 / sq.ft., followed by ₹1,999 and ₹2,099 depending on the scope and quality-control needs of the project.", bullets: ["₹1,899 entry point", "₹1,999 next level", "₹2,099 stronger quality-check path", "No fake cheapest claims"] },
        { title: "What Kolathur Buyers Usually Need Clarified", body: "The first useful split is whether the project is a new home build, a contractor comparison, or renovation-led work. That matters more than reducing every query to one generic builder keyword.", bullets: ["New home build", "Building-contractor comparison", "Renovation-linked work", "Budget + scope fit"] },
        { title: "Use The Right Chennai Pages Next", body: "This locality page should move the buyer into the city-wide pages that go deeper on new-build, contractor, renovation, and package decisions.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/building-contractors-chennai", label: "Building Contractors Chennai" },
          { href: "/renovation-contractors-chennai", label: "Renovation Contractors Chennai" },
          { href: "/packages", label: "Compare Packages From ₹1,899" },
        ] },
        { title: "Start With A Better Kolathur Brief", body: "Bring the exact site location, project type, and budget direction into the first discussion so the right package and service route can be identified early.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss A Kolathur Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The Kolathur Requirement And Budget Direction And We'll Help You Match It To The Right New-Build Or Renovation Path."
    />
  );
}
