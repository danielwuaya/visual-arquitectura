import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, categoryLabel, getCase } from "@/lib/cases";
import { services } from "@/lib/content";
import { siteUrl, waLink } from "@/lib/site";
import { breadcrumbSchema, businessId, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import ProjectGallery from "@/components/ProjectGallery";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon, Eyebrow, RevealLines, delay } from "@/components/ui";
import { ContactSection } from "@/components/sections";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/portafolio/[slug]">) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return pageMetadata({
    title: `${c.title}: ${c.type} | Proyecto de diseño de interiores`,
    description: `${c.summary} Proyecto de Visual, estudio de diseño de interiores en Quito y Cumbayá.`,
    path: `/portafolio/${c.slug}`,
    image: c.images[0].src,
    imageAlt: c.images[0].alt,
  });
}

export default async function CasePage({ params }: PageProps<"/portafolio/[slug]">) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const path = `/portafolio/${c.slug}`;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Portafolio", path: "/portafolio" },
    { name: c.title, path },
  ];
  const idx = caseStudies.findIndex((x) => x.slug === c.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const service = services.find((s) => s.slug === c.service);
  const [hero, ...rest] = c.images;
  const landscapeHero = hero.w > hero.h;
  const waMsg = `Hola Visual, vi el proyecto "${c.title}" en su web y me gustaría algo así para mi espacio.`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: c.title,
            genre: c.type,
            description: c.summary,
            url: `${siteUrl}${path}`,
            creator: { "@id": businessId },
            image: c.images.map((i) => `${siteUrl}${i.src}`),
            inLanguage: "es-EC",
          },
        ]}
      />

      <section className="grain relative pt-32 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Ruta de navegación" className="hero-fade mb-8 text-xs text-body/70" style={delay(0.1)}>
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((b, i) => (
                <li key={b.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < crumbs.length - 1 ? <Link href={b.path} className="link-u">{b.name}</Link> : <span aria-current="page">{b.name}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow hero-fade" style={delay(0.15)}>
                {categoryLabel[c.category]} · {c.type}
              </p>
              <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6.4rem)] leading-[1]">
                <span className="hero-line block overflow-hidden pb-[0.08em]"><span style={delay(0.2)}>{c.title}</span></span>
              </h1>
            </div>
            <div className="hero-fade lg:col-span-5 lg:pb-3" style={delay(0.5)}>
              <p className="text-[1.08rem] leading-relaxed">{c.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackLink event="whatsapp_click" placement={`proyecto-${c.slug}`} href={waLink(waMsg)} className="btn btn-primary">
                  <WhatsAppIcon className="h-4 w-4" /> Quiero algo así
                </TrackLink>
                <Link href="#galeria" className="btn btn-outline">Ver fotos</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1400px] px-5 sm:px-8 lg:mt-20 lg:px-12">
          <div className={`hero-unveil parallax relative overflow-hidden bg-canvas-3 ${landscapeHero ? "aspect-[3/2] sm:aspect-[21/10]" : "aspect-[4/5] sm:aspect-[16/10]"}`} style={delay(0.35)}>
            <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1400px) 1300px, 100vw" className={`object-cover ${landscapeHero ? "" : "object-[50%_30%]"}`} />
          </div>
        </div>
      </section>

      {/* Sobre el proyecto */}
      <section className="bg-canvas">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-32">
          <div className="lg:col-span-5">
            <Eyebrow>El proyecto</Eyebrow>
            <RevealLines className="mt-6 font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.08]" lines={["Lo que", <span key="a" className="accent text-taupe-deep">diseñamos</span>]} />
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/15 pt-6 text-sm" data-reveal="up">
              <div>
                <dt className="eyebrow">Tipo</dt>
                <dd className="mt-2 text-ink">{c.type}</dd>
              </div>
              <div>
                <dt className="eyebrow">Categoría</dt>
                <dd className="mt-2 text-ink">{categoryLabel[c.category]}</dd>
              </div>
              {service && (
                <div className="col-span-2">
                  <dt className="eyebrow">Servicio</dt>
                  <dd className="mt-2">
                    <Link href={`/servicios/${service.slug}`} className="link-u-on text-ink">{service.name}</Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[1.05rem] leading-relaxed" data-reveal="up">
              {c.description.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-10 border-t border-ink/15">
              {c.highlights.map((h, i) => (
                <li key={h} className="flex items-baseline gap-4 border-b border-ink/15 py-4 font-display text-lg text-ink" data-reveal="up" style={delay(i * 0.05)}>
                  <span className="font-sans text-xs text-taupe-deep">0{i + 1}</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="bg-canvas-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <RevealLines className="font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.08]" lines={["Galería del", <span key="a" className="accent text-taupe-deep">proyecto</span>]} />
            <p className="text-sm" data-reveal="up">Toca una foto para verla en grande</p>
          </div>
          <ProjectGallery
            filters={false}
            projects={rest.map((i) => ({ src: i.src, alt: i.alt, title: c.title, category: c.category, ratio: i.w / i.h }))}
          />
          {c.process && (
            <div className="mt-20">
              <Eyebrow>Detrás de escena · el proceso de obra</Eyebrow>
              <div className="mt-8 grid grid-cols-2 gap-4 lg:w-2/3">
                {c.process.map((p, i) => (
                  <div key={p.src} className="zoom relative aspect-[3/4] overflow-hidden bg-canvas-3" data-reveal="img" style={delay(i * 0.1)}>
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Siguiente proyecto */}
      <Link href={`/portafolio/${next.slug}`} className="group relative block overflow-hidden bg-espresso text-ivory">
        <div className="parallax absolute inset-0">
          <Image src={next.images[0].src} alt="" fill sizes="100vw" className="object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-55" />
        </div>
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-36">
          <div>
            <p className="eyebrow text-sand">Siguiente proyecto</p>
            <p className="mt-4 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-none text-ivory">{next.title}</p>
          </div>
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/50 transition-all duration-500 group-hover:bg-ivory group-hover:text-espresso">
            <ArrowIcon className="h-6 w-6" />
          </span>
        </div>
      </Link>

      <ContactSection placement={`proyecto-${c.slug}`} title={["¿Quieres un espacio", "como este?"]} />
    </>
  );
}
