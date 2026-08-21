import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Lokra Infra | Construction & Infrastructure Chennai",
  description:
    "Full-spectrum construction services in Chennai: residential construction, commercial construction, turnkey execution, renovation, civil works, and JV development partnerships.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — Lokra Infra | Construction & Infrastructure Chennai",
    description:
      "Full-spectrum construction services in Chennai: residential construction, commercial construction, turnkey execution, renovation, civil works, and JV development partnerships.",
    url: "https://www.lokrainfra.in/services",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const SERVICES = [
  {
    num: "01",
    title: "Residential Construction",
    desc: "From independent homes and villas to multi-unit apartment development, we deliver residential projects with engineering discipline and structured site coordination. Every project begins with a thorough site assessment and scope definition — not assumptions. Foundation to handover, one accountable team.",
    tags: ["Independent Homes", "Villas", "Apartment Development", "Plot + Construction"],
  },
  {
    num: "02",
    title: "Commercial Construction",
    desc: "Office spaces, retail outlets, showrooms, and commercial complexes built to specification with engineering-led planning and transparent scope management. We coordinate structural, MEP, and finishing works under a single execution framework — keeping timelines and costs visible throughout.",
    tags: ["Offices", "Retail Outlets", "Commercial Complexes", "Showrooms"],
  },
  {
    num: "03",
    title: "Turnkey Project Execution",
    desc: "End-to-end project delivery from civil works through interior finishing. Single point of accountability, structured milestone timelines, and quality review at every phase. No handoffs between fragmented contractors. No scope ambiguity. One delivery partner from ground-breaking to handover.",
    tags: ["End-to-End", "Single Accountability", "Milestone Delivery", "Finishing Works"],
  },
  {
    num: "04",
    title: "Renovation & Structural Upgrades",
    desc: "Structured renovation with prior site assessment, engineering scope review, and transparent billing. We approach renovation with the same discipline as new construction — no open-ended estimates, no scope creep, no surprise additions mid-project. Ideal for both residential and commercial properties.",
    tags: ["Residential Renovation", "Commercial Refits", "Structural Repair", "Upgrades"],
  },
  {
    num: "05",
    title: "Infrastructure & Civil Works",
    desc: "Civil infrastructure projects planned and executed with technical discipline. Roads, compound boundary works, drainage systems, site grading, and foundation-level infrastructure. Whether standalone civil works or part of a larger development, our engineering-led approach applies across all scales.",
    tags: ["Roads & Drainage", "Compound Works", "Site Development", "Foundation Works"],
  },
  {
    num: "06",
    title: "JV & Development Partnerships",
    desc: "Structured joint venture conversations for landowners and development partners. Feasibility-first assessment before any development direction. Transparent revenue-sharing terms, clear scope definitions, and a verified construction execution track. We approach partnerships with the same clarity we bring to construction.",
    tags: ["Joint Ventures", "Landowner Partnership", "Development Feasibility", "Revenue Sharing"],
  },
];

const SERVICES_OFFERED = [
  {
    title: "Building Contract",
    items: [
      "Civil Work - Sq.Ft. (upto Plastering Work)",
      "Total Work - Sq.Ft. (incl. Finishing Works)",
      "Bill of Quantity (B.O.Q. - Item Wise)",
    ],
  },
  {
    title: "Project Management Consulting",
    items: [
      "Design (Drawings Only)",
      "Design & Execution (Drawings & Site Supervision)",
      "Execution (Site Supervision Only)",
    ],
  },
  {
    title: "Structural Detailing",
    items: [
      "Design (Drawings Only)",
      "Design & Execution (Drawings & Site Supervision)",
      "Execution (Site Supervision Only)",
    ],
  },
  {
    title: "Interiors",
    items: [
      "Design (Drawings Only)",
      "Design & Execution (Drawings & Site Supervision)",
      "Total Contract (B.O.Q. - Item Wise)",
    ],
  },
];

