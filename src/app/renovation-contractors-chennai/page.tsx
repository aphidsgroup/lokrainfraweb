import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Renovation Contractors in Chennai | Lokra Infra",
  description:
    "Lokra Infra handles renovation and structural-upgrade discussions in Chennai with scope review, engineering-led planning, and clearer execution framing for residential and commercial properties.",
  keywords: [
    "renovation contractors chennai",
    "home renovation chennai",
    "building renovation contractor chennai",
    "commercial renovation chennai",
    "structural renovation chennai",
  ],
  alternates: {
    canonical: "/renovation-contractors-chennai",
  },
  openGraph: {
    title: "Renovation Contractors in Chennai | Lokra Infra",
    description:
      "Renovation and structural-upgrade planning in Chennai for residential and commercial properties with clearer scope and execution discipline.",
    url: "https://www.lokrainfra.in/renovation-contractors-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What types of renovation work can Lokra discuss in Chennai?",
    a: "Lokra's public services already cover renovation and structural upgrades for both residential and commercial properties. The first step is to understand the existing condition and what level of intervention the property actually needs.",
  },
  {
    q: "Why do renovation projects need more scope review than new builds?",
    a: "Renovation work depends heavily on what already exists on site. Structure, access, hidden constraints, service lines, and live-use conditions can all change the execution path, so a vague early quote is rarely enough.",
  },
  {
    q: "Can Lokra discuss commercial renovation as well as residential renovation?",
    a: "Yes. The renovation scope can include both residential and commercial situations, provided the first discussion makes the existing condition, usage, and execution boundaries clear.",
  },
  {
    q: "Does renovation always need structural review before work starts?",
    a: "Not every renovation will need the same level of structural intervention, but many projects still need proper assessment before the scope can be defined responsibly.",
  },
  {
    q: "What should I prepare before a renovation discussion?",
    a: "Share the site location, current condition, known problem areas, intended upgrades, and any existing drawings or photos if available. That helps make the first discussion more concrete.",
  },
];

export default function RenovationContractorsChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/renovation-contractors-chennai"
      eyebrow="Renovation + Structural Upgrade Planning"
      title="Renovation Contractors in Chennai"
      intro="Renovation projects are usually harder to scope cleanly than new construction because the site already has conditions, constraints, and partial systems in place. Lokra Infra approaches renovation work through assessment, engineering-led scope review, and clearer execution framing before promises are made."
      serviceName="Renovation Contractors in Chennai"
      serviceDescription="Renovation and structural-upgrade planning in Chennai for residential and commercial properties with clearer scope review, assessment, and execution discipline."
      summaryCards={[
        {
          title: "Residential + Commercial",
          desc: "Useful for homeowners and businesses comparing renovation partners across residential and commercial property upgrades.",
        },
        {
          title: "Condition-Led Scope",
          desc: "Best for projects where existing structure, systems, or usage constraints need to shape the execution plan first.",
        },
        {
          title: "Less Guesswork",
          desc: "A stronger fit for buyers who want fewer surprises after work starts and better scope clarity before commitment.",
        },
      ]}
      sections={[
        {
          title: "Who This Renovation Route Is For",
          body: "This route is for owners comparing renovation contractors in Chennai where the property already exists and the work depends on its current condition. It can apply to residential upgrades, commercial refits, structural corrections, or broader renovation planning that should not be treated like a clean-slate new build.",
          bullets: [
            "Home renovation planning",
            "Commercial renovation work",
            "Structural upgrade discussion",
            "Existing-property execution review",
          ],
        },
        {
          title: "Why Renovation Needs Better Assessment First",
          body: "Renovation work often looks simple until existing conditions are exposed. That is why a better renovation page should talk about assessment, scope review, and what needs to be clarified before execution, instead of promising certainty without understanding the property properly.",
          bullets: [
            "Existing-condition review",
            "Hidden constraints",
            "Service-line and access impact",
            "Structural intervention risk",
          ],
        },
        {
          title: "How Lokra Frames Renovation And Structural Upgrades",
          body: "Lokra's current services page already positions renovation and structural upgrades with prior site assessment, engineering scope review, and transparent billing logic. This route turns that into a focused Chennai renovation-intent page rather than leaving it inside a broader services list.",
          links: [
            { href: "/services", label: "Review Renovation Service Scope" },
            { href: "/process", label: "See How Lokra Works" },
            { href: "/contact", label: "Discuss A Renovation Requirement" },
          ],
        },
        {
          title: "Residential And Commercial Renovation Fit",
          body: "Renovation work can span from residential upgrades to commercial refits, but the right execution model depends on condition, usage, access, and whether structural changes are involved. A better contractor comparison should make those distinctions visible early.",
          bullets: [
            "Home renovation",
            "Commercial refits",
            "Structural repair or upgrade",
            "Mixed-scope renovation planning",
          ],
        },
        {
          title: "Bring Better Inputs To The First Discussion",
          body: "If you already have site photos, drawings, problem areas, or known repair priorities, bring them into the first discussion. Renovation quality improves when the brief starts from site truth instead of rough assumptions.",
          links: [
            { href: "/projects", label: "Browse Project Categories" },
            { href: "/packages", label: "Review Package Detail Where Relevant" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share The Existing Property Condition And We'll Help You Clarify The Renovation Scope Properly."
    />
  );
}
