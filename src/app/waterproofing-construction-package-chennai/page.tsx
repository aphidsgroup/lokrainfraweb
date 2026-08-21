import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "₹1,999 Waterproofing-Focused Construction in Chennai | Lokra Infra",
  description:
    "Understand the ₹1,999 / sq.ft. waterproofing-focused construction step in Chennai, including below-ground protection, terrace waterproofing, external-wall moisture control, and site-fit guidance.",
  keywords: [
    "₹1,999 construction cost chennai",
    "waterproofing focused construction chennai",
    "waterproofing house construction chennai",
    "budget waterproofing construction chennai",
    "₹1,999 house construction chennai",
    "low cost waterproofing construction chennai",
  ],
  alternates: { canonical: "/waterproofing-construction-package-chennai" },
  openGraph: {
    title: "₹1,999 Waterproofing-Focused Construction in Chennai | Lokra Infra",
    description:
      "The ₹1,999 / sq.ft. construction step for Chennai projects that need stronger moisture protection without jumping too far up the ladder.",
    url: "https://www.lokrainfra.in/waterproofing-construction-package-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is the ₹1,999 waterproofing-focused construction step in Chennai?",
    a: "₹1,999 / sq.ft. is the waterproofing-focused step in the current public ladder. It is designed to add stronger protection against water problems in the foundation, terrace, and outer walls.",
  },
  {
    q: "When is ₹1,999 better than the ₹1,899 starting point?",
    a: "₹1,999 is better when below-ground moisture control, terrace waterproofing, and external wall protection are key concerns. If water risk matters more than staying at the absolute lowest entry point, ₹1,999 is usually the smarter step.",
  },
  {
    q: "What does the ₹1,999 step actually add?",
    a: "It adds two-coat below-ground bituminous protection before backfilling, terrace weathering course with waterproof coating, waterproofing admixture in external plaster, and coating in balconies and sunken slabs. It also raises the flooring allowance to ₹60 / sq.ft. and sanitaryware to ₹19,000 per bathroom.",
  },
  {
    q: "Is ₹1,999 still suitable for budget-conscious projects?",
    a: "Yes. ₹1,999 is still part of the early affordable ladder and is often the better budget decision when moisture protection matters. The goal is not just the cheapest number, but the lowest price step that still fits the site's risk profile.",
  },
  {
    q: "When should I skip ₹1,999 and move to ₹2,099 instead?",
    a: "Move to ₹2,099 when you also want stronger quality verification, concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty in addition to waterproofing-related improvements.",
  },
];

export default function WaterproofingConstructionPackageChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/waterproofing-construction-package-chennai"
      eyebrow="Waterproofing Cost Guide"
      title="₹1,999 Waterproofing-Focused Construction in Chennai"
      intro="This page is built for owners comparing waterproofing-focused construction options in Chennai without vague claims. It is grounded in the real ₹1,999 / sq.ft. step, which adds below-ground protection, terrace waterproofing, and external-wall moisture control for projects where water risk matters more than staying at the lowest entry tier."
      serviceName="₹1,999 Waterproofing-Focused Construction in Chennai"
      serviceDescription="Waterproofing-focused construction guidance in Chennai using the real ₹1,999 / sq.ft. public price step."
      summaryCards={[
        { title: "₹1,999 Waterproofing Step", desc: "The practical upgrade when the project needs stronger protection from terrace, wall, and below-ground water problems." },
        { title: "5-Year Warranty", desc: "This price step upgrades the warranty from the ₹1,899 starting tier's 2 years to 5 years while staying inside the early affordable ladder." },
        { title: "Moisture-Control Focus", desc: "Designed for projects where foundation moisture, terrace protection, and external-wall water control matter early." },
      ]}
      sections={[
        { title: "What The ₹1,999 Step Actually Is", body: "₹1,999 is the waterproofing-focused step in the current public ladder. It is best for inland plots where terrace, external wall, and below-ground moisture control are the key upgrade priorities over the ₹1,899 starting tier.", bullets: ["₹1,999 / sq.ft.", "5-year warranty", "Available-on-request reporting", "Same handover baseline as the starting tier", "Early ladder upgrade"] },
        { title: "What Waterproofing Upgrades You Get", body: "The live packages page spells out the actual moisture-control improvements in this ₹1,999 step. These are not vague waterproofing promises — they are clear scope differences from the entry tier.", bullets: ["Two-coat below-ground bituminous protection", "Terrace weathering course with waterproof coating", "Waterproofing admixture in external plaster", "Balcony and sunken slab coating", "Enhanced waterproofing inspection workflow"] },
        { title: "How ₹1,999 Changes Allowances", body: "₹1,999 is still an affordable price step, but it also improves some practical finishing allowances compared with ₹1,899. That makes it useful for owners who want both better moisture protection and a small uplift in allowances without jumping too high too early.", bullets: ["Flooring allowance ₹60 / sq.ft.", "Sanitaryware ₹19,000 per bathroom", "Step up from ₹1,899 allowances", "Still part of the early price ladder"] },
        { title: "When ₹1,999 Is The Right Budget Decision", body: "₹1,999 is usually the right step when the site or owner priorities make moisture control more important than staying at the lowest starting number. It is a budget-conscious upgrade, not a premium jump, and works well when waterproofing is the main concern.", links: [
          { href: "/affordable-construction-packages-chennai", label: "Affordable Construction Cost Chennai" },
          { href: "/budget-home-construction-chennai", label: "Budget Home Construction Chennai" },
          { href: "/quality-checked-structure-package-chennai", label: "₹2,099 Quality-Focused Construction Chennai" },
          { href: "/packages", label: "Compare The Full Price Ladder" },
        ] },
        { title: "When To Move Up To ₹2,099", body: "If you also want lab-tested concrete quality checks, stage records, fortnightly photo reporting, and a 10-year structural warranty, then ₹2,099 becomes the more suitable next step.", links: [
          { href: "/process", label: "See The Delivery Process" },
          { href: "/contact", label: "Discuss The Right Price Step" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Site And Water-Risk Concerns And We'll Help You Decide Whether ₹1,999 Is The Right Waterproofing Step."
    />
  );
}
