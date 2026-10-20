import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeFaqs, services, testimonials } from "@/lib/content";
import { waLink } from "@/lib/site";
import { faqSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import HeroShowcase, { type HeroSlide } from "@/components/HeroShowcase";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon, Eyebrow, RevealLines, delay } from "@/components/ui";
import { ContactSection, FaqSection, ProcessSection } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Visual | Diseño de Interiores y Arquitectura Interior en Quito",
  absoluteTitle: true,
  description:
    "Visual es un estudio de diseño de interiores y arquitectura interior. Creamos hogares, oficinas y espacios comerciales en Quito, Cumbayá y Tumbaco con armonía, estilo y bienestar. Agenda tu asesoría.",
  path: "/",
  image: "/images/inspiracion/sala-doble-altura.jpg",
  imageAlt: "Sala de doble altura con lámpara escultórica de fibras naturales",
});

const I = "/images/inspiracion";

const heroSlides: HeroSlide[] = [
  { src: `${I}/sala-doble-altura.jpg`, alt: "Sala de doble altura con lámpara escultórica de fibras naturales y ventanales al jardín", label: "Sala de doble altura" },
  { src: `${I}/dormitorio-nogal.jpg`, alt: "Dormitorio en tonos cálidos con cabecera tapizada y vestidor en nogal", label: "Dormitorio en nogal" },
  { src: `${I}/lounge-ejecutivo.jpg`, alt: "Oficina ejecutiva con paneles de madera, luz indirecta y sala de cuero", label: "Oficina ejecutiva" },
  { src: `${I}/bano-spa.jpg`, alt: "Baño tipo spa con tina de piedra, ducha de lluvia y jardín interior", label: "Baño spa" },
  { src: `${I}/cocina-roble.jpg`, alt: "Cocina blanca con madera de roble, listones e iluminación lineal", label: "Cocina en roble" },
];

const film = [
  { src: `${I}/tv-divisor-luz.jpg`, label: "Luz que dibuja" },
  { src: `${I}/oficina-concreto.jpg`, label: "Materia honesta" },
  { src: `${I}/banca-ventana.jpg`, label: "Rincones para pausar" },
  { src: `${I}/bano-azul.jpg`, label: "Color con intención" },
  { src: `${I}/estudio-sala.jpg`, label: "Calma y orden" },
  { src: `${I}/sala-reuniones-vidrio.jpg`, label: "Transparencia" },
  { src: `${I}/jardin-nocturno.jpg`, label: "El exterior también se diseña" },
  { src: `${I}/oficina-dos-escritorios.jpg`, label: "Trabajo con bienestar" },
];

const spaces = [
  { ...services[0], title: "Hogares que abrazan", img: `${I}/dormitorio-nogal.jpg`, alt: "Dormitorio cálido con madera de nogal y luz indirecta" },
  { ...services[1], title: "Oficinas que inspiran", img: `${I}/oficina-concreto.jpg`, alt: "Oficina contemporánea con concreto, madera y lámparas colgantes" },
  { ...services[2], title: "Espacios que venden", img: `${I}/lounge-ejecutivo.jpg`, alt: "Lounge con paneles de madera, sillones de cuero y luz cálida" },
];

const details = [
  ["Distribución", "Cada metro con un propósito."],
  ["Iluminación", "Capas de luz para cada momento."],
  ["Materiales", "Texturas nobles que envejecen bien."],
  ["Mobiliario a medida", "Piezas pensadas para tu espacio."],
  ["Renders 3D", "Ves el resultado antes de construir."],
];

