"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function resolveLocation(link: HTMLAnchorElement): string {
  if (link.hasAttribute("data-wa-fab")) return "floating-whatsapp";
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  if (link.closest("nav")) return "nav";
  if (link.closest("main")) return "main";
  return "unknown";
}

function resolveEventName(href: string): string | null {
  if (href.startsWith("tel:")) return "contact_phone_click";
  if (href.startsWith("mailto:")) return "contact_email_click";
  if (href.includes("wa.me")) return "contact_whatsapp_click";
  return null;
}

export default function ContactAnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const eventName = resolveEventName(href);
      if (!eventName) return;

      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {
          page_path: pathname,
          link_location: resolveLocation(link),
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
