import Image from "next/image";
import Link from "next/link";
import { projects, services, type Faq } from "@/lib/content";
import { areas, waLink } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon, Eyebrow, RevealLines, delay } from "@/components/ui";
import { ContactSection, FaqSection, PageHeader } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Diseño de Interiores en Cumbayá y Tumbaco",
  description:
    "Diseñadoras de interiores con estudio en Cumbayá. Diseñamos casas, departamentos, oficinas y locales en Cumbayá, Tumbaco, Nayón y Puembo. Agenda tu asesoría.",
  path: "/diseno-de-interiores-cumbaya",
  image: "/images/proyectos/casa-betania/01.jpg",
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Diseño de interiores en Cumbayá", path: "/diseno-de-interiores-cumbaya" },
];

const faqs: Faq[] = [
  { q: "¿Tienen estudio en Cumbayá?", a: "Sí, nuestro estudio está en Cumbayá. Trabajamos visitando cada proyecto, así que coordinamos contigo una visita a tu casa, departamento u oficina." },
  { q: "¿Trabajan en Tumbaco, Nayón y Puembo?", a: "Sí. Al estar en Cumbayá, atendemos con frecuencia proyectos en Tumbaco, Nayón, Puembo y en todo Quito." },
  { q: "¿Pueden visitar mi casa o departamento?", a: "Sí. La primera etapa del proceso es visitar tu espacio, conversar sobre tus necesidades y tomar medidas para planificar el diseño." },
];

const featured = ["/images/project-kitchen-island.jpg", "/images/project-cabin-livingroom.jpg", "/images/project-bathroom-shower.jpg", "/images/project-diningroom-classic.jpg"]
  .map((src) => projects.find((p) => p.src === src)!)
  .filter(Boolean);

export default function Cumbaya() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <PageHeader
        breadcrumbs={crumbs}
        eyebrow="Estudio local · Cumbayá"
        title={["Diseño de interiores", <span key="a" className="accent text-taupe-deep">en Cumbayá y Tumbaco</span>]}
        intro="Somos un estudio de diseño de interiores con base en Cumbayá. Conocemos el valle, sus casas, su luz y su estilo de vida, y diseñamos espacios que lo aprovechan."
        image="/images/proyectos/casa-betania/01.jpg"
        imageAlt="Dormitorio con vista a las montañas diseñado por Visual en el valle"
      >
        <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row" style={delay(0.7)}>
          <TrackLink event="whatsapp_click" placement="cumbaya-hero" href={waLink("Hola Visual, estoy en el valle y me gustaría una asesoría de diseño de interiores.")} className="btn btn-primary">
            <WhatsAppIcon className="h-4 w-4" /> Agenda tu asesoría
          </TrackLink>
          <Link href="/showroom-virtual" className="btn btn-outline">
            Ver showroom digital <ArrowIcon />
          </Link>
        </div>
      </PageHeader>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-32">
          <div className="lg:col-span-5">
            <Eyebrow>Por qué un estudio local</Eyebrow>
            <RevealLines className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05]" lines={["Diseño cercano,", <span key="a" className="accent text-taupe-deep">de principio a fin</span>]} />
          </div>
          <div className="space-y-6 text-[1.05rem] leading-relaxed lg:col-span-7" data-reveal="up">
            <p>
              Cumbayá y Tumbaco combinan casas con jardín, departamentos nuevos y una vida
              que pasa mucho tiempo en casa. Por eso diseñamos ambientes luminosos, cálidos y
              prácticos: cocinas abiertas que se integran con la sala, baños que se sienten
              como un spa y espacios exteriores que se viven todo el año.
            </p>
            <p>
              Estar en el valle nos permite visitar tu proyecto con facilidad, coordinar
              proveedores de confianza y supervisar la obra de cerca. Y si quieres ver nuestro
              trabajo antes de decidir, puedes recorrer nuestro showroom digital en alta resolución.
            </p>
            <p>
              Trabajamos proyectos residenciales, oficinas y locales comerciales, desde una
              remodelación puntual hasta el diseño interior completo de tu casa.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <RevealLines className="font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.08]" lines={["Lo que diseñamos", <span key="a" className="accent text-taupe-deep">en el valle</span>]} />
            <Link href="/portafolio" className="btn btn-outline self-start" data-reveal="up">Ver portafolio <ArrowIcon /></Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {featured.map((p, i) => (
              <figure key={p.src} data-reveal="up" style={delay(i * 0.08)}>
                <div className="zoom relative aspect-[3/4] overflow-hidden bg-canvas-3">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm">{p.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/servicios/${s.slug}`} className="group border-t border-ink/20 pt-6" data-reveal="up" style={delay(i * 0.08)}>
                <p className="font-display text-2xl text-ink group-hover:text-taupe-deep">{s.name}</p>
                <p className="mt-3 leading-relaxed">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-ink">
                  <span className="link-u-on">Más información</span> <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-32">
          <div className="lg:col-span-5">
            <Eyebrow>Zonas que atendemos</Eyebrow>
            <ul className="mt-8 flex flex-wrap gap-3">
              {areas.map((a) => (
                <li key={a} className="rounded-full border border-ink/20 px-5 py-2.5 font-display text-lg text-ink" data-reveal="up">{a}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-canvas-3 lg:col-span-7" data-reveal="img">
            <Image src="/images/proyectos/casa-betania/10.jpg" alt="Sala de estar con ventanales y vista a las montañas del valle" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Preguntas sobre Cumbayá" />
      <ContactSection placement="cumbaya" title={["Agenda tu asesoría", "en Cumbayá"]} />
    </>
  );
}
