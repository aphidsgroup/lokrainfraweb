import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Medavakkam, Chennai | Lokra Infra",
  description:
    "Planning a home build in Medavakkam? Use Lokra Infra's published package rates to compare scope, waterproofing, quality records, and the questions to settle before work begins.",
  keywords: [
    "builders in medavakkam chennai",
    "home construction medavakkam",
    "building contractors medavakkam chennai",
    "house construction medavakkam",
  ],
  alternates: { canonical: "/builders-in-medavakkam-chennai" },
  openGraph: {
    title: "Builders in Medavakkam, Chennai | Lokra Infra",
    description:
      "A practical guide to preparing a Medavakkam construction brief and comparing Lokra Infra's published package scope.",
    url: "https://www.lokrainfra.in/builders-in-medavakkam-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Does Lokra Infra discuss construction projects in Medavakkam?",
    a: "Yes. Lokra Infra can discuss residential construction planning for a Medavakkam site. Bring the location, plot dimensions or drawings, intended building type, and budget direction so the discussion can start from the actual requirement.",
  },
  {
    q: "What is Lokra Infra's published starting construction rate?",
    a: "The published package ladder starts at ₹1,899 per sq.ft. That is a comparison starting point, not a final project quote. Site conditions, scope, finish selections, and work outside the published package can change the total.",
  },
  {
    q: "How do the ₹1,899, ₹1,999, and ₹2,099 package steps differ?",
    a: "The ₹1,999 step adds published waterproofing measures. The ₹2,099 step adds published concrete quality checks and fortnightly photo reporting. Read the full package inclusions, allowances, and exclusions before comparing rates.",
  },
  {
    q: "What should I ask before choosing a builder?",
    a: "Ask for a written scope, the materials and tests included, the allowances behind finishes, how changes will be recorded, and what documents you receive at handover. A rate alone cannot answer those questions.",
  },
  {
    q: "Can I speak to Lokra before choosing a package?",
    a: "Yes. You can share your plot location, project type, and budget direction through the contact page, or call 93446 43324. The package page is useful for preparing the discussion before you commit to a level.",
  },
];

const summaryCards = [
  {
    title: "Start with the brief",
    desc: "A plot location, dimensions, intended use, and rough budget give a builder something real to assess.",
  },
  {
    title: "Published rates, readable scope",
    desc: "Lokra Infra lists package steps from ₹1,899 per sq.ft. so you can compare what changes with the rate.",
  },
  {
    title: "Put changes in writing",
    desc: "Ask how site conditions, upgrades, and extra work will be documented before construction starts.",
  },
];

const sections = [
  {
    title: "Prepare a Medavakkam construction brief",
    body: "A useful first conversation is more than a request for a per-square-foot rate. Put together the plot location, dimensions or drawings, the building you have in mind, and your budget direction. If you already have approvals, a soil report, site photos, or a design brief, keep those ready too. They help separate what is known from what still needs to be checked.",
    bullets: [
      "Plot location and dimensions",
      "Home, villa, extension, or another building type",
      "Existing drawings, approvals, reports, or photos",
      "Budget direction and finish expectations",
    ],
  },
  {
    title: "Compare the scope behind the rate",
    body: "Lokra Infra publishes a package ladder instead of one catch-all price. The entry package is listed at ₹1,899 per sq.ft. The next published steps, ₹1,999 and ₹2,099 per sq.ft., add different waterproofing and quality-record provisions. Read the package details alongside the rate, including allowances, exclusions, and site-dependent work. That is a better comparison than treating every builder quote as like for like.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Read the waterproofing package guide" },
      { href: "/quality-checked-structure-package-chennai", label: "Read the quality-record package guide" },
    ],
  },
  {
    title: "Questions worth settling before work starts",
    body: "Ask for the written scope before you decide between builders. It should explain what is included in the package, what depends on the site, and what is handled as an allowance or additional work. Ask how changes are approved and recorded. You should also know which drawings, test records, and handover documents will be shared with you.",
    bullets: [
      "What is included and excluded in writing?",
      "Which site checks are needed before the scope is fixed?",
      "How are changes and additional work approved?",
      "Which documents and records are handed over?",
    ],
  },
  {
    title: "Use the service and process pages to narrow the brief",
    body: "Medavakkam is an entry point for a local construction conversation, but the project type still matters. A new independent home, a renovation, and commercial work need different scopes. Use the service page to identify the right route, then review Lokra Infra's published process before reaching out. That keeps the enquiry specific without making promises about a site that has not been assessed.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/services", label: "Browse construction services" },
      { href: "/process", label: "Read the construction process" },
      { href: "/contact", label: "Discuss a Medavakkam site" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-medavakkam-chennai"
      eyebrow="Medavakkam construction planning"
      title="Builders in Medavakkam, Chennai"
      intro="If you are planning construction in Medavakkam, start with the site and the written scope. Lokra Infra's published package ladder gives you a way to compare rates, waterproofing, quality records, and allowances before a builder conversation turns into a quote."
      serviceName="Builders in Medavakkam, Chennai"
      serviceDescription="Lokra Infra discusses residential construction planning in Medavakkam, Chennai, with published package comparisons and scope-led project discussions."
      discoveryPaths={[
        {
          href: "/packages",
          label: "Compare by price",
          desc: "See the published package ladder from ₹1,899 per sq.ft. and the scope attached to each level.",
        },
        {
          href: "/process",
          label: "Understand the process",
          desc: "Read how Lokra Infra moves from a site discussion to planning, execution, and handover.",
        },
        {
          href: "/contact",
          label: "Discuss your site",
          desc: "Share the location, scope, and budget direction so the first conversation can be specific.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Medavakkam site in mind? Share the location, scope, and budget direction to start with a practical construction discussion."
    />
  );
}
