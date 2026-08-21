import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Anna Nagar, Chennai | Lokra Infra",
  description: "Lokra Infra supports Anna Nagar construction planning for homes, villas, and premium residential projects with clearer pricing, branded materials, and stronger execution discipline.",
  keywords: ["builders in anna nagar chennai", "home construction anna nagar chennai", "building contractors anna nagar chennai", "affordable builders anna nagar chennai", "budget construction company anna nagar chennai", "low cost construction company anna nagar chennai"],
  alternates: { canonical: "/builders-in-anna-nagar-chennai" },
  openGraph: {
    title: "Builders in Anna Nagar, Chennai | Lokra Infra",
    description: "Lokra Infra supports Anna Nagar construction planning for homes, villas, and premium residential projects with clearer pricing, branded materials, and stronger execution discipline.",
    url: "https://www.lokrainfra.in/builders-in-anna-nagar-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [{"q": "Can Lokra support construction planning in Anna Nagar?", "a": "Yes. Lokra can discuss home-construction, builder-comparison, and price-led planning in Anna Nagar, using the real public pricing from ₹1,899 / sq.ft. upward and matching it to site and scope fit rather than fake cheapest claims."}, {"q": "Is Anna Nagar better for affordable or premium comparisons?", "a": "Anna Nagar usually fits better with premium and higher-expectation residential comparisons than generic cheapest-language pages."}, {"q": "How should I compare builders in Anna Nagar safely?", "a": "Compare waterproofing needs, quality-check expectations, reporting depth, branded material scope, and whether the builder can actually support the project type in Anna Nagar. Lowest price alone is not enough."}, {"q": "Can I still compare ₹1,899, ₹1,999, and ₹2,099 options for Anna Nagar?", "a": "Yes. Those public price points are useful starting steps for Anna Nagar, but the right one depends on site condition, moisture risk, finish expectation, and how much quality-check and reporting support you want."}, {"q": "What should I share before discussing a Anna Nagar project?", "a": "Share the exact site location, project type, and budget direction. That helps identify the right home-construction, builder, and price-step path for Anna Nagar more quickly."}];
const summaryCards = [{"title": "Premium Family-Residential Fit", "desc": "Anna Nagar works best with home, villa, and higher-expectation family-residential framing rather than generic contractor-only language."}, {"title": "Price-Step Clarity", "desc": "Useful for buyers who want to compare ₹1,899, ₹1,999, and ₹2,099 starting steps without turning the page into fake cheapest messaging."}, {"title": "Execution Discipline", "desc": "A stronger fit for buyers who care about finish expectations, reporting clarity, and long-term build confidence in a mature residential zone."}];
const sections = [{"title": "Why Anna Nagar Needs Better Locality Framing", "body": "Anna Nagar is better handled as a premium and established Chennai locality rather than a generic builder page. Buyers here usually compare finish level, planning discipline, family-residential suitability, and price-step fit more closely than broad lowest-price language.", "bullets": ["Home construction", "Villa fit", "Premium residential context", "Price-step clarity"]}, {"title": "Use Price Tiers, Not Cheapest Claims", "body": "The right way to speak about affordability in Anna Nagar is through the real public price ladder: ₹1,899 / sq.ft., ₹1,999 / sq.ft., and ₹2,099 / sq.ft. The better question is which step fits the project expectation, waterproofing need, and quality-check requirement.", "bullets": ["₹1,899 starting step", "₹1,999 waterproofing-focused step", "₹2,099 quality-focused step", "Price-fit over cheapest claims"]}, {"title": "What Anna Nagar Buyers Usually Need Clarified", "body": "The first useful split is whether the requirement is an independent home, villa-led planning, redevelopment-style residential work, or a higher-expectation family build. That shapes the right builder comparison more accurately than generic low-cost phrasing alone.", "bullets": ["Independent home", "Villa planning", "Family-residential fit", "Scope and reporting clarity"]}, {"title": "Use The Right Chennai Pages Next", "body": "Once the project type is clearer, use the stronger city-wide pages to compare scope, price-step path, and execution expectations more directly.", "links": [{"href": "/home-construction-chennai", "label": "Home Construction Chennai"}, {"href": "/villa-construction-chennai", "label": "Villa Construction Chennai"}, {"href": "/builders-in-t-nagar-chennai", "label": "Builders in T. Nagar, Chennai"}, {"href": "/builders-in-nungambakkam-chennai", "label": "Builders in Nungambakkam, Chennai"}, {"href": "/affordable-construction-packages-chennai", "label": "Affordable Construction Cost Chennai"}, {"href": "/contact", "label": "Discuss An Anna Nagar Requirement"}]}, {"title": "Start With A Better Anna Nagar Brief", "body": "Bring the exact site location, the project type, and your budget direction into the first discussion so the right price step and service route can be identified early.", "links": [{"href": "/services", "label": "Review All Services"}, {"href": "/process", "label": "See The Delivery Process"}, {"href": "/chennai-areas", "label": "Explore All Chennai Areas"}]}];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-anna-nagar-chennai"
      eyebrow="Anna Nagar Area Build Planning"
      title="Builders in Anna Nagar, Chennai"
      intro="Anna Nagar is one of the stronger premium and established Chennai localities in this rollout. This page is built for buyers comparing home-construction, villa, and higher-expectation residential work with price-led clarity, branded material scope, and stronger execution discipline — without turning the page into generic low-cost filler."
      serviceName="Builders in Anna Nagar, Chennai"
      serviceDescription="Lokra Infra supports Anna Nagar construction planning for homes, villas, and premium residential projects with clearer pricing, branded materials, and stronger execution discipline."
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share The Anna Nagar Requirement And Budget Direction And We'll Help You Match It To The Right Chennai Build Path."
    />
  );
}
