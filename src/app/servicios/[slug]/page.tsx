import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, services } from "@/lib/content";
import { waLink } from "@/lib/site";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon, Eyebrow, RevealLines, delay } from "@/components/ui";
import { ContactSection, FaqSection, PageHeader, ProcessSection } from "@/components/sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/servicios/${s.slug}`,
    image: s.image,
    imageAlt: s.imageAlt,
  });
}

export default async function ServicePage({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const path = `/servicios/${s.slug}`;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: s.name, path },
  ];
  const others = services.filter((x) => x.slug !== s.slug);
  const gallery = s.gallery.map((src) => projects.find((p) => p.src === src)).filter((p) => p !== undefined);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({ name: s.h1, description: s.metaDescription, path, image: s.image }),
          faqSchema(s.faqs),
        ]}
      />
      <PageHeader
        breadcrumbs={crumbs}
        eyebrow={s.name}
        title={[s.h1]}
        intro={s.intro}
        image={s.heroImage}
        imageAlt={s.heroImage ? projects.find((p) => p.src === s.heroImage)?.alt : undefined}
      >
        <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row" style={delay(0.7)}>
          <Link href="#contacto" className="btn btn-primary">
            Agenda tu asesoría <ArrowIcon />
          </Link>
          <TrackLink event="whatsapp_click" placement={`servicio-${s.slug}`} href={waLink(s.waMessage)} className="btn btn-outline">
            <WhatsAppIcon className="h-4 w-4" /> Consultar por WhatsApp
          </TrackLink>
        </div>
      </PageHeader>

      {/* Qué incluye */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Qué incluye</Eyebrow>
              <RevealLines className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.05]" lines={["Todo lo que tu", <span key="a" className="accent text-taupe-deep">espacio necesita</span>]} />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-x-10 border-t border-ink/15 sm:grid-cols-2">
                {s.includes.map((inc, i) => (
                  <li key={inc.title} className="border-b border-ink/15 py-7" data-reveal="up" style={delay((i % 2) * 0.08)}>
                    <p className="flex items-baseline gap-3 font-display text-xl text-ink">
                      <span className="font-sans text-xs text-taupe-deep">0{i + 1}</span>
                      {inc.title}
                    </p>
                    <p className="mt-2 leading-relaxed">{inc.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galería + ideal para */}
      <section className="bg-linen">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-32">
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {gallery.map((p, i) => (
              <div key={p.src} className={`zoom relative overflow-hidden bg-sand ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"}`} data-reveal="img" style={delay(i * 0.08)}>
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <Eyebrow>Ideal para</Eyebrow>
            <ul className="mt-8 space-y-4">
              {s.idealFor.map((item, i) => (
                <li key={item} className="flex items-start gap-4 font-display text-xl text-ink sm:text-2xl" data-reveal="up" style={delay(i * 0.06)}>
                  <span className="mt-3 h-px w-6 shrink-0 bg-taupe-deep" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/portafolio" className="btn btn-outline mt-12" data-reveal="up">
              Ver más proyectos <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FaqSection faqs={s.faqs} />

      {/* Otros servicios */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <Eyebrow>Otros servicios</Eyebrow>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/servicios/${o.slug}`} className="group flex items-center gap-6 border border-ink/15 p-4 transition-colors duration-500 hover:bg-linen" data-reveal="up">
                <div className="zoom relative h-24 w-24 shrink-0 overflow-hidden">
                  <Image src={o.image} alt="" fill sizes="96px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-xl text-ink">{o.name}</p>
                  <p className="mt-1 text-sm">{o.short}</p>
                </div>
                <ArrowIcon className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection placement={`servicio-${s.slug}`} />
    </>
  );
}
