"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const content = ref.current!.querySelector(".cta-content");
      if (content) gsap.from(content, { y: 48, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact-cta"
      ref={ref}
      className="section-py"
      style={{
        backgroundColor: "var(--carbon)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--border-warm)",
      }}
    >
      {/* Large background text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(8rem, 20vw, 22rem)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
            color: "rgba(245,241,234,0.018)",
            whiteSpace: "nowrap",
          }}
        >
          BUILD
        </span>
      </div>

      <div
        className="container-lokra"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="cta-content"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.75rem",
              }}
            >
              <div className="accent-bar" style={{ margin: 0 }} />
              <span className="label-sm">Start Here</span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "var(--warm-white)",
                marginBottom: "1.5rem",
              }}
            >
              Let&rsquo;s Discuss Your Next Project With Clarity.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.75,
                color: "var(--concrete)",
                marginBottom: "2.75rem",
                maxWidth: "460px",
              }}
            >
              Share your project requirement and our team will guide the next
              steps with a practical, engineering-led approach. Residential,
              commercial, turnkey, or JV — we handle it with structure.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                <span>Start a Project Inquiry</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  style={{ position: "relative", zIndex: 1 }}
                />
              </Link>
              <Link href="/contact" className="btn-outline-dark">
                Contact Lokra Infra
              </Link>
            </div>
          </div>

          {/* Right: contact info */}
          <div
            style={{
              backgroundColor: "var(--charcoal)",
              border: "1px solid var(--border-warm)",
              padding: "clamp(2rem, 3vw, 3rem)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "2rem",
              }}
            >
              Contact Information
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Chennai, Tamil Nadu, India",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 00000 00000",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@lokrainfra.com",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid var(--border-warm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon
                      size={15}
                      style={{ color: "var(--accent)" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.625rem",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--concrete)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "var(--warm-white)",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal rule */}
            <div
              style={{
                margin: "2rem 0",
                height: "1px",
                backgroundColor: "var(--border-warm)",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                lineHeight: 1.6,
                color: "var(--concrete)",
              }}
            >
              Response within 1 business day. For urgent project enquiries,
              call directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
