import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chennai Construction Areas | Lokra Infra",
  description:
    "Explore Lokra Infra's Chennai area pages grouped across Central Chennai, South Chennai, West Chennai, North Chennai, and Emerging Suburbs.",
  alternates: { canonical: "/chennai-areas" },
  openGraph: {
    title: "Chennai Construction Areas | Lokra Infra",
    description:
      "Explore Lokra Infra's Chennai area pages grouped across Central Chennai, South Chennai, West Chennai, North Chennai, and Emerging Suburbs.",
    url: "https://www.lokrainfra.in/chennai-areas",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
};

const AREA_GROUPS = [{"zone": "Central Chennai", "areas": [{"label": "Alwarpet", "href": "/builders-in-alwarpet-chennai"}, {"label": "Anna Nagar", "href": "/builders-in-anna-nagar-chennai"}, {"label": "Mylapore", "href": "/builders-in-mylapore-chennai"}, {"label": "Nungambakkam", "href": "/builders-in-nungambakkam-chennai"}, {"label": "R.A. Puram", "href": "/builders-in-ra-puram-chennai"}, {"label": "T. Nagar", "href": "/builders-in-t-nagar-chennai"}, {"label": "Choolaimedu", "href": "/builders-in-choolaimedu-chennai"}, {"label": "Guindy", "href": "/builders-in-guindy-chennai"}]}, {"zone": "South Chennai", "areas": [{"label": "Adyar", "href": "/builders-in-adyar-chennai"}, {"label": "Besant Nagar", "href": "/builders-in-besant-nagar-chennai"}, {"label": "Kandanchavadi", "href": "/builders-in-kandanchavadi-chennai"}, {"label": "Kottivakkam", "href": "/builders-in-kottivakkam-chennai"}, {"label": "Madipakkam", "href": "/builders-in-madipakkam-chennai"}, {"label": "Medavakkam", "href": "/builders-in-medavakkam-chennai"}, {"label": "Nanganallur", "href": "/builders-in-nanganallur-chennai"}, {"label": "OMR", "href": "/builders-in-omr-chennai"}, {"label": "Palavakkam", "href": "/builders-in-palavakkam-chennai"}, {"label": "Pallikaranai", "href": "/builders-in-pallikaranai-chennai"}, {"label": "Perungudi", "href": "/builders-in-perungudi-chennai"}, {"label": "Sholinganallur", "href": "/builders-in-sholinganallur-chennai"}, {"label": "Thiruvanmiyur", "href": "/builders-in-thiruvanmiyur-chennai"}, {"label": "Thoraipakkam", "href": "/builders-in-thoraipakkam-chennai"}, {"label": "Velachery", "href": "/builders-in-velachery-chennai"}, {"label": "Manapakkam", "href": "/builders-in-manapakkam-chennai"}]}, {"zone": "West Chennai", "areas": [{"label": "Ambattur", "href": "/builders-in-ambattur-chennai"}, {"label": "Avadi", "href": "/builders-in-avadi-chennai"}, {"label": "Iyyappanthangal", "href": "/builders-in-iyyappanthangal-chennai"}, {"label": "Kattupakkam", "href": "/builders-in-kattupakkam-chennai"}, {"label": "Kizhalathur", "href": "/builders-in-kizhalathur-chennai"}, {"label": "Koyambedu", "href": "/builders-in-koyambedu-chennai"}, {"label": "Maduravoyal", "href": "/builders-in-maduravoyal-chennai"}, {"label": "Mogappair", "href": "/builders-in-mogappair-chennai"}, {"label": "Porur", "href": "/builders-in-porur-chennai"}, {"label": "Poonamallee", "href": "/builders-in-poonamallee-chennai"}, {"label": "Ramapuram", "href": "/builders-in-ramapuram-chennai"}, {"label": "Valasaravakkam", "href": "/builders-in-valasaravakkam-chennai"}, {"label": "Vanagaram", "href": "/builders-in-vanagaram-chennai"}]}, {"zone": "North Chennai", "areas": [{"label": "Ennore", "href": "/builders-in-ennore-chennai"}, {"label": "Kolathur", "href": "/builders-in-kolathur-chennai"}, {"label": "Madhavaram", "href": "/builders-in-madhavaram-chennai"}, {"label": "Manali", "href": "/builders-in-manali-chennai"}, {"label": "Perambur", "href": "/builders-in-perambur-chennai"}, {"label": "Royapuram", "href": "/builders-in-royapuram-chennai"}, {"label": "Tondiarpet", "href": "/builders-in-tondiarpet-chennai"}, {"label": "Vyasarpadi", "href": "/builders-in-vyasarpadi-chennai"}]}, {"zone": "Emerging Suburbs", "areas": [{"label": "Chromepet", "href": "/builders-in-chromepet-chennai"}, {"label": "Guduvanchery", "href": "/builders-in-guduvanchery-chennai"}, {"label": "Kelambakkam", "href": "/builders-in-kelambakkam-chennai"}, {"label": "Kundrathur", "href": "/builders-in-kundrathur-chennai"}, {"label": "Mangadu", "href": "/builders-in-mangadu-chennai"}, {"label": "Navallur", "href": "/builders-in-navallur-chennai"}, {"label": "Omalur", "href": "/builders-in-omalur-chennai"}, {"label": "Padur", "href": "/builders-in-padur-chennai"}, {"label": "Perungalathur", "href": "/builders-in-perungalathur-chennai"}, {"label": "Singaperumal Koil", "href": "/builders-in-singaperumal-koil-chennai"}, {"label": "Sriperumbudur", "href": "/builders-in-sriperumbudur-chennai"}, {"label": "Tambaram", "href": "/builders-in-tambaram-chennai"}, {"label": "Urapakkam", "href": "/builders-in-urapakkam-chennai"}, {"label": "Vandalur", "href": "/builders-in-vandalur-chennai"}]}];

export default function ChennaiAreasPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingTop: "9rem", paddingBottom: "4rem", backgroundColor: "var(--charcoal)", borderBottom: "1px solid var(--border-warm)" }}>
          <div className="container-lokra">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)" }} />
              <span className="label-sm">Chennai Area Coverage</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--warm-white)", maxWidth: "820px", marginBottom: "1.5rem" }}>
              Chennai Area Builder Pages
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)", lineHeight: 1.75, color: "var(--concrete)", maxWidth: "720px" }}>
              Browse Lokra Infra's Chennai area pages grouped across all major city zones and growth corridors. These routes are designed to help buyers compare builders, home-construction options, and pricing-led fit across the areas you care about.
            </p>
          </div>
        </section>

        <section className="section-py" style={{ backgroundColor: "var(--warm-white)" }}>
          <div className="container-lokra" style={{ display: "grid", gap: "2rem" }}>
            {AREA_GROUPS.map((group) => (
              <section key={group.zone} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--stone-white)", padding: "1.5rem" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem,1.7vw,1.35rem)", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                  {group.zone}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--text-dark-2)", marginBottom: "1rem" }}>
                  {group.areas.length} areas
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.9rem" }}>
                  {group.areas.map((area) => (
                    <Link key={area.href} href={area.href} style={{ border: "1px solid var(--border-light)", backgroundColor: "var(--warm-white)", padding: "1rem", textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "0.8rem" }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "0.45rem" }}>
                          {area.label}
                        </div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-dark-2)" }}>
                          Builders, home construction, and pricing-led project guidance.
                        </div>
                      </div>
                      <span className="btn-text" style={{ color: "var(--accent)" }}>
                        Explore This Area <ArrowUpRight size={14} strokeWidth={2.2} />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
