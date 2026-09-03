import type { Metadata } from "next";
import { Marcellus, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Visual Diseño de Interiores Quito | Arquitectura Interior",
    template: "%s | Visual Diseño de Interiores",
  },
  description:
    "Estudio de arquitectura interior en Quito. Diseñamos hogares, oficinas y espacios comerciales con armonía, estilo y bienestar.",
  openGraph: {
    title: "Visual Diseño de Interiores Quito | Arquitectura Interior",
    description:
      "Estudio de arquitectura interior en Quito. Diseñamos hogares, oficinas y espacios comerciales con armonía, estilo y bienestar.",
    url: siteUrl,
    siteName: "Visual Diseño de Interiores",
    locale: "es_EC",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
