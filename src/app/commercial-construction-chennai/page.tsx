import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Commercial Construction in Chennai | Lokra Infra",
  description:
    "Lokra Infra handles commercial construction in Chennai with engineering-led planning, scope clarity, execution discipline, and milestone visibility for offices, retail, showrooms, and broader commercial builds.",
  keywords: [
    "commercial construction chennai",
    "commercial construction company chennai",
    "commercial builders chennai",
    "commercial building contractor chennai",
    "office construction chennai",
  ],
  alternates: {
    canonical: "/commercial-construction-chennai",
  },
  openGraph: {
    title: "Commercial Construction in Chennai | Lokra Infra",
    description:
      "Commercial construction in Chennai for offices, retail, showrooms, and broader business spaces with clearer scope and execution control.",
    url: "https://www.lokrainfra.in/commercial-construction-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What types of commercial projects can Lokra discuss in Chennai?",
    a: "Lokra's public commercial scope already includes offices, retail outlets, showrooms, and commercial complexes. The first discussion should clarify the usage, execution model, and whether the project includes fit-out, structure, or both.",
  },
  {
    q: "Can Lokra handle both shell work and broader commercial execution?",
    a: "That depends on the project scope, but Lokra's service framing already covers commercial construction with coordinated execution rather than treating each stage as an isolated contractor handoff.",
  },
  {
    q: "How should I compare one commercial construction partner with another?",
    a: "Compare how clearly the team defines scope, timeline logic, coordination responsibility, milestone visibility, and what is actually included before work starts — not just the top-line number.",
  },
  {
    q: "Does Lokra support execution planning before the project is fully finalised?",
    a: "Yes, the planning discussion can help shape execution direction before the project is locked, especially where cost, scope boundaries, and sequencing still need clarity.",
  },
  {
    q: "What should I prepare before the first commercial project discussion?",
    a: "If available, bring the site location, usage type, drawings, target timeline, and any existing scope or fit-out expectations so the first discussion is practical rather than generic.",
  },
];

export default function CommercialConstructionChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/commercial-construction-chennai"
      eyebrow="Commercial Build Planning"
      title="Commercial Construction in Chennai"
      intro="Commercial construction decisions usually carry more coordination risk than the headline keyword suggests. Lokra Infra approaches commercial work through clearer scope definition, execution planning, and milestone visibility so office, retail, showroom, and broader commercial requirements are not managed like generic contractor jobs."
      serviceName="Commercial Construction in Chennai"
      serviceDescription="Commercial construction in Chennai for offices, retail outlets, showrooms, and broader business builds with engineering-led planning, scope clarity, and milestone visibility."
      summaryCards={[
        {
          title: "Office + Retail",
          desc: "Useful for businesses comparing execution partners for office spaces, retail outlets, and showroom work in Chennai.",
        },
        {
          title: "Scope Clarity",
          desc: "Best for projects where shell work, fit-out, and coordination boundaries need to be understood before execution starts.",
        },
        {
          title: "Execution Control",
          desc: "A stronger fit for buyers who want timeline and milestone visibility instead of a loose contractor arrangement.",
        },
      ]}
      sections={[
        {
          title: "Who This Commercial Route Is For",
          body: "This route is for project owners, operators, and businesses comparing commercial construction partners in Chennai. It is especially relevant where project complexity sits across structure, space planning, utilities, finishes, and execution sequencing rather than inside one narrow work package.",
          bullets: [
            "Office spaces",
            "Retail outlets",
            "Showrooms",
            "Broader commercial development",
          ],
        },
        {
          title: "What Lokra Can Handle In Commercial Construction",
          body: "Lokra's services page already frames commercial construction around engineering-led planning, structural coordination, MEP awareness, and execution control. This route sharpens that into a Chennai commercial-intent page instead of leaving it buried inside a general services summary.",
          bullets: [
            "Commercial execution planning",
            "Structural + finishing coordination",
            "Scope and sequencing review",
            "Milestone-led delivery visibility",
          ],
        },
        {
          title: "Why Commercial Projects Slip Without Better Scope Discipline",
          body: "Commercial projects often lose control when shell work, services coordination, fit-out expectations, and contractor accountability are not made visible early. A better construction conversation should make the execution model easier to understand before work starts.",
          bullets: [
            "Unclear package boundaries",
            "Coordination gaps",
            "Execution-sequence confusion",
            "Late-stage commercial changes",
          ],
        },
        {
          title: "How Lokra's Existing Process Helps Commercial Buyers",
          body: "Lokra's six-phase process is especially useful for commercial buyers because it shows how requirement understanding, site assessment, planning direction, execution roadmap, and site coordination fit together before handover. That structure is stronger than a generic commercial-builder claim.",
          links: [
            { href: "/process", label: "See The 6-Phase Process" },
            { href: "/services", label: "Review Commercial Service Scope" },
            { href: "/projects", label: "Browse Project Categories" },
          ],
        },
        {
          title: "Use Packages And Requirement Review More Carefully",
          body: "Even when a commercial project will not map one-to-one with a standard package, Lokra's package depth still helps clarify how documentation, engineering visibility, and item-wise thinking should shape commercial scope discussions.",
          links: [
            { href: "/packages", label: "Review Package Depth" },
            { href: "/contact", label: "Discuss A Commercial Requirement" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share The Commercial Requirement And We'll Help You Clarify Scope Before Execution Starts."
    />
  );
}
