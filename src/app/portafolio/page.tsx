import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Portafolio de Proyectos de Diseño de Interiores",
  description:
    "Portafolio de proyectos de Visual: diseño de interiores residencial, corporativo y comercial en Quito y Cumbayá. Descubre nuestras transformaciones de espacios.",
  keywords: [
    "portafolio diseño de interiores Quito",
    "proyectos de interiorismo Ecuador",
    "antes y después diseño de interiores",
  ],
  openGraph: {
    title: "Portafolio de Proyectos | Visual Diseño de Interiores",
    description:
      "Descubre nuestros proyectos residenciales, corporativos y comerciales en Quito.",
    images: [{ url: "/images/portfolio-hero.jpg" }],
  },
};

const residencial = [
  "/images/project-living-kitchen.jpg",
  "/images/project-kitchen-island.jpg",
  "/images/project-tv-wall.jpg",
  "/images/project-tv-corridor.jpg",
  "/images/project-tv-shelf.jpg",
  "/images/project-dining.jpg",
  "/images/project-diningroom-classic.jpg",
  "/images/project-cabin-livingroom.jpg",
  "/images/project-bathroom-1.jpg",
  "/images/project-bathroom-2.jpg",
  "/images/project-bathroom-3.jpg",
  "/images/project-bathroom-shower.jpg",
  "/images/project-bathroom-visual.jpg",
  "/images/project-window.jpg",
];

const corporativoComercial = [
  "/images/project-office.jpg",
  "/images/project-retail-1.jpg",
  "/images/project-bar.jpg",
  "/images/project-chapel.jpg",
];

function Gallery({ images }: { images: string[] }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3">
      {images.map((src) => (
        <div key={src} className="relative aspect-square overflow-hidden">
          <Image
            src={src}
            alt="Proyecto Visual Diseño de Interiores"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(min-width: 640px) 33vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}

export default function Portafolio() {
  return (
    <>
      <PageHero
        image="/images/portfolio-hero.jpg"
        title="PORTAFOLIO"
        subtitle="Transformamos espacios, creamos experiencias"
      />

      <section className="px-6 py-16 sm:px-16 lg:py-24">
        <h2 className="text-center font-display text-3xl">
          Proyectos residenciales
        </h2>
        <div className="mt-10">
          <Gallery images={residencial} />
        </div>
      </section>

      <section className="bg-[#f5f2ee] px-6 py-16 sm:px-16 lg:py-24">
        <h2 className="text-center font-display text-3xl">
          Proyectos corporativos y comerciales
        </h2>
        <div className="mt-10">
          <Gallery images={corporativoComercial} />
        </div>
      </section>
    </>
  );
}
