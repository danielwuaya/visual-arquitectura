import Image from "next/image";
import Link from "next/link";

const projects = [
  { src: "/images/project-living-kitchen.jpg", alt: "Sala y cocina integradas" },
  { src: "/images/project-kitchen-island.jpg", alt: "Cocina con isla" },
  { src: "/images/project-tv-wall.jpg", alt: "Sala con chimenea y TV" },
  { src: "/images/project-dining.jpg", alt: "Comedor moderno" },
  { src: "/images/project-office.jpg", alt: "Oficina ejecutiva" },
  { src: "/images/project-retail-1.jpg", alt: "Espacio comercial" },
];

const audiences = [
  {
    n: "1",
    title: "Hogares y espacios personales",
    text: "Si buscas transformar tu casa, departamento o Airbnb, creamos espacios funcionales, estéticos y llenos de armonía. Desde el concepto hasta el último detalle, te ayudamos a diseñar un lugar que se sienta como tú.",
  },
  {
    n: "2",
    title: "Oficinas o espacios de trabajo",
    text: "Diseñamos oficinas que impulsan tu bienestar y el de tu equipo. Nos enfocamos en distribución, iluminación y mobiliario funcional que potencian la motivación y la eficiencia.",
  },
  {
    n: "3",
    title: "Espacios comerciales",
    text: "Tu espacio habla por tu marca. Creamos tiendas, boutiques y locales con diseño estratégico que atrae, conecta y vende. Nos especializamos en el desarrollo de proyectos corporativos.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/images/home-hero.jpg"
          alt="Dormitorio diseñado por Visual"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative flex h-full flex-col items-start justify-center px-6 sm:px-16">
          <h1 className="max-w-xl font-display text-3xl leading-tight text-white sm:text-5xl">
            En Visual creamos armonía, estilo y bienestar
          </h1>
          <a
            href="#contacto"
            className="mt-6 border border-white px-8 py-3 font-sans text-sm uppercase tracking-wide-nav text-white transition-colors hover:bg-white hover:text-black"
          >
            Agenda una cita
          </a>
        </div>
      </section>

      {/* Detrás del diseño */}
      <section className="grid lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-16 lg:py-24">
          <h2 className="font-display text-3xl">Detrás del diseño</h2>
          <p className="mt-6 font-sans text-base leading-relaxed">
            Visual nació de la pasión de Daniela y María José, dos diseñadoras
            de interiores ecuatorianas que encontraron en el diseño una forma
            de transformar emociones en espacios. Con más de 20 años de
            experiencia, combinan creatividad, técnica y sensibilidad para
            lograr que cada proyecto refleje la esencia de quien lo habita.
            Para ellas, diseñar no se trata solo de estética, sino de crear
            armonía, bienestar y funcionalidad en cada detalle.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed">
            Hoy, Visual es el resultado de su propósito compartido:
            acompañar a las personas a vivir mejor a través del diseño.
          </p>
          <Link
            href="/sobre-nosotros"
            className="mt-6 w-fit font-sans text-sm uppercase tracking-wide-nav underline underline-offset-4"
          >
            Sobre nosotras
          </Link>
        </div>
        <div className="relative aspect-square w-full sm:aspect-[4/3] lg:aspect-square">
          <Image
            src="/images/founders-1.jpg"
            alt="Daniela y María José, fundadoras de Visual, diseñadoras de interiores en Quito"
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* Sobre Visual */}
      <section className="bg-[#f5f2ee] px-6 py-16 text-center sm:px-16 lg:py-24">
        <h2 className="font-display text-3xl">Sobre Visual</h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans leading-relaxed">
          Somos un estudio de arquitectura interior que transforma espacios en
          experiencias. Diseñamos con propósito, equilibrio y sensibilidad,
          uniendo forma y emoción en cada detalle. Nuestro objetivo: que cada
          rincón inspire armonía, estilo y bienestar.
        </p>
      </section>

      {/* Para quién diseñamos */}
      <section className="px-6 py-16 sm:px-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl">¿Para quién diseñamos?</h2>
          <p className="mt-4 font-sans text-body">
            Diseñamos espacios con intención, para todo tipo de proyectos.
            Descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 sm:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.n} className="text-center">
              <span className="font-display text-4xl text-taupe">{a.n}</span>
              <h3 className="mt-3 font-display text-xl">{a.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-body">
                {a.text}
              </p>
              <Link
                href="/servicios"
                className="mt-4 inline-block font-sans text-xs uppercase tracking-wide-nav underline underline-offset-4"
              >
                Más información
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="bg-[#f5f2ee] px-6 py-16 sm:px-16 lg:py-24">
        <h2 className="text-center font-display text-3xl">Proyectos destacados</h2>
        <p className="mt-2 text-center font-sans text-sm uppercase tracking-wide-nav text-taupe-dark">
          Galería
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3">
          {projects.map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/portafolio"
            className="border border-taupe px-8 py-3 font-sans text-sm uppercase tracking-wide-nav transition-colors hover:bg-taupe hover:text-white"
          >
            Ver portafolio completo
          </Link>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="px-6 py-16 text-center sm:px-16 lg:py-20">
        <h2 className="font-display text-3xl">Nuestro Instagram</h2>
        <p className="mt-2 font-sans text-sm uppercase tracking-wide-nav text-taupe-dark">
          Síguenos
        </p>
        <a
          href="https://www.instagram.com/visual.design.arq/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border border-taupe px-8 py-3 font-sans text-sm uppercase tracking-wide-nav transition-colors hover:bg-taupe hover:text-white"
        >
          @visual.design.arq
        </a>
      </section>

      {/* Banda CTA */}
      <section className="relative overflow-hidden bg-taupe px-6 py-16 text-center text-white sm:px-16">
        <h2 className="font-display text-2xl sm:text-3xl">
          Un mal diseño limita tu espacio
        </h2>
        <p className="mt-3 font-sans text-sm sm:text-base">
          En Visual creamos armonía, estilo y bienestar.
        </p>
      </section>

      {/* Testimonios */}
      <section className="px-6 py-16 text-center sm:px-16 lg:py-24">
        <h2 className="font-display text-3xl">Testimonios</h2>
        <p className="mt-2 font-sans text-sm uppercase tracking-wide-nav text-taupe-dark">
          Conoce lo que dicen nuestros clientes
        </p>
        <blockquote className="mx-auto mt-8 max-w-2xl font-sans italic leading-relaxed text-body">
          &ldquo;La experiencia ha sido increíble, transformaron un espacio
          super pequeño en algo acogedor y confortable. Estamos encantados con
          el servicio.&rdquo;
        </blockquote>
        <p className="mt-4 font-sans text-sm uppercase tracking-wide-nav">
          Alain Rodríguez
        </p>
      </section>
    </>
  );
}
