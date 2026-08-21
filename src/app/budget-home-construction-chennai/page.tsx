import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Budget Home Construction in Chennai | Lokra Infra",
  description:
    "Plan budget home construction in Chennai with Lokra Infra using real package guidance from ₹1,899 / sq.ft. upward, including waterproofing, reporting, quality checks, and first-time-builder fit.",
  keywords: [
    "budget home construction chennai",
    "affordable home construction chennai",
    "low cost home construction chennai",
    "home construction cost package chennai",
    "budget house construction chennai",
    "first time builder package chennai",
  ],
  alternates: { canonical: "/budget-home-construction-chennai" },
  openGraph: {
    title: "Budget Home Construction in Chennai | Lokra Infra",
    description:
      "Budget home-construction planning in Chennai using Lokra's real package ladder from ₹1,899 / sq.ft. upward.",
    url: "https://www.lokrainfra.in/budget-home-construction-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What is the best Lokra package for budget home construction in Chennai?",
    a: "For many first-time builders on firm inland plots, LS-1 at ₹1,899 / sq.ft. is the most practical starting point because it is specifically positioned as the economical package with branded materials and proper structural design. But the right choice still depends on site and protection needs.",
  },
  {
    q: "When should a home-construction project move from ₹1,899 to ₹1,999?",
    a: "Move to ₹1,999 when terrace, external-wall, and below-ground moisture control matter more. LS-2 is designed as the waterproofing-focused upgrade for inland plots where moisture protection is the key next priority.",
  },
  {
    q: "When is ₹2,099 better for budget home construction?",
    a: "₹2,099 becomes better when the owner wants stronger quality verification and project records. LS-3 adds concrete cube testing, stage records, fortnightly photos, and a 10-year structural warranty.",
  },
  {
    q: "Can affordable home construction still include branded materials?",
    a: "Yes. The live package ladder already frames LS-1 as budget-friendly while still using branded materials and proper structural design. Affordable does not have to mean unstructured or poor-quality work.",
  },
  {
    q: "What should I compare before choosing a budget home-construction package?",
    a: "Compare site condition, waterproofing needs, structural quality checks, reporting expectations, flooring allowances, sanitaryware allowances, and warranty terms. Budget should be matched to project risk and expectations, not just a headline price.",
  },
];

export default function BudgetHomeConstructionChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/budget-home-construction-chennai"
      eyebrow="Budget Home Build Planning"
      title="Budget Home Construction in Chennai"
      intro="This page is for owners who want budget home-construction guidance in Chennai without fake low-cost promises. It uses Lokra's real package ladder from ₹1,899 / sq.ft. upward and explains how first-time-builder fit, waterproofing, reporting, quality checks, and allowances change as you move from LS-1 to LS-3."
      serviceName="Budget Home Construction in Chennai"
      serviceDescription="Budget home-construction planning in Chennai grounded in Lokra's real package ladder from ₹1,899 / sq.ft. upward."
      summaryCards={[
        { title: "Best Starting Fit", desc: "LS-1 at ₹1,899 / sq.ft. is the most economical starting point for firm inland plots and first-time builders who still want engineering discipline." },
        { title: "Best Moisture Upgrade", desc: "LS-2 at ₹1,999 / sq.ft. is the better budget choice when waterproofing and moisture control need more attention." },
        { title: "Best Evidence Upgrade", desc: "LS-3 at ₹2,099 / sq.ft. is the stronger option when you want quality checks, stage records, and better reporting discipline." },
      ]}
      sections={[
        { title: "Why LS-1 Fits Many Budget Home Builds", body: "LS-1 is explicitly described as the budget-friendly package with branded materials and proper structural design. It is best for firm inland plots and first-time builders who want a real structured starting point instead of vague low-cost promises.", bullets: ["₹1,899 / sq.ft.", "First-time builder fit", "Firm inland plots", "2-year warranty", "Available-on-request reporting"] },
        { title: "Why Some Budget Builds Should Start At LS-2", body: "LS-2 is often the smarter affordable home-construction choice when water-related risk matters more. It adds below-ground bituminous protection, terrace waterproofing, and stronger moisture control layers that can justify the jump from LS-1.", bullets: ["₹1,999 / sq.ft.", "5-year warranty", "Below-ground protection", "Terrace waterproofing", "External wall moisture-control upgrade"] },
        { title: "Why LS-3 Helps Owners Who Want More Confidence", body: "LS-3 is the stronger budget-to-mid step when the owner wants more evidence and structured checking. It adds lab-tested concrete cube checks, stage records, fortnightly reporting with photos, and a 10-year structural warranty.", bullets: ["₹2,099 / sq.ft.", "10-year warranty", "Fortnightly photo reporting", "Concrete cube testing", "Stage records"] },
        { title: "Budget Does Not Mean Guesswork", body: "Budget home construction should still be matched to site condition, moisture risk, finish expectation, and reporting needs. The goal is not to force every owner into the cheapest visible package, but to identify the lowest package that still fits the project responsibly.", links: [
          { href: "/packages", label: "Compare The Full Package Ladder" },
          { href: "/affordable-construction-packages-chennai", label: "Affordable Construction Packages Chennai" },
          { href: "/home-construction-chennai", label: "Home Construction Chennai" },
          { href: "/contact", label: "Discuss A Budget Home Build" },
        ] },
        { title: "Use The Right Next Pages", body: "Once your budget direction is clearer, use the main packages and home-construction pages to compare allowances, reporting, warranties, and site-fit in more detail before choosing a path.", links: [
          { href: "/services", label: "Review All Services" },
          { href: "/process", label: "See The Delivery Process" },
        ] },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Plot And Budget Direction And We'll Help You Match It To The Right Home-Construction Package Step."
    />
  );
}
