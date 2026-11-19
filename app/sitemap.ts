import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const u = "https://proxxymedia.com";
  return ["/", "/services/", "/pricing/", "/about/", "/contact/", "/privacy/", ...SERVICES.map((s) => `/services/${s.slug}/`)].map((p) => ({ url: u + p, lastModified: "2026-11-19" }));
}
