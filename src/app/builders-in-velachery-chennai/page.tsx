import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Builders in Velachery, Chennai | Lokra Infra",
  description:
    "Lokra Infra supports Velachery-area construction planning for homes, villas, commercial projects, and budget-conscious package comparisons with pricing paths starting from ₹1,899 / sq.ft.",
  keywords: [
    "builders in velachery chennai",
    "affordable builders in velachery chennai",
    "budget construction company velachery chennai",
    "low cost construction company velachery chennai",
    "home construction velachery chennai",
    "villa construction velachery chennai",
  ],
  alternates: { canonical: "/builders-in-velachery-chennai" },
  openGraph: {
    title: "Affordable Builders in Velachery, Chennai | Lokra Infra",
    description:
      "Velachery construction planning for homes, villas, commercial projects, and package-led budget comparisons starting from ₹1,899 / sq.ft.",
    url: "https://www.lokrainfra.in/builders-in-velachery-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Can Lokra support budget-conscious construction planning in Velachery?",
    a: "Yes. Lokra's package ladder already starts from ₹1,899 / sq.ft., with further levels like ₹1,999 and ₹2,099 depending on the scope, protection level, and reporting depth you want. The right fit still depends on the site and project requirement, not just the lowest headline number.",
  },
  {
    q: "Does affordable construction mean low-quality materials?",
    a: "No. Lokra's lower package levels are still structured around branded materials, proper structural design, and clearer scope control. Affordable should mean smarter package fit and disciplined planning, not careless downgrading.",
  },
  {
    q: "Why does Velachery suit both home and villa intent?",
    a: "Velachery is one of the stronger localities for mixing residential, premium-home, and broader builder-intent demand, so this page works as a useful entry point before narrowing into a more specific service page.",
  },
  {
    q: "Can I compare packages before deciding whether the project is affordable for me?",
    a: "Yes. Lokra's packages page is the best place to compare the starting levels, reporting depth, engineering scope, and site-fit differences before deciding what budget direction is realistic.",
  },
  {
    q: "What should I share before discussing a Velachery project?",
    a: "Share the exact site location, project type, rough budget direction, and whether the requirement is home, villa, commercial, renovation, or civil-linked. That helps match the project to the right package and execution path earlier.",
  },
];

export default function BuildersInVelacheryChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/builders-in-velachery-chennai"
      eyebrow="Velachery Area Build Planning"
      title="Affordable Builders in Velachery, Chennai"
      intro="Velachery is one of the best next-fit localities for Lokra because it supports home, villa, commercial, and budget-conscious construction intent without forcing thin locality copy. This page helps buyers who want affordable and branded package options starting from ₹1,899 / sq.ft. while still keeping execution discipline, package fit, and scope clarity in view."
      serviceName="Affordable Builders in Velachery, Chennai"
      serviceDescription="Construction planning in Velachery for homes, villas, and commercial projects with package-led affordable options starting from ₹1,899 / sq.ft. and clearer execution framing."
      summaryCards={[
        { title: "Affordable Package Entry", desc: "Useful for buyers who want construction packages starting from ₹1,899 / sq.ft. without pretending that the lowest price alone decides the project." },
        { title: "Residential + Villa Fit", desc: "Velachery supports both practical home-construction intent and stronger premium/villa comparisons." },
        { title: "Better Budget Clarity", desc: "A stronger fit for owners who want to compare budget direction, scope, and branded package trade-offs before committing." },
      ]}
      sections={[
        { title: "Why Velachery Is A Strong Next Locality", body: "Velachery has enough demand overlap across builders, home construction, villa planning, and commercial intent to justify a focused locality route. That makes it safer than publishing a large number of weak micro-pages too early.", bullets: ["Builder-intent fit", "Home + villa demand", "Commercial overlap", "Budget-conscious search relevance"] },
        { title: "Affordable Does Not Mean Careless", body: "Lokra's affordability story should come from real package structure, not fake cheapest-in-city claims. The current package ladder already gives a truthful entry point from ₹1,899 / sq.ft., followed by ₹1,999 and ₹2,099 levels that improve protection, reporting, or scope depth depending on site fit.", bullets: ["₹1,899 / sq.ft. starting level", "₹1,999 / sq.ft. next step", "₹2,099 / sq.ft. stronger quality-check path", "Branded package logic"] },
        { title: "What Velachery Buyers Usually Need Clarified", body: "The useful first question is not just whether a builder is affordable. It is whether the project is home-led, villa-led, commercial, or mixed scope — and which package path matches the site and budget reality without false shortcuts.", bullets: ["Home construction", "Villa planning", "Commercial fit", "Budget + package fit"] },
        { title: "Use The Right Pages Before You Decide", body: "This locality page should route you into the stronger city-level pages once the requirement is clearer. Use the home, villa, commercial, and packages pages together before deciding what affordable really means for your site and scope.", links: [
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/villa-construction-chennai", label: "Villa Construction Chennai" },
          { href: "/commercial-construction-chennai", label: "Commercial Construction Chennai" },
          { href: "/packages", label: "Compare Packages From ₹1,899" },
        ] },
        { title: "Start With A Better Velachery Brief", body: "Bring the exact site location, project type, and rough budget comfort into the first discussion. That will help decide whether the base package is enough or whether the site needs a higher level for reporting, waterproofing, or engineering control.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss A Velachery Requirement" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share The Velachery Requirement And Budget Direction And We'll Help You Match It To The Right Package Path Clearly."
    />
  );
}
