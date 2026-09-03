import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Showroom Virtual de Diseño de Interiores",
  description:
    "Recorre el showroom virtual de Visual en Cumbayá, Quito, y descubre el estilo de nuestro estudio de diseño de interiores.",
  keywords: ["showroom diseño de interiores Quito", "showroom Cumbayá"],
};

export default function ShowroomVirtual() {
  return (
    <>
      <PageHero image="/images/showroom-hero.jpg" title="SHOWROOM VIRTUAL" />
      <section className="px-6 py-16 text-center sm:px-16 lg:py-24">
        <p className="mx-auto max-w-xl font-sans leading-relaxed text-body">
          Estamos preparando nuestro recorrido virtual. Mientras tanto,
          escríbenos y con gusto coordinamos una visita a nuestro showroom en
          Cumbayá.
        </p>
      </section>
    </>
  );
}
