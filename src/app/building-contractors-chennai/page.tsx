import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Building Contractors in Chennai | Lokra Infra",
  description:
    "Looking for building contractors in Chennai? Lokra Infra handles residential, commercial, and turnkey construction with engineering-led planning, scope clarity, site coordination, and milestone-based execution.",
  keywords: [
    "building contractors chennai",
    "best building contractors in chennai",
    "construction company chennai",
    "residential building contractors chennai",
    "commercial building contractors chennai",
  ],
  alternates: {
    canonical: "/building-contractors-chennai",
  },
  openGraph: {
    title: "Building Contractors in Chennai | Lokra Infra",
    description:
      "Engineering-led residential, commercial, and turnkey contractor execution in Chennai with clearer scope and milestone visibility.",
    url: "https://www.lokrainfra.in/building-contractors-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What does Lokra handle as a building contractor in Chennai?",
    a: "Lokra can discuss residential, commercial, turnkey, renovation, and civil-linked execution depending on the project scope. The key is to first define what the site and requirement actually demand before treating all contractor work as the same.",
  },
  {
    q: "Does Lokra take both residential and commercial projects?",
    a: "Yes. Lokra's public services already cover both residential and commercial construction, with execution framed around scope clarity, engineering coordination, and milestone-based delivery.",
  },
  {
    q: "How do I compare one contractor with another before I commit?",
    a: "A useful comparison should go beyond a simple rate headline. Review how each contractor explains scope, site assessment, execution visibility, reporting, quality review, and what happens before handover.",
  },
  {
    q: "Can Lokra work from existing drawings or a defined scope?",
    a: "That can be discussed during the first requirement review. The important point is that drawings or scope documents still need to be checked against site reality and execution responsibility before work begins.",
  },
  {
    q: "What kind of project updates should I expect during execution?",
    a: "The process is designed around milestone visibility and site coordination, so the owner is not left without clarity on progress, decision points, or what stage the work is currently in.",
  },
];

export default function BuildingContractorsChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/building-contractors-chennai"
      eyebrow="Contractor-Intent Search"
      title="Building Contractors in Chennai"
      intro="Many buyers searching for building contractors in Chennai are really trying to avoid scope confusion, weak supervision, and fragmented delivery. Lokra Infra's contractor approach is built around engineering-led planning, accountable execution, and clearer visibility across residential, commercial, and turnkey work."
      serviceName="Building Contractors in Chennai"
      serviceDescription="Engineering-led building contractor services in Chennai across residential, commercial, and turnkey construction with clearer scope definition, site coordination, and milestone visibility."
      discoveryPaths={[
        { href: "/projects#featured-project", label: "Browse By Project Proof", desc: "See real, in-progress and completed work before you commit to a contractor." },
        { href: "/packages", label: "Browse By Price Ladder", desc: "Compare the full public price ladder from ₹1,899 / sq.ft. to see what scope and reporting each level includes." },
        { href: "/chennai-areas", label: "Browse By Chennai Area", desc: "Find pricing-led builder pages grouped by Central, South, West, North, and outer Chennai zones." },
      ]}
      summaryCards={[
        {
          title: "Residential + Commercial",
          desc: "Useful for clients comparing contractor options across homes, offices, retail, and broader building work.",
        },
        {
          title: "Scope Before Commitment",
          desc: "Best for buyers who want the project defined properly before execution starts and surprises begin.",
        },
        {
          title: "Visible Milestones",
          desc: "A stronger fit for owners who want progress visibility rather than a vague contractor relationship.",
        },
      ]}
      sections={[
        {
          title: "What Clients Usually Mean By Building Contractor",
          body: "For most buyers, this search is not just about finding a name on a board. It usually means they want one accountable party to coordinate execution, manage site supervision, align trades, and reduce the risk of cost and timeline confusion after the project begins.",
          bullets: [
            "Execution accountability",
            "Site supervision",
            "Trade coordination",
            "Budget and milestone visibility",
          ],
        },
        {
          title: "Residential And Commercial Contractor Scope",
          body: "Lokra's contractor conversation can cover both residential and commercial work. That matters because many projects sit in the overlap between structure, fit-out, finishing, utility planning, and execution sequencing — and weak coordination is where projects usually start to slip.",
          bullets: [
            "Residential contractor work",
            "Commercial contractor work",
            "Turnkey execution planning",
            "Linked civil and finishing scope",
          ],
        },
        {
          title: "Why Contractor Choice Fails On Many Projects",
          body: "A contractor relationship often breaks down when the scope is vague, supervision is weak, subcontractors are disconnected, or the owner only sees the real complexity after work starts. Lokra's strongest answer here is not hype, but a more structured planning and execution model.",
          bullets: [
            "Unclear scope",
            "Disconnected subcontractors",
            "Weak supervision",
            "Post-agreement surprises",
          ],
        },
        {
          title: "How Lokra Approaches Contractor Execution",
          body: "The project starts with requirement understanding and site assessment, then moves into planning, cost direction, execution roadmap, site coordination, and handover review. That structure is already visible on Lokra's process page and is a better way to evaluate contractor quality than a generic claim of experience alone.",
          links: [
            { href: "/process", label: "Review The 6-Phase Process" },
            { href: "/services", label: "See All Construction Services" },
            { href: "/packages", label: "Use The Package Comparison" },
          ],
        },
        {
          title: "Use Better Comparison Inputs Before You Choose",
          body: "If you are comparing contractors, use package depth, BoQ visibility, documentation, and handover discipline as decision inputs — not just the broadest quote promise. Lokra's package structure can help buyers ask better questions before they commit.",
          links: [
            { href: "/packages", label: "Compare Package Depth" },
            { href: "/contact", label: "Discuss A Specific Requirement" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share The Building Requirement And We'll Help You Clarify Scope Before You Commit."
    />
  );
}
