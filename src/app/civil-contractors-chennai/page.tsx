import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Civil Contractors in Chennai | Lokra Infra",
  description:
    "Lokra Infra works as civil contractors in Chennai for foundations, site development, drainage, roads, compound works, and broader construction execution with engineering-led planning and site discipline.",
  keywords: [
    "civil contractors in chennai",
    "civil contractor chennai",
    "civil works contractor chennai",
    "site development contractor chennai",
    "infrastructure civil works chennai",
  ],
  alternates: {
    canonical: "/civil-contractors-chennai",
  },
  openGraph: {
    title: "Civil Contractors in Chennai | Lokra Infra",
    description:
      "Engineering-led civil contractors in Chennai for foundations, drainage, site development, compound works, and broader construction-linked civil execution.",
    url: "https://www.lokrainfra.in/civil-contractors-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "What types of civil work can Lokra take up in Chennai?",
    a: "Lokra's current public scope includes roads, drainage, compound boundary works, site grading, and foundation-level infrastructure, along with civil work that supports a larger construction project.",
  },
  {
    q: "Can Lokra handle site development before building construction starts?",
    a: "Yes, that can be part of the first discussion. Site development often needs to be understood before the main building phase begins, especially when access, grading, drainage, or foundation-enabling work affects the later schedule.",
  },
  {
    q: "Do civil works need a separate scope review before quotation?",
    a: "Usually, yes. Civil work quality and cost direction depend heavily on existing conditions, access, levels, utility constraints, and how the work connects to the rest of the project.",
  },
  {
    q: "Can Lokra take civil work as part of a larger residential or commercial project?",
    a: "Yes. Civil work can be discussed either as a standalone requirement or as part of a larger residential or commercial build where early enabling scope is important.",
  },
  {
    q: "What information should I share before the first discussion?",
    a: "If available, share the site location, current site condition, any drawings, known scope boundaries, and what stage the project is in. That helps make the first conversation more useful.",
  },
];

export default function CivilContractorsChennaiPage() {
  return (
    <CityServiceLandingPage
      route="/civil-contractors-chennai"
      eyebrow="Civil Works Planning"
      title="Civil Contractors in Chennai"
      intro="Civil work often gets treated as a generic add-on, even when it controls whether the rest of the project will move smoothly. Lokra Infra approaches civil scope through site assessment, engineering-led planning, and clearer execution framing for enabling works, infrastructure support, and broader project-linked civil activity."
      serviceName="Civil Contractors in Chennai"
      serviceDescription="Civil contractors in Chennai for foundations, drainage, roads, site development, compound works, and construction-linked civil execution with engineering-led planning and site discipline."
      summaryCards={[
        {
          title: "Site Development",
          desc: "Useful when the site needs enabling work before the main structure can progress cleanly.",
        },
        {
          title: "Infrastructure Support",
          desc: "Covers roads, drainage, compound works, grading, and foundation-linked civil scope.",
        },
        {
          title: "Execution Fit",
          desc: "A better fit for projects that need civil work defined clearly before the quote conversation gets shallow.",
        },
      ]}
      sections={[
        {
          title: "Civil Work Scope Lokra Can Discuss",
          body: "Lokra's civil and infrastructure scope is not limited to one narrow category. The public services page already covers roads, drainage systems, compound boundary works, site grading, and foundation-level infrastructure, which makes this route relevant for both standalone civil requirements and enabling work within a larger build.",
          bullets: [
            "Roads and drainage",
            "Compound boundary works",
            "Site grading and development",
            "Foundation-level infrastructure",
          ],
        },
        {
          title: "Why Civil Projects Need Clearer Technical Framing",
          body: "Civil projects can look simple from the outside, but execution quality depends heavily on existing conditions, site levels, sequencing, structural tie-ins, and utility coordination. This is why a proper first discussion should define the site reality and not just jump to a headline rate.",
          bullets: [
            "Existing-condition review",
            "Scope sequencing",
            "Utility coordination",
            "Execution constraints",
          ],
        },
        {
          title: "Where Civil Work Overlaps With Larger Builds",
          body: "Some civil work stands alone, but much of it sits inside a wider residential or commercial delivery path. A better contractor conversation should explain how civil enabling works affect the rest of the construction schedule, rather than pretending the work exists in isolation.",
          bullets: [
            "Standalone civil works",
            "Pre-construction enabling scope",
            "Residential site preparation",
            "Commercial site development",
          ],
        },
        {
          title: "How Lokra Keeps Civil Execution Visible",
          body: "Lokra's process framing is useful here because civil work benefits from the same discipline as the rest of construction: requirement understanding, site assessment, planning direction, execution roadmap, coordination, and review before closeout.",
          links: [
            { href: "/process", label: "See The Process Framework" },
            { href: "/services", label: "Review Civil + Infrastructure Services" },
            { href: "/projects", label: "Browse Project Categories" },
          ],
        },
        {
          title: "Start The Discussion With The Right Inputs",
          body: "If the civil scope is already partly defined, bring site details, drawings, or boundary conditions into the first discussion. A better first call should reduce ambiguity rather than just chase a quick quote.",
          links: [
            { href: "/contact", label: "Share Site And Scope Details" },
            { href: "/packages", label: "Review Package Detail Where Relevant" },
          ],
        },
      ]}
      faqs={faqs}
      ctaTitle="Share The Civil Scope, Site Condition, Or Drawings And We'll Help You Frame The Next Step Properly."
    />
  );
}
