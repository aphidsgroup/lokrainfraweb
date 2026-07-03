import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";
import "./responsive.css";

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
  title: "Lokra Infra — Premium Construction & Infrastructure, Chennai",
  description:
    "Expert PhD-led engineering team making smart homes & infrastructure truly future-ready across Chennai. Delivering premium residential and commercial projects with rigorous structural clarity.",
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
  openGraph: {
    title: "Lokra Infra — Premium Construction & Infrastructure, Chennai",
    description:
      "Expert PhD-led engineering team making smart homes & infrastructure truly future-ready in Chennai.",
    type: "website",
    locale: "en_IN",
    siteName: "Lokra Infra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokra Infra — Premium Construction & Infrastructure, Chennai",
    description:
      "Expert PhD-led engineering team making smart homes & infrastructure truly future-ready.",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lokra Infra",
              description:
                "Premium construction and infrastructure company in Chennai specializing in residential and commercial projects.",
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
        <ScrollToTop />
      </body>
    </html>
  );
}
