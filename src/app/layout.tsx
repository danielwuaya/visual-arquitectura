import type { Metadata } from "next";
import { Marcellus, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { contact } from "@/lib/site";

const display = Marcellus({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = "https://www.visualarquitecturainterior.com";

const defaultTitle =
  "Diseño de Interiores en Quito | Visual Arquitectura Interior";
const defaultDescription =
  "Estudio de diseño de interiores y arquitectura interior en Quito y Cumbayá. Diseñamos hogares, oficinas y espacios comerciales con armonía, estilo y bienestar. Agenda tu asesoría.";
const keywords = [
  "diseño de interiores Quito",
  "diseñadores de interiores Quito",
  "arquitectura interior Ecuador",
  "estudio de diseño de interiores",
  "decoración de interiores Quito",
  "remodelación de interiores Quito",
  "diseño de interiores Cumbayá",
  "diseño de oficinas Quito",
  "diseño de espacios comerciales",
  "interiorismo Ecuador",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Visual Diseño de Interiores",
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: "Visual Diseño de Interiores" }],
  creator: "Visual Diseño de Interiores",
  publisher: "Visual Diseño de Interiores",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Visual Diseño de Interiores",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/images/home-hero.jpg",
        width: 1311,
        height: 737,
        alt: "Diseño de interiores por Visual, Quito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/home-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignFirm",
  name: "Visual Diseño de Interiores",
  image: `${siteUrl}/images/home-hero.jpg`,
  url: siteUrl,
  telephone: contact.phones[0],
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    addressLocality: "Cumbayá, Quito",
    addressCountry: "EC",
  },
  areaServed: "Quito, Ecuador",
  sameAs: [contact.instagram, contact.tiktok, contact.linkedin],
  description: defaultDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
