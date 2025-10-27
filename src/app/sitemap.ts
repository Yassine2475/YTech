import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.deine-domain.de";
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1 },
    { url: `${base}/leistungen`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/ueber-uns`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: new Date(), priority: 0.8 },
  ];
}
