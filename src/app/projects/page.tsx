import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Lokra Infra | Construction Portfolio Chennai",
  description:
    "Lokra Infra construction project portfolio — residential homes, villas, apartment developments, commercial spaces, civil works, and JV development projects across Chennai.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Lokra Infra | Construction Portfolio Chennai",
    description:
      "Lokra Infra construction project portfolio — residential homes, villas, apartment developments, commercial spaces, civil works, and JV development projects across Chennai.",
    url: "https://www.lokrainfra.in/projects",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const CATEGORIES = [
  { id: "homes", num: "01", label: "Premium Homes", desc: "Bespoke independent homes built with precision engineering and refined material execution across Chennai residential zones." },
  { id: "villas", num: "02", label: "Independent Villas", desc: "Architect-designed villas with structural clarity, high-quality material selection, and disciplined site-coordinated delivery." },
  { id: "apartments", num: "03", label: "Apartment Development", desc: "Multi-unit residential development from structural planning through finishing — delivered as a coordinated single-team project." },
  { id: "commercial", num: "04", label: "Commercial Spaces", desc: "Offices, retail outlets, and commercial buildings engineered for long-term performance and practical usability." },
  { id: "civil", num: "05", label: "Infrastructure & Civil", desc: "Civil works and site infrastructure executed with technical discipline — roads, drainage, compound structures, and site development." },
  { id: "jv", num: "06", label: "JV Development Projects", desc: "Partnership-driven development projects structured with feasibility clarity and engineering execution credibility for landowners." },
];

const BG_SHADES = ["#1A1816", "#1E1C19", "#201F1D", "#1C1B17", "#211F1C", "#191817"];

const BROWSE_PATHS = [
  {
    href: "#featured-project",
    label: "Browse By Project Proof",
    desc: "See real, in-progress and completed work — starting with the Kundrathur PEB warehouse project below.",
  },
  {
    href: "/chennai-areas",
    label: "Browse By Chennai Area",
    desc: "Find builder and construction pages grouped by Central, South, West, North, and outer Chennai zones.",
  },
  {
    href: "/packages",
    label: "Browse By Budget",
    desc: "Compare the real public price ladder from ₹1,899 / sq.ft. to find the package step that fits your project.",
  },
];

const FEATURED_PROJECT = {
  title: "Kundrathur PEB Project",
  subtitle: "6,000 sq.ft. material warehouse by Lokra Infra",
  location: "Kundrathur, Chennai",
  category: "PEB / Industrial Storage",
  scope: "Material warehouse",
  overview:
    "This featured project captures a 6,000 sq.ft. pre-engineered building warehouse delivered in Kundrathur for material-storage use. The image sequence shows the project from site rituals and early groundwork through steel-frame erection and completed exterior access, making it a stronger live reference than a generic category-only portfolio block.",
  highlights: [
    "6,000 sq.ft. material warehouse",
    "PEB structural frame progression",
    "Groundwork to completion coverage",
    "Live project photos optimized for web delivery",
  ],
  gallery: [
    { src: "/projects/kundrathur-peb-project/1.webp", alt: "Kundrathur PEB project pooja and early site start", caption: "Project start / pooja stage" },
    { src: "/projects/kundrathur-peb-project/10.webp", alt: "Kundrathur PEB project site clearing and groundwork", caption: "Groundwork and site preparation" },
    { src: "/projects/kundrathur-peb-project/22.webp", alt: "Kundrathur PEB project steel frame erection in progress", caption: "Steel frame erection stage" },
    { src: "/projects/kundrathur-peb-project/24.webp", alt: "Kundrathur PEB project internal steel structure progress", caption: "Internal frame progress" },
    { src: "/projects/kundrathur-peb-project/26.webp", alt: "Kundrathur PEB project front shed structure progress", caption: "Front elevation under progress" },
    { src: "/projects/kundrathur-peb-project/29.webp", alt: "Kundrathur PEB project completed exterior warehouse front", caption: "Completed exterior view" },
    { src: "/projects/kundrathur-peb-project/30.webp", alt: "Kundrathur PEB project finished warehouse entry and facade", caption: "Finished entry and facade" },
    { src: "/projects/kundrathur-peb-project/33.webp", alt: "Kundrathur PEB project completed warehouse exterior with stair access", caption: "Final access-side exterior" },
  ],
};

