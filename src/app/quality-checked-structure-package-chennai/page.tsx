import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "₹2,099 Quality-Focused Construction in Chennai | Lokra Infra",
  description:
    "Understand the ₹2,099 / sq.ft. quality-focused construction step in Chennai, including concrete cube testing, stage records, fortnightly reporting, and a 10-year structural warranty.",
  keywords: [
    "₹2,099 construction cost chennai",
    "quality focused construction chennai",
    "concrete cube testing construction chennai",
    "10 year structural warranty construction chennai",
    "quality home construction chennai",
    "budget to mid construction chennai",
  ],
  alternates: { canonical: "/quality-checked-structure-package-chennai" },
  openGraph: {
    title: "₹2,099 Quality-Focused Construction in Chennai | Lokra Infra",
    description:
      "The ₹2,099 / sq.ft. construction step for Chennai projects that need stronger records, testing, and warranty confidence.",
    url: "https://www.lokrainfra.in/quality-checked-structure-package-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is the ₹2,099 quality-focused construction step in Chennai?",
    a: "₹2,099 / sq.ft. is the stronger quality-focused step in the current public ladder. It adds lab-tested concrete quality checks and stronger project records.",
  },
  {
    q: "What does ₹2,099 add beyond the ₹1,999 waterproofing step?",
    a: "₹2,099 adds concrete cube testing at important stages with lab certificates, stage records, fortnightly reporting with photos, and a 10-year structural warranty. It is for owners who want stronger evidence and tracking, not just waterproofing improvements.",
  },
  {
    q: "Who is ₹2,099 best for?",
    a: "₹2,099 is best for owners who want stronger concrete checking and more documented construction records before moving into the higher engineering-record price levels. It is a practical quality-confidence step.",
  },
  {
    q: "What physical scope improvements come with ₹2,099?",
    a: "The live package details include continuous lintel band to all walls, pre-construction anti-termite treatment, two-coat below-ground bituminous protection, teak main door allowance ₹38,000, AC point in bedrooms, flooring allowance ₹70 / sq.ft., and sanitaryware ₹23,000 per bathroom.",
  },
  {
    q: "When should I move beyond ₹2,099?",
    a: "Move beyond ₹2,099 when you need longer warranty, retention-backed after-handover support, ready-mix plant records, or full engineering files and soil reports. ₹2,099 is the first stronger quality-confidence step, not the end of the ladder.",
  },
];

export default function QualityCheckedStructurePackageChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/quality-checked-structure-package-chennai"
      eyebrow="Quality-Focused Cost Guide"
      title="₹2,099 Quality-Focused Construction in Chennai"
      intro="This page is for owners who want stronger construction quality confidence in Chennai without jumping immediately into the higher engineering-file price levels. It is grounded in the real ₹2,099 / sq.ft. step, which adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty."
      serviceName="₹2,099 Quality-Focused Construction in Chennai"
      serviceDescription="Quality-focused construction guidance in Chennai using the real ₹2,099 / sq.ft. public price step."
      summaryCards={[
        { title: "₹2,099 Quality Step", desc: "The first stronger quality-confidence tier in the public price ladder." },
        { title: "10-Year Warranty", desc: "This price step lifts the structural warranty to 10 years while adding stronger checking and documentation." },
        { title: "Testing + Records", desc: "Designed for owners who want concrete cube testing, lab certificates, stage records, and visible reporting discipline." },
      ]}
      sections={[
        { title: "What The ₹2,099 Step Actually Is", body: "₹2,099 is the quality-focused step in the current public ladder. It includes lab-tested concrete quality checks and proper records, making it a meaningful step above the ₹1,999 waterproofing-focused tier.", bullets: ["₹2,099 / sq.ft.", "10-year warranty", "Fortnightly reporting with photos", "Stage records", "Quality-confidence tier"] },
        { title: "What Quality-Check Upgrades You Get", body: "The main reason to choose ₹2,099 is stronger evidence. The live package details explicitly include concrete cube testing at important stages with lab certificates, which helps the owner move from assumption-based trust to documented checking.", bullets: ["Concrete cube testing", "Lab certificates", "Stage records", "Fortnightly photo reporting", "Stronger quality visibility"] },
        { title: "What Physical Scope Improvements Also Come In", body: "₹2,099 also includes several practical upgrades beyond the reporting and testing layer. These details matter because they show the step is not only about paperwork — it also improves physical site and finish scope.", bullets: ["Continuous lintel band to all walls", "Pre-construction anti-termite treatment", "Two-coat below-ground bituminous protection", "Teak main door allowance ₹38,000", "AC point in bedrooms", "Flooring allowance ₹70 / sq.ft.", "Sanitaryware ₹23,000 per bathroom"] },
        { title: "When ₹2,099 Is The Right Decision", body: "₹2,099 is the right step when the owner wants stronger checking, better records, and more quality confidence than ₹1,999 provides, but does not yet need the longer-warranty and full engineering-file price levels higher up the ladder.", links: [
          { href: "/waterproofing-construction-package-chennai", label: "₹1,999 Waterproofing-Focused Construction Chennai" },
          { href: "/affordable-construction-packages-chennai", label: "Affordable Construction Cost Chennai" },
          { href: "/packages", label: "Compare The Full Price Ladder" },
          { href: "/contact", label: "Discuss The Right Price Step" },
        ] },
        { title: "When To Move Beyond ₹2,099", body: "If you need longer warranty, retention-backed after-handover support, ready-mix concrete plant records, or full engineering and soil-file handover, then the higher price levels become more suitable than ₹2,099.", links: [
          { href: "/process", label: "See The Delivery Process" },
          { href: "/services", label: "Review All Services" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Quality-Control Expectations And We'll Help You Decide Whether ₹2,099 Is The Right Construction Step."
    />
  );
}
