import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Home Construction Company in Chennai | Lokra Infra",
  description:
    "Planning a home build in Chennai? Use Lokra Infra's published package scope and site-brief checklist to compare the work behind a construction quote.",
  keywords: [
    "home construction company chennai",
    "house construction company chennai",
    "home builders chennai",
    "residential construction company chennai",
    "independent house builders chennai",
    "villa home construction chennai",
  ],
  alternates: {
    canonical: "/home-construction-chennai",
  },
  openGraph: {
    title: "Home Construction Company in Chennai | Lokra Infra",
    description:
      "Engineering-led home construction in Chennai for independent homes, villas, and residential builds with clear scope and milestone visibility.",
    url: "https://www.lokrainfra.in/home-construction-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "How early should I speak to Lokra before starting home construction in Chennai?",
    a: "Ideally before the execution model, package direction, or build budget is fully locked. Early discussion helps align the site condition, scope, timeline, and cost direction before expensive assumptions set in.",
  },
  {
    q: "Can Lokra help if I already own a plot?",
    a: "Yes. Plot owners can start with site assessment, scope discussion, and planning direction before deciding how the construction package and execution path should be structured.",
  },
  {
    q: "How do I compare home construction packages before I choose one?",
    a: "Start with the published scope, not the rate alone. Lokra Infra lists nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. Compare the inclusions, allowances, waterproofing, quality checks, reporting, exclusions, and site-dependent work before treating a package as a project quote.",
  },
  {
    q: "Does Lokra handle villa-style residential construction in Chennai?",
    a: "Yes. Lokra can discuss independent homes, villas, and premium residential builds, especially where engineering discipline, clearer scope definition, and milestone visibility matter.",
  },
  {
    q: "How do project updates work during construction?",
    a: "The process is built around visible milestones, site coordination, and progress communication rather than leaving the owner to guess what is happening on site.",
  },
];

export default function HomeConstructionChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/home-construction-chennai"
      eyebrow="Residential Build Planning"
      title="Home Construction Company in Chennai"
      intro="A home-construction quote only becomes useful once it is tied to the plot and a written scope. Lokra Infra publishes residential package levels, but site conditions, drawings, finishes, allowances, and work outside the package still need to be discussed before a project total can be defined."
      serviceName="Home Construction Company in Chennai"
      serviceDescription="Engineering-led home construction in Chennai for independent houses, villas, and residential builds with clear scope, process visibility, and disciplined execution."
      discoveryPaths={[
        { href: "/projects/completed", label: "Browse Published Work", desc: "Review the completed-project page before you choose a construction partner." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to find the tier that fits your home build." },
        { href: "/chennai-areas", label: "Browse By Chennai Area", desc: "Find pricing-led builder pages grouped by Central, South, West, North, and outer Chennai zones." },
      ]}
      summaryCards={[
        {
          title: "Independent Homes",
          desc: "For owners building on their own plot who want clearer execution discipline before construction starts.",
        },
        {
          title: "Villa & Premium Builds",
          desc: "Useful when the project needs stronger coordination across structure, finishing, and quality expectations.",
        },
        {
          title: "Scope Before Spend",
          desc: "Best for clients who want site assessment, package direction, and milestone clarity before committing.",
        },
      ]}
      sections={[
        {
          title: "Start with a short site brief",
          body: "Bring the plot location, dimensions, intended use, likely floor count, available drawings, and a budget direction. Mention an existing structure, difficult access, a shared boundary, drainage concerns, or any report you already have. A builder can assess a real brief; a generic per-square-foot question leaves too much unstated.",
          bullets: [
            "Plot location, dimensions, and access",
            "Building use and likely floor count",
            "Drawings, photos, and existing conditions",
            "Budget direction and finish expectations",
          ],
        },
        {
          title: "What Lokra Can Handle In Home Construction",
          body: "Lokra's residential scope discussion can cover the work before the first pour as well as the execution path after scope is defined. That includes site assessment, structural-planning coordination, civil execution, finishing coordination, package comparison, and milestone-based communication during delivery.",
          bullets: [
            "Site assessment and scope review",
            "Residential civil execution",
            "Package and BoQ direction",
            "Milestone-based delivery planning",
          ],
        },
        {
          title: "Read a package as a scope document",
          body: "Lokra Infra publishes nine residential package levels from ₹1,899 to ₹3,449 per sq.ft. The numbers are not interchangeable. The public tables show differences in items such as waterproofing, concrete checks, reporting, handover records, and finish allowances. They also identify approvals, statutory fees, connections, borewell work, compound walls, difficult ground, demolition, and access constraints as separate or site-dependent work. Read both sides of that boundary before comparing quotes.",
          links: [
            { href: "/packages", label: "Compare the published packages" },
            { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
            { href: "/waterproofing-construction-package-chennai", label: "See the waterproofing step" },
            { href: "/quality-checked-structure-package-chennai", label: "See the quality-record step" },
          ],
        },
        {
          title: "Typical Home-Construction Fit",
          body: "This route is not just for one kind of home. It should help owners understand whether Lokra is the right fit for independent houses, villa-style residences, and premium residential projects where documentation, site discipline, and scope visibility matter from the beginning.",
          bullets: [
            "Independent house build",
            "Villa-style residence",
            "Owner-led plot + construction",
            "Premium residential project",
          ],
        },
        {
          title: "Use Packages And Process To Compare Better",
          body: "The most useful way to compare a home construction company is not by a headline alone. Lokra's package and process pages help show how engineering depth, reporting, execution visibility, and handover discipline vary across project approaches.",
          links: [
            { href: "/packages", label: "Compare Construction Packages" },
            { href: "/process", label: "See Lokra's Delivery Process" },
            { href: "/services", label: "Browse All Services" },
            { href: "/projects", label: "Review Project Categories" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share Your Residential Requirement And We'll Help You Frame The Next Step Clearly."
    />
  );
}
