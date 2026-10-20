import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Experience from "@/components/Experience";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { siteName, siteUrl } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";

// Fuentes alojadas en el propio sitio: más rápidas y sin depender de Google.
const serif = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif-face",
  display: "swap",
});

const sans = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  variable: "--font-sans-face",
  weight: "300 600",
  display: "swap",
});

const defaultTitle = "Visual | Diseño de Interiores y Arquitectura Interior en Quito";
const defaultDescription =
  "Visual es un estudio de diseño de interiores y arquitectura interior. Creamos hogares, oficinas y espacios comerciales en Quito, Cumbayá y Tumbaco con armonía, estilo y bienestar. Agenda tu asesoría.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Visual",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { telephone: false },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "es_EC",
    type: "website",
    images: [{ url: "/images/proyectos/casa-betania/02.jpg", width: 2400, height: 1600, alt: "Diseño de interiores por Visual en Quito y Cumbayá" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/proyectos/casa-betania/02.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": "EC-P",
    "geo.placename": "Cumbayá, Quito",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-EC" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen">
        {/* Activa las animaciones solo si hay JavaScript (el contenido nunca queda oculto) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-2 focus:text-espresso">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Experience />
        <Analytics />
      </body>
    </html>
  );
}
