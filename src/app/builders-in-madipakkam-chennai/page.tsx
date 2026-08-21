import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Madipakkam, Chennai | Lokra Infra",
  description: "Lokra Infra supports Madipakkam construction planning for homes, builders, and pricing-led project decisions with clearer scope and execution framing.",
  keywords: ["builders in madipakkam chennai", "home construction madipakkam chennai", "building contractors madipakkam chennai", "affordable builders madipakkam chennai", "budget construction company madipakkam chennai", "low cost construction company madipakkam chennai"],
  alternates: { canonical: "/builders-in-madipakkam-chennai" },
  openGraph: {
    title: "Builders in Madipakkam, Chennai | Lokra Infra",
    description: "Lokra Infra supports Madipakkam construction planning for homes, builders, and pricing-led project decisions with clearer scope and execution framing.",
    url: "https://www.lokrainfra.in/builders-in-madipakkam-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [{"q": "Can Lokra support construction planning in Madipakkam?", "a": "Yes. Lokra can discuss home-construction, builder-comparison, and price-led planning in Madipakkam, using the real public pricing from ₹1,899 / sq.ft. upward and matching it to site and scope fit rather than fake cheapest claims."}, {"q": "Is Madipakkam better for affordable or premium comparisons?", "a": "Madipakkam usually fits better with practical home-construction, builder, and price-led comparison wording than with fake premium or cheapest extremes."}, {"q": "How should I compare builders in Madipakkam safely?", "a": "Compare waterproofing needs, quality-check expectations, reporting depth, branded material scope, and whether the builder can actually support the project type in Madipakkam. Lowest price alone is not enough."}, {"q": "Can I still compare ₹1,899, ₹1,999, and ₹2,099 options for Madipakkam?", "a": "Yes. Those public price points are useful starting steps for Madipakkam, but the right one depends on site condition, moisture risk, finish expectation, and how much quality-check and reporting support you want."}, {"q": "What should I share before discussing a Madipakkam project?", "a": "Share the exact site location, project type, and budget direction. That helps identify the right home-construction, builder, and price-step path for Madipakkam more quickly."}];
const summaryCards = [{"title": "Practical Builder Fit", "desc": "Madipakkam works best with practical home-construction and builder-comparison framing rather than premium-only language."}, {"title": "Affordable Price Logic", "desc": "Useful for buyers comparing budget direction and public price steps without fake cheapest claims."}, {"title": "Scope Clarity First", "desc": "Helps buyers compare real site-fit, protection, and execution needs before choosing only on headline price."}];
const sections = [{"title": "Why Madipakkam Works For Practical Builder Searches", "body": "Madipakkam is better handled as a practical home-construction and builder-comparison area rather than a premium-only page. That keeps the route aligned with realistic service fit and price-led search intent.", "bullets": ["Practical home-construction fit", "Builder comparison", "Budget-conscious relevance", "Price-step clarity"]}, {"title": "Use Price Steps The Right Way", "body": "The safe way to speak about affordable or low-cost construction is through the real public price ladder. Compare ₹1,899, ₹1,999, and ₹2,099 by waterproofing need, quality checks, reporting, and project-fit instead of reducing everything to one cheapest claim.", "bullets": ["₹1,899 starting step", "₹1,999 waterproofing-focused step", "₹2,099 quality-focused step", "Project-fit over cheapest claims"]}, {"title": "What Madipakkam Buyers Usually Need Clarified", "body": "The first useful split is whether the requirement is a straightforward new home build, a builder comparison, or another practical construction need. That shapes the right page path more accurately than generic city wording.", "bullets": ["Home construction", "Builder comparison", "Budget fit", "Scope clarity"]}, {"title": "Use The Right Chennai Pages Next", "body": "This area page should lead into the stronger city-wide and price-led support pages that go deeper on home-construction, builder comparison, and affordability.", "links": [{"href": "/home-construction-chennai", "label": "Home Construction Chennai"}, {"href": "/building-contractors-chennai", "label": "Building Contractors Chennai"}, {"href": "/affordable-construction-packages-chennai", "label": "Affordable Construction Cost Chennai"}, {"href": "/contact", "label": "Discuss A Madipakkam Requirement"}]}, {"title": "Start With A Better Madipakkam Brief", "body": "Bring the exact site location, project type, and budget direction into the first discussion so the right price step and service route can be identified early.", "links": [{"href": "/services", "label": "Review All Services"}, {"href": "/process", "label": "See The Delivery Process"}]}];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-madipakkam-chennai"
      eyebrow="Madipakkam Area Build Planning"
      title="Builders in Madipakkam, Chennai"
      intro="Madipakkam is part of Lokra's Chennai area rollout for buyers comparing home-construction, builder, and price-led project decisions with clearer scope, price-fit, and execution framing."
      serviceName="Builders in Madipakkam, Chennai"
      serviceDescription="Lokra Infra supports Madipakkam construction planning for homes, builders, and pricing-led project decisions with clearer scope and execution framing."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to a Madipakkam-area builder." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your Madipakkam project." },
        { href: "/services", label: "Browse By Service Type", desc: "Move straight into home-construction or builder-comparison service pages if you already know the scope." },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share The Madipakkam Requirement And Budget Direction And We'll Help You Match It To The Right Chennai Build Path."
    />
  );
}
