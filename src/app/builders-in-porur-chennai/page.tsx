import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Porur, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports Porur-area construction planning for homes, commercial builds, renovation, and civil scope with clearer site review, execution framing, and milestone visibility.",
  keywords: [
    "builders in porur chennai",
    "construction company porur chennai",
    "home construction porur chennai",
    "commercial construction porur chennai",
    "civil contractors porur chennai",
  ],
  alternates: { canonical: "/builders-in-porur-chennai" },
  openGraph: {
    title: "Builders in Porur, Chennai | Lokra Infra",
    description:
      "Porur construction planning for homes, commercial projects, renovation, and civil scope with clearer execution discipline.",
    url: "https://www.lokrainfra.in/builders-in-porur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  { q: "Why is Porur one of the first Lokra locality pages?", a: "Porur is one of the stronger high-fit areas from the current rollout model because it supports residential, commercial, renovation, and civil-intent expansion without needing a thin locality-only story." },
  { q: "Can Lokra discuss both home and commercial construction in Porur?", a: "Yes. Porur is useful precisely because it supports both residential and commercial conversations while still fitting Lokra's current service architecture well." },
  { q: "Does Porur also fit civil and site-development conversations?", a: "Yes. Porur is one of the better early-fit areas for civil-linked scope, especially where site development or enabling work may shape the broader project path." },
  { q: "Should I start with the Porur page or a city-level page?", a: "If your project is specifically in or around Porur, this page is a better first entry. It can then route you to the more specific city-level service page that best matches the requirement." },
  { q: "What should I prepare before discussing a Porur project?", a: "Bring the site location, intended use, current status of the project, drawings if available, and whether the requirement includes civil, renovation, or full construction scope." },
];

export default function BuildersInPorurChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-porur-chennai"
      eyebrow="Porur Area Build Planning"
      title="Builders in Porur, Chennai"
      intro="Porur is one of the highest-fit localities for Lokra's next rollout because it supports residential, commercial, renovation, and civil-led project discussions without depending on weak locality fluff. This page helps route Porur-area requirements into the right execution path more clearly."
      serviceName="Builders in Porur, Chennai"
      serviceDescription="Construction planning in Porur for homes, commercial projects, renovation, and civil-linked scope with clearer site review and execution framing."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to a Porur-area builder." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your Porur project." },
        { href: "/services", label: "Browse By Service Type", desc: "Move straight into home, commercial, renovation, or civil service pages if you already know the scope." },
      ]}
      summaryCards={[
        { title: "High-Fit Locality", desc: "Porur is a strong rollout target because it supports several Lokra service angles at once." },
        { title: "Mixed Project Types", desc: "Useful for home, commercial, renovation, and civil-linked discussions rather than one narrow keyword only." },
        { title: "Stronger Scope Logic", desc: "Better for buyers who want to clarify site and project fit before narrowing the requirement further." },
      ]}
      sections={[
        { title: "Why Porur Is A Safe First Locality Page", body: "Porur is one of the best early localities because it does not need to rely on a single service promise. It fits the current Lokra stack across construction, commercial, renovation, and civil work, which reduces the risk of publishing a thin locality page too early.", bullets: ["Residential fit", "Commercial fit", "Renovation fit", "Civil-linked fit"] },
        { title: "What Porur Buyers Usually Need Clarified", body: "Most Porur-area requirements still need a practical first filter: is this home construction, a commercial build, renovation, or a civil-led scope that should be framed separately? That distinction matters before comparing builders superficially.", bullets: ["Home construction", "Commercial build", "Renovation planning", "Civil or site-development scope"] },
        { title: "Use The Right City-Level Page After The First Filter", body: "This locality page should guide the buyer into the right deeper route rather than duplicating every service page. Once the requirement is clearer, move into the city-level page that matches the actual project need.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/commercial-construction-chennai", label: "Commercial Construction Chennai" },
          { href: "/civil-contractors-chennai", label: "Civil Contractors Chennai" },
          { href: "/renovation-contractors-chennai", label: "Renovation Contractors Chennai" },
        ] },
        { title: "Why Porur Needs Better Site And Scope Review First", body: "Porur projects can still vary in access, usage, existing condition, and how much enabling work is required. A better builder conversation starts from site truth and scope clarity, not just an early headline claim.", bullets: ["Site condition", "Access and context", "Service-angle fit", "Execution sequencing"] },
        { title: "Bring A Better Porur Brief To The First Discussion", body: "If the project is in Porur or nearby, share the exact location, intended use, current stage, and whether the requirement involves full construction, commercial work, renovation, or civil support. That will make the first conversation significantly more useful.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/packages", label: "Compare Package Depth" },
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss A Porur Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The Porur Requirement And We'll Help You Clarify The Right Execution Direction."
    />
  );
}
