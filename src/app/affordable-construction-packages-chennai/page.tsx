import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Construction Cost in Chennai | Lokra Infra",
  description:
    "Compare affordable construction cost options in Chennai from ₹1,899 / sq.ft. to ₹2,099 / sq.ft., including waterproofing, quality checks, reporting, and best-fit guidance.",
  keywords: [
    "affordable construction cost chennai",
    "budget construction cost chennai",
    "low cost construction chennai",
    "construction price chennai",
    "affordable house construction chennai",
    "budget home construction cost chennai",
  ],
  alternates: { canonical: "/affordable-construction-packages-chennai" },
  openGraph: {
    title: "Affordable Construction Cost in Chennai | Lokra Infra",
    description:
      "Compare Chennai construction pricing from ₹1,899 / sq.ft. to ₹2,099 / sq.ft. with real waterproofing, quality-check, and reporting differences.",
    url: "https://www.lokrainfra.in/affordable-construction-packages-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is Lokra's most affordable construction starting point in Chennai?",
    a: "The current public starting point is ₹1,899 / sq.ft. It is positioned as a budget-friendly construction option with branded materials and proper structural design, best suited to firm inland plots and first-time builders who still want engineering discipline.",
  },
  {
    q: "What changes from ₹1,899 to ₹1,999 and ₹2,099?",
    a: "₹1,999 adds stronger moisture and waterproofing protection in below-ground areas, terrace, and outer walls. ₹2,099 adds stronger quality checks, stage records, fortnightly photo reporting, and a 10-year structural warranty.",
  },
  {
    q: "Which affordable price point is best for first-time builders?",
    a: "₹1,899 is the most economical starting point for many first-time builders on firm inland plots. But if moisture control or stronger quality-record expectations matter, ₹1,999 or ₹2,099 may be the better fit.",
  },
  {
    q: "Does low-cost construction mean weak materials?",
    a: "No. The lower public price points are still built around branded materials, structural design, and defined quality processes. The real question is which protection, checking, reporting, and allowance levels your site requires.",
  },
  {
    q: "Where should I compare the full construction ladder?",
    a: "Use the main Packages page to compare all public price levels from ₹1,899 / sq.ft. upward. This affordability page is meant to help you understand the entry and early-upgrade tiers more clearly before going into the full ladder.",
  },
];

export default function AffordableConstructionPackagesChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/affordable-construction-packages-chennai"
      eyebrow="Affordable Cost Comparison"
      title="Affordable Construction Cost in Chennai"
      intro="This page is built for buyers who want affordable or budget construction comparisons in Chennai without fake cheapest claims. It is grounded in Lokra's real public price ladder: ₹1,899 / sq.ft., ₹1,999 / sq.ft., and ₹2,099 / sq.ft. — with the actual differences in waterproofing, quality checks, reporting, warranties, and allowances spelled out clearly."
      serviceName="Affordable Construction Cost in Chennai"
      serviceDescription="Affordable construction comparison in Chennai using Lokra's real public pricing from ₹1,899 / sq.ft. to ₹2,099 / sq.ft."
      summaryCards={[
        { title: "₹1,899 Starting Tier", desc: "Budget-friendly starting point with branded materials, proper structural design, and best fit for firm inland plots and first-time builders." },
        { title: "₹1,999 Waterproofing Upgrade", desc: "Adds stronger moisture and waterproofing protection in below-ground areas, terrace, and external walls." },
        { title: "₹2,099 Quality-Check Upgrade", desc: "Adds concrete cube testing, stage records, fortnightly photos, and a 10-year structural warranty." },
      ]}
      sections={[
        { title: "What ₹1,899 Actually Gets You", body: "₹1,899 is not presented as a stripped-down unsafe option. The live packages page describes this as a budget-friendly construction level with branded materials and proper structural design. It is best for firm inland plots and first-time builders who want full engineering discipline at the most economical public price point.", bullets: ["Branded materials", "Proper structural design", "2-year warranty", "Available-on-request reporting", "₹55 flooring allowance", "₹16,000 sanitaryware per bathroom"] },
        { title: "When ₹1,999 Is The Smarter Budget Choice", body: "₹1,999 is often the better affordable choice if your site needs stronger terrace, external-wall, and below-ground moisture control. It upgrades the waterproofing story without forcing a big jump into higher engineering-record tiers.", bullets: ["5-year warranty", "Below-ground bituminous protection", "Terrace waterproofing", "Waterproofing admixture in external plaster", "₹60 flooring allowance", "₹19,000 sanitaryware per bathroom"] },
        { title: "When ₹2,099 Becomes Worth It", body: "₹2,099 is the first stronger quality-check step in the ladder. It adds lab-tested concrete checks, stage records, fortnightly photo reporting, and a 10-year structural warranty — which is a meaningful upgrade for owners who want better evidence and tracking, not just a low starting rate.", bullets: ["10-year warranty", "Fortnightly reporting with photos", "Concrete cube testing", "Stage records", "₹70 flooring allowance", "₹23,000 sanitaryware per bathroom"] },
        { title: "Use Affordable Language The Right Way", body: "Affordable should mean the right fit between site reality, waterproofing needs, quality-check expectations, and allowance levels — not just the smallest entry number. This is why the ₹1,899, ₹1,999, and ₹2,099 tiers should be compared as project-fit steps rather than as a fake cheapest leaderboard.", links: [
          { href: "/packages", label: "Compare The Full Package Ladder" },
          { href: "/budget-home-construction-chennai", label: "Budget Home Construction Chennai" },
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/contact", label: "Discuss The Right Price Tier" },
        ] },
        { title: "When To Move Beyond The Entry Price Levels", body: "If your site has groundwater risk, coastal exposure, higher finish expectations, or you want full engineering records, the later price levels may be more appropriate. Use the affordable tiers as a grounded starting point, not as the answer for every site.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/process", label: "See The Delivery Process" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Budget Direction And Site Requirement And We'll Help You Compare The Right Chennai Price Levels Clearly."
    />
  );
}
