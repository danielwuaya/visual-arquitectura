import Image from "next/image";
import { siteUrl } from "@/lib/site";
import { breadcrumbSchema, businessId, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Eyebrow, RevealLines, delay } from "@/components/ui";
import { ContactSection, PageHeader, ProcessSection } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Sobre Nosotras | Diseñadoras de Interiores en Quito",
  description:
    "Conoce a Daniela Ludeña y María José Dávila, fundadoras de Visual: diseñadoras de interiores ecuatorianas con más de 20 años de experiencia y estudio en Cumbayá, Quito.",
  path: "/sobre-nosotros",
  image: "/images/founders-1.jpg",
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Sobre nosotras", path: "/sobre-nosotros" },
];

const founders = [
  { name: "Daniela Ludeña", image: "/images/founder-daniela.jpg", w: 580, h: 737 },
  { name: "María José Dávila", image: "/images/founder-mariajose.jpg", w: 738, h: 737 },
];

const values = [
  { title: "Armonía", text: "Cada elemento dialoga con el resto: color, luz, materiales y proporción." },
  { title: "Estilo", text: "Un lenguaje propio para cada cliente, nunca una plantilla repetida." },
  { title: "Bienestar", text: "Espacios que se sienten bien al vivirlos, no solo al verlos." },
];

export default function SobreNosotros() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${siteUrl}/sobre-nosotros`,
            about: { "@id": businessId },
          },
        ]}
      />
      <PageHeader
        breadcrumbs={crumbs}
        eyebrow="Sobre nosotras"
        title={["El diseño interior", "no solo se ve,", <span key="a" className="accent text-taupe-deep">se vive</span>]}
        intro="Visual nació del deseo de transformar espacios en experiencias. Somos un estudio de arquitectura interior en Cumbayá que diseña con propósito, equilibrio y sensibilidad."
        image="/images/about-hero.jpg"
        imageAlt="Diseñadora de Visual dibujando un plano de interiores en el estudio"
      />

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-12 lg:py-32">
          <div className="lg:col-span-6">
            <Eyebrow>Nuestra historia</Eyebrow>
            <RevealLines className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05]" lines={["Transformar emociones", <span key="a" className="accent text-taupe-deep">en espacios</span>]} />
            <div className="mt-8 space-y-5 leading-relaxed" data-reveal="up">
              <p>
                Visual nació de la pasión de Daniela y María José, dos diseñadoras de interiores
                ecuatorianas que encontraron en el diseño una forma de transformar emociones en
                espacios.
              </p>
              <p>
                Con más de 20 años de experiencia, combinan creatividad, técnica y sensibilidad
                para lograr que cada proyecto refleje la esencia de quien lo habita. Hoy, Visual
                es el resultado de su propósito compartido: acompañar a las personas a vivir
                mejor a través del diseño.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <div className="arch relative aspect-[3/4] overflow-hidden bg-canvas-3" data-reveal="img">
              <Image src="/images/founders-2.jpg" alt="Daniela y María José en su estudio de diseño de interiores en Cumbayá" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-16 aspect-[3/4] overflow-hidden bg-canvas-3" data-reveal="img" style={delay(0.12)}>
              <Image src="/images/about-moodboard-2.jpg" alt="Selección de materiales, muestras y paleta de colores para un proyecto" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="text-center">
            <Eyebrow className="justify-center">Fundadoras</Eyebrow>
            <RevealLines className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05]" lines={["Conoce a quienes", <span key="a" className="accent text-taupe-deep">diseñan tu espacio</span>]} />
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2">
            {founders.map((f, i) => (
              <figure key={f.name} className="text-center" data-reveal="up" style={delay(i * 0.12)}>
                <div className="zoom arch relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-canvas-3">
                  <Image src={f.image} alt={`${f.name}, diseñadora de interiores y co-fundadora de Visual`} fill sizes="(min-width: 640px) 384px, 100vw" className="object-cover object-top" />
                </div>
                <figcaption className="mt-6">
                  <span className="block font-display text-2xl text-ink">{f.name}</span>
                  <span className="eyebrow mt-2 block">Diseñadora de interiores · Co-fundadora</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <Eyebrow>Lo que nos guía</Eyebrow>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-ink/15 pt-8" data-reveal="up" style={delay(i * 0.1)}>
                <p className="font-display text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-ink">
                  <span className="accent text-taupe-deep">{v.title}</span>
                </p>
                <p className="mt-5 max-w-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <ContactSection placement="nosotras" title={["Trabajemos", "juntas en tu espacio"]} />
    </>
  );
}
