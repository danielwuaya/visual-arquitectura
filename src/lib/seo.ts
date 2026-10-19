import type { Metadata } from "next";
import { areas, contact, siteName, siteUrl } from "@/lib/site";
import type { Faq } from "@/lib/content";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  /** Título sin la plantilla "| Visual" (para el home). */
  absoluteTitle?: boolean;
};

/** Metadata completa por página: canonical propio, Open Graph y Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  image = "/images/home-hero.jpg",
  imageAlt = "Diseño de interiores por Visual en Quito y Cumbayá",
  absoluteTitle,
}: PageMetaInput): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "es_EC",
      type: "website",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const businessId = `${siteUrl}/#estudio`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    additionalType: "https://en.wikipedia.org/wiki/Interior_design",
    "@id": businessId,
    name: siteName,
    alternateName: ["Visual Arquitectura Interior", "Visual Diseño y Arquitectura"],
    description:
      "Estudio de diseño de interiores y arquitectura interior en Cumbayá, Quito. Proyectos residenciales, corporativos y comerciales.",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: [
      `${siteUrl}/images/showroom-hero.jpg`,
      `${siteUrl}/images/home-hero.jpg`,
      `${siteUrl}/images/founders-1.jpg`,
    ],
    telephone: contact.phonesE164[0],
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      addressLocality: `${contact.locality}, ${contact.city}`,
      addressRegion: contact.region,
      addressCountry: "EC",
    },
    hasMap: contact.mapsUrl,
    areaServed: areas.map((name) => ({ "@type": "Place", name: `${name}, Ecuador` })),
    founder: [
      { "@type": "Person", name: "Daniela Ludeña", jobTitle: "Diseñadora de interiores, co-fundadora" },
      { "@type": "Person", name: "María José Dávila", jobTitle: "Diseñadora de interiores, co-fundadora" },
    ],
    knowsAbout: [
      "Diseño de interiores",
      "Arquitectura interior",
      "Interiorismo residencial",
      "Diseño de oficinas",
      "Diseño de locales comerciales",
      "Remodelación de interiores",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phonesE164[0],
      contactType: "customer service",
      areaServed: "EC",
      availableLanguage: ["Spanish"],
    },
    sameAs: [contact.instagram, contact.tiktok, contact.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#web`,
    url: siteUrl,
    name: siteName,
    inLanguage: "es-EC",
    publisher: { "@id": businessId },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema(s: { name: string; description: string; path: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: "Diseño de interiores",
    description: s.description,
    url: `${siteUrl}${s.path}`,
    image: `${siteUrl}${s.image}`,
    provider: { "@id": businessId },
    areaServed: areas.map((name) => ({ "@type": "Place", name: `${name}, Ecuador` })),
  };
}
