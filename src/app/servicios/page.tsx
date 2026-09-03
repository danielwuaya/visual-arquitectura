import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  CalendarIcon,
  SwatchIcon,
  CubeIcon,
  CoinsIcon,
  ExecutionIcon,
} from "@/components/StepIcons";

export const metadata: Metadata = {
  title: "Servicios de Diseño de Interiores en Quito",
  description:
    "Diseño de interiores residencial, corporativo y comercial en Quito. Planificamos y acompañamos cada paso para crear espacios funcionales, estéticos y llenos de bienestar.",
  keywords: [
    "servicios de diseño de interiores Quito",
    "diseño residencial Quito",
    "diseño de oficinas corporativas",
    "diseño de locales comerciales Ecuador",
  ],
  openGraph: {
    title: "Servicios de Diseño de Interiores | Visual",
    description:
      "Diseño de interiores residencial, corporativo y comercial en Quito.",
    images: [{ url: "/images/services-hero.jpg" }],
  },
};

const steps = [
  { icon: CalendarIcon, label: "Agenda tu visita" },
  { icon: SwatchIcon, label: "Planificación" },
  { icon: CubeIcon, label: "Diseño" },
  { icon: CoinsIcon, label: "Presupuesto" },
  { icon: ExecutionIcon, label: "Ejecución" },
];

const categories = [
  {
    title: "Diseño Residencial",
    text: "En cada proyecto residencial, creamos espacios que equilibran estética, funcionalidad y bienestar.",
    image: "/images/project-living-kitchen.jpg",
  },
  {
    title: "Diseño Corporativo",
    text: "Creamos entornos laborales modernos, funcionales y estéticamente coherentes con la identidad de cada empresa.",
    image: "/images/category-corporativo.jpg",
  },
  {
    title: "Diseño Comercial",
    text: "Espacios comerciales y retail pensados para atraer, conectar y reflejar la identidad de cada marca.",
    image: "/images/category-comercial.jpg",
  },
];

export default function Servicios() {
  return (
    <>
      <PageHero
        image="/images/services-hero.jpg"
        title="Servicios"
        subtitle="Diseñamos, planificamos y acompañamos cada paso para crear espacios funcionales y estéticos"
      />

      <section className="bg-taupe px-6 py-16 text-white sm:px-16 lg:py-20">
        <h2 className="text-center font-display text-3xl">Nuestro Procedimiento</h2>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-10 sm:grid-cols-5">
          {steps.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="h-10 w-10" />
              <p className="mt-3 font-sans text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-16 lg:py-24">
        <h2 className="text-center font-display text-3xl">Categorías de diseño</h2>
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="bg-[#f0ece5]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-body">
                  {c.text}
                </p>
                <Link
                  href="#contacto"
                  className="mt-5 inline-block bg-taupe px-6 py-2.5 font-sans text-xs uppercase tracking-wide-nav text-white transition-colors hover:bg-taupe-dark"
                >
                  Escríbenos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
