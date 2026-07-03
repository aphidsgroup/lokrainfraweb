"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 200,
        width: "44px",
        height: "44px",
        backgroundColor: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(182,90,42,0.35)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.35s cubic-bezier(0.25,0,0,1), transform 0.35s cubic-bezier(0.25,0,0,1), background-color 0.25s, border-color 0.25s",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(182,90,42,0.15)";
        e.currentTarget.style.borderColor = "rgba(182,90,42,0.7)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = "rgba(182,90,42,0.35)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <ArrowUp size={16} strokeWidth={2} color="var(--accent)" />
    </button>
  );
}
