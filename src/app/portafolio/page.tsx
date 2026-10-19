import { projects } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import { breadcrumbSchema, businessId, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import ProjectGallery from "@/components/ProjectGallery";
import { ContactSection, CtaBand, PageHeader } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Portafolio de Diseño de Interiores en Quito y Cumbayá",
  description:
    "Proyectos de diseño de interiores de Visual: cocinas, salas, baños, comedores, oficinas y locales comerciales en Quito y Cumbayá. Mira cómo transformamos cada espacio.",
  path: "/portafolio",
  image: "/images/project-dining.jpg",
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Portafolio", path: "/portafolio" },
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portafolio de diseño de interiores",
  url: `${siteUrl}/portafolio`,
  about: { "@id": businessId },
  hasPart: projects.map((p) => ({
    "@type": "ImageObject",
    contentUrl: `${siteUrl}${p.src}`,
    name: p.title,
    description: p.alt,
    creator: { "@id": businessId },
  })),
};

export default function Portafolio() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), gallerySchema]} />
      <PageHeader
        breadcrumbs={crumbs}
        eyebrow="Portafolio"
        title={["Transformamos espacios,", <span key="a" className="accent text-taupe-deep">creamos experiencias</span>]}
        intro="Una selección de proyectos residenciales, corporativos y comerciales diseñados por Visual en Quito y Cumbayá."
      />
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-14 sm:px-8 lg:px-12 lg:pb-32">
          <ProjectGallery projects={projects} />
        </div>
      </section>
      <CtaBand
        title={["¿Te imaginas tu espacio", <span key="a" className="accent text-sand">aquí?</span>]}
        text="Cada proyecto empieza con una conversación. Cuéntanos qué quieres transformar y te mostramos cómo podría verse."
        image="/images/project-living-kitchen.jpg"
        waMessage="Hola Visual, vi su portafolio y me gustaría diseñar mi espacio."
      />
      <ContactSection placement="portafolio" />
    </>
  );
}
