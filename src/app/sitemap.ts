import type { MetadataRoute } from "next";

const siteUrl = "https://www.visualarquitecturainterior.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sobre-nosotros", "/servicios", "/portafolio", "/showroom-virtual"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
