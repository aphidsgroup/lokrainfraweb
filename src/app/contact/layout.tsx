import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Lokra Infra — Construction Company Chennai | Project Enquiries",
  description:
    "Contact Lokra Infra for residential, commercial, turnkey, renovation, civil, and JV project enquiries in Chennai. Reach us by phone, email, or project enquiry form.",
  keywords: [
    "contact Lokra Infra",
    "construction company Chennai contact",
    "builders Chennai contact",
    "turnkey construction enquiry Chennai",
    "commercial construction Chennai contact",
    "Lokra Infra phone number",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Lokra Infra — Project Enquiries Chennai",
    description:
      "Speak with Lokra Infra about residential, commercial, turnkey, civil, renovation, or JV project requirements in Chennai.",
    url: "https://www.lokrainfra.in/contact",
    type: "website",
    siteName: "Lokra Infra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lokra Infra — Project Enquiries Chennai",
    description:
      "Get in touch with Lokra Infra for engineering-led construction project discussions in Chennai.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
