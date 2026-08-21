import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Affordable Builders in Kandanchavadi, Chennai | Lokra Infra",
  description: "Lokra Infra supports Kandanchavadi construction planning for homes, builder comparison, and price-led project decisions with clearer scope, corridor-fit logic, and execution discipline.",
  keywords: ["builders in kandanchavadi chennai", "home construction kandanchavadi chennai", "building contractors kandanchavadi chennai", "affordable builders kandanchavadi chennai", "budget construction company kandanchavadi chennai", "low cost construction company kandanchavadi chennai"],
  alternates: { canonical: "/builders-in-kandanchavadi-chennai" },
  openGraph: {
    title: "Affordable Builders in Kandanchavadi, Chennai | Lokra Infra",
    description: "Lokra Infra supports Kandanchavadi construction planning for homes, builder comparison, and price-led project decisions with clearer scope, corridor-fit logic, and execution discipline.",
    url: "https://www.lokrainfra.in/builders-in-kandanchavadi-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [{"q": "Can Lokra support construction planning in Kandanchavadi?", "a": "Yes. Lokra can discuss home-construction, builder-comparison, and price-led planning in Kandanchavadi, using the real public pricing from ₹1,899 / sq.ft. upward and matching it to site and scope fit rather than fake cheapest claims."}, {"q": "Is Kandanchavadi better for affordable or premium comparisons?", "a": "Kandanchavadi usually fits better with practical home-construction, builder, and price-led comparison wording than with fake premium or cheapest extremes."}, {"q": "How should I compare builders in Kandanchavadi safely?", "a": "Compare waterproofing needs, quality-check expectations, reporting depth, branded material scope, and whether the builder can actually support the project type in Kandanchavadi. Lowest price alone is not enough."}, {"q": "Can I still compare ₹1,899, ₹1,999, and ₹2,099 options for Kandanchavadi?", "a": "Yes. Those public price points are useful starting steps for Kandanchavadi, but the right one depends on site condition, moisture risk, finish expectation, and how much quality-check and reporting support you want."}, {"q": "What should I share before discussing a Kandanchavadi project?", "a": "Share the exact site location, project type, and budget direction. That helps identify the right home-construction, builder, and price-step path for Kandanchavadi more quickly."}];
const summaryCards = [{"title": "Corridor / Coastal Fit", "desc": "Kandanchavadi works better with corridor-style home and builder comparison framing than with generic locality filler."}, {"title": "Affordable Price Logic", "desc": "Useful for buyers comparing ₹1,899, ₹1,999, and ₹2,099 starting steps while staying grounded in real site-fit decisions."}, {"title": "Broader Service Relevance", "desc": "A stronger fit for home, builder, and practical execution comparisons than a one-angle locality page."}];
const sections = [{"title": "Why Kandanchavadi Works As A Strong South / Corridor Area", "body": "Kandanchavadi supports practical home-construction and builder-comparison demand with stronger corridor relevance than a thin micro-page. That makes it a useful rollout surface for price-led and scope-led buyer searches.", "bullets": ["Home construction fit", "Builder comparison", "Corridor relevance", "Affordable search intent"]}, {"title": "Use Affordable Language Truthfully", "body": "The safe way to target affordable and low-cost searches is to stay grounded in the real public price ladder. That means comparing ₹1,899, ₹1,999, and ₹2,099 by site-fit, waterproofing, and quality-check needs instead of pretending one lowest number fits every project.", "bullets": ["₹1,899 starting step", "₹1,999 waterproofing-focused step", "₹2,099 quality-focused step", "No fake cheapest claims"]}, {"title": "What Kandanchavadi Buyers Usually Need Clarified", "body": "Most buyers here still need one early routing decision: is the requirement a straightforward home build, a builder comparison, or a more demanding site where waterproofing and reporting matter more?", "bullets": ["Home build", "Builder comparison", "Waterproofing needs", "Budget + scope fit"]}, {"title": "Use The Right Chennai Pages Next", "body": "This area page should lead the buyer into the stronger city-wide and affordability pages once the requirement is clearer.", "links": [{"href": "/home-construction-chennai", "label": "Home Construction Chennai"}, {"href": "/building-contractors-chennai", "label": "Building Contractors Chennai"}, {"href": "/budget-home-construction-chennai", "label": "Budget Home Construction Chennai"}, {"href": "/contact", "label": "Discuss A Kandanchavadi Requirement"}]}, {"title": "Start With A Better Kandanchavadi Brief", "body": "Bring the exact site location, project type, and budget direction into the first discussion so the right price step and service route can be identified early.", "links": [{"href": "/services", "label": "Review All Services"}, {"href": "/process", "label": "See The Delivery Process"}]}];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-kandanchavadi-chennai"
      eyebrow="Kandanchavadi Area Build Planning"
      title="Affordable Builders in Kandanchavadi, Chennai"
      intro="Kandanchavadi is part of the stronger south/corridor demand layer in this rollout. This page is built for buyers comparing home-construction, builder, and affordable pricing paths with better scope clarity, corridor-fit logic, and execution discipline — while still grounding affordability in the real public price ladder starting from ₹1,899 / sq.ft."
      serviceName="Affordable Builders in Kandanchavadi, Chennai"
      serviceDescription="Lokra Infra supports Kandanchavadi construction planning for homes, builder comparison, and price-led project decisions with clearer scope, corridor-fit logic, and execution discipline."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to a Kandanchavadi-area builder." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your Kandanchavadi project." },
        { href: "/services", label: "Browse By Service Type", desc: "Move straight into home-construction or builder-comparison service pages if you already know the scope." },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share The Kandanchavadi Requirement And Budget Direction And We'll Help You Match It To The Right Chennai Build Path."
    />
  );
}
