import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const now = new Date();
  const withBase = (path: string) => `${base}${path}`;
  return [
    { url: withBase("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: withBase("/privacy-policy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
