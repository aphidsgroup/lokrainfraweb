"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  direction?: "up" | "left" | "right" | "none";
}

export default function Reveal({ children, delay = 0, className = "", style = {}, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startTransform =
      direction === "up" ? "translateY(28px)" :
      direction === "left" ? "translateX(-28px)" :
      direction === "right" ? "translateX(28px)" : "none";

    el.style.opacity = "0";
    el.style.transform = startTransform;
    el.style.transition = `opacity 0.75s cubic-bezier(0.25,0,0,1) ${delay}ms, transform 0.75s cubic-bezier(0.25,0,0,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
