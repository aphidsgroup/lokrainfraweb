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