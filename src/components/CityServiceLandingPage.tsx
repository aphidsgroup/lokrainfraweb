import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type SummaryCard = {
  title: string;
  desc: string;
};

type ContentSection = {
  title: string;
  body: string;
  bullets?: string[];
  links?: { href: string; label: string }[];
};

type FaqItem = {
  q: string;
  a: string;
};

type CityServiceLandingPageProps = {
  route: string;
  eyebrow: string;
  title: string;
  intro: string;
  serviceName: string;
  serviceDescription: string;
  summaryCards: SummaryCard[];
  sections: ContentSection[];
  faqs: FaqItem[];
  ctaTitle: string;
};

const SITE_URL = "https://www.lokrainfra.in";

export default function CityServiceLandingPage({
  route,
  eyebrow,
  title,
  intro,
  serviceName,
  serviceDescription,
  summaryCards,
  sections,
  faqs,
  ctaTitle,
}: CityServiceLandingPageProps) {
  const url = `${SITE_URL}${route}`;
  const isAreaRoute = route.startsWith("/builders-in-") || route === "/builders-along-gst-road-chennai";
  const relatedLinks = isAreaRoute
    ? [
        { href: "/chennai-areas", label: "Explore All Chennai Areas" },
        { href: "/home-construction-chennai", label: "Home Construction Chennai" },
        { href: "/building-contractors-chennai", label: "Building Contractors Chennai" },
        { href: "/affordable-construction-packages-chennai", label: "Affordable Construction Cost Chennai" },
        { href: "/budget-home-construction-chennai", label: "Budget Home Construction Chennai" },
      ]
    : [
        { href: "/packages", label: "Compare The Full Price Ladder" },
        { href: "/home-construction-chennai", label: "Home Construction Chennai" },
        { href: "/services", label: "Review All Services" },
        { href: "/chennai-areas", label: "Explore All Chennai Areas" },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    areaServed: "Chennai, Tamil Nadu, India",
    provider: {
      "@type": "Organization",
      name: "Lokra Infra",
      url: SITE_URL,
      telephone: "+91 93446 43324",
      email: "lokrainfra@gmail.com",
    },
    url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: serviceName, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
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
              <span className="label-sm">{eyebrow}</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "820px", marginBottom: "1.5rem" }}>
              {title}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)",
                lineHeight: 1.75,
                color: "var(--concrete)",
                maxWidth: "650px",
              }}
            >
              {intro}
            </p>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid var(--border-light)" }}>
          <div className="container-lokra">
            <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5px", backgroundColor: "var(--border-light)" }}>
              {summaryCards.map((card) => (
                <div key={card.title} style={{ backgroundColor: "var(--stone-white)", padding: "2rem", borderLeft: "2px solid var(--accent)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
                    {card.title}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--text-dark-2)", lineHeight: 1.75 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--warm-white)" }}>
          <div className="container-lokra" style={{ display: "grid", gap: "1.5rem" }}>
            {sections.map((section, index) => (
              <div key={section.title} style={{ border: "1px solid var(--border-light)", backgroundColor: index % 2 === 0 ? "var(--stone-white)" : "var(--warm-white)", padding: "1.5rem" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem,1.6vw,1.35rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "0.85rem" }}>
                  {section.title}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-dark-2)", maxWidth: "820px" }}>
                  {section.body}
                </p>
                {section.bullets && section.bullets.length > 0 ? (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", marginTop: "1rem" }}>
                    {section.bullets.map((bullet) => (
                      <div key={bullet} style={{ border: "1px solid var(--border-light)", backgroundColor: "rgba(245,241,234,0.55)", padding: "0.95rem 1rem" }}>
                        <p style={{ fontFamily: "var(--font-display)", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", lineHeight: 1.6 }}>
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.links && section.links.length > 0 ? (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "1rem" }}>
                    {section.links.map((link) => (
                      <Link key={link.href} href={link.href} className="btn-text" style={{ color: "var(--accent)" }}>
                        {link.label} <ArrowUpRight size={14} strokeWidth={2.2} />
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--warm-white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="container-lokra" style={{ maxWidth: "980px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">Related Chennai Routes</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--text-dark)", marginBottom: "1rem" }}>
              Compare The Next Best Route Before You Decide.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-dark-2)", maxWidth: "860px", marginBottom: "1.5rem" }}>
              Use these linked routes to compare nearby area coverage, broader Chennai builder paths, and price-led construction guidance before choosing only on one locality page.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginBottom: "2rem" }}>
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn-text" style={{ color: "var(--accent)" }}>
                  {link.label} <ArrowUpRight size={14} strokeWidth={2.2} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--warm-white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="container-lokra" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">FAQ</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--text-dark)", marginBottom: "1.5rem" }}>
              Common Questions
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {faqs.map((faq) => (
                <details key={faq.q} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--stone-white)", padding: "1rem 1.1rem" }}>
                  <summary style={{ cursor: "pointer", listStyle: "none", fontFamily: "var(--font-display)", fontSize: "0.92rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", lineHeight: 1.5 }}>
                    {faq.q}
                  </summary>
                  <p style={{ marginTop: "0.85rem", fontFamily: "var(--font-body)", fontSize: "0.93rem", lineHeight: 1.75, color: "var(--text-dark-2)" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "var(--carbon)", borderTop: "1px solid var(--border-warm)", padding: "4rem 0" }}>
          <div className="container-lokra" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
                Ready to Discuss Your Requirement?
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,2vw,1.5rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--warm-white)" }}>
                {ctaTitle}
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
