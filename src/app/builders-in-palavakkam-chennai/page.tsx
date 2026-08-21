import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Builders in Palavakkam, Chennai | Lokra Infra",
  description: "Lokra Infra supports Palavakkam construction planning for homes, builder comparison, and price-led project decisions with clearer scope, corridor-fit logic, and execution discipline.",
  keywords: ["builders in palavakkam chennai", "home construction palavakkam chennai", "building contractors palavakkam chennai", "affordable builders palavakkam chennai", "budget construction company palavakkam chennai", "low cost construction company palavakkam chennai"],
  alternates: { canonical: "/builders-in-palavakkam-chennai" },
  openGraph: {
    title: "Affordable Builders in Palavakkam, Chennai | Lokra Infra",
    description: "Lokra Infra supports Palavakkam construction planning for homes, builder comparison, and price-led project decisions with clearer scope, corridor-fit logic, and execution discipline.",
    url: "https://www.lokrainfra.in/builders-in-palavakkam-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [{"q": "Can Lokra support construction planning in Palavakkam?", "a": "Yes. Lokra can discuss home-construction, builder-comparison, and price-led planning in Palavakkam, using the real public pricing from ₹1,899 / sq.ft. upward and matching it to site and scope fit rather than fake cheapest claims."}, {"q": "Is Palavakkam better for affordable or premium comparisons?", "a": "Palavakkam usually fits better with practical home-construction, builder, and price-led comparison wording than with fake premium or cheapest extremes."}, {"q": "How should I compare builders in Palavakkam safely?", "a": "Compare waterproofing needs, quality-check expectations, reporting depth, branded material scope, and whether the builder can actually support the project type in Palavakkam. Lowest price alone is not enough."}, {"q": "Can I still compare ₹1,899, ₹1,999, and ₹2,099 options for Palavakkam?", "a": "Yes. Those public price points are useful starting steps for Palavakkam, but the right one depends on site condition, moisture risk, finish expectation, and how much quality-check and reporting support you want."}, {"q": "What should I share before discussing a Palavakkam project?", "a": "Share the exact site location, project type, and budget direction. That helps identify the right home-construction, builder, and price-step path for Palavakkam more quickly."}];
const summaryCards = [{"title": "Corridor / Coastal Fit", "desc": "Palavakkam works better with corridor-style home and builder comparison framing than with generic locality filler."}, {"title": "Affordable Price Logic", "desc": "Useful for buyers comparing ₹1,899, ₹1,999, and ₹2,099 starting steps while staying grounded in real site-fit decisions."}, {"title": "Broader Service Relevance", "desc": "A stronger fit for home, builder, and practical execution comparisons than a one-angle locality page."}];
const sections = [{"title": "Why Palavakkam Works As A Strong South / Corridor Area", "body": "Palavakkam supports practical home-construction and builder-comparison demand with stronger corridor and coastal relevance than a thin micro-page. That makes it a useful rollout surface for price-led and scope-led buyer searches.", "bullets": ["Home construction fit", "Builder comparison", "Corridor relevance", "Affordable search intent"]}, {"title": "Use Affordable Language Truthfully", "body": "The safe way to target affordable and low-cost searches is to stay grounded in the real public price ladder. That means comparing ₹1,899, ₹1,999, and ₹2,099 by site-fit, waterproofing, and quality-check needs instead of pretending one lowest number fits every project.", "bullets": ["₹1,899 starting step", "₹1,999 waterproofing-focused step", "₹2,099 quality-focused step", "No fake cheapest claims"]}, {"title": "What Palavakkam Buyers Usually Need Clarified", "body": "Most buyers here still need one early routing decision: is the requirement a straightforward home build, a builder comparison, or a more demanding site where waterproofing, finish expectation, and reporting matter more?", "bullets": ["Home build", "Builder comparison", "Waterproofing needs", "Budget + scope fit"]}, {"title": "Use The Right Chennai Pages Next", "body": "This area page should lead the buyer into the stronger city-wide and affordability pages once the requirement is clearer.", "links": [{"href": "/home-construction-chennai", "label": "Home Construction Chennai"}, {"href": "/building-contractors-chennai", "label": "Building Contractors Chennai"}, {"href": "/builders-in-thiruvanmiyur-chennai", "label": "Builders in Thiruvanmiyur, Chennai"}, {"href": "/builders-in-kottivakkam-chennai", "label": "Builders in Kottivakkam, Chennai"}, {"href": "/budget-home-construction-chennai", "label": "Budget Home Construction Chennai"}, {"href": "/contact", "label": "Discuss A Palavakkam Requirement"}]}, {"title": "Start With A Better Palavakkam Brief", "body": "Bring the exact site location, project type, and budget direction into the first discussion so the right price step and service route can be identified early.", "links": [{"href": "/services", "label": "Review All Services"}, {"href": "/process", "label": "See The Delivery Process"}, {"href": "/chennai-areas", "label": "Explore All Chennai Areas"}]}];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-palavakkam-chennai"
      eyebrow="Palavakkam Area Build Planning"
      title="Affordable Builders in Palavakkam, Chennai"
      intro="Palavakkam is part of the stronger south/corridor demand layer in this rollout. This page is built for buyers comparing home-construction, builder, and affordable pricing paths with better scope clarity, corridor-fit logic, and execution discipline — while still grounding affordability in the real public price ladder starting from ₹1,899 / sq.ft."
      serviceName="Affordable Builders in Palavakkam, Chennai"
      serviceDescription="Lokra Infra supports Palavakkam construction planning for homes, builder comparison, and price-led project decisions with clearer scope, corridor-fit logic, and execution discipline."
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share The Palavakkam Requirement And Budget Direction And We'll Help You Match It To The Right Chennai Build Path."
    />
  );
}
