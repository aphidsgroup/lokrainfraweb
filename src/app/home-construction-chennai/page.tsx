import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Home Construction Company in Chennai | Lokra Infra",
  description:
    "Lokra Infra is a Chennai home construction company for independent homes, villas, and premium residential builds. Get engineering-led planning, clear scope, milestone visibility, and disciplined site execution.",
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
    a: "Lokra's packages page is designed to help compare engineering depth, reporting level, warranty, and package fit. The right choice depends on site conditions, quality expectations, and how much documentation and visibility you want during execution.",
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
      intro="Lokra Infra works with homeowners who want clearer scope, engineering-led planning, and disciplined execution before a residential build begins. From independent houses to villa-style homes, the focus is on site reality, package fit, and execution visibility — not vague promises."
      serviceName="Home Construction Company in Chennai"
      serviceDescription="Engineering-led home construction in Chennai for independent houses, villas, and residential builds with clear scope, process visibility, and disciplined execution."
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
          title: "Who This Page Is For",
          body: "This page is meant for plot owners and residential buyers who are actively comparing home construction companies in Chennai. The strongest fit is for owners who want more structure before the build starts, especially when package choice, site constraints, and quality expectations need to be made visible early.",
          bullets: [
            "First-time plot owners",
            "Independent house construction",
            "Villa-style residential builds",
            "Owners comparing turnkey vs managed execution",
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
          title: "What Makes Lokra Different From Generic Builder Copy",
          body: "A lot of builder pages chase the keyword but stay vague about how the project will actually move. Lokra's stronger position is process clarity: structured planning, package depth, engineering-led execution, and one accountable team rather than a fragmented contractor chain.",
          bullets: [
            "Engineering-led planning",
            "Visible project process",
            "Package depth through /packages",
            "Single-team accountability",
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
