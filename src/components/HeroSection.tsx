"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal
      const lines = headRef.current?.querySelectorAll(".hero-line");
      if (lines?.length) {
        gsap.from(lines, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.2,
        });
      }

      gsap.from(".hero-sub", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.7,
      });

      gsap.from(".hero-ctas", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.95,
      });

      gsap.from(".hero-meta", {
        opacity: 0,
        duration: 1,
        delay: 1.2,
      });

      // Parallax on scroll
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Scroll indicator fade
      gsap.to(".scroll-cue", {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "30% top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        backgroundColor: "var(--carbon)",
      }}
    >
      {/* Background image with parallax */}
      <div
        ref={imgRef}
        style={{
          position: "absolute",
          inset: "-15% 0",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          src="/hero-bg.png"
          alt="Lokra Infra construction project — premium architectural structure in Chennai"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            filter: "brightness(0.45) saturate(0.8)",
          }}
        />
      </div>

      {/* Gradient Overlay — bottom-heavy for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to top, rgba(11,11,10,0.97) 0%, rgba(11,11,10,0.6) 45%, rgba(11,11,10,0.2) 80%, transparent 100%)",
        }}
      />

      {/* Grid overlay (engineering feel) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundImage:
            "linear-gradient(rgba(245,241,234,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,241,234,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div
        className="container-lokra"
        style={{
          position: "relative",
          zIndex: 2,
          paddingBottom: "clamp(3.5rem, 7vw, 7rem)",
          paddingTop: "8rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "980px" }}>
          {/* Eyebrow */}
          <div
            className="hero-meta"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "var(--accent)",
              }}
            />
            <span className="label-sm" style={{ opacity: 0.85 }}>
              Construction &amp; Infrastructure — Chennai
            </span>
          </div>

          {/* Headline */}
          <div ref={headRef} style={{ overflow: "hidden" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(3rem, 7vw, 7.25rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                color: "var(--warm-white)",
                marginBottom: "2rem",
              }}
            >
              <span
                className="hero-line"
                style={{ display: "block", marginBottom: "0.1em" }}
              >
                Built With
              </span>
              <span
                className="hero-line"
                style={{
                  display: "block",
                  color: "var(--accent)",
                  marginBottom: "0.1em",
                }}
              >
                Structure.
              </span>
              <span className="hero-line" style={{ display: "block" }}>
                Delivered With
              </span>
              <span className="hero-line" style={{ display: "block" }}>
                Discipline.
              </span>
            </h1>
          </div>

          {/* Subline */}
          <p
            className="hero-sub"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9375rem, 1.2vw, 1.125rem)",
              lineHeight: 1.7,
              color: "var(--concrete)",
              maxWidth: "520px",
              marginBottom: "2.75rem",
            }}
          >
            An expert PhD-led engineering team making smart homes and
            infrastructure truly future-ready across Chennai. We combine
            structural discipline with advanced execution for serious residential
            and commercial projects.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Link href="/contact" className="btn-primary">
              <span>Start a Project</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                style={{ position: "relative", zIndex: 1 }}
              />
            </Link>
            <Link href="/projects" className="btn-outline-dark">
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Bottom meta row */}
        <div
          className="hero-meta"
          style={{
            marginTop: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Tags */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["Residential", "Commercial", "Turnkey", "JV Development"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--concrete)",
                    opacity: 0.7,
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Scroll cue */}
          <div
            className="scroll-cue"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              color: "var(--concrete)",
              opacity: 0.5,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.625rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <ArrowDown size={12} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
