import Image from "next/image";
import { contact, waLink } from "@/lib/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon, Eyebrow, RevealLines, delay } from "@/components/ui";
import { ContactSection, PageHeader } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Showroom de Diseño de Interiores en Cumbayá",
  description:
    "Visita el showroom de Visual en Cumbayá: conoce materiales, acabados y nuestro estilo de diseño de interiores en persona. Agenda tu visita por WhatsApp.",
  path: "/showroom-virtual",
  image: "/images/showroom-hero.jpg",
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Showroom", path: "/showroom-virtual" },
];

const reasons = [
  { title: "Toca los materiales", text: "Maderas, piedras, textiles y acabados para elegir con seguridad." },
  { title: "Conoce nuestro estilo", text: "Recorre ambientes y referencias de proyectos reales." },
  { title: "Conversa con las diseñadoras", text: "Una reunión personal para entender tu espacio y tus ideas." },
];

export default function Showroom() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        breadcrumbs={crumbs}
        eyebrow="Showroom · Cumbayá"
        title={["Ven a vivir", <span key="a" className="accent text-taupe-deep">el diseño en persona</span>]}
        intro="Nuestro showroom en Cumbayá es el punto de partida de muchos proyectos. Estamos preparando un recorrido virtual; mientras tanto, te esperamos para una visita guiada."
        image="/images/showroom-hero.jpg"
        imageAlt="Showroom de Visual Diseño de Interiores en Cumbayá con recepción en madera"
      >
        <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row" style={delay(0.7)}>
          <TrackLink event="whatsapp_click" placement="showroom-hero" href={waLink("Hola Visual, me gustaría agendar una visita al showroom en Cumbayá.")} className="btn btn-primary">
            <WhatsAppIcon className="h-4 w-4" /> Agenda tu visita
          </TrackLink>
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Cómo llegar <ArrowIcon />
          </a>
        </div>
      </PageHeader>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <Eyebrow>Tu visita</Eyebrow>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="border-t border-ink/15 pt-8" data-reveal="up" style={delay(i * 0.1)}>
                <span className="font-sans text-xs text-taupe-deep">0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl">{r.title}</h2>
                <p className="mt-3 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-32">
          <div className="lg:col-span-5">
            <RevealLines className="font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.08]" lines={["Dónde", <span key="a" className="accent text-taupe-deep">encontrarnos</span>]} />
            <address className="mt-8 not-italic text-[1.05rem] leading-relaxed" data-reveal="up">
              <span className="block text-ink">{contact.street}</span>
              <span className="block">Cumbayá, Quito — Ecuador</span>
            </address>
            <p className="mt-6 text-sm" data-reveal="up">Atendemos con cita previa para dedicarte el tiempo que tu proyecto merece.</p>
            <div className="mt-8 relative aspect-[4/3] overflow-hidden" data-reveal="img">
              <Image src="/images/team-laptop.jpg" alt="Diseñadoras de Visual revisando un proyecto en el showroom" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-sand lg:col-span-7" data-reveal="mask">
            <iframe
              title="Mapa del showroom de Visual en Cumbayá"
              src={contact.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.6] sepia-[0.15]"
            />
          </div>
        </div>
      </section>

      <ContactSection placement="showroom" title={["Agenda tu visita", "al showroom"]} />
    </>
  );
}