export default function ProjectsPage() {
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
              <span className="label-sm">Our Work</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "720px", marginBottom: "1.5rem" }}>
              Our Project Portfolio
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "620px", marginBottom: "2.5rem" }}>
            Lokra Infra works across residential, commercial, civil, and partnership-led projects in Chennai with a structured execution approach. This page shows the project categories we operate in, while deeper project references are discussed directly based on scope, stage, and fit.
            </p>
            <div style={{ display: "inline-flex", padding: "1rem 1.5rem", backgroundColor: "var(--charcoal)", borderLeft: "2px solid var(--accent)", maxWidth: "760px", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--concrete)", lineHeight: 1.7 }}>
                We share project-specific reference context, execution discussions, and relevant work examples during direct conversations so each discussion stays aligned to the actual requirement.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              <a href="#featured-project" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                Project Proof
              </a>
              <Link href="/chennai-areas" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                Browse By Area
              </Link>
              <Link href="/packages" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                Full Price Ladder
              </Link>
              <Link href="/services" className="btn-text" style={{ color: "var(--warm-white)", border: "1px solid var(--border-warm)", padding: "0.5rem 0.9rem" }}>
                All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--charcoal)", borderBottom: "1px solid var(--border-warm)", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Choose How You Want To Start</span>
            </div>
            <h2 className="display-md" style={{ color: "var(--warm-white)", maxWidth: "780px", marginBottom: "1rem" }}>
              Browse By Project Proof, Area, Or Budget.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--concrete)", maxWidth: "720px", marginBottom: "1.75rem" }}>
              Different buyers start from different questions. Use whichever path matches how you're evaluating Lokra Infra right now — you can always move between them.
            </p>
            <div className="page-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
              {BROWSE_PATHS.map((path) => (
                <Link key={path.href} href={path.href} style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--carbon)", padding: "1.1rem", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "0.85rem" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", color: "var(--warm-white)", marginBottom: "0.4rem" }}>
                      {path.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", lineHeight: 1.6, color: "var(--concrete)" }}>
                      {path.desc}
                    </div>
                  </div>
                  <span className="btn-text" style={{ color: "var(--accent)" }}>
                    Explore This Path <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-project" className="section-py" style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid var(--border-light)", scrollMarginTop: "6rem" }}>
          <div className="container-lokra" style={{ display: "grid", gap: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm light">Featured Project</span>
            </div>

            <div style={{ display: "grid", gap: "1.5rem", border: "1px solid var(--border-light)", backgroundColor: "var(--stone-white)", padding: "1.5rem" }}>
              <div style={{ display: "grid", gap: "0.9rem" }}>
                <h2 className="display-md" style={{ color: "var(--text-dark)", maxWidth: "900px", marginBottom: "0.25rem" }}>
                  {FEATURED_PROJECT.title}
                </h2>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", margin: 0 }}>
                  {FEATURED_PROJECT.subtitle}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", lineHeight: 1.8, color: "var(--text-dark-2)", maxWidth: "880px" }}>
                  {FEATURED_PROJECT.overview}
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "0.9rem" }}>
                <div style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", padding: "1rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.45rem" }}>Location</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--text-dark)" }}>{FEATURED_PROJECT.location}</div>
                </div>
                <div style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", padding: "1rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.45rem" }}>Type</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--text-dark)" }}>{FEATURED_PROJECT.category}</div>
                </div>
                <div style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", padding: "1rem" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.45rem" }}>Scope</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--text-dark)" }}>{FEATURED_PROJECT.scope}</div>
                </div>
              </div>

              <div style={{ display: "grid", gap: "0.9rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                {FEATURED_PROJECT.highlights.map((item) => (
                  <div key={item} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", padding: "0.95rem 1rem" }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                {FEATURED_PROJECT.gallery.map((image) => (
                  <figure key={image.src} style={{ margin: 0, border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", overflow: "hidden" }}>
                    <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", backgroundColor: "#f4f1ec" }}>
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                    </div>
                    <figcaption style={{ padding: "0.85rem 0.95rem", fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-dark-2)" }}>
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories grid */}
        <section className="section-py" style={{ backgroundColor: "var(--carbon)" }}>
          <div className="container-lokra">
            <div
              className="page-grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5px",
                backgroundColor: "var(--border-warm)",
                marginBottom: "4rem",
              }}
            >
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat.id}
                  style={{
                    backgroundColor: BG_SHADES[i],
                    aspectRatio: "4 / 3",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Texture overlay */}
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg,rgba(245,241,234,0.02) 0,rgba(245,241,234,0.02) 1px,transparent 1px,transparent 40px)" }} />
                  {/* Gradient */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(11,11,10,0.85) 0%,transparent 65%)" }} />
                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "0.5rem" }}>
                      {cat.num}
                    </span>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.9375rem,1.4vw,1.125rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--warm-white)", marginBottom: "0.5rem" }}>
                      {cat.label}
                    </h2>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--muted-sand,#C4B6A4)" }}>
                      {cat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to contact */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", color: "var(--concrete)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Looking for relevant reference context or want to discuss a similar project?<br />
                Our team can walk you through the right project category, execution approach, and discussion points for your requirement.
              </p>
              <Link href="/contact" className="btn-primary">
                <span>Request Project References</span>
                <ArrowUpRight size={14} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
