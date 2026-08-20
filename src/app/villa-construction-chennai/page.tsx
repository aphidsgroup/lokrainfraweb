import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Villa Construction in Chennai | Lokra Infra",
  description:
    "Lokra Infra handles villa construction in Chennai with engineering-led planning, site assessment, package clarity, and disciplined execution for premium residential builds.",
  keywords: [
    "villa construction chennai",
    "villa builders chennai",
    "best villa builders in chennai",
    "premium house construction chennai",
    "villa construction company chennai",
  ],
  alternates: {
    canonical: "/villa-construction-chennai",
  },
  openGraph: {
    title: "Villa Construction in Chennai | Lokra Infra",
    description:
      "Engineering-led villa construction in Chennai for premium residential builds with clearer scope, package fit, and milestone visibility.",
    url: "https://www.lokrainfra.in/villa-construction-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Can Lokra discuss villa construction in Chennai for owner-led plots?",
    a: "Yes. This route is meant for owners planning villa-style residential construction where site assessment, engineering clarity, and execution discipline matter before the build starts.",
  },
  {
    q: "How is villa construction different from a generic home-construction discussion?",
    a: "Villa projects often carry higher expectations around detailing, finish coordination, long-term quality, and package fit. That usually demands a more careful planning and execution discussion than a generic residential brief.",
  },
  {
    q: "Can Lokra help compare villa package options before execution begins?",
    a: "Yes. Lokra's packages help buyers compare engineering depth, reporting, waterproofing, documentation, and handover expectations more clearly before the project enters full execution.",
  },
  {
    q: "Does Lokra handle premium residential builds as well as standard homes?",
    a: "Yes, the public positioning already supports premium residential and villa-style builds, especially where stronger engineering and execution visibility are important.",
  },
  {
    q: "What should I share before a first villa-construction discussion?",
    a: "If available, share the site location, plot condition, target built-up area, any design direction, and whether the project is still being scoped or already partly documented.",
  },
];

export default function VillaConstructionChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/villa-construction-chennai"
      eyebrow="Premium Residential Planning"
      title="Villa Construction in Chennai"
      intro="Villa construction is usually not just a bigger home-construction brief. It often demands stronger planning, better execution discipline, and clearer coordination across structure, finishes, waterproofing, and handover expectations. Lokra Infra approaches villa projects through that more deliberate execution lens."
      serviceName="Villa Construction in Chennai"
      serviceDescription="Engineering-led villa construction in Chennai for premium residential builds with clearer package fit, site assessment, and milestone-based execution planning."
      summaryCards={[
        {
          title: "Premium Residential Fit",
          desc: "Useful for buyers planning villa-style or premium home construction where detailing and process visibility matter more.",
        },
        {
          title: "Package Depth",
          desc: "Best for owners who want to compare reporting, waterproofing, engineering records, and execution expectations before choosing a path.",
        },
        {
          title: "Better Coordination",
          desc: "A stronger fit for projects where structure, finishes, and handover quality need more planning discipline.",
        },
      ]}
      sections={[
        {
          title: "Who This Villa Route Is For",
          body: "This route is for residential buyers planning a villa or premium individual home in Chennai. It is especially relevant where the owner wants more confidence around site reality, package choice, engineering depth, and execution control before construction becomes difficult to unwind.",
          bullets: [
            "Owner-led villa projects",
            "Premium individual houses",
            "Higher-finish residential builds",
            "Plot owners comparing execution paths",
          ],
        },
        {
          title: "What Makes Villa Construction A Different Conversation",
          body: "Villa projects often stretch beyond a basic residential build because quality expectations, detailing decisions, waterproofing logic, finish coordination, and owner oversight can all carry more weight. A stronger builder page should acknowledge that instead of flattening every residential project into one broad promise.",
          bullets: [
            "Detail-heavy scope",
            "Waterproofing and durability",
            "Finish coordination",
            "Higher handover expectations",
          ],
        },
        {
          title: "How Lokra Can Support Villa Execution Planning",
          body: "Lokra's existing package and process pages already create a better foundation for villa discussions than generic landing-page copy. They help owners compare scope, package depth, engineering-file expectations, reporting levels, and what should be reviewed before execution begins.",
          links: [
            { href: "/packages", label: "Compare Construction Packages" },
            { href: "/process", label: "See The Delivery Process" },
            { href: "/services", label: "Review Residential Services" },
          ],
        },
        {
          title: "Villa Buyers Need Better Package Questions",
          body: "The right villa-construction decision is often shaped by questions about waterproofing, reporting, structural records, package fit, and long-term quality control rather than just a broad price label. Lokra's package structure helps make those questions easier to ask earlier.",
          bullets: [
            "Reporting expectations",
            "Engineering depth",
            "Waterproofing approach",
            "Handover discipline",
          ],
        },
        {
          title: "Use Existing Lokra Routes To Judge Fit",
          body: "This route should help buyers enter the site through a villa-specific lens, but the fuller comparison still comes from the surrounding routes. Use the services, packages, process, and projects pages together before deciding how the villa project should be framed.",
          links: [
            { href: "/projects", label: "Browse Project Categories" },
            { href: "/contact", label: "Discuss A Villa Requirement" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share The Villa Requirement And We'll Help You Frame The Right Execution Path Clearly."
    />
  );
}
