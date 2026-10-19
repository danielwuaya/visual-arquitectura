import Image from "next/image";
import Link from "next/link";
import { homeFaqs, services } from "@/lib/content";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { ArrowIcon, delay } from "@/components/ui";
import { ContactSection, FaqSection, PageHeader, ProcessSection } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Servicios de Diseño de Interiores en Quito",
  description:
    "Diseño de interiores residencial, de oficinas y de locales comerciales en Quito, Cumbayá y Tumbaco. Planificación, diseño, renders, presupuesto y ejecución de obra.",
  path: "/servicios",
  image: "/images/services-hero.jpg",
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
];

export default function Servicios() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(homeFaqs.slice(1)),
          ...services.map((s) =>
            serviceSchema({ name: s.name, description: s.metaDescription, path: `/servicios/${s.slug}`, image: s.image })
          ),
        ]}
      />
      <PageHeader
        breadcrumbs={crumbs}
        eyebrow="Servicios"
        title={["Diseño de interiores", <span key="a" className="accent text-taupe-deep">para cada espacio</span>]}
        intro="Diseñamos, planificamos y acompañamos cada paso para crear espacios funcionales y estéticos en Quito, Cumbayá y Tumbaco."
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] space-y-24 px-5 py-20 sm:px-8 lg:space-y-36 lg:px-12 lg:py-28">
          {services.map((s, i) => (
            <article key={s.slug} className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <Link
                href={`/servicios/${s.slug}`}
                className={`zoom relative block aspect-[4/5] overflow-hidden bg-sand sm:aspect-[4/3] lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}
                data-reveal="img"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
              </Link>
              <div className="lg:col-span-5">
                <p className="eyebrow" data-reveal="up">0{i + 1} — {s.name}</p>
                <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.08]" data-reveal="up" style={delay(0.05)}>
                  <Link href={`/servicios/${s.slug}`} className="hover:text-taupe-deep">{s.h1}</Link>
                </h2>
                <p className="mt-5 leading-relaxed" data-reveal="up" style={delay(0.1)}>{s.intro}</p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm" data-reveal="up" style={delay(0.15)}>
                  {s.includes.map((inc) => (
                    <li key={inc.title} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-taupe-deep" aria-hidden="true" />
                      {inc.title}
                    </li>
                  ))}
                </ul>
                <Link href={`/servicios/${s.slug}`} className="btn btn-outline mt-8" data-reveal="up" style={delay(0.2)}>
                  Ver {s.name.toLowerCase()} <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProcessSection />
      <FaqSection faqs={homeFaqs.slice(1)} />
      <ContactSection placement="servicios" />
    </>
  );
}
