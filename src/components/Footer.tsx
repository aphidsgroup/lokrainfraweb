"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "JV Partnerships", href: "/jv-partnerships" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Residential Construction", href: "/services" },
  { label: "Commercial Construction", href: "/services" },
  { label: "Turnkey Execution", href: "/services" },
  { label: "Renovation & Upgrades", href: "/services" },
  { label: "Infrastructure & Civil", href: "/services" },
  { label: "JV Development", href: "/jv-partnerships" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "var(--charcoal)",
        borderTop: "1px solid var(--border-warm)",
      }}
    >
      {/* Main footer */}
      <div
        className="container-lokra"
        style={{ paddingTop: "5rem", paddingBottom: "3.5rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "clamp(2rem, 4vw, 4rem)",
          }}
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: "1.75rem" }}>
              <Image
                src="/logo-white-trimmed.png"
                alt="Lokra Infra"
                width={160}
                height={50}
                style={{ objectFit: "contain", objectPosition: "left center", height: "48px", width: "auto", display: "block", marginLeft: 0 }}
              />
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "var(--concrete)",
                maxWidth: "280px",
                marginBottom: "2rem",
              }}
            >
              Expert PhD-led engineering team making smart homes & infrastructure
              truly future-ready across Chennai and Tamil Nadu.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--concrete)",
                }}
              >
                📍 Chennai, Tamil Nadu, India
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--concrete)",
                }}
              >
                📞 +91 00000 00000
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--concrete)",
                }}
              >
                ✉ info@lokrainfra.com
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.5rem",
              }}
            >
              Navigation
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--concrete)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--warm-white)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--concrete)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.5rem",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {SERVICES.map((svc) => (
                <li key={svc.label}>
                  <Link
                    href={svc.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--concrete)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--warm-white)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--concrete)")
                    }
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.5rem",
              }}
            >
              Start a Project
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: "var(--concrete)",
                marginBottom: "1.5rem",
              }}
            >
              Share your requirement and we will guide next steps with clarity
              and engineering direction.
            </p>

            <Link
              href="/contact"
              className="btn-primary"
              style={{ display: "inline-flex", marginBottom: "1rem" }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight
                size={13}
                strokeWidth={2.5}
                style={{ position: "relative", zIndex: 1 }}
              />
            </Link>

            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.625rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-tertiary)",
                  marginBottom: "0.5rem",
                }}
              >
                Service Area
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "var(--concrete)",
                }}
              >
                Chennai & surrounding districts, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border-warm)",
          padding: "1.25rem var(--container-x)",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
            }}
          >
            © {new Date().getFullYear()} Lokra Infra. All rights reserved.
            Chennai, Tamil Nadu, India.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy", "Terms"].map((t) => (
              <Link
                key={t}
                href={`/${t.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--text-tertiary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--warm-white)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-tertiary)")
                }
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
