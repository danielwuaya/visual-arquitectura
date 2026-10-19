import { caseStudies } from "@/lib/cases";
import { showroomSlides } from "@/lib/showroom";
import { siteUrl } from "@/lib/site";
import { breadcrumbSchema, businessId, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import DigitalShowroom, { type ShowroomRoom } from "@/components/DigitalShowroom";
import { delay } from "@/components/ui";
import { ContactSection } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Showroom Digital en 4K | Proyectos de Diseño de Interiores",
  description:
    "Recorre el showroom digital de Visual: proyectos reales de diseño de interiores en Quito y Cumbayá en pantalla completa y alta resolución (hasta 4K), ambiente por ambiente.",
  path: "/showroom-virtual",
  image: "/images/proyectos/boutique-almara/01.jpg",
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Showroom digital", path: "/showroom-virtual" },
];

const shortCaption = (alt: string) => {
  const t = alt.replace(/^Render 3D de /, "").split(/,| con | junto | en (?=[A-Z])/)[0].trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
};

const rooms: ShowroomRoom[] = caseStudies.map((c) => ({
  slug: c.slug,
  title: c.title,
  type: c.render ? "Render 3D" : c.type,
  slides:
    showroomSlides[c.slug] ??
    c.images.map((i) => ({ src: i.src, w: i.w, h: i.h, caption: shortCaption(i.alt) })),
}));

const totalPhotos = rooms.reduce((n, r) => n + r.slides.length, 0);

export default function Showroom() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Showroom digital de Visual Diseño de Interiores",
            url: `${siteUrl}/showroom-virtual`,
            creator: { "@id": businessId },
            image: rooms.flatMap((r) => r.slides.map((s) => `${siteUrl}${s.src}`)),
          },
        ]}
      />

      <section className="grain relative bg-ivory pt-32 lg:pt-40">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-12 lg:items-end lg:px-12 lg:pb-16">
          <div className="lg:col-span-8">
            <p className="eyebrow hero-fade" style={delay(0.1)}>
              Showroom digital · hasta 4K
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6.4vw,6rem)] leading-[1.02]">
              <span className="hero-line block overflow-hidden pb-[0.06em]"><span style={delay(0.15)}>Recorre nuestros</span></span>
              <span className="hero-line block overflow-hidden pb-[0.1em]">
                <span style={delay(0.27)} className="accent text-taupe-deep">proyectos reales</span>
              </span>
            </h1>
          </div>
          <div className="hero-fade lg:col-span-4 lg:pb-3" style={delay(0.5)}>
            <p className="text-[1.05rem] leading-relaxed">
              {rooms.length} proyectos y {totalPhotos} fotos en alta resolución, ambiente por ambiente. Ponlo en
              pantalla completa y míralo como si estuvieras ahí.
            </p>
            <p className="mt-4 text-xs text-body/70">
              Usa las flechas del teclado o desliza · Espacio para pausar · F para pantalla completa
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Visor del showroom">
        <DigitalShowroom rooms={rooms} />
      </section>

      <ContactSection placement="showroom" title={["¿Te imaginas tu espacio", "así?"]} />
    </>
  );
}
