import { contact, waLink } from "@/lib/site";
import { breadcrumbSchema, businessId, pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import TrackLink from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/icons";
import { delay } from "@/components/ui";
import { FaqSection } from "@/components/sections";
import { homeFaqs } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Agenda tu Asesoría de Diseño de Interiores",
  description:
    "Agenda tu asesoría de diseño de interiores en Quito y Cumbayá. Escríbenos por WhatsApp al 099 753 4238 o completa el formulario y te contactamos.",
  path: "/contacto",
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Contacto", path: "/contacto" },
];

export default function Contacto() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          { "@context": "https://schema.org", "@type": "ContactPage", url: `${siteUrl}/contacto`, about: { "@id": businessId } },
        ]}
      />
      <section className="grain relative bg-canvas pt-32 lg:pt-44">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:pb-32">
          <div className="lg:col-span-5">
            <p className="eyebrow hero-fade" style={delay(0.1)}>Contacto</p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,5.6vw,5rem)] leading-[1.02]">
              <span className="hero-line block overflow-hidden pb-[0.06em]"><span style={delay(0.15)}>Agenda tu</span></span>
              <span className="hero-line block overflow-hidden pb-[0.1em]"><span style={delay(0.27)} className="accent text-taupe-deep">asesoría de diseño</span></span>
            </h1>
            <p className="hero-fade mt-6 max-w-md text-[1.05rem] leading-relaxed" style={delay(0.5)}>
              Cuéntanos qué espacio quieres transformar. Te contactamos para coordinar una
              visita a tu proyecto en Quito, Cumbayá o Tumbaco.
            </p>

            <div className="hero-fade mt-10 space-y-8" style={delay(0.65)}>
              <TrackLink event="whatsapp_click" placement="contacto" href={waLink()} className="btn btn-wa w-full sm:w-auto">
                <WhatsAppIcon className="h-5 w-5" /> Escríbenos por WhatsApp
              </TrackLink>
              <dl className="grid gap-6 text-[0.95rem] sm:grid-cols-2">
                <div>
                  <dt className="eyebrow">Teléfonos</dt>
                  {contact.phones.map((p, i) => (
                    <dd key={p} className="mt-2">
                      <TrackLink event="phone_click" placement="contacto" href={`tel:${contact.phonesE164[i]}`} className="link-u text-ink">{p}</TrackLink>
                    </dd>
                  ))}
                </div>
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2 break-all">
                    <TrackLink event="email_click" placement="contacto" href={`mailto:${contact.email}`} className="link-u text-ink">{contact.email}</TrackLink>
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="eyebrow">Showroom digital</dt>
                  <dd className="mt-2">
                    <a href="/showroom-virtual" className="link-u text-ink">Recorre nuestros proyectos en alta resolución</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="hero-fade glass rounded-[2rem] p-6 sm:p-10 lg:col-span-7 lg:p-14" style={delay(0.4)}>
            <ContactForm placement="pagina-contacto" />
          </div>
        </div>
      </section>
      <FaqSection faqs={homeFaqs} />
    </>
  );
}
