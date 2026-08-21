import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Besant Nagar, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports Besant Nagar construction planning for homes, villas, and premium residential projects with branded package comparisons and execution discipline.",
  keywords: [
    "builders in besant nagar chennai",
    "home construction besant nagar chennai",
    "villa construction besant nagar chennai",
    "building contractors besant nagar chennai",
    "premium builders besant nagar chennai",
    "affordable builders besant nagar chennai",
  ],
  alternates: { canonical: "/builders-in-besant-nagar-chennai" },
  openGraph: {
    title: "Builders in Besant Nagar, Chennai | Lokra Infra",
    description:
      "Besant Nagar construction planning for homes, villas, and premium residential projects with better package-fit and execution clarity.",
    url: "https://www.lokrainfra.in/builders-in-besant-nagar-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Why is Besant Nagar better handled as a premium-locality page?",
    a: "Besant Nagar usually fits better when the page leads with home, villa, and premium residential planning rather than sounding like a generic all-purpose contractor page. That keeps the route more useful and more locality-specific.",
  },
  {
    q: "Can Lokra discuss budget and package comparisons for Besant Nagar too?",
    a: "Yes. Lokra can still compare packages starting from ₹1,899 / sq.ft., but the practical decision in Besant Nagar often depends on site expectations, finish standards, and how much reporting and protection the owner wants — not just the lowest entry point.",
  },
  {
    q: "Should I compare villa and home-construction pages before choosing a builder in Besant Nagar?",
    a: "Yes. Besant Nagar buyers will usually get a better answer by comparing the home-construction, villa-construction, and packages pages together before reducing the project to a simple price-only choice.",
  },
  {
    q: "How should I compare premium-locality builders safely?",
    a: "Compare execution clarity, branded material scope, quality checks, reporting discipline, and whether the builder can actually support the level of finish and expectation your project needs. Cheap headline numbers alone are not enough.",
  },
  {
    q: "What should I share before discussing a Besant Nagar project?",
    a: "Share whether the requirement is an independent home, villa, premium residential upgrade, or another build type, plus your site location and budget direction. That gives a stronger starting point for the right package path.",
  },
];

export default function BuildersInBesantNagarChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-besant-nagar-chennai"
      eyebrow="Besant Nagar Locality Build Planning"
      title="Builders in Besant Nagar, Chennai"
      intro="Besant Nagar is another strong competitor-proof locality for Lokra because it supports premium residential, home-construction, and villa-intent searches with clearer locality framing than a generic city route. This page is built for buyers who want branded package comparisons, stronger execution discipline, and real package-fit guidance rather than thin locality filler."
      serviceName="Builders in Besant Nagar, Chennai"
      serviceDescription="Construction planning in Besant Nagar for homes, villas, and premium residential projects with branded package comparisons and better execution framing."
      summaryCards={[
        { title: "Premium Locality Fit", desc: "Besant Nagar works best when the page leads with residential quality and project-fit expectations rather than generic contractor wording." },
        { title: "Package Comparison Clarity", desc: "Useful for buyers who want to compare package levels from ₹1,899 / sq.ft. upward without pretending every project should use the lowest level." },
        { title: "Competitor-Proof Route", desc: "Built to answer the locality-level competition signal with unique Besant Nagar framing instead of copy-pasted city content." },
      ]}
      sections={[
        { title: "Why Besant Nagar Is In The Third Batch", body: "Besant Nagar is justified by competitor locality signals and by its stronger premium-residential profile. That makes it a better candidate for a focused locality page than for generic builder language reused from the rest of Chennai.", bullets: ["Premium-residential context", "Home and villa fit", "Competitor locality evidence", "Locality-specific framing"] },
        { title: "Use Package Pricing As A Planning Tool", body: "Lokra can still discuss real package levels from ₹1,899 / sq.ft. to ₹1,999 and ₹2,099, but the right choice in Besant Nagar is often about which level matches the finish expectation, reporting detail, and long-term protection the project needs.", bullets: ["₹1,899 starting level", "₹1,999 next step", "₹2,099 stronger quality-check path", "Planning tool, not cheapest claim"] },
        { title: "What Besant Nagar Buyers Usually Need Clarified", body: "The first real decision is whether the project is a practical home build, a villa-led project, or a premium residential execution that needs tighter control over finish and reporting. That shapes the builder comparison more than generic low-cost wording alone.", bullets: ["Home construction", "Villa planning", "Premium finish needs", "Reporting and quality clarity"] },
        { title: "Use The Right Chennai Pages Next", body: "This locality page should direct the buyer into the stronger city-wide pages that clarify scope, package path, and execution expectations more deeply.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/villa-construction-chennai", label: "Villa Construction Chennai" },
          { href: "/building-contractors-chennai", label: "Building Contractors Chennai" },
          { href: "/packages", label: "Compare Packages From ₹1,899" },
        ] },
        { title: "Start With A Better Besant Nagar Brief", body: "Bring the exact site location, the project type, and your budget direction into the first discussion so the right package and service route can be identified early.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss A Besant Nagar Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The Besant Nagar Requirement And Budget Direction And We'll Help You Match It To The Right Residential Build Path."
    />
  );
}
