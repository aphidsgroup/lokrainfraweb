import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import "./globals.css";
import "./responsive.css";

const SITE_URL = "https://www.lokrainfra.in";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lokra Infra — Premium Construction & Infrastructure, Chennai",
  description:
    "Lokra Infra is a Chennai construction company founded in 2026 by a team with 10+ years of site experience with 50+ completed projects in previous company works, plus 50 years of family material supplier background.",
  keywords: [
    "construction company Chennai",
    "residential construction Chennai",
    "commercial construction Chennai",
    "villa construction Chennai",
    "turnkey construction Chennai",
    "building contractors Chennai",
    "infrastructure company Chennai",
    "JV development Chennai",
    "home construction Chennai",
    "Lokra Infra",
  ],
  authors: [{ name: "Lokra Infra" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lokra Infra — Premium Construction & Infrastructure, Chennai",
    description:
      "Engineering-led residential and commercial construction in Chennai, backed by 10+ years of site experience with 50+ completed projects in previous company works.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Lokra Infra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokra Infra — Premium Construction & Infrastructure, Chennai",
    description:
      "Engineering-led construction in Chennai with 10+ years of site experience with 50+ completed projects in previous company works.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3Q27S7KRVZ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3Q27S7KRVZ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lokra Infra",
              description:
                "Premium construction and infrastructure company in Chennai founded in 2026, backed by 10+ years of site experience with 50+ completed projects in previous company works and a 50-year family material supplier background.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              areaServed: "Chennai, Tamil Nadu, India",
              serviceType: [
                "Residential Construction",
                "Commercial Construction",
                "Turnkey Project Execution",
                "Infrastructure Development",
                "JV Development Partnerships",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
        <FloatingWhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
