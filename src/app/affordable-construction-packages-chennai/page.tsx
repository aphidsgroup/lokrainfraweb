import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Construction Packages in Chennai | Lokra Infra",
  description:
    "Compare Lokra Infra's affordable construction packages in Chennai with real pricing from ₹1,899 / sq.ft. to ₹2,099 / sq.ft., including waterproofing, quality checks, reporting, and best-fit guidance.",
  keywords: [
    "affordable construction packages chennai",
    "budget construction packages chennai",
    "low cost construction packages chennai",
    "construction package price chennai",
    "affordable house construction packages chennai",
    "lokra package comparison chennai",
  ],
  alternates: { canonical: "/affordable-construction-packages-chennai" },
  openGraph: {
    title: "Affordable Construction Packages in Chennai | Lokra Infra",
    description:
      "Compare Lokra's Chennai construction packages from ₹1,899 / sq.ft. to ₹2,099 / sq.ft. with real waterproofing, quality-check, and reporting differences.",
    url: "https://www.lokrainfra.in/affordable-construction-packages-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is Lokra's most affordable construction package in Chennai?",
    a: "The starting package on the current public ladder is LS-1 at ₹1,899 / sq.ft. It is positioned as a budget-friendly package with branded materials and proper structural design, best suited to firm inland plots and first-time builders who still want engineering discipline.",
  },
  {
    q: "What changes from ₹1,899 to ₹1,999 and ₹2,099 packages?",
    a: "LS-2 at ₹1,999 adds better moisture and waterproofing protection in below-ground areas, terrace, and outer walls. LS-3 at ₹2,099 adds lab-tested concrete quality checks, stage records, fortnightly photo reporting, and a 10-year structural warranty.",
  },
  {
    q: "Which affordable package is best for first-time builders?",
    a: "LS-1 is the most economical starting point and is explicitly positioned for firm inland plots and first-time builders. But if moisture control or stronger quality-record expectations matter, LS-2 or LS-3 may be the better fit.",
  },
  {
    q: "Does low-cost construction mean weak materials?",
    a: "No. Lokra's lower package levels are still built around branded materials, structural design, and defined quality processes. The real question is which protection, checking, reporting, and allowance levels your site requires.",
  },
  {
    q: "Where should I compare the full package ladder?",
    a: "Use the main Packages page to compare all public levels from ₹1,899 / sq.ft. upward. This affordability page is meant to help you understand the entry and early-upgrade tiers more clearly before going into the full ladder.",
  },
];

export default function AffordableConstructionPackagesChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/affordable-construction-packages-chennai"
      eyebrow="Affordable Package Comparison"
      title="Affordable Construction Packages in Chennai"
      intro="This page is built for buyers who want affordable or budget construction package comparisons in Chennai without fake cheapest claims. It is grounded in Lokra's real package ladder: LS-1 at ₹1,899 / sq.ft., LS-2 at ₹1,999 / sq.ft., and LS-3 at ₹2,099 / sq.ft. — with the actual differences in waterproofing, quality checks, reporting, warranties, and allowances spelled out clearly."
      serviceName="Affordable Construction Packages in Chennai"
      serviceDescription="Affordable package comparison in Chennai using Lokra's real LS-1, LS-2, and LS-3 public package ladder from ₹1,899 / sq.ft. to ₹2,099 / sq.ft."
      summaryCards={[
        { title: "₹1,899 Entry Package", desc: "LS-1 is the current budget-friendly entry package with branded materials, proper structural design, and best fit for firm inland plots and first-time builders." },
        { title: "₹1,999 Waterproofing Upgrade", desc: "LS-2 adds stronger moisture and waterproofing protection in below-ground areas, terrace, and external walls." },
        { title: "₹2,099 Quality-Checked Upgrade", desc: "LS-3 adds concrete cube testing, stage records, fortnightly photos, and a 10-year structural warranty." },
      ]}
      sections={[
        { title: "What ₹1,899 Actually Gets You", body: "LS-1 is not presented as a stripped-down unsafe option. The live packages page describes it as a budget-friendly package with branded materials and proper structural design. It is best for firm inland plots and first-time builders who want full engineering discipline at the most economical package level.", bullets: ["Branded materials", "Proper structural design", "2-year warranty", "Available-on-request reporting", "₹55 flooring allowance", "₹16,000 sanitaryware per bathroom"] },
        { title: "When ₹1,999 Is The Smarter Budget Choice", body: "LS-2 is often the better affordable choice if your site needs stronger terrace, external-wall, and below-ground moisture control. It upgrades the waterproofing story without forcing a big jump into higher engineering-record packages.", bullets: ["5-year warranty", "Below-ground bituminous protection", "Terrace waterproofing", "Waterproofing admixture in external plaster", "₹60 flooring allowance", "₹19,000 sanitaryware per bathroom"] },
        { title: "When ₹2,099 Becomes Worth It", body: "LS-3 is the first stronger quality-check package in the ladder. It adds lab-tested concrete checks, stage records, fortnightly photo reporting, and a 10-year structural warranty — which is a meaningful upgrade for owners who want better evidence and tracking, not just a low starting rate.", bullets: ["10-year warranty", "Fortnightly reporting with photos", "Concrete cube testing", "Stage records", "₹70 flooring allowance", "₹23,000 sanitaryware per bathroom"] },
        { title: "Use Affordable Language The Right Way", body: "Affordable should mean the right fit between site reality, waterproofing needs, quality-check expectations, and allowance levels — not just the smallest entry number. This is why the ₹1,899, ₹1,999, and ₹2,099 tiers should be compared as project-fit steps rather than as a fake cheapest leaderboard.", links: [
          { href: "/packages", label: "Compare The Full Package Ladder" },
          { href: "/budget-home-construction-chennai", label: "Budget Home Construction Chennai" },
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/contact", label: "Discuss The Right Package Path" },
        ] },
        { title: "When To Move Beyond The Entry Packages", body: "If your site has groundwater risk, coastal exposure, higher finish expectations, or you want full engineering records, the later package levels may be more appropriate. Use the affordable tiers as a grounded starting point, not as the answer for every site.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/process", label: "See The Delivery Process" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Budget Direction And Site Requirement And We'll Help You Compare The Right Chennai Package Levels Clearly."
    />
  );
}