const manifesto =
  "Creemos que un espacio bien diseñado cambia la forma en que vives, trabajas y descansas. Por eso diseñamos con calma: escuchando, midiendo y cuidando cada detalle hasta que todo encuentra su lugar.";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ───────────── Hero ───────────── */}
      <section className="grain relative overflow-hidden pt-28 lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 pb-8 lg:grid-cols-12 lg:items-end lg:pb-10">
            <div className="lg:col-span-8">
              <p className="eyebrow hero-fade" style={delay(0.05)}>
                Estudio de diseño interior &amp; arquitectura interior
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.9rem,5.8vw,5.6rem)] leading-[0.98]">
                <span className="hero-line block overflow-hidden pb-[0.08em]"><span style={delay(0.1)}>Diseño interior que se siente</span></span>
                <span className="hero-line block overflow-hidden pb-[0.1em]">
                  <span style={delay(0.2)}>
                    <span className="accent text-taupe-deep">antes de verse.</span>
                  </span>
                </span>
              </h1>
            </div>
            <div className="hero-fade lg:col-span-4 lg:pb-4" style={delay(0.5)}>
              <p className="max-w-sm text-[1.02rem] leading-relaxed">
                Creamos hogares, oficinas y espacios comerciales con armonía, estilo y
                bienestar. Del primer boceto a la última luz encendida.
              </p>
            </div>
          </div>
          <HeroShowcase slides={heroSlides} />
        </div>
      </section>

      {/* ───────────── Manifiesto ───────────── */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
          <Eyebrow>Nuestra manera de diseñar</Eyebrow>
          <p className="ink-words mt-10 max-w-5xl font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.1] text-ink">
            {manifesto.split(" ").map((w, i, all) => (
              <span key={i} style={{ "--r": `cover ${10 + (i / all.length) * 30}% cover ${22 + (i / all.length) * 30}%` } as CSSProperties}>
                {w}{" "}
              </span>
            ))}
          </p>
          <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center" data-reveal="up">
            <Link href="/sobre-nosotros" className="btn btn-outline">
              Conoce el estudio <ArrowIcon />
            </Link>
            <p className="max-w-sm text-sm">
              Interiorismo residencial y corporativo con más de 20 años de experiencia.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Cinta de atmósferas ───────────── */}
      <section aria-label="Atmósferas" className="film overflow-hidden bg-canvas pb-28 lg:pb-40">
        <div className="film-track flex w-max gap-5">
          {[...film, ...film].map((f, i) => (
            <figure key={i} className="group relative h-[52vh] max-h-[520px] min-h-[340px] w-[min(72vw,360px)] shrink-0 overflow-hidden rounded-[1.75rem] bg-canvas-3" aria-hidden={i >= film.length}>
              <Image src={f.src} alt={i < film.length ? f.label : ""} fill sizes="360px" className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 font-display text-2xl text-ivory">{f.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ───────────── Espacios ───────────── */}
      <section className="bg-canvas-2">
        <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Lo que diseñamos</Eyebrow>
              <RevealLines
                className="mt-6 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1]"
                lines={["Espacios con", <span key="a" className="accent text-taupe-deep">intención</span>]}
              />
            </div>
            <p className="max-w-md leading-relaxed" data-reveal="up">
              Diseño de interiores residencial, oficinas y locales comerciales. Cada
              proyecto empieza por entender cómo quieres sentirte en él.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
            {spaces.map((s, i) => (
              <Link key={s.slug} href={`/servicios/${s.slug}`} className={`group block ${i === 1 ? "md:mt-20" : ""}`} data-reveal="up" style={delay(i * 0.12)}>
                <div className="zoom relative aspect-[3/4] overflow-hidden bg-canvas-3" data-reveal="img" style={delay(i * 0.12)}>
                  <Image src={s.img} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6">
                    <p className="eyebrow text-ivory/70">0{i + 1} · {s.name}</p>
                    <h3 className="mt-3 font-display text-[2rem] leading-[1.05] text-ivory">{s.title}</h3>
                  </div>
                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-all duration-500 group-hover:bg-ivory group-hover:text-espresso">
                    <ArrowIcon className="h-4 w-4 -rotate-45" />
                  </span>
                </div>
                <p className="mt-5 max-w-sm leading-relaxed">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Detalle ───────────── */}
      <section className="bg-canvas">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-28 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-12 lg:py-40">
          <div className="relative lg:col-span-6">
            <div className="parallax relative aspect-[4/5] overflow-hidden bg-canvas-3" data-reveal="img">
              <Image src={`${I}/bano-spa.jpg`} alt="Baño tipo spa con tina de piedra, madera y jardín interior" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="glass absolute -bottom-8 right-4 hidden max-w-[16rem] rounded-[1.5rem] p-6 sm:block lg:-right-10" data-reveal="up">
              <p className="font-display text-4xl text-ivory">+20</p>
              <p className="mt-1 text-sm text-ivory/75">años diseñando espacios que se viven, no solo se ven.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Eyebrow>El detalle lo es todo</Eyebrow>
            <RevealLines
              className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.02]"
              lines={["Pensado a la medida", <span key="a" className="accent text-taupe-deep">de tu forma de vivir</span>]}
            />
            <ul className="mt-12 border-t border-ink/10">
              {details.map(([t, d], i) => (
                <li key={t} className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-5" data-reveal="up" style={delay(i * 0.06)}>
                  <span className="font-display text-2xl text-ink">{t}</span>
                  <span className="text-right text-sm">{d}</span>
                </li>
              ))}
            </ul>
            <Link href="/servicios" className="btn btn-outline mt-10" data-reveal="up">
              Ver servicios <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* ───────────── Fundadoras ───────────── */}
      <section className="bg-canvas">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-28 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-12 lg:py-40">
          <div className="lg:col-span-5">
            <div className="arch relative aspect-[4/5] overflow-hidden bg-canvas-3" data-reveal="img">
              <Image src="/images/founders-1.jpg" alt="Daniela Ludeña y María José Dávila, fundadoras de Visual, diseñadoras de interiores" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Detrás del diseño</Eyebrow>
            <RevealLines
              className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.02]"
              lines={["Dos diseñadoras,", <span key="a" className="accent text-taupe-deep">una misma visión</span>]}
            />
            <div className="mt-8 max-w-xl space-y-5 leading-relaxed" data-reveal="up">
              <p>
                Visual nació de la pasión de Daniela y María José, dos diseñadoras de
                interiores ecuatorianas que encontraron en el diseño una forma de
                transformar emociones en espacios.
              </p>
              <p>
                Combinan creatividad, técnica y sensibilidad para que cada proyecto
                refleje la esencia de quien lo habita.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-8" data-reveal="up" style={delay(0.1)}>
              <div>
                <p className="font-display text-2xl text-ink">Daniela Ludeña</p>
                <p className="eyebrow mt-1">Co-fundadora</p>
              </div>
              <span className="h-10 w-px bg-ink/15" aria-hidden="true" />
              <div>
                <p className="font-display text-2xl text-ink">María José Dávila</p>
                <p className="eyebrow mt-1">Co-fundadora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Testimonio ───────────── */}
      <section className="bg-canvas-2">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-40">
          <p className="font-display text-8xl leading-none text-taupe" aria-hidden="true">“</p>
          {testimonials.map((t) => (
            <figure key={t.name}>
              <blockquote>
                <RevealLines as="p" className="font-display text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.25] text-ink" lines={[t.quote]} />
              </blockquote>
              <figcaption className="mt-8" data-reveal="up">
                <span className="eyebrow">{t.name}</span>
                <span className="mt-1 block text-sm">{t.project}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ───────────── Del valle a la ciudad (SEO local) ───────────── */}
      <section className="relative overflow-hidden bg-espresso">
        <div className="parallax absolute inset-0">
          <Image src={`${I}/jardin-nocturno.jpg`} alt="" fill sizes="100vw" className="object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/70 to-espresso/20" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 py-28 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-40">
          <div className="lg:col-span-7">
            <Eyebrow className="text-sand">Del valle a la ciudad</Eyebrow>
            <RevealLines
              as="h2"
              className="mt-6 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1] text-ivory"
              lines={["Diseño de interiores en", <span key="a" className="accent text-sand">Quito, Cumbayá y Tumbaco</span>]}
            />
            <p className="mt-8 max-w-xl leading-relaxed text-ivory/75" data-reveal="up">
              Nuestro estudio está en Cumbayá y acompañamos proyectos en todo Quito, Tumbaco,
              Nayón y Puembo: casas y departamentos, oficinas, consultorios y locales
              comerciales. Visitamos tu espacio, diseñamos la propuesta y coordinamos la
              ejecución hasta la entrega.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal="up" style={delay(0.1)}>
              <Link href="/diseno-de-interiores-cumbaya" className="btn btn-light">
                Diseño de interiores en Cumbayá <ArrowIcon />
              </Link>
              <Link href="/portafolio" className="btn btn-outline-light">
                Ver portafolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Showroom digital ───────────── */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
          <div className="glass relative overflow-hidden rounded-[2.25rem] px-6 py-16 text-center sm:px-14 lg:py-24" data-reveal="up">
            <p className="eyebrow">Showroom digital</p>
            <RevealLines
              className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1]"
              lines={["Recorre nuestros", <span key="a" className="accent text-taupe-deep">proyectos reales</span>]}
            />
            <p className="mx-auto mt-6 max-w-lg leading-relaxed">
              Casas, oficinas, consultorios y locales que ya diseñamos, en pantalla completa
              y alta resolución.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/showroom-virtual" className="btn btn-primary">
                Entrar al showroom <ArrowIcon />
              </Link>
              <TrackLink event="whatsapp_click" placement="home-showroom" href={waLink()} className="btn btn-outline">
                <WhatsAppIcon className="h-4 w-4" /> Escríbenos
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={homeFaqs} />

      <ContactSection placement="home" />
    </>
  );
}
