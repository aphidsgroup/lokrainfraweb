"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

type NavLink = { label: string; href: string };
type NavGroup = { label: string; items: NavLink[] };
type NavEntry = NavLink | NavGroup;

const isGroup = (entry: NavEntry): entry is NavGroup => "items" in entry;

const PROJECT_LINKS: NavLink[] = [
  { label: "Completed Projects", href: "/projects/completed" },
  { label: "Ongoing Projects", href: "/projects/ongoing" },
];

const NAV_LINKS: NavEntry[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Projects", items: PROJECT_LINKS },
  { label: "Process", href: "/process" },
  { label: "JV Partnerships", href: "/jv-partnerships" },
  { label: "Contact", href: "/contact" },
];

const DESKTOP_LINK_STYLE = {
  fontFamily: "var(--font-display)",
  fontSize: "0.6875rem",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  transition: "color 0.22s",
  textDecoration: "none",
} as const;

/* Desktop disclosure dropdown: hover, click, and keyboard all open it;
   Escape, click-outside, and focus leaving the group close it. */
function DesktopNavDropdown({ label, items, menuId }: NavGroup & { menuId: string }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  /* Delayed close so the pointer can travel to the panel without it
     disappearing mid-move. The panel also sits flush under the trigger. */
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 260);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!groupRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const openAndFocusFirstItem = () => {
    cancelClose();
    setOpen(true);
    requestAnimationFrame(() => itemRefs.current[0]?.focus());
  };

  return (
    <div
      ref={groupRef}
      style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          cancelClose();
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          cancelClose();
          setOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          cancelClose();
          setOpen((prev) => !prev);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            openAndFocusFirstItem();
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{
          ...DESKTOP_LINK_STYLE,
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          color: open || hovered ? "var(--warm-white)" : "var(--concrete)",
        }}
      >
        {label}
        <ChevronDown
          size={12}
          strokeWidth={2.2}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.22s",
          }}
        />
      </button>

      <div
        id={menuId}
        style={{
          display: open ? "block" : "none",
          position: "absolute",
          top: "100%",
          left: "-0.75rem",
          /* Padding, not margin — keeps the hover path unbroken. */
          paddingTop: "1.35rem",
          zIndex: 101,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "0.35rem 0",
            minWidth: "228px",
            backgroundColor: "rgba(11, 11, 10, 0.98)",
            border: "1px solid var(--border-warm)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {items.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                ref={(node) => {
                  itemRefs.current[i] = node;
                }}
                onClick={() => setOpen(false)}
                style={{
                  ...DESKTOP_LINK_STYLE,
                  display: "block",
                  padding: "0.7rem 1.1rem",
                  color: "var(--concrete)",
                  transition: "color 0.22s, background-color 0.22s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--warm-white)";
                  e.currentTarget.style.backgroundColor = "rgba(245, 241, 234, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--concrete)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.color = "var(--warm-white)";
                  e.currentTarget.style.backgroundColor = "rgba(245, 241, 234, 0.05)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.color = "var(--concrete)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Closing the drawer collapses any expanded section.
  const closeMobileNav = () => {
    setMobileOpen(false);
    setMobileGroupOpen(null);
  };

  const toggleMobileNav = () => {
    if (mobileOpen) closeMobileNav();
    else setMobileOpen(true);
  };

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
              className="desktop-nav"
              style={{ alignItems: "center", gap: "2.25rem" }}
            >
              {NAV_LINKS.map((entry) =>
                isGroup(entry) ? (
                  <DesktopNavDropdown
                    key={entry.label}
                    label={entry.label}
                    items={entry.items}
                    menuId="desktop-projects-menu"
                  />
                ) : (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    style={{
                      ...DESKTOP_LINK_STYLE,
                      color: "var(--concrete)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--warm-white)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--concrete)")
                    }
                  >
                    {entry.label}
                  </Link>
                )
              )}

              <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px" }}>
                <span>Start a Project</span>
                <ArrowUpRight size={13} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              id="mobile-menu-toggle"
              className="mobile-menu-toggle"
              onClick={toggleMobileNav}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
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
        className="mobile-nav-drawer"
        /* Closed, the drawer stays mounted offscreen so the slide animation can
           run — inert takes its links out of the tab order and the a11y tree,
           with aria-hidden as the fallback for browsers without inert. */
        inert={!mobileOpen}
        aria-hidden={mobileOpen ? undefined : true}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          backgroundColor: "var(--carbon)",
          display: "flex",
          flexDirection: "column",
          padding: "5.5rem 1.25rem 1.25rem",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.25, 0, 0, 1)",
        }}
      >
        <div className="mobile-nav-scroll" style={{ display: "flex", flexDirection: "column", minHeight: 0, flex: 1 }}>
          {/* Logo inside drawer */}
          <div style={{ marginBottom: "1.5rem", flexShrink: 0 }}>
            <Image
              src="/logo-white-trimmed.png"
              alt="Lokra Infra"
              width={130}
              height={42}
              style={{ objectFit: "contain", objectPosition: "left center", height: "40px", width: "auto", display: "block", marginLeft: 0 }}
            />
          </div>

          <nav className="mobile-nav-links" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {([{ label: "Home", href: "/" }, ...NAV_LINKS] as NavEntry[]).map((entry, i) => {
            if (isGroup(entry)) {
              const group = entry;
              const panelId = `mobile-${group.label.toLowerCase().replace(/\s+/g, "-")}-links`;
              const expanded = mobileGroupOpen === group.label;
              return (
                <div key={group.label} style={{ borderBottom: "1px solid var(--border-warm)" }}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setMobileGroupOpen((current) => (current === group.label ? null : group.label))
                    }
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.15rem, 6.4vw, 1.55rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      textTransform: "uppercase",
                      color: expanded ? "var(--warm-white)" : "var(--concrete)",
                      padding: "0.8rem 0",
                      transition: "color 0.2s",
                    }}
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      size={20}
                      strokeWidth={2.2}
                      style={{
                        flexShrink: 0,
                        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s",
                      }}
                    />
                  </button>
                  <div
                    id={panelId}
                    className="mobile-nav-subnav"
                    style={{
                      display: expanded ? "flex" : "none",
                      flexDirection: "column",
                      paddingBottom: "0.5rem",
                      borderLeft: "1px solid var(--border-warm)",
                      paddingLeft: "0.9rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {entry.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileNav}
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                          textTransform: "uppercase",
                          color: "var(--concrete)",
                          padding: "0.55rem 0",
                          textDecoration: "none",
                          display: "block",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--warm-white)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--concrete)")
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={entry.href}
                href={entry.href}
                onClick={closeMobileNav}
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
                {entry.label}
              </Link>
            );
          })}
          </nav>

          <div className="mobile-nav-cta" style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border-warm)", flexShrink: 0 }}>
            <Link
              href="/contact"
              className="btn-primary"
              onClick={closeMobileNav}
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={13} style={{ position: "relative", zIndex: 1 }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
