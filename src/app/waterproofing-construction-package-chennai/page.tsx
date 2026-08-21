import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Waterproofing Construction Package in Chennai | Lokra Infra",
  description:
    "Understand Lokra's waterproofing-focused construction package in Chennai at ₹1,999 / sq.ft., including below-ground protection, terrace waterproofing, external-wall moisture control, and site-fit guidance.",
  keywords: [
    "waterproofing construction package chennai",
    "waterproofing house construction chennai",
    "best waterproofing package chennai",
    "₹1,999 construction package chennai",
    "budget waterproofing construction chennai",
    "home construction waterproofing package chennai",
  ],
  alternates: { canonical: "/waterproofing-construction-package-chennai" },
  openGraph: {
    title: "Waterproofing Construction Package in Chennai | Lokra Infra",
    description:
      "Lokra's ₹1,999 / sq.ft. waterproofing-focused package for Chennai projects that need stronger moisture protection without jumping too far up the ladder.",
    url: "https://www.lokrainfra.in/waterproofing-construction-package-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is Lokra's waterproofing-focused package in Chennai?",
    a: "The waterproofing-focused step in the current package ladder is LS-2 at ₹1,999 / sq.ft. It is described as the Better Waterproofing Package and is designed to add stronger protection against water problems in the foundation, terrace, and outer walls.",
  },
  {
    q: "When is LS-2 better than the ₹1,899 entry package?",
    a: "LS-2 is better when below-ground moisture control, terrace waterproofing, and external wall protection are key concerns. If water risk matters more than staying at the absolute lowest entry point, LS-2 is usually the smarter step.",
  },
  {
    q: "What does the ₹1,999 package actually add?",
    a: "It adds two-coat below-ground bituminous protection before backfilling, terrace weathering course with waterproof coating, waterproofing admixture in external plaster, and coating in balconies and sunken slabs. It also raises the flooring allowance to ₹60 / sq.ft. and sanitaryware to ₹19,000 per bathroom.",
  },
  {
    q: "Is LS-2 still suitable for budget-conscious projects?",
    a: "Yes. LS-2 is still part of the early affordable ladder and is often the better budget decision when moisture protection matters. The goal is not just the cheapest number, but the lowest package that still fits the site's risk profile.",
  },
  {
    q: "When should I skip LS-2 and move to ₹2,099 instead?",
    a: "Move to LS-3 at ₹2,099 when you also want stronger quality verification, concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty in addition to waterproofing-related improvements.",
  },
];

export default function WaterproofingConstructionPackageChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/waterproofing-construction-package-chennai"
      eyebrow="Waterproofing Package Guide"
      title="Waterproofing Construction Package in Chennai"
      intro="This page is built for owners comparing waterproofing-focused construction options in Chennai without vague claims. It is grounded in Lokra's real LS-2 package at ₹1,999 / sq.ft., which adds below-ground protection, terrace waterproofing, and external-wall moisture control for projects where water risk matters more than staying at the lowest entry tier."
      serviceName="Waterproofing Construction Package in Chennai"
      serviceDescription="Waterproofing-focused construction package guidance in Chennai using Lokra's real LS-2 package at ₹1,999 / sq.ft."
      summaryCards={[
        { title: "₹1,999 Waterproofing Step", desc: "LS-2 is the practical upgrade when the project needs stronger protection from terrace, wall, and below-ground water problems." },
        { title: "5-Year Warranty", desc: "The package upgrades the warranty from LS-1's 2 years to 5 years while staying inside the early affordable ladder." },
        { title: "Moisture-Control Focus", desc: "Designed for projects where foundation moisture, terrace protection, and external-wall water control matter early." },
      ]}
      sections={[
        { title: "What The ₹1,999 Package Actually Is", body: "LS-2 is the Better Waterproofing Package in Lokra's current ladder. It is best for inland plots where terrace, external wall, and below-ground moisture control are the key upgrade priorities over the entry-level package.", bullets: ["₹1,999 / sq.ft.", "5-year warranty", "Available-on-request reporting", "Same handover baseline as LS-1", "Early ladder upgrade"] },
        { title: "What Waterproofing Upgrades You Get", body: "The live packages page spells out the actual moisture-control improvements in LS-2. These are not vague waterproofing promises — they are package-level scope differences from the entry tier.", bullets: ["Two-coat below-ground bituminous protection", "Terrace weathering course with waterproof coating", "Waterproofing admixture in external plaster", "Balcony and sunken slab coating", "Enhanced waterproofing inspection workflow"] },
        { title: "How LS-2 Changes Allowances", body: "LS-2 is still an affordable package, but it also improves some practical finishing allowances compared with LS-1. That makes it useful for owners who want both better moisture protection and a small uplift in allowances without jumping too high too early.", bullets: ["Flooring allowance ₹60 / sq.ft.", "Sanitaryware ₹19,000 per bathroom", "Step up from LS-1 allowances", "Still part of the early package ladder"] },
        { title: "When LS-2 Is The Right Budget Decision", body: "LS-2 is usually the right step when the site or owner priorities make moisture control more important than staying at the lowest starting number. It is a budget-conscious upgrade, not a premium jump, and works well when waterproofing is the main concern.", links: [
          { href: "/affordable-construction-packages-chennai", label: "Affordable Construction Packages Chennai" },
          { href: "/budget-home-construction-chennai", label: "Budget Home Construction Chennai" },
          { href: "/quality-checked-structure-package-chennai", label: "Quality Checked Structure Package Chennai" },
          { href: "/packages", label: "Compare The Full Package Ladder" },
        ] },
        { title: "When To Move Up To LS-3", body: "If you also want lab-tested concrete quality checks, stage records, fortnightly photo reporting, and a 10-year structural warranty, then LS-3 at ₹2,099 becomes the more suitable next step.", links: [
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss The Right Package Step" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Site And Water-Risk Concerns And We'll Help You Decide Whether LS-2 Is The Right Waterproofing Step."
    />
  );
}
