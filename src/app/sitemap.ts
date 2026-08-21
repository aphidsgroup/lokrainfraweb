import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lokrainfra.in";

const PUBLIC_ROUTES = [
  "",
  "/about",
  "/services",
  "/packages",
  "/projects",
  "/process",
  "/home-construction-chennai",
  "/building-contractors-chennai",
  "/civil-contractors-chennai",
  "/commercial-construction-chennai",
  "/villa-construction-chennai",
  "/renovation-contractors-chennai",
  "/builders-in-omr-chennai",
  "/builders-in-porur-chennai",
  "/builders-in-tambaram-chennai",
  "/builders-in-velachery-chennai",
  "/builders-in-sholinganallur-chennai",
  "/builders-along-gst-road-chennai",
  "/builders-in-adyar-chennai",
  "/builders-in-besant-nagar-chennai",
  "/builders-in-kolathur-chennai",
  "/jv-partnerships",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}