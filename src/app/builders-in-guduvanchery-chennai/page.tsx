import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Guduvanchery, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports Guduvanchery construction planning for homes, practical builder comparisons, and package-led project decisions with clearer scope and execution framing.",
  keywords: [
    "builders in guduvanchery chennai",
    "home construction guduvanchery chennai",
    "building contractors guduvanchery chennai",
    "affordable builders guduvanchery chennai",
    "budget construction company guduvanchery chennai",
    "low cost construction company guduvanchery chennai",
  ],
  alternates: { canonical: "/builders-in-guduvanchery-chennai" },
  openGraph: {
    title: "Builders in Guduvanchery, Chennai | Lokra Infra",
    description:
      "Guduvanchery construction planning for homes and practical builder comparisons with package-led scope clarity and execution discipline.",
    url: "https://www.lokrainfra.in/builders-in-guduvanchery-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Why is Guduvanchery handled differently from premium central localities?",
    a: "Guduvanchery should be framed more as a practical home-construction and builder-comparison locality rather than as a premium central locality. That keeps the page aligned with realistic service fit instead of forcing the same positioning everywhere.",
  },
  {
    q: "Can Lokra still discuss affordable package options in Guduvanchery?",
    a: "Yes. Lokra can discuss package paths starting from ₹1,899 / sq.ft., then ₹1,999 and ₹2,099 depending on the scope, quality checks, and protection needs of the project. The useful comparison is what each level includes and whether it matches the site and project type.",
  },
  {
    q: "What kind of builder searches should this Guduvanchery page answer?",
    a: "This page is better suited to practical home-construction, building-contractor, and budget-conscious project-planning searches than to premium-villa-first positioning.",
  },
  {
    q: "How should I compare builders in Guduvanchery safely?",
    a: "Compare scope clarity, package fit, branded materials, quality checks, and whether the builder can support the actual project path you need. Lowest price alone is not enough without scope definition.",
  },
  {
    q: "What should I share before discussing a Guduvanchery project?",
    a: "Share whether the requirement is a new home build, contractor comparison, or another practical construction need, plus the site location and budget direction. That helps identify the right package and service path earlier.",
  },
];

export default function BuildersInGuduvancheryChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-guduvanchery-chennai"
      eyebrow="Guduvanchery Locality Build Planning"
      title="Builders in Guduvanchery, Chennai"
      intro="Guduvanchery is the next evidence-backed outer-area locality in the rollout, but it needs more practical framing than the premium central localities. This page is designed for buyers comparing home-construction, builder, and budget-conscious package options with clearer scope, branded material logic, and execution discipline — while still grounding affordability in the real package ladder starting from ₹1,899 / sq.ft."
      serviceName="Builders in Guduvanchery, Chennai"
      serviceDescription="Construction planning in Guduvanchery for homes, builder comparison, and package-led project decisions with practical scope clarity and execution framing."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to a Guduvanchery-area builder." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your Guduvanchery project." },
        { href: "/services", label: "Browse By Service Type", desc: "Move straight into home or building-contractor service pages if you already know the scope." },
      ]}
      summaryCards={[
        { title: "Practical Outer-Area Fit", desc: "Guduvanchery works better with practical home-construction and builder-comparison framing than with premium-locality copy." },
        { title: "Affordable Package Logic", desc: "Useful for buyers comparing budget direction and package fit without fake cheapest claims." },
        { title: "Evidence-Backed Expansion", desc: "Included because competitor locality signals exist, but positioned according to realistic service fit rather than copied locality logic." },
      ]}
      sections={[
        { title: "Why Guduvanchery Needs Different Framing", body: "Guduvanchery is a valid next locality because competitor locality signals exist, but it should not be framed exactly like central premium localities. The stronger positioning here is practical home-construction and builder-comparison fit.", bullets: ["Outer-area service fit", "Practical home-construction intent", "Budget-conscious relevance", "Competitor locality evidence"] },
        { title: "Use Package Pricing Truthfully", body: "Lokra can still discuss real package levels from ₹1,899 / sq.ft. to ₹1,999 and ₹2,099, but the useful question in Guduvanchery is what the package actually includes and whether it fits the project path and site condition rather than just the lowest entry number.", bullets: ["₹1,899 entry point", "₹1,999 next step", "₹2,099 stronger quality-check path", "Scope-fit over cheapest claims"] },
        { title: "What Guduvanchery Buyers Usually Need Clarified", body: "The first useful split is whether the project is a straightforward new home build, a builder comparison, or another practical construction requirement. That shapes the right page path more accurately than generic city language.", bullets: ["Home construction", "Building-contractor comparison", "Budget fit", "Scope clarity"] },
        { title: "Use The Right Chennai Pages Next", body: "This locality page should lead into the stronger city-wide pages that go deeper on home-construction, contractor comparison, and package decisions.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/building-contractors-chennai", label: "Building Contractors Chennai" },
          { href: "/packages", label: "Compare Packages From ₹1,899" },
          { href: "/services", label: "Review All Services" },
        ] },
        { title: "Start With A Better Guduvanchery Brief", body: "Bring the exact site location, project type, and budget direction into the first discussion so the right package and service route can be identified early.", links: [
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss A Guduvanchery Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The Guduvanchery Requirement And Budget Direction And We'll Help You Match It To The Right Practical Build Path."
    />
  );
}
