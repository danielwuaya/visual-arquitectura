import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeFaqs, services, testimonials } from "@/lib/content";
import { caseStudies } from "@/lib/cases";
import CaseCard from "@/components/CaseCard";
import { waLink } from "@/lib/site";
import { faqSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon, Eyebrow, RevealLines, delay } from "@/components/ui";
import { ContactSection, CtaBand, FaqSection, ProcessSection } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Diseño de Interiores en Quito y Cumbayá | Visual",
  absoluteTitle: true,
  description:
    "Estudio de diseño de interiores en Cumbayá, Quito, con más de 20 años de experiencia. Diseñamos casas, departamentos, oficinas y locales con armonía, estilo y bienestar. Agenda tu asesoría.",
  path: "/",
});


const marquee = [
  "Diseño residencial",
  "Oficinas",
  "Locales comerciales",
  "Remodelaciones",
  "Airbnb",
  "Mobiliario a medida",
  "Cumbayá",
  "Tumbaco",
  "Quito",
];

const manifesto =
  "Un mal diseño limita tu espacio. Nosotras lo transformamos en un lugar funcional, bello y lleno de armonía, que refleja quién eres y cómo quieres vivir.";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ───────────── Hero ───────────── */}
      <section className="grain relative overflow-hidden pt-28 lg:pt-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-20 sm:px-8 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-12 lg:pb-24">
          <div className="lg:col-span-6 lg:pr-6">
            <p className="eyebrow hero-fade" style={delay(0.1)}>
              Estudio de diseño de interiores · Cumbayá
            </p>
            <h1 className="mt-7 font-display text-[clamp(2.7rem,5.4vw,5.2rem)] leading-[1]">
              <span className="hero-line block overflow-hidden pb-[0.06em]"><span style={delay(0.05)}>Diseño de</span></span>
              <span className="hero-line block overflow-hidden pb-[0.06em]"><span style={delay(0.13)}>interiores en</span></span>
              <span className="hero-line block overflow-hidden pb-[0.1em]">
                <span style={delay(0.21)}>
                  Quito <span className="accent whitespace-nowrap text-taupe-deep">y Cumbayá</span>
                </span>
              </span>
            </h1>
            <p className="hero-fade mt-8 max-w-lg text-[1.08rem] leading-relaxed" style={delay(0.65)}>
              Creamos espacios con armonía, estilo y bienestar. Casas, departamentos,
              oficinas y locales comerciales diseñados para sentirse como tú, del
              concepto a la ejecución.
            </p>
            <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row" style={delay(0.8)}>
              <Link href="/contacto" className="btn btn-primary">
                Agenda tu asesoría <ArrowIcon />
              </Link>
              <TrackLink event="whatsapp_click" placement="hero" href={waLink()} className="btn btn-outline">
                <WhatsAppIcon className="h-4 w-4" /> Escríbenos por WhatsApp
              </TrackLink>
            </div>
            <dl className="hero-fade mt-14 grid max-w-lg grid-cols-3 gap-4 border-t sm:gap-6 border-ink/15 pt-6" style={delay(0.95)}>
              {[
                ["+20", "años de experiencia"],
                ["Diseño", "y ejecución de obra"],
                ["Showroom", "digital en 4K"],
              ].map(([n, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block font-display text-xl text-ink sm:text-3xl">{n}</span>
                    <span className="mt-1 block text-xs leading-snug">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="hero-unveil arch relative ml-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden bg-sand" style={delay(0.2)}>
              <Image
                src="/images/proyectos/boutique-almara/01.jpg"
                alt="Recepción de la Boutique Almara diseñada por Visual, estudio de diseño de interiores en Cumbayá"
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[50%_40%]"
              />
            </div>
            <div className="hero-fade absolute -bottom-8 left-0 hidden aspect-square w-44 overflow-hidden rounded-full border-[6px] border-ivory sm:block lg:-left-6 lg:w-52" style={delay(1.1)}>
              <Image src="/images/proyectos/casa-betania/01.jpg" alt="Dormitorio infantil con cabeceras en forma de nube, Casa Betania" fill sizes="208px" className="object-cover" />
            </div>
            <Link
              href="/contacto"
              aria-label="Agenda tu asesoría"
              className="hero-fade group absolute -top-4 right-0 hidden h-32 w-32 items-center justify-center rounded-full bg-espresso text-ivory sm:flex lg:right-[-1rem]"
              style={delay(1.2)}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] p-1.5" aria-hidden="true">
                <defs>
                  <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text fontSize="8.6" letterSpacing="2.6" fill="currentColor" className="font-sans uppercase">
                  <textPath href="#circle">Agenda tu asesoría · Visual · </textPath>
                </text>
              </svg>
              <ArrowIcon className="h-6 w-6 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Cinta ───────────── */}
      <div className="marquee overflow-hidden border-y border-ink/10 bg-linen py-6" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10">
          {[...marquee, ...marquee].map((w, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl text-ink/80 sm:text-3xl">
              {w}
              <span className="text-base text-taupe">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ───────────── Manifiesto ───────────── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
          <Eyebrow>Sobre Visual</Eyebrow>
          <p className="ink-words mt-8 max-w-5xl font-display text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.15] text-ink">
            {manifesto.split(" ").map((w, i, all) => (
              <span key={i} style={{ "--r": `cover ${10 + (i / all.length) * 30}% cover ${22 + (i / all.length) * 30}%` } as CSSProperties}>
                {w}{" "}
              </span>
            ))}
          </p>
          <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center" data-reveal="up">
            <Link href="/sobre-nosotros" className="btn btn-outline">
              Conoce al estudio <ArrowIcon />
            </Link>
            <p className="max-w-sm text-sm">
              Arquitectura interior con propósito, equilibrio y sensibilidad, uniendo
              forma y emoción en cada detalle.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Servicios ───────────── */}
      <section className="bg-ivory pb-24 lg:pb-40">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 border-t border-ink/15 pt-16 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Servicios</Eyebrow>
              <RevealLines
                className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05]"
                lines={["¿Para quién", <span key="a" className="accent text-taupe-deep">diseñamos?</span>]}
              />
            </div>
            <p className="max-w-md leading-relaxed" data-reveal="up">
              Diseñamos espacios con intención para todo tipo de proyectos en Quito,
              Cumbayá y Tumbaco. Descubre cómo podemos ayudarte.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className={`group block ${i === 1 ? "md:mt-24" : ""} ${i === 2 ? "md:mt-12" : ""}`}
                data-reveal="up"
                style={delay(i * 0.12)}
              >
                <div className="zoom relative aspect-[3/4] overflow-hidden bg-sand" data-reveal="img" style={delay(i * 0.12)}>
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <span className="absolute left-5 top-5 font-display text-sm text-ivory mix-blend-difference">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.name}</h3>
                <p className="mt-3 max-w-sm leading-relaxed">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-ink">
                  <span className="link-u-on">Descubre más</span>
                  <ArrowIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Proyectos destacados ───────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Portafolio</Eyebrow>
              <RevealLines
                className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05]"
                lines={["Proyectos", <span key="a" className="accent text-taupe-deep">destacados</span>]}
              />
            </div>
            <Link href="/portafolio" className="btn btn-outline self-start lg:self-auto" data-reveal="up">
              Ver portafolio completo <ArrowIcon />
            </Link>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((c, i) => (
              <div key={c.slug} className={i === 1 ? "lg:mt-24" : ""}>
                <CaseCard c={c} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* ───────────── Fundadoras ───────────── */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-12 lg:py-36">
          <div className="relative lg:col-span-5">
            <div className="arch relative aspect-[4/5] overflow-hidden bg-sand" data-reveal="img">
              <Image src="/images/founders-1.jpg" alt="Daniela Ludeña y María José Dávila, fundadoras de Visual, diseñadoras de interiores en Quito" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
            </div>
            <div className="drift absolute -bottom-10 -right-4 hidden w-40 overflow-hidden border-[6px] border-ivory sm:block lg:-right-12 lg:w-48">
              <Image src="/images/about-moodboard.jpg" alt="Moodboard de materiales y acabados" width={508} height={737} sizes="192px" className="h-auto w-full" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Detrás del diseño</Eyebrow>
            <RevealLines
              className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.05]"
              lines={["Dos diseñadoras,", <span key="a" className="accent text-taupe-deep">una misma visión</span>]}
            />
            <div className="mt-8 max-w-xl space-y-5 leading-relaxed" data-reveal="up">
              <p>
                Visual nació de la pasión de Daniela y María José, dos diseñadoras de
                interiores ecuatorianas que encontraron en el diseño una forma de
                transformar emociones en espacios.
              </p>
              <p>
                Con más de 20 años de experiencia, combinan creatividad, técnica y
                sensibilidad para que cada proyecto refleje la esencia de quien lo habita.
                Para ellas, diseñar no es solo estética: es crear armonía, bienestar y
                funcionalidad en cada detalle.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-8" data-reveal="up" style={delay(0.1)}>
              <div>
                <p className="font-display text-xl text-ink">Daniela Ludeña</p>
                <p className="eyebrow mt-1">Co-fundadora</p>
              </div>
              <span className="h-10 w-px bg-ink/15" aria-hidden="true" />
              <div>
                <p className="font-display text-xl text-ink">María José Dávila</p>
                <p className="eyebrow mt-1">Co-fundadora</p>
              </div>
            </div>
            <Link href="/sobre-nosotros" className="btn btn-outline mt-10" data-reveal="up">
              Sobre nosotras <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Testimonio ───────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-36">
          <p className="font-display text-7xl leading-none text-taupe" aria-hidden="true">“</p>
          {testimonials.map((t) => (
            <figure key={t.name}>
              <blockquote>
                <RevealLines
                  as="p"
                  className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.3] text-ink"
                  lines={[t.quote]}
                />
              </blockquote>
              <figcaption className="mt-8" data-reveal="up">
                <span className="eyebrow">{t.name}</span>
                <span className="mt-1 block text-sm">{t.project}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand
        title={["Recorre nuestro", <span key="a" className="accent text-sand">showroom digital</span>]}
        text="Mira nuestros proyectos en pantalla completa y alta resolución, ambiente por ambiente, desde donde estés."
        image="/images/proyectos/casa-betania/03.jpg"
        cta={{ href: "/showroom-virtual", label: "Entrar al showroom" }}
        waMessage="Hola Visual, vi su showroom digital y me gustaría diseñar mi espacio."
      />

      <FaqSection faqs={homeFaqs} />

      <ContactSection placement="home" />
    </>
  );
}
