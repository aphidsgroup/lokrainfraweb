import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Lokra Infra — Engineering-Led Construction, Chennai",
  description:
    "Learn about Lokra Infra — a Chennai-based construction and infrastructure company founded in 2026 by a team with 10+ years of site experience, 50+ completed projects, and 50 years of family material supplier background.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Lokra Infra — Engineering-Led Construction, Chennai",
    description:
      "Learn about Lokra Infra — founded in 2026 by a team with 10+ years of site experience, 50+ completed projects, and 50 years of family material supplier background.",
    url: "https://www.lokrainfra.in/about",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            paddingTop: "10rem",
            paddingBottom: "var(--section-py)",
            backgroundColor: "var(--carbon)",
            borderBottom: "1px solid var(--border-warm)",
          }}
        >
          <div className="container-lokra">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div className="accent-bar" style={{ margin: 0 }} />
              <span className="label-sm">About Us</span>
            </div>
            <h1
              className="display-lg"
              style={{ color: "var(--warm-white)", maxWidth: "700px", marginBottom: "2rem" }}
            >
              Engineering-Led Construction For Serious Projects
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                lineHeight: 1.75,
                color: "var(--concrete)",
                maxWidth: "600px",
                marginBottom: "2.5rem",
              }}
            >
              Lokra Infra is a Chennai-based construction and infrastructure company
              founded in 2026 by builders with around 10 years of site experience,
              50+ project completions, and deep material-grounded execution roots.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Work With Us</span>
              <ArrowUpRight size={14} style={{ position: "relative", zIndex: 1 }} />
            </Link>
          </div>
        </section>

        {/* Story */}
        <section
          className="section-py"
          style={{ backgroundColor: "var(--charcoal)" }}
        >
          <div className="container-lokra">
            <div
              className="page-grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(3rem, 6vw, 7rem)",
              }}
            >
              <div>
                <h2
                  className="display-md"
                  style={{ color: "var(--warm-white)", marginBottom: "1.75rem" }}
                >
                  Our Foundation
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--concrete)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Lokra Infra was established with a clear conviction: serious
                  construction clients in Chennai deserve more than verbal promises
                  and reactive site management. They deserve planning clarity,
                  accountable site execution, and a team that understands what it
                  takes to build properly from the ground up.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--concrete)",
                  }}
                >
                  The founders bring around 10 years of site experience and 50+
                  project completions into Lokra Infra, while the family business
                  brings 50 years of material supplier knowledge that sharpens cost,
                  quality, and procurement judgment on every project.
                </p>
              </div>
              <div>
                <h2
                  className="display-md"
                  style={{ color: "var(--warm-white)", marginBottom: "1.75rem" }}
                >
                  Chennai Focus
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--concrete)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Built in and for Chennai. We understand the city&rsquo;s
                  regulatory landscape, contractor ecosystem, material supply
                  conditions, and the expectations of both residential clients
                  and commercial stakeholders.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "var(--concrete)",
                  }}
                >
                  From independent homes to commercial structures, our experience is
                  rooted in Chennai&rsquo;s built environment and strengthened by practical
                  material knowledge passed through a long-standing family supply
                  business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
