import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Builders in Vandalur, Chennai | Lokra Infra",
  description: "Lokra Infra supports Vandalur construction planning for homes, builder comparison, and budget-conscious project decisions with clearer scope, pricing, and execution framing.",
  keywords: ["builders in vandalur chennai", "home construction vandalur chennai", "building contractors vandalur chennai", "affordable builders vandalur chennai", "budget construction company vandalur chennai", "low cost construction company vandalur chennai"],
  alternates: { canonical: "/builders-in-vandalur-chennai" },
  openGraph: {
    title: "Affordable Builders in Vandalur, Chennai | Lokra Infra",
    description: "Lokra Infra supports Vandalur construction planning for homes, builder comparison, and budget-conscious project decisions with clearer scope, pricing, and execution framing.",
    url: "https://www.lokrainfra.in/builders-in-vandalur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [{"q": "Can Lokra support construction planning in Vandalur?", "a": "Yes. Lokra can discuss home-construction, builder-comparison, and price-led planning in Vandalur, using the real public pricing from ₹1,899 / sq.ft. upward and matching it to site and scope fit rather than fake cheapest claims."}, {"q": "Is Vandalur better for affordable or premium comparisons?", "a": "Vandalur usually fits better with practical home-construction, builder, and price-led comparison wording than with fake premium or cheapest extremes."}, {"q": "How should I compare builders in Vandalur safely?", "a": "Compare waterproofing needs, quality-check expectations, reporting depth, branded material scope, and whether the builder can actually support the project type in Vandalur. Lowest price alone is not enough."}, {"q": "Can I still compare ₹1,899, ₹1,999, and ₹2,099 options for Vandalur?", "a": "Yes. Those public price points are useful starting steps for Vandalur, but the right one depends on site condition, moisture risk, finish expectation, and how much quality-check and reporting support you want."}, {"q": "What should I share before discussing a Vandalur project?", "a": "Share the exact site location, project type, and budget direction. That helps identify the right home-construction, builder, and price-step path for Vandalur more quickly."}];
const summaryCards = [{"title": "Practical Builder Fit", "desc": "Vandalur works best with practical home-construction and builder-comparison framing rather than premium-only language."}, {"title": "Affordable Price Logic", "desc": "Useful for buyers comparing budget direction and public price steps without fake cheapest claims."}, {"title": "Scope Clarity First", "desc": "Helps buyers compare real site-fit, protection, and execution needs before choosing only on headline price."}];
const sections = [{"title": "Why Vandalur Works For Practical Builder Searches", "body": "Vandalur is better handled as a practical home-construction and builder-comparison area rather than a premium-only page. That keeps the route aligned with realistic service fit and price-led search intent.", "bullets": ["Practical home-construction fit", "Builder comparison", "Budget-conscious relevance", "Price-step clarity"]}, {"title": "Use Price Steps The Right Way", "body": "The safe way to speak about affordable or low-cost construction is through the real public price ladder. Compare ₹1,899, ₹1,999, and ₹2,099 by waterproofing need, quality checks, reporting, and project-fit instead of reducing everything to one cheapest claim.", "bullets": ["₹1,899 starting step", "₹1,999 waterproofing-focused step", "₹2,099 quality-focused step", "Project-fit over cheapest claims"]}, {"title": "What Vandalur Buyers Usually Need Clarified", "body": "The first useful split is whether the requirement is a straightforward new home build, a builder comparison, or another practical construction need. That shapes the right page path more accurately than generic city wording.", "bullets": ["Home construction", "Builder comparison", "Budget fit", "Scope clarity"]}, {"title": "Use The Right Chennai Pages Next", "body": "This area page should lead into the stronger city-wide and price-led support pages that go deeper on home-construction, builder comparison, and affordability.", "links": [{"href": "/home-construction-chennai", "label": "Home Construction Chennai"}, {"href": "/building-contractors-chennai", "label": "Building Contractors Chennai"}, {"href": "/affordable-construction-packages-chennai", "label": "Affordable Construction Cost Chennai"}, {"href": "/contact", "label": "Discuss A Vandalur Requirement"}]}, {"title": "Start With A Better Vandalur Brief", "body": "Bring the exact site location, project type, and budget direction into the first discussion so the right price step and service route can be identified early.", "links": [{"href": "/services", "label": "Review All Services"}, {"href": "/process", "label": "See The Delivery Process"}]}];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-vandalur-chennai"
      eyebrow="Vandalur Area Build Planning"
      title="Affordable Builders in Vandalur, Chennai"
      intro="Vandalur is treated as a practical demand area in this rollout. This page is built for buyers comparing budget home-construction, builder, and affordable price-led options with clearer scope, branded material logic, and execution discipline — without fake cheapest claims."
      serviceName="Affordable Builders in Vandalur, Chennai"
      serviceDescription="Lokra Infra supports Vandalur construction planning for homes, builder comparison, and budget-conscious project decisions with clearer scope, pricing, and execution framing."
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share The Vandalur Requirement And Budget Direction And We'll Help You Match It To The Right Chennai Build Path."
    />
  );
}
