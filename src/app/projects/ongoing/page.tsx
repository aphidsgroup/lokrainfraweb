import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ONGOING_TITLE = "Ongoing Projects — Lokra Infra | Current Work By Area";
const ONGOING_DESCRIPTION =
  "Lokra Infra publishes its ongoing projects at area level only — Kundrathur, Manali, Red Hills, Kelambakkam, Minjur, and Guduvanchery. Project details stay private and are discussed directly. See completed work or talk to our team.";

export const metadata: Metadata = {
  title: ONGOING_TITLE,
  description: ONGOING_DESCRIPTION,
  alternates: {
    canonical: "/projects/ongoing",
  },
  openGraph: {
    title: ONGOING_TITLE,
    description: ONGOING_DESCRIPTION,
    url: "https://www.lokrainfra.in/projects/ongoing",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const ONGOING_AREAS = [
  { name: "Kundrathur", area: "Kundrathur" },
  { name: "Manali Project 01", area: "Manali" },
  { name: "Manali Project 02", area: "Manali" },
  { name: "Red Hills", area: "Red Hills" },
  { name: "Kelambakkam", area: "Kelambakkam" },
  { name: "Minjur", area: "Minjur" },
  { name: "Guduvanchery", area: "Guduvanchery" },
  { name: "Vengavasal", area: "Vengavasal" },
];

const REASONS = [
  {
    num: "01",
    label: "Client Privacy Comes First",
    desc: "Work under execution belongs to the client who commissioned it. Beyond the area, names, drawings, site specifics, and commercial terms stay private unless that client has agreed to share them.",
  },
  {
    num: "02",
    label: "Accuracy Over Progress Claims",
    desc: "A live site moves week to week. We would rather state the current position accurately in a conversation than leave a progress claim on a web page that quietly goes stale.",
  },
  {
    num: "03",
    label: "Reference Has To Match Scope",
    desc: "Reference context is only useful when it matches your build type, budget step, and site conditions. That match is made in a direct discussion, not from a public list.",
  },
];

const CONVERSATION_POINTS = [
  {
    label: "Your Scope, First",
    desc: "What you are planning to build, the site you are planning it on, and whether it fits the way we execute.",
  },
  {
    label: "Relevant Reference Context",
    desc: "Where a current project is genuinely comparable to your requirement, we discuss it directly — scoped to what is appropriate to share.",
  },
  {
    label: "The Right Package Step",
    desc: "Where your requirement sits on our published package ladder, so cost expectations are set from real numbers rather than estimates.",
  },
  {
    label: "Execution Approach",
    desc: "How a project is sequenced from structure through finishing, and what that means for coordination on your site.",
  },
];

export default function OngoingProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{ paddingTop: "9rem", paddingBottom: "4rem", backgroundColor: "var(--carbon)", borderBottom: "1px solid var(--border-warm)" }}
        >
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Current Work</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "720px", marginBottom: "1.5rem" }}>
              Ongoing Projects
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "620px", marginBottom: "2.5rem" }}>
              Lokra Infra publishes its current work at area level only. The list below names the areas where projects are ongoing. Anything beyond that — what is being built and for whom — is covered in a direct, scope-appropriate conversation with our team, not as a public showcase.
            </p>
            <div style={{ display: "inline-flex", padding: "1rem 1.5rem", backgroundColor: "var(--charcoal)", borderLeft: "2px solid var(--accent)", maxWidth: "760px", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--concrete)", lineHeight: 1.7 }}>
                That means we publish the area of each ongoing project and nothing further — no site photos, client names, project types, sizes, timelines, or progress percentages for work currently under execution. The published proof we do share sits on our completed projects page, and everything else is handled in conversation.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              <Link href="/contact" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                Talk To Our Team
              </Link>
              <Link href="/projects/completed" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                Completed Projects
              </Link>
              <Link href="/process" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                How We Execute
              </Link>
              <Link href="/packages" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                Full Price Ladder
              </Link>
            </div>
          </div>
        </section>

        {/* Ongoing projects, published at area level only */}
        <section
          className="section-py"
          aria-labelledby="ongoing-areas-heading"
          style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid var(--border-light)", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        >
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">Area-Level Reference</span>
            </div>
            <h2 id="ongoing-areas-heading" className="display-md" style={{ color: "var(--text-dark)", maxWidth: "780px", marginBottom: "1rem" }}>
              Ongoing Projects by Area
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-dark-2)", maxWidth: "720px", marginBottom: "1.75rem" }}>
              These are the areas where Lokra Infra currently has projects under execution. Each entry is published at area level only — the rest is discussed directly.
            </p>
            <ol
              className="page-grid-3"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}
            >
              {ONGOING_AREAS.map((project, index) => (
                <li key={project.name} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--stone-white)", padding: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "0.6rem" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--text-dark)", marginBottom: "0.6rem" }}>
                    {project.name}
                  </h3>
                  <dl style={{ display: "grid", gap: "0.25rem", margin: 0, fontFamily: "var(--font-body)", fontSize: "0.85rem", lineHeight: 1.65, color: "var(--text-dark-2)" }}>
                    <div style={{ display: "flex", gap: "0.35rem" }}>
                      <dt style={{ fontWeight: 600 }}>Status:</dt>
                      <dd style={{ margin: 0 }}>Ongoing</dd>
                    </div>
                    <div style={{ display: "flex", gap: "0.35rem" }}>
                      <dt style={{ fontWeight: 600 }}>Area:</dt>
                      <dd style={{ margin: 0 }}>{project.area}</dd>
                    </div>
                  </dl>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", lineHeight: 1.6, color: "var(--text-dark-2)", borderTop: "1px solid var(--border-light)", marginTop: "0.85rem", paddingTop: "0.75rem" }}>
                    Project images will be added.
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why current work is handled in conversation */}
        <section className="section-py" style={{ backgroundColor: "var(--charcoal)", borderBottom: "1px solid var(--border-warm)", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Why We Work This Way</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--warm-white)", maxWidth: "780px", marginBottom: "1rem" }}>
              Live Work Stays Private Until It Is Ours To Show.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "720px", marginBottom: "1.75rem" }}>
              Publishing running-site content is easy marketing and weak evidence. We hold current work back for three straightforward reasons.
            </p>
            <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
              {REASONS.map((reason) => (
                <div key={reason.num} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "0.6rem" }}>
                    {reason.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--warm-white)", marginBottom: "0.5rem" }}>
                    {reason.label}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", lineHeight: 1.65, color: "var(--concrete)" }}>
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What the direct conversation covers */}
        <section className="section-py" style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid var(--border-light)" }}>
          <div className="container-lokra" style={{ display: "grid", gap: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">What The Conversation Covers</span>
            </div>

            <div style={{ display: "grid", gap: "1.5rem", border: "1px solid var(--border-light)", backgroundColor: "var(--stone-white)", padding: "1.5rem" }}>
              <div style={{ display: "grid", gap: "0.9rem" }}>
                <h2 className="display-md" style={{ color: "var(--text-dark)", maxWidth: "900px", marginBottom: "0.25rem" }}>
                  A Scope-Appropriate Discussion, Not A Brochure
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", lineHeight: 1.8, color: "var(--text-dark-2)", maxWidth: "880px" }}>
                  When you reach out, the discussion is anchored to your requirement. Current-project references come up only where they are genuinely comparable to what you are planning, and only to the extent it is appropriate to share them.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.9rem" }}>
                {CONVERSATION_POINTS.map((point) => (
                  <div key={point.label} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", padding: "1.1rem" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                      {point.label}
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.65, color: "var(--text-dark-2)" }}>
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", borderTop: "1px solid var(--border-light)", paddingTop: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-dark-2)", margin: 0, flex: "1 1 320px" }}>
                  Want to see published proof first? The delivered Kundrathur PEB warehouse and our full project categories sit on the completed projects page.
                </p>
                <Link href="/projects/completed" className="btn-text">
                  View Completed Projects <ArrowUpRight size={14} strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py" style={{ backgroundColor: "var(--carbon)" }}>
          <div className="container-lokra" style={{ textAlign: "center" }}>
            <h2 className="display-md" style={{ color: "var(--warm-white)", maxWidth: "780px", margin: "0 auto 1.25rem" }}>
              Start The Conversation
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", color: "var(--concrete)", marginBottom: "2rem", lineHeight: 1.7, maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
              Tell us the scope, the site, and the stage you are at. We will take it from there and share whatever reference context is relevant to your project.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Discuss Your Project</span>
              <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
