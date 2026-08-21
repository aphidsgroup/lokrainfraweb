import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in R.A. Puram, Chennai | Lokra Infra",
  description: "Lokra Infra supports R.A. Puram construction planning for homes, villas, and premium residential projects with clearer pricing, branded materials, and stronger execution discipline.",
  keywords: ["builders in r.a. puram chennai", "home construction r.a. puram chennai", "building contractors r.a. puram chennai", "affordable builders r.a. puram chennai", "budget construction company r.a. puram chennai", "low cost construction company r.a. puram chennai"],
  alternates: { canonical: "/builders-in-ra-puram-chennai" },
  openGraph: {
    title: "Builders in R.A. Puram, Chennai | Lokra Infra",
    description: "Lokra Infra supports R.A. Puram construction planning for homes, villas, and premium residential projects with clearer pricing, branded materials, and stronger execution discipline.",
    url: "https://www.lokrainfra.in/builders-in-ra-puram-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [{"q": "Can Lokra support construction planning in R.A. Puram?", "a": "Yes. Lokra can discuss home-construction, builder-comparison, and price-led planning in R.A. Puram, using the real public pricing from ₹1,899 / sq.ft. upward and matching it to site and scope fit rather than fake cheapest claims."}, {"q": "Is R.A. Puram better for affordable or premium comparisons?", "a": "R.A. Puram usually fits better with premium and higher-expectation residential comparisons than generic cheapest-language pages."}, {"q": "How should I compare builders in R.A. Puram safely?", "a": "Compare waterproofing needs, quality-check expectations, reporting depth, branded material scope, and whether the builder can actually support the project type in R.A. Puram. Lowest price alone is not enough."}, {"q": "Can I still compare ₹1,899, ₹1,999, and ₹2,099 options for R.A. Puram?", "a": "Yes. Those public price points are useful starting steps for R.A. Puram, but the right one depends on site condition, moisture risk, finish expectation, and how much quality-check and reporting support you want."}, {"q": "What should I share before discussing a R.A. Puram project?", "a": "Share the exact site location, project type, and budget direction. That helps identify the right home-construction, builder, and price-step path for R.A. Puram more quickly."}];
const summaryCards = [{"title": "Premium Locality Fit", "desc": "R.A. Puram works best with home, villa, and higher-expectation residential framing rather than generic contractor-only language."}, {"title": "Price-Step Clarity", "desc": "Useful for buyers who want to compare ₹1,899, ₹1,999, and ₹2,099 starting steps without turning the page into fake cheapest messaging."}, {"title": "Execution Discipline", "desc": "A stronger fit for buyers who care about finish expectations, reporting clarity, and long-term build confidence."}];
const sections = [{"title": "Why R.A. Puram Needs Better Locality Framing", "body": "R.A. Puram is better handled as a premium and established Chennai locality rather than a generic builder page. Buyers here usually compare finish level, planning discipline, and price-step fit more closely than broad lowest-price language.", "bullets": ["Home construction", "Villa fit", "Premium residential context", "Price-step clarity"]}, {"title": "Use Price Tiers, Not Cheapest Claims", "body": "The right way to speak about affordability in R.A. Puram is through the real public price ladder: ₹1,899 / sq.ft., ₹1,999 / sq.ft., and ₹2,099 / sq.ft. The better question is which step fits the project expectation, waterproofing need, and quality-check requirement.", "bullets": ["₹1,899 starting step", "₹1,999 waterproofing-focused step", "₹2,099 quality-focused step", "Price-fit over cheapest claims"]}, {"title": "What R.A. Puram Buyers Usually Need Clarified", "body": "The first useful split is whether the requirement is an independent home, villa-led planning, or a higher-expectation residential build. That shapes the right builder comparison more accurately than generic low-cost phrasing alone.", "bullets": ["Independent home", "Villa planning", "Finish expectations", "Scope and reporting clarity"]}, {"title": "Use The Right Chennai Pages Next", "body": "Once the project type is clearer, use the stronger city-wide pages to compare scope, price-step path, and execution expectations more directly.", "links": [{"href": "/home-construction-chennai", "label": "Home Construction Chennai"}, {"href": "/villa-construction-chennai", "label": "Villa Construction Chennai"}, {"href": "/affordable-construction-packages-chennai", "label": "Affordable Construction Cost Chennai"}, {"href": "/contact", "label": "Discuss A R.A. Puram Requirement"}]}, {"title": "Start With A Better R.A. Puram Brief", "body": "Bring the exact site location, the project type, and your budget direction into the first discussion so the right price step and service route can be identified early.", "links": [{"href": "/services", "label": "Review All Services"}, {"href": "/process", "label": "See The Delivery Process"}]}];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-ra-puram-chennai"
      eyebrow="R.A. Puram Area Build Planning"
      title="Builders in R.A. Puram, Chennai"
      intro="R.A. Puram is one of the stronger premium and established Chennai localities in this rollout. This page is built for buyers comparing home-construction, villa, and higher-expectation residential work with price-led clarity, branded material scope, and stronger execution discipline — without turning the page into generic low-cost filler."
      serviceName="Builders in R.A. Puram, Chennai"
      serviceDescription="Lokra Infra supports R.A. Puram construction planning for homes, villas, and premium residential projects with clearer pricing, branded materials, and stronger execution discipline."
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Share The R.A. Puram Requirement And Budget Direction And We'll Help You Match It To The Right Chennai Build Path."
    />
  );
}
