import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: [string, number][] = [
    ["", 1],
    ["/servicios", 0.9],
    ...services.map((s): [string, number] => [`/servicios/${s.slug}`, 0.9]),
    ["/diseno-de-interiores-cumbaya", 0.9],
    ["/portafolio", 0.8],
    ["/sobre-nosotros", 0.7],
    ["/showroom-virtual", 0.6],
    ["/contacto", 0.7],
  ];
  return routes.map(([route, priority]) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    images: route === "" ? [`${siteUrl}/images/home-hero.jpg`] : undefined,
  }));
}
