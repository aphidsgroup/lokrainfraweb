import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Builders in Perungalathur, Chennai | Lokra Infra",
  description: "Lokra Infra supports Perungalathur construction planning for homes, builder comparison, and budget-conscious project decisions with clearer scope, pricing, and execution framing.",
  keywords: ["builders in perungalathur chennai", "home construction perungalathur chennai", "building contractors perungalathur chennai", "affordable builders perungalathur chennai", "budget construction company perungalathur chennai", "low cost construction company perungalathur chennai"],
  alternates: { canonical: "/builders-in-perungalathur-chennai" },
  openGraph: {
    title: "Affordable Builders in Perungalathur, Chennai | Lokra Infra",
    description: "Lokra Infra supports Perungalathur construction planning for homes, builder comparison, and budget-conscious project decisions with clearer scope, pricing, and execution framing.",
    url: "https://www.lokrainfra.in/builders-in-perungalathur-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [{"q": "Can Lokra support construction planning in Perungalathur?", "a": "Yes. Lokra can discuss home-construction, builder-comparison, and price-led planning in Perungalathur, using the real public pricing from ₹1,899 / sq.ft. upward and matching it to site and scope fit rather than fake cheapest claims."}, {"q": "Is Perungalathur better for affordable or premium comparisons?", "a": "Perungalathur usually fits better with practical home-construction, builder, and price-led comparison wording than with fake premium or cheapest extremes."}, {"q": "How should I compare builders in Perungalathur safely?", "a": "Compare waterproofing needs, quality-check expectations, reporting depth, branded material scope, and whether the builder can actually support the project type in Perungalathur. Lowest price alone is not enough."}, {"q": "Can I still compare ₹1,899, ₹1,999, and ₹2,099 options for Perungalathur?", "a": "Yes. Those public price points are useful starting steps for Perungalathur, but the right one depends on site condition, moisture risk, finish expectation, and how much quality-check and reporting support you want."}, {"q": "What should I share before discussing a Perungalathur project?", "a": "Share the exact site location, project type, and budget direction. That helps identify the right home-construction, builder, and price-step path for Perungalathur more quickly."}];
const summaryCards = [{"title": "Practical Gateway Fit", "desc": "Perungalathur works best with practical home-construction and builder-comparison framing rather than premium-only language."}, {"title": "Affordable Price Logic", "desc": "Useful for buyers comparing budget direction and public price steps without fake cheapest claims."}, {"title": "Scope Clarity First", "desc": "Helps buyers compare real site-fit, protection, and execution needs before choosing only on headline price."}];
const sections = [{"title": "Why Perungalathur Works For Practical Builder Searches", "body": "Perungalathur is better handled as a practical gateway-area home-construction and builder-comparison page rather than a premium-only route. That keeps the page aligned with realistic service fit and price-led search intent.", "bullets": ["Practical home-construction fit", "Builder comparison", "Budget-conscious relevance", "Price-step clarity"]}, {"title": "Use Price Steps The Right Way", "body": "The safe way to speak about affordable or low-cost construction is through the real public price ladder. Compare ₹1,899, ₹1,999, and ₹2,099 by waterproofing need, quality checks, reporting, and project-fit instead of reducing everything to one cheapest claim.", "bullets": ["₹1,899 starting step", "₹1,999 waterproofing-focused step", "₹2,099 quality-focused step", "Project-fit over cheapest claims"]}, {"title": "What Perungalathur Buyers Usually Need Clarified", "body": "The first useful split is whether the requirement is a straightforward new home build, a builder comparison, or another practical construction need tied to this wider growth corridor. That shapes the right page path more accurately than generic city wording.", "bullets": ["Home construction", "Builder comparison", "Budget fit", "Scope clarity"]}, {"title": "Use The Right Chennai Pages Next", "body": "This area page should lead into the stronger city-wide and price-led support pages that go deeper on home-construction, builder comparison, and affordability.", "links": [{"href": "/home-construction-chennai", "label": "Home Construction Chennai"}, {"href": "/building-contractors-chennai", "label": "Building Contractors Chennai"}, {"href": "/builders-in-tambaram-chennai", "label": "Builders in Tambaram, Chennai"}, {"href": "/builders-in-vandalur-chennai", "label": "Builders in Vandalur, Chennai"}, {"href": "/affordable-construction-packages-chennai", "label": "Affordable Construction Cost Chennai"}, {"href": "/contact", "label": "Discuss A Perungalathur Requirement"}]}, {"title": "Start With A Better Perungalathur Brief", "body": "Bring the exact site location, project type, and budget direction into the first discussion so the right price step and service route can be identified early.", "links": [{"href": "/services", "label": "Review All Services"}, {"href": "/process", "label": "See The Delivery Process"}, {"href": "/chennai-areas", "label": "Explore All Chennai Areas"}]}];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-perungalathur-chennai"
      eyebrow="Perungalathur Area Build Planning"
      title="Affordable Builders in Perungalathur, Chennai"
      intro="Perungalathur is treated as a practical demand area in this rollout. This page is built for buyers comparing budget home-construction, builder, and affordable price-led options with clearer scope, branded material logic, and execution discipline — without fake cheapest claims."
      serviceName="Affordable Builders in Perungalathur, Chennai"
      serviceDescription="Lokra Infra supports Perungalathur construction planning for homes, builder comparison, and budget-conscious project decisions with clearer scope, pricing, and execution framing."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to a Perungalathur-area builder." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your Perungalathur project." },
        { href: "/services", label: "Browse By Service Type", desc: "Move straight into home-construction or builder-comparison service pages if you already know the scope." },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share The Perungalathur Requirement And Budget Direction And We'll Help You Match It To The Right Chennai Build Path."
    />
  );
}
