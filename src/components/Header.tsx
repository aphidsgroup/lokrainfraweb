"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "JV Partnerships", href: "/jv-partnerships" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        id="site-header"
        className={`nav-base ${scrolled ? "nav-solid" : "nav-transparent"}`}
      >
        <div className="container-lokra">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "76px",
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
              <Image
                src="/logo-white-trimmed.png"
                alt="Lokra Infra"
                width={150}
                height={48}
                style={{ objectFit: "contain", objectPosition: "left center", height: "46px", width: "auto", display: "block", marginLeft: 0 }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex"
              style={{ alignItems: "center", gap: "2.25rem" }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--concrete)",
                    transition: "color 0.22s",
                    textDecoration: "none",
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
              ))}

              <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px" }}>
                <span>Start a Project</span>
                <ArrowUpRight size={13} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              style={{
                background: "none",
                border: "1px solid var(--border-warm)",
                color: "var(--warm-white)",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          backgroundColor: "var(--carbon)",
          display: "flex",
          flexDirection: "column",
          padding: "6rem 1.75rem 3rem",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.25, 0, 0, 1)",
        }}
      >
        {/* Logo inside drawer */}
        <div style={{ marginBottom: "3rem" }}>
          <Image
            src="/logo-white-trimmed.png"
            alt="Lokra Infra"
            width={130}
            height={42}
            style={{ objectFit: "contain", objectPosition: "left center", height: "40px", width: "auto", display: "block", marginLeft: 0 }}
          />
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: i === 0 ? "var(--warm-white)" : "var(--concrete)",
                padding: "0.875rem 0",
                borderBottom: "1px solid var(--border-warm)",
                textDecoration: "none",
                display: "block",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--warm-white)")
              }
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  i === 0 ? "var(--warm-white)" : "var(--concrete)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: "auto" }}>
          <Link
            href="/contact"
            className="btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={13} style={{ position: "relative", zIndex: 1 }} />
          </Link>
        </div>
      </div>
    </>
  );
}
