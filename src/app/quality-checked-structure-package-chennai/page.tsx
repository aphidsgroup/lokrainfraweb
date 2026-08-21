import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Quality Checked Structure Package in Chennai | Lokra Infra",
  description:
    "Understand Lokra's quality-checked structure package in Chennai at ₹2,099 / sq.ft., including concrete cube testing, stage records, fortnightly reporting, and a 10-year structural warranty.",
  keywords: [
    "quality checked structure package chennai",
    "quality checked construction package chennai",
    "₹2,099 construction package chennai",
    "concrete cube testing package chennai",
    "10 year structural warranty package chennai",
    "quality home construction package chennai",
  ],
  alternates: { canonical: "/quality-checked-structure-package-chennai" },
  openGraph: {
    title: "Quality Checked Structure Package in Chennai | Lokra Infra",
    description:
      "Lokra's ₹2,099 / sq.ft. quality-checked structure package for Chennai projects that need stronger records, testing, and warranty confidence.",
    url: "https://www.lokrainfra.in/quality-checked-structure-package-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is Lokra's quality-checked structure package in Chennai?",
    a: "The quality-checked step in the current package ladder is LS-3 at ₹2,099 / sq.ft. It is called the Quality-Checked Structure Package and adds lab-tested concrete quality checks and stronger project records.",
  },
  {
    q: "What does LS-3 add beyond the ₹1,999 waterproofing package?",
    a: "LS-3 adds concrete cube testing at important stages with lab certificates, stage records, fortnightly reporting with photos, and a 10-year structural warranty. It is for owners who want stronger evidence and tracking, not just waterproofing improvements.",
  },
  {
    q: "Who is LS-3 best for?",
    a: "LS-3 is best for owners who want stronger concrete checking and more documented construction records before moving into the higher engineering-record packages. It is a practical quality-confidence step.",
  },
  {
    q: "What physical scope improvements come with LS-3?",
    a: "The live package details include continuous lintel band to all walls, pre-construction anti-termite treatment, two-coat below-ground bituminous protection, teak main door allowance ₹38,000, AC point in bedrooms, flooring allowance ₹70 / sq.ft., and sanitaryware ₹23,000 per bathroom.",
  },
  {
    q: "When should I move beyond LS-3?",
    a: "Move beyond LS-3 when you need longer warranty, retention-backed after-handover support, ready-mix plant records, or full engineering files and soil reports. LS-3 is the first stronger quality-confidence package, not the end of the ladder.",
  },
];

export default function QualityCheckedStructurePackageChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/quality-checked-structure-package-chennai"
      eyebrow="Quality-Checked Package Guide"
      title="Quality Checked Structure Package in Chennai"
      intro="This page is for owners who want stronger construction quality confidence in Chennai without jumping immediately into the higher engineering-file packages. It is grounded in Lokra's real LS-3 package at ₹2,099 / sq.ft., which adds concrete cube testing, stage records, fortnightly photo reporting, and a 10-year structural warranty."
      serviceName="Quality Checked Structure Package in Chennai"
      serviceDescription="Quality-checked structure package guidance in Chennai using Lokra's real LS-3 package at ₹2,099 / sq.ft."
      summaryCards={[
        { title: "₹2,099 Quality Step", desc: "LS-3 is the first stronger quality-confidence tier in the public package ladder." },
        { title: "10-Year Warranty", desc: "This package lifts the structural warranty to 10 years while adding stronger checking and documentation." },
        { title: "Testing + Records", desc: "Designed for owners who want concrete cube testing, lab certificates, stage records, and visible reporting discipline." },
      ]}
      sections={[
        { title: "What The ₹2,099 Package Actually Is", body: "LS-3 is the Quality-Checked Structure Package in Lokra's current ladder. It is described as the package that includes lab-tested concrete quality checks and proper records, making it a meaningful step above the waterproofing-focused LS-2 tier.", bullets: ["₹2,099 / sq.ft.", "10-year warranty", "Fortnightly reporting with photos", "Same as LS-2 plus stage records", "Quality-confidence tier"] },
        { title: "What Quality-Check Upgrades You Get", body: "The main reason to choose LS-3 is stronger evidence. The live package details explicitly include concrete cube testing at important stages with lab certificates, which helps the owner move from assumption-based trust to documented checking.", bullets: ["Concrete cube testing", "Lab certificates", "Stage records", "Fortnightly photo reporting", "Stronger quality visibility"] },
        { title: "What Physical Scope Improvements Also Come In", body: "LS-3 also includes several practical upgrades beyond the reporting and testing layer. These details matter because they show the package is not only about paperwork — it also improves physical site and finish scope.", bullets: ["Continuous lintel band to all walls", "Pre-construction anti-termite treatment", "Two-coat below-ground bituminous protection", "Teak main door allowance ₹38,000", "AC point in bedrooms", "Flooring allowance ₹70 / sq.ft.", "Sanitaryware ₹23,000 per bathroom"] },
        { title: "When LS-3 Is The Right Decision", body: "LS-3 is the right step when the owner wants stronger checking, better records, and more quality confidence than LS-2 provides, but does not yet need the longer-warranty and full engineering-file packages higher up the ladder.", links: [
          { href: "/waterproofing-construction-package-chennai", label: "Waterproofing Construction Package Chennai" },
          { href: "/affordable-construction-packages-chennai", label: "Affordable Construction Packages Chennai" },
          { href: "/packages", label: "Compare The Full Package Ladder" },
          { href: "/contact", label: "Discuss The Right Package Step" },
        ] },
        { title: "When To Move Beyond LS-3", body: "If you need longer warranty, retention-backed after-handover support, ready-mix concrete plant records, or full engineering and soil-file handover, then the higher package levels become more suitable than LS-3.", links: [
          { href: "/process", label: "See The Delivery Process" },
          { href: "/services", label: "Review All Services" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Quality-Control Expectations And We'll Help You Decide Whether LS-3 Is The Right Structure Package Step."
    />
  );
}
