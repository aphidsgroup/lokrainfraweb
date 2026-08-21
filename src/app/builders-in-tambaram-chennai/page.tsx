import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Tambaram, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports Tambaram-area construction planning across homes, commercial builds, renovation, and civil scope with clearer project framing and execution visibility.",
  keywords: [
    "builders in tambaram chennai",
    "construction company tambaram chennai",
    "home construction tambaram chennai",
    "commercial construction tambaram chennai",
    "renovation contractors tambaram chennai",
  ],
  alternates: { canonical: "/builders-in-tambaram-chennai" },
  openGraph: {
    title: "Builders in Tambaram, Chennai | Lokra Infra",
    description:
      "Tambaram construction planning for residential, commercial, renovation, and civil-linked scope with clearer execution direction.",
    url: "https://www.lokrainfra.in/builders-in-tambaram-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  { q: "Why is Tambaram part of the first locality rollout?", a: "Tambaram already carries strong corridor/locality priority in the current model and supports multiple Lokra service angles, which makes it a stronger early target than many thinner locality ideas." },
  { q: "Does Tambaram fit both residential and commercial construction intent?", a: "Yes. Tambaram is useful because it supports both residential and commercial discussions while also allowing renovation and civil-linked extensions when relevant." },
  { q: "Can this page also support renovation or civil-intent routing?", a: "Yes. Tambaram is one of the better localities for routing into renovation and civil-contractor discussions after the buyer's requirement is clarified." },
  { q: "Should I start here if my requirement is around Tambaram but not exactly in the center?", a: "Yes, as long as the project is broadly Tambaram-area in buyer intent. This page is meant to act as a practical locality entry, then route you into the right service page once the project type is clearer." },
  { q: "What should I share before a Tambaram project discussion?", a: "Share the project location, intended use, whether it is home, commercial, renovation, or civil-led, and any current drawings or scope notes if available." },
];

export default function BuildersInTambaramChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-tambaram-chennai"
      eyebrow="Tambaram Area Build Planning"
      title="Builders in Tambaram, Chennai"
      intro="Tambaram is one of the best next localities for Lokra because it can support home, commercial, renovation, and civil-intent routing without forcing weak locality-only copy. This page helps turn Tambaram-area search into a clearer project conversation before execution decisions are made."
      serviceName="Builders in Tambaram, Chennai"
      serviceDescription="Construction planning in Tambaram for homes, commercial projects, renovation, and civil-linked scope with clearer buyer routing and execution framing."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to a Tambaram-area builder." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your Tambaram project." },
        { href: "/services", label: "Browse By Service Type", desc: "Move straight into home, commercial, renovation, or civil service pages if you already know the scope." },
      ]}
      summaryCards={[
        { title: "Strong Early Locality", desc: "Tambaram is a high-fit expansion area because it works across several service angles already live on the site." },
        { title: "Better Buyer Routing", desc: "Useful for clarifying whether the real need is home, commercial, renovation, or civil-led rather than forcing one generic builder story." },
        { title: "Less Thin-Page Risk", desc: "A stronger first locality target because it supports broader project logic than a highly narrow micro-area page." },
      ]}
      sections={[
        { title: "Why Tambaram Belongs In The First Locality Batch", body: "Tambaram already scores strongly in the current locality model and fits Lokra's current page architecture well. It gives Lokra a practical area entry point without forcing the site into fast, low-quality locality expansion.", bullets: ["High rollout fit", "Residential + commercial relevance", "Renovation adjacency", "Civil-linked expansion fit"] },
        { title: "What Tambaram Buyers Usually Need Clarified", body: "Many Tambaram-area searches still need one early decision: what kind of project is this really? That matters because home, commercial, renovation, and civil scope should not all be treated as one generic builder keyword.", bullets: ["Home construction", "Commercial build", "Renovation work", "Civil/support scope"] },
        { title: "Move From Locality Entry Into The Right Service Page", body: "This page works best when it routes the user into the correct deeper page after the first filter is done. Lokra's city-level pages already provide the stronger service-specific explanations once the Tambaram requirement is clearer.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/commercial-construction-chennai", label: "Commercial Construction Chennai" },
          { href: "/civil-contractors-chennai", label: "Civil Contractors Chennai" },
          { href: "/renovation-contractors-chennai", label: "Renovation Contractors Chennai" },
          { href: "/builders-in-perungalathur-chennai", label: "Builders in Perungalathur, Chennai" },
          { href: "/builders-in-vandalur-chennai", label: "Builders in Vandalur, Chennai" },
        ] },
        { title: "Why Tambaram Projects Still Need Better Scope Framing", body: "Even strong-fit localities should not skip the basics. Site condition, intended use, access, scale, and whether enabling works are needed all shape the project path and should be understood before any shallow builder comparison takes over.", bullets: ["Site truth first", "Use-case clarity", "Execution-path review", "Milestone visibility"] },
        { title: "Start The Tambaram Discussion With Better Inputs", body: "Bring the exact location, project type, current stage, and any scope notes or drawings you already have. The goal is to make the first discussion practical enough to choose the correct execution direction early.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/packages", label: "Compare Package Depth" },
          { href: "/process", label: "See The Delivery Process" },
          { href: "/chennai-areas", label: "Explore All Chennai Areas" },
          { href: "/contact", label: "Discuss A Tambaram Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The Tambaram Requirement And We'll Help You Route It Into The Right Service Path Clearly."
    />
  );
}
