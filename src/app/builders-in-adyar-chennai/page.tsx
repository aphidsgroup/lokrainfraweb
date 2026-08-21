import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Adyar, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports Adyar construction planning for homes, villas, and premium residential builds with clearer package comparisons, branded materials, and execution discipline.",
  keywords: [
    "builders in adyar chennai",
    "home construction adyar chennai",
    "villa construction adyar chennai",
    "building contractors adyar chennai",
    "premium builders adyar chennai",
    "affordable builders adyar chennai",
  ],
  alternates: { canonical: "/builders-in-adyar-chennai" },
  openGraph: {
    title: "Builders in Adyar, Chennai | Lokra Infra",
    description:
      "Adyar construction planning for homes, villas, and premium residential builds with better package-fit and execution clarity.",
    url: "https://www.lokrainfra.in/builders-in-adyar-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Why is Adyar a strong home and villa builder locality?",
    a: "Adyar is a stronger fit for home-construction and villa-led positioning because buyers here usually compare builder discipline, design fit, package depth, and long-term finish quality more closely than broad lowest-price claims.",
  },
  {
    q: "Can Lokra still discuss affordable package options for Adyar?",
    a: "Yes. Lokra can still discuss packages starting from ₹1,899 / sq.ft., but the right choice in Adyar often depends on the site, finish expectations, waterproofing needs, reporting depth, and long-term protection goals — not just the lowest entry figure.",
  },
  {
    q: "Is Adyar better suited to villa intent or generic contractor intent?",
    a: "Adyar is one of the better localities for a stronger villa and premium-home framing first, then building-contractor comparison second. That helps the page stay more specific than generic city copy.",
  },
  {
    q: "How should I compare builders in Adyar realistically?",
    a: "Compare package fit, branded material scope, quality checks, project reporting, execution discipline, and whether the builder can match the level of finish and planning expected for the site. Cheapest alone is not a strong filter in Adyar.",
  },
  {
    q: "What should I share before discussing an Adyar project?",
    a: "Share whether the requirement is an independent home, villa, renovation-heavy rebuild, or premium residential project, along with the exact site location and budget direction. That helps shape the right package and service route quickly.",
  },
];

export default function BuildersInAdyarChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-adyar-chennai"
      eyebrow="Adyar Locality Build Planning"
      title="Builders in Adyar, Chennai"
      intro="Adyar is one of the strongest competitor-proof localities for Lokra's next rollout because it supports home-construction, villa, and higher-expectation residential intent without forcing generic city copy. This page is designed for buyers who want better package-fit, branded material clarity, and execution discipline — while still being able to compare entry packages starting from ₹1,899 / sq.ft. where suitable."
      serviceName="Builders in Adyar, Chennai"
      serviceDescription="Construction planning in Adyar for homes, villas, and premium residential builds with clearer package comparisons, branded scope, and stronger execution framing."
      summaryCards={[
        { title: "Premium-Residential Fit", desc: "Adyar works best when the page leads with home and villa intent rather than generic contractor language alone." },
        { title: "Package Depth Matters", desc: "Useful for buyers who want to compare starting package levels, but also need clarity on finish quality, reporting, and long-term protection." },
        { title: "Competitor-Proof Locality", desc: "This page directly answers the locality pattern already visible in competitor architectures without copying them blindly." },
      ]}
      sections={[
        { title: "Why Adyar Is In The Competitor-Proof Batch", body: "Adyar is one of the most justified next localities because competitor signals already show that premium and locality-specific builder pages matter here. Lokra's version needs to stay focused on real service fit, not just replicate a locality list.", bullets: ["Home-construction fit", "Villa relevance", "Premium-locality context", "Competitor locality signal"] },
        { title: "Start With Package Fit, Not Just Price", body: "Adyar buyers often need more than a lowest-entry comparison. Lokra can still discuss real package levels starting from ₹1,899 / sq.ft., followed by ₹1,999 and ₹2,099 where scope, quality checks, or protection needs increase, but the key decision is whether the package truly matches the project expectation.", bullets: ["₹1,899 entry point", "₹1,999 next step", "₹2,099 stronger quality-check path", "Package-fit over cheapest claims"] },
        { title: "What Adyar Buyers Usually Need Clarified", body: "The useful first filter is whether the project is a practical independent-home build, a villa-led project, or a more premium residential execution that needs deeper finish and reporting clarity. That shapes the right builder comparison more than a generic contractor list.", bullets: ["Independent home", "Villa planning", "Premium residential fit", "Scope and finish expectations"] },
        { title: "Use The Right Chennai Pages Next", body: "Once the project type is clearer, use the stronger city-wide pages to compare execution path, package ladder, and service scope more directly.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/villa-construction-chennai", label: "Villa Construction Chennai" },
          { href: "/building-contractors-chennai", label: "Building Contractors Chennai" },
          { href: "/packages", label: "Compare Packages From ₹1,899" },
        ] },
        { title: "Start With A Better Adyar Brief", body: "Bring the exact site location, project type, and budget direction into the first discussion. That helps decide whether the base package is sufficient or whether the project needs a stronger reporting, waterproofing, or finish-control path.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss An Adyar Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The Adyar Requirement And Budget Direction And We'll Help You Match It To The Right Home Or Villa Build Path."
    />
  );
}
