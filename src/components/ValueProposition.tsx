"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const headline = sectionRef.current!.querySelector(".vp-headline");
      const pillars = sectionRef.current!.querySelectorAll(".vp-pillar");
      const imageBlock = sectionRef.current!.querySelector(".vp-image-block");
      if (headline) gsap.from(headline, { y: 48, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: headline, start: "top 85%" } });
      if (pillars.length) gsap.from(pillars, { y: 28, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.12, scrollTrigger: { trigger: ".vp-pillars", start: "top 85%" } });
      if (imageBlock) gsap.from(imageBlock, { opacity: 0, scale: 0.97, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: imageBlock, start: "top 85%" } });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="value-proposition"
      ref={sectionRef}
      className="section-py"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="container-lokra">
        {/* Top row: Label + Headline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div className="accent-bar" style={{ margin: 0 }} />
              <span className="label-sm">Our Approach</span>
            </div>

            <h2
              className="vp-headline display-lg"
              style={{
                color: "var(--warm-white)",
                maxWidth: "720px",
              }}
            >
              Every Project Is A{" "}
              <span style={{ color: "var(--accent)" }}>Long-Term Asset</span>
            </h2>
          </div>
        </div>

        {/* Content grid: quote + image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* Left: editorial text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.0625rem, 1.4vw, 1.3125rem)",
                lineHeight: 1.7,
                color: "var(--warm-white)",
                marginBottom: "2.5rem",
                fontWeight: 300,
              }}
            >
              Every project is planned with engineering clarity, executed with site
              discipline, and delivered with the confidence expected from a premium
              construction partner. We don&rsquo;t manage projects from a distance —
              we coordinate them from the ground.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.75,
                color: "var(--concrete)",
              }}
            >
              Lokra Infra is built by an expert PhD-led engineering team
              dedicated to making smart homes and infrastructure truly
              future-ready. We combine rigorous structural discipline, clear
              scope management, and advanced technical oversight so every project
              holds enduring value long after handover.
            </p>

            {/* Pillars */}
            <div
              className="vp-pillars"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem 2rem",
                marginTop: "3rem",
              }}
            >
              {[
                "PhD-Led Engineering Team",
                "Transparent Scope",
                "Site Discipline",
                "Structural Quality",
              ].map((p) => (
                <div key={p} className="vp-pillar">
                  <div
                    style={{
                      width: "24px",
                      height: "2px",
                      backgroundColor: "var(--accent)",
                      marginBottom: "0.75rem",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "var(--warm-white)",
                    }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + accent detail */}
          <div
            className="vp-image-block"
            style={{ position: "relative" }}
          >
            {/* Decorative frame */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                right: "-16px",
                width: "120px",
                height: "120px",
                border: "1px solid var(--accent-border)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                aspectRatio: "4 / 5",
                overflow: "hidden",
                backgroundColor: "var(--graphite)",
              }}
            >
              <img
                src="/project-residential.png"
                alt="Lokra Infra premium residential construction project in Chennai"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.85)",
                }}
              />
              {/* Caption overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem",
                  background:
                    "linear-gradient(to top, rgba(11,11,10,0.9), transparent)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  Premium Residential — Chennai
                </span>
              </div>
            </div>

            {/* Accent bottom line */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                left: "-16px",
                width: "80px",
                height: "80px",
                border: "1px solid var(--border-warm)",
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
