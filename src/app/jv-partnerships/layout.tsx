import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JV & Development Partnerships — Lokra Infra | Landowner & Development Clarity Chennai",
  description:
    "Explore structured JV and development partnership conversations with Lokra Infra for Chennai landowners, investors, and development partners — feasibility-first, engineering-led, and scope-clear.",
  keywords: [
    "JV development Chennai",
    "joint venture builders Chennai",
    "landowner development partnership Chennai",
    "real estate development partner Chennai",
    "construction JV Chennai",
    "Lokra Infra JV partnerships",
  ],
  alternates: {
    canonical: "/jv-partnerships",
  },
  openGraph: {
    title: "JV & Development Partnerships — Lokra Infra",
    description:
      "Feasibility-first JV and development partnership discussions for Chennai landowners and development partners, led with engineering clarity and structured execution thinking.",
    url: "https://www.lokrainfra.in/jv-partnerships",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "JV & Development Partnerships — Lokra Infra",
    description:
      "Structured JV and development partnership discussions for Chennai landowners and partners — feasibility-first, engineering-led, and execution-aware.",
  },
};

export default function JVPartnershipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
