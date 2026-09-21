import type { Metadata } from "next";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";

export const metadata: Metadata = {
  title: "Builders in Mangadu, Chennai | Lokra Infra",
  description:
    "Plan a home construction enquiry in Mangadu with Lokra Infra: a practical site brief, published package comparison, and questions to settle before a quote.",
  keywords: [
    "builders in mangadu chennai",
    "home construction mangadu chennai",
    "building contractors mangadu chennai",
    "house construction cost mangadu",
  ],
  alternates: { canonical: "/builders-in-mangadu-chennai" },
  openGraph: {
    title: "Builders in Mangadu, Chennai | Lokra Infra",
    description:
      "A practical Mangadu construction brief: site details, package comparison, and the questions to settle before a quote.",
    url: "https://www.lokrainfra.in/builders-in-mangadu-chennai",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const faqs = [
  {
    q: "Where is Lokra Infra's Mangadu office?",
    a: "Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or use the contact page before visiting so the team can confirm the right next step for your requirement.",
  },
  {
    q: "What should I bring to a first construction discussion?",
    a: "Bring the plot location, dimensions or available drawings, the type of building you have in mind, and a budget direction. If there is an existing structure, mention it early. These basics make it easier to separate package work from site-specific work.",
  },
  {
    q: "What is the published starting construction package rate?",
    a: "Lokra Infra's current public package ladder starts at ₹1,899 per sq.ft. It is a comparison starting point, not a final quote. Site conditions, drawings, finishes, allowances, exclusions, and work outside the published package can change the project total.",
  },
  {
    q: "How do the ₹1,899, ₹1,999, and ₹2,099 package steps differ?",
    a: "The published ₹1,999 step adds waterproofing measures. The ₹2,099 step adds concrete quality checks and fortnightly photo reporting. Read the full package inclusions and exclusions before treating any two construction rates as comparable.",
  },
  {
    q: "Can I ask about a renovation or commercial requirement in Mangadu?",
    a: "Yes. State the requirement clearly when you enquire. A new home, renovation, and commercial build need different information, scope, and pricing treatment, so the published residential package ladder may not map directly to every job.",
  },
];

const summaryCards = [
  {
    title: "Local point of contact",
    desc: "Lokra Infra lists its main office on Kundrathur Main Road in Mangadu. Arrange the conversation first, then bring the site information that affects scope.",
  },
  {
    title: "Published rates, not a blanket quote",
    desc: "The public package ladder begins at ₹1,899 per sq.ft. Use it to compare inclusions and allowances, not to assume every site has the same final cost.",
  },
  {
    title: "A written brief saves time",
    desc: "Plot details, building type, drawings, existing conditions, and budget direction give a builder something real to assess before discussing a package.",
  },
];

const sections = [
  {
    title: "Start with the site, not the rate",
    body: "A useful Mangadu construction conversation begins with the plot and the building you want to create. Note the exact location, plot dimensions, road access, number of floors you are considering, and whether drawings or approvals are already in hand. If the site has an old building, drainage issue, or a shared boundary, say so at the start. These details can affect the scope before anyone can give a meaningful price direction.",
    bullets: [
      "Exact plot location",
      "Dimensions and available drawings",
      "New build, renovation, or commercial use",
      "Existing-site conditions",
    ],
  },
  {
    title: "Use the package ladder as a comparison tool",
    body: "Lokra Infra publishes a package ladder rather than a single catch-all rate. The entry point is ₹1,899 per sq.ft. The next public steps, ₹1,999 and ₹2,099 per sq.ft., add different waterproofing and quality-record provisions. Compare the written inclusions, allowances, exclusions, and site-dependent work beside the rate. A lower number without a matching scope does not tell you what the completed work will cost.",
    links: [
      { href: "/packages", label: "Compare all published packages" },
      { href: "/affordable-construction-packages-chennai", label: "Compare the ₹1,899 to ₹2,099 steps" },
      { href: "/waterproofing-construction-package-chennai", label: "Read the waterproofing package guide" },
      { href: "/quality-checked-structure-package-chennai", label: "Read the quality-record package guide" },
    ],
  },
  {
    title: "Questions to settle before you compare builders",
    body: "Ask each builder for a written scope. It should distinguish package inclusions from allowances, exclusions, and site-specific work. Ask how changes are approved, what records you will receive, and which decisions need to be made before work starts. This is more useful than comparing headline rates without knowing whether the same work is included.",
    bullets: [
      "What is included and excluded?",
      "Which items are allowances?",
      "How are scope changes recorded?",
      "Which drawings and test records are shared?",
    ],
  },
  {
    title: "Choose the right service route",
    body: "The published package ladder is most useful for a home-construction comparison. If the requirement is a renovation, a commercial space, or civil work, begin with the relevant service route instead of forcing it into a standard residential package. Lokra Infra can then discuss the information needed for that kind of project.",
    links: [
      { href: "/home-construction-chennai", label: "Home construction in Chennai" },
      { href: "/renovation-contractors-chennai", label: "Renovation contractors in Chennai" },
      { href: "/commercial-construction-chennai", label: "Commercial construction in Chennai" },
      { href: "/services", label: "See all services" },
    ],
  },
  {
    title: "Contact Lokra Infra in Mangadu",
    body: "Lokra Infra lists its main office at 343, First Floor, Kundrathur Main Road, Subam Nagar, KK Nagar, Mangadu, Chennai 600122. Call 93446 43324 or email lokrainfra@gmail.com with the site location, project type, and budget direction. The team can use that information to point you to the appropriate construction discussion.",
    links: [
      { href: "/contact", label: "Contact Lokra Infra" },
      { href: "/process", label: "See how project planning works" },
      { href: "/builders-in-kundrathur-chennai", label: "Builders in Kundrathur" },
    ],
  },
];

export default function Page() {
  return (
    <CityServiceLandingPage
      route="/builders-in-mangadu-chennai"
      eyebrow="Mangadu construction planning"
      title="Builders in Mangadu, Chennai"
      intro="If you are planning a build in Mangadu, start with the site and the written scope. Lokra Infra's published packages give you a way to compare rates, waterproofing, quality records, and allowances before a builder conversation turns into a quote."
      serviceName="Builders in Mangadu, Chennai"
      serviceDescription="Lokra Infra discusses construction planning in Mangadu, Chennai, using a site brief and published package comparisons to clarify scope before a quote."
      discoveryPaths={[
        {
          href: "/packages",
          label: "Compare published packages",
          desc: "Read the public construction price ladder from ₹1,899 per sq.ft. and the scope behind each level.",
        },
        {
          href: "/process",
          label: "Understand the process",
          desc: "See the planning, site assessment, and execution stages Lokra Infra publishes for a project discussion.",
        },
        {
          href: "/contact",
          label: "Discuss a Mangadu site",
          desc: "Share the location, project type, drawings if available, and budget direction with the team.",
        },
      ]}
      summaryCards={summaryCards}
      sections={sections}
      faqs={faqs}
      ctaTitle="Have a Mangadu site in mind? Share the location, scope, and budget direction so the first discussion starts with useful project information."
    />
  );
}