const CHENNAI_SERVICE_ROUTES = [
  {
    href: "/home-construction-chennai",
    title: "Home Construction Company in Chennai",
    desc: "For independent homes, villas, and residential builds where package fit and process visibility matter before execution starts.",
  },
  {
    href: "/building-contractors-chennai",
    title: "Building Contractors in Chennai",
    desc: "For clients comparing contractor execution across residential, commercial, and turnkey work with clearer scope and milestone expectations.",
  },
  {
    href: "/civil-contractors-chennai",
    title: "Civil Contractors in Chennai",
    desc: "For site development, drainage, compound works, foundation-linked infrastructure, and broader civil execution planning.",
  },
  {
    href: "/commercial-construction-chennai",
    title: "Commercial Construction in Chennai",
    desc: "For offices, retail outlets, showrooms, and broader commercial builds where execution sequencing and scope clarity matter.",
  },
  {
    href: "/villa-construction-chennai",
    title: "Villa Construction in Chennai",
    desc: "For premium residential and villa-style builds where package depth, detailing, and process visibility matter more.",
  },
  {
    href: "/renovation-contractors-chennai",
    title: "Renovation Contractors in Chennai",
    desc: "For residential and commercial renovation work where existing-condition review and clearer scope definition matter before execution.",
  },
];

const PRIORITY_AREA_ROUTES = [
  {
    href: "/builders-in-omr-chennai",
    title: "Builders in OMR, Chennai",
    desc: "Corridor-first route for mixed residential, villa, commercial, civil, and renovation intent around OMR.",
  },
  {
    href: "/builders-in-porur-chennai",
    title: "Builders in Porur, Chennai",
    desc: "Locality-first route for Porur-area home, commercial, renovation, and civil-linked project planning.",
  },
  {
    href: "/builders-in-tambaram-chennai",
    title: "Builders in Tambaram, Chennai",
    desc: "Locality-first route for Tambaram-area project routing across residential, commercial, renovation, and civil scope.",
  },
  {
    href: "/builders-in-velachery-chennai",
    title: "Affordable Builders in Velachery, Chennai",
    desc: "Area-first route for Velachery buyers comparing affordable home, villa, and package-led construction options from ₹1,899 / sq.ft.",
  },
  {
    href: "/builders-in-sholinganallur-chennai",
    title: "Affordable Builders in Sholinganallur, Chennai",
    desc: "Area-first route for Sholinganallur home and commercial intent with budget-conscious package comparisons and branded scope clarity.",
  },
  {
    href: "/builders-along-gst-road-chennai",
    title: "Affordable Builders Along GST Road, Chennai",
    desc: "Corridor-first route for GST Road residential, commercial, renovation, and package-led low-cost planning intent starting from ₹1,899 / sq.ft.",
  },
  {
    href: "/builders-in-adyar-chennai",
    title: "Builders in Adyar, Chennai",
    desc: "Premium-locality route for Adyar home, villa, and higher-expectation residential build planning with stronger package-fit framing.",
  },
  {
    href: "/builders-in-besant-nagar-chennai",
    title: "Builders in Besant Nagar, Chennai",
    desc: "Premium-locality route for Besant Nagar home and villa planning where finish expectations and package depth matter more than generic price-only claims.",
  },
  {
    href: "/builders-in-kolathur-chennai",
    title: "Affordable Builders in Kolathur, Chennai",
    desc: "Direct-response locality route for Kolathur home, renovation, and budget-conscious builder searches tied to the real package ladder.",
  },
];

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Lokra Infra Services",
  url: "https://www.lokrainfra.in/services",
  description:
    "Full-spectrum construction services in Chennai including residential, commercial, turnkey, renovation, civil works, and JV development partnerships.",
  mainEntity: {
    "@type": "OfferCatalog",
    name: "Lokra Infra Service Catalog",
    itemListElement: SERVICES.map((svc) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: svc.title,
        description: svc.desc,
        areaServed: "Chennai, Tamil Nadu, India",
        provider: {
          "@type": "Organization",
          name: "Lokra Infra",
          url: "https://www.lokrainfra.in",
        },
      },
    })),
  },
};

const servicesBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lokrainfra.in/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.lokrainfra.in/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            paddingTop: "9rem",
            paddingBottom: "4rem",
            backgroundColor: "var(--charcoal)",
            borderBottom: "1px solid var(--border-warm)",
          }}
        >
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">What We Build</span>
            </div>
            <h1
              className="display-lg"
              style={{ color: "var(--warm-white)", maxWidth: "760px", marginBottom: "1.5rem" }}
            >
              Full-Spectrum Construction Capability
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "560px" }}>
              Lokra Infra operates across residential, commercial, turnkey, renovation, civil, and development partnership segments — with the same engineering-led execution standard applied to every project type.
            </p>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--charcoal)", borderTop: "1px solid var(--border-warm)", borderBottom: "1px solid var(--border-warm)" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Services Offered</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--warm-white)", maxWidth: "900px", marginBottom: "1rem" }}>
              Clear Service Formats For Different Project Needs.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "760px", marginBottom: "2rem" }}>
              This section shows the service formats Lokra Infra can take up, from building contracts and consulting support to structural detailing and interiors.
            </p>

            <div className="services-offered-grid" style={{ display: "grid", gap: "1.25rem" }}>
              {SERVICES_OFFERED.map((group) => (
                <div key={group.title} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.35rem" }}>
                  <div style={{ display: "inline-flex", padding: "0.7rem 1rem", marginBottom: "1rem", border: "1px solid var(--border-warm)", backgroundColor: "var(--charcoal)" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.6vw, 1.25rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--warm-white)" }}>
                      {group.title}
                    </h3>
                  </div>

                  <div className="services-offered-items" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ border: "1px solid var(--border-warm)", backgroundColor: "rgba(245,241,234,0.03)", padding: "1rem", minHeight: "100%" }}>
                        <p style={{ fontFamily: "var(--font-display)", fontSize: "0.92rem", lineHeight: 1.5, color: "var(--warm-white)", textTransform: "none" }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="section-py" style={{ backgroundColor: "var(--warm-white)" }}>
          <div className="container-lokra">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                className="service-detail-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: "2.5rem",
                  padding: "3rem 0",
                  borderBottom: "1px solid var(--border-light)",
                  borderTop: i === 0 ? "1px solid var(--border-light)" : "none",
                }}
              >
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--accent)" }}>
                    {svc.num}
                  </span>
                </div>
                <div>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,1.8vw,1.5rem)", fontWeight: 700, letterSpacing: "-0.01em", textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "1rem" }}
                  >
                    {svc.title}
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--text-dark-2)", maxWidth: "640px", marginBottom: "1.5rem" }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid rgba(182,90,42,0.25)", padding: "4px 10px", backgroundColor: "rgba(182,90,42,0.06)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--stone-white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">Popular Chennai Searches</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--text-dark)", maxWidth: "820px", marginBottom: "1rem" }}>
              Start With The Route That Matches Your Requirement.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.98rem", lineHeight: 1.8, color: "var(--text-dark-2)", maxWidth: "760px", marginBottom: "2rem" }}>
              If you are comparing builders, contractors, or civil-execution partners in Chennai, these focused pages help you start from the right requirement instead of reading one generic services page only.
            </p>
            <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
              {CHENNAI_SERVICE_ROUTES.map((route) => (
                <Link key={route.href} href={route.href} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", padding: "1.35rem", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem,1.5vw,1.2rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "0.75rem" }}>
                      {route.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--text-dark-2)" }}>
                      {route.desc}
                    </p>
                  </div>
                  <span className="btn-text" style={{ color: "var(--accent)" }}>
                    Explore This Page <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--warm-white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">Priority Chennai Areas</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--text-dark)", maxWidth: "820px", marginBottom: "1rem" }}>
              Start With The Strongest Chennai Area Clusters.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.98rem", lineHeight: 1.8, color: "var(--text-dark-2)", maxWidth: "760px", marginBottom: "2rem" }}>
              These area pages help Lokra expand beyond city-level service routes without thin locality spam. The current rollout now includes corridor pages, affordable package-led areas, premium-locality routes, and direct competitor-response localities — all grounded in real service fit rather than fake rank claims.
            </p>
            <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
              {PRIORITY_AREA_ROUTES.map((route) => (
                <Link key={route.href} href={route.href} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--stone-white)", padding: "1.35rem", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem,1.5vw,1.2rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "0.75rem" }}>
                      {route.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--text-dark-2)" }}>
                      {route.desc}
                    </p>
                  </div>
                  <span className="btn-text" style={{ color: "var(--accent)" }}>
                    Explore This Area <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)", padding: "4rem 0" }}>
          <div className="container-lokra" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
                Ready to Discuss a Project?
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,2vw,1.5rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--warm-white)" }}>
                Share Your Requirement — We&rsquo;ll Guide The Next Steps.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              <span>Start a Project Inquiry</span>
              <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
