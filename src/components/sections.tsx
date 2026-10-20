import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { contact, waLink } from "@/lib/site";
import { process as steps, type Faq as FaqItem } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon, Eyebrow, RevealLines, delay } from "@/components/ui";

/** Encabezado editorial de páginas internas + imagen con parallax. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
  breadcrumbs,
}: {
  eyebrow: string;
  title: ReactNode[];
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  breadcrumbs?: { name: string; path: string }[];
}) {
  return (
    <section className="grain relative pt-32 lg:pt-44">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {breadcrumbs && (
          <nav aria-label="Ruta de navegación" className="hero-fade mb-8 text-xs text-body/70" style={delay(0.1)}>
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((b, i) => (
                <li key={b.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.path} className="link-u">
                      {b.name}
                    </Link>
                  ) : (
                    <span aria-current="page">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow hero-fade" style={delay(0.15)}>
              {eyebrow}
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6.4vw,6rem)] leading-[1.02]">
              {title.map((line, i) => (
                <span key={i} className="hero-line block overflow-hidden pb-[0.06em]">
                  <span style={delay(0.2 + i * 0.12)}>{line}</span>
                </span>
              ))}
            </h1>
          </div>
          {intro && (
            <p className="hero-fade max-w-md text-[1.05rem] leading-relaxed lg:col-span-4 lg:pb-3" style={delay(0.55)}>
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
      {image && (
        <div className="mx-auto mt-14 max-w-[1400px] px-5 sm:px-8 lg:mt-20 lg:px-12">
          <div className="hero-unveil parallax relative aspect-[16/10] overflow-hidden sm:aspect-[21/9]" style={delay(0.35)}>
            <Image src={image} alt={imageAlt ?? ""} fill priority sizes="(min-width: 1400px) 1300px, 100vw" className="object-cover" />
          </div>
        </div>
      )}
    </section>
  );
}

/** Sección de contacto que va al final de cada página. */
export function ContactSection({
  title = ["Agenda tu", "asesoría de diseño"],
  placement = "contact-section",
}: {
  title?: string[];
  placement?: string;
}) {
  return (
    <section id="contacto" className="bg-canvas-2">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-32">
        <div className="lg:col-span-5">
          <Eyebrow>Contacto</Eyebrow>
          <RevealLines
            className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.05]"
            lines={[title[0], <span key="a" className="accent text-taupe-deep">{title[1]}</span>]}
          />
          <p className="mt-6 max-w-md leading-relaxed" data-reveal="up">
            Cuéntanos sobre tu espacio y coordinamos una visita a tu proyecto. Te
            guiamos desde la primera idea hasta la entrega.
          </p>

          <div className="mt-10 flex items-center gap-5" data-reveal="up" style={delay(0.1)}>
            <div className="relative h-24 w-20 overflow-hidden arch">
              <Image src="/images/founders-1.jpg" alt="Daniela Ludeña y María José Dávila, fundadoras de Visual" fill sizes="80px" className="object-cover object-top" />
            </div>
            <div>
              <p className="font-display text-lg text-ink">Daniela y María José</p>
              <p className="text-sm">Te atienden personalmente</p>
            </div>
          </div>

          <ul className="mt-10 space-y-3 text-[0.95rem]" data-reveal="up" style={delay(0.2)}>
            <li>
              <TrackLink event="whatsapp_click" placement={`${placement}-aside`} href={waLink()} className="inline-flex items-center gap-3 text-ink">
                <WhatsAppIcon className="h-5 w-5 text-[#1f7a4d]" />
                <span className="link-u-on">Escríbenos por WhatsApp</span>
              </TrackLink>
            </li>
            <li>
              <TrackLink event="phone_click" placement={`${placement}-aside`} href={`tel:${contact.phonesE164[0]}`} className="link-u text-ink">
                {contact.phones[0]}
              </TrackLink>
              <span className="mx-2 text-body/40">·</span>
              <TrackLink event="phone_click" placement={`${placement}-aside`} href={`tel:${contact.phonesE164[1]}`} className="link-u text-ink">
                {contact.phones[1]}
              </TrackLink>
            </li>
            <li>
              <Link href="/showroom-virtual" className="link-u-on">
                Recorre nuestro showroom digital
              </Link>
            </li>
          </ul>
        </div>
        <div className="glass rounded-[2rem] p-6 sm:p-10 lg:col-span-7 lg:p-14" data-reveal="up" style={delay(0.15)}>
          <ContactForm placement={placement} />
        </div>
      </div>
    </section>
  );
}

/** Proceso de trabajo en 5 pasos. */
export function ProcessSection({ dark = true }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-espresso text-ivory/75" : "bg-canvas"}>
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow className={dark ? "text-taupe" : ""}>Cómo trabajamos</Eyebrow>
            <RevealLines
              className={`mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] ${dark ? "text-ivory" : ""}`}
              lines={["Un proceso claro,", <span key="a" className="accent text-taupe">sin sorpresas</span>]}
            />
          </div>
          <p className="max-w-md leading-relaxed lg:col-span-5" data-reveal="up">
            Te acompañamos en cada etapa para que siempre sepas qué sigue, cuánto
            cuesta y cómo va a quedar tu espacio.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-5 lg:gap-8">
          <span aria-hidden="true" className={`grow-line absolute left-0 right-0 top-[1.1rem] hidden h-px lg:block ${dark ? "bg-ivory/25" : "bg-ink/20"}`} />
          {steps.map((step, i) => (
            <li key={step.title} className="relative" data-reveal="up" style={delay(i * 0.1)}>
              <span className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border text-xs ${dark ? "border-taupe bg-espresso text-taupe" : "border-ink/30 bg-canvas text-taupe-deep"}`}>
                0{i + 1}
              </span>
              <h3 className={`mt-6 font-display text-xl ${dark ? "text-ivory" : ""}`}>{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Preguntas frecuentes (el schema FAQPage se agrega en cada página). */
export function FaqSection({ faqs, title = "Preguntas frecuentes" }: { faqs: FaqItem[]; title?: string }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <RevealLines className="mt-6 font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.08]" lines={[title]} />
          <p className="mt-6 max-w-sm leading-relaxed" data-reveal="up">
            ¿Tienes otra pregunta?{" "}
            <TrackLink event="whatsapp_click" placement="faq" href={waLink("Hola Visual, tengo una pregunta sobre sus servicios.")} className="link-u-on text-ink">
              Escríbenos por WhatsApp
            </TrackLink>
            .
          </p>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

/** Banda de llamada a la acción con imagen de fondo. */
export function CtaBand({
  title,
  text,
  image = "/images/proyectos/casa-betania/03.jpg",
  waMessage,
  cta = { href: "/contacto", label: "Agenda tu asesoría" },
}: {
  title: ReactNode[];
  text: string;
  image?: string;
  waMessage?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-espresso text-ivory">
      <div className="parallax absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-45" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <RevealLines className="max-w-3xl font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.04] text-ivory" lines={title} />
        <p className="mt-6 max-w-lg text-ivory/80" data-reveal="up">
          {text}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal="up" style={delay(0.1)}>
          <Link href={cta.href} className="btn btn-light">
            {cta.label} <ArrowIcon />
          </Link>
          <TrackLink event="whatsapp_click" placement="cta-band" href={waLink(waMessage)} className="btn btn-outline-light">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </TrackLink>
        </div>
      </div>
    </section>
  );
}
