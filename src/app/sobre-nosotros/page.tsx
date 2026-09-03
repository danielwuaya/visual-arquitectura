import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a Daniela Ludeña y María José Dávila, fundadoras de Visual, estudio de diseño de interiores en Quito.",
};

export default function SobreNosotros() {
  return (
    <>
      <PageHero
        image="/images/about-hero.jpg"
        title="Visual nació del deseo de transformar espacios en experiencias"
        subtitle="Creemos que el diseño interior no solo se ve, se vive"
      />

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-16 lg:py-24">
          <h2 className="font-display text-3xl">Sobre Visual</h2>
          <p className="mt-6 font-sans leading-relaxed">
            Somos un estudio de arquitectura interior que transforma espacios
            en experiencias. Diseñamos con propósito, equilibrio y
            sensibilidad, uniendo formas y sensaciones en cada detalle.
          </p>
          <p className="mt-4 font-sans leading-relaxed">
            Nuestro objetivo es que cada rincón inspire armonía, estilo y
            bienestar.
          </p>
        </div>
        <div className="relative min-h-[360px]">
          <Image
            src="/images/founders-2.jpg"
            alt="Daniela y María José en su estudio"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-[#f5f2ee] px-6 py-16 sm:px-16 lg:py-24">
        <h2 className="text-center font-display text-3xl">
          Conoce a las fundadoras
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center font-sans leading-relaxed">
          Detrás de cada proyecto hay una visión compartida. Daniela Ludeña y
          María José Dávila, fundadoras de Visual, combinan su experiencia,
          creatividad y sensibilidad para transformar espacios en lugares
          llenos de armonía, estilo y propósito.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
          <div className="text-center">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden">
              <Image
                src="/images/founder-daniela.jpg"
                alt="Daniela Ludeña"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <p className="mt-4 font-display text-lg">Daniela Ludeña</p>
            <p className="font-sans text-xs uppercase tracking-wide-nav text-taupe-dark">
              Co-fundadora
            </p>
          </div>
          <div className="text-center">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden">
              <Image
                src="/images/founder-mariajose.jpg"
                alt="María José Dávila"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <p className="mt-4 font-display text-lg">María José Dávila</p>
            <p className="font-sans text-xs uppercase tracking-wide-nav text-taupe-dark">
              Co-fundadora
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
