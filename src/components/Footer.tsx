import Link from "next/link";
import { areas, contact, nav, waLink } from "@/lib/site";
import { services } from "@/lib/content";
import { WhatsAppIcon, InstagramIcon, TikTokIcon, LinkedInIcon } from "@/components/icons";
import TrackLink from "@/components/TrackLink";
import { ArrowIcon, RevealLines } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory/75">
      {/* CTA final */}
      <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="flex flex-col gap-10 border-b border-ivory/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <RevealLines
            as="p"
            className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02] text-ivory"
            lines={[
              <>Diseñemos un espacio</>,
              <>
                que se sienta <span className="accent text-taupe">como tú</span>
              </>,
            ]}
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row" data-reveal="up">
            <Link href="/contacto" className="btn btn-light">
              Agenda tu asesoría <ArrowIcon />
            </Link>
            <TrackLink event="whatsapp_click" placement="footer-cta" href={waLink()} className="btn btn-outline-light">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </TrackLink>
          </div>
        </div>

        <div className="grid gap-12 pt-16 text-sm sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block leading-none text-ivory">
              <span className="block font-display text-2xl tracking-logo">VISUAL</span>
              <span className="mt-1.5 block text-[0.55rem] tracking-[0.42em]">DISEÑO DE INTERIORES</span>
            </Link>
            <p className="mt-6 max-w-xs leading-relaxed">
              Estudio de diseño de interiores y arquitectura interior en Cumbayá, Quito.
              Creamos armonía, estilo y bienestar.
            </p>
            <div className="mt-6 flex items-center gap-5 text-ivory">
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Visual" className="transition-opacity hover:opacity-60">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={contact.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de Visual" className="transition-opacity hover:opacity-60">
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Visual" className="transition-opacity hover:opacity-60">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-taupe">Estudio y showroom</p>
            <address className="mt-4 not-italic leading-relaxed">
              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-u-on text-ivory">
                {contact.street}
                <br />
                Cumbayá, Quito — Ecuador
              </a>
            </address>
            <p className="eyebrow mt-8 text-taupe">Contacto</p>
            <ul className="mt-4 space-y-2">
              {contact.phones.map((p, i) => (
                <li key={p}>
                  <TrackLink event="phone_click" placement="footer" href={`tel:${contact.phonesE164[i]}`} className="link-u text-ivory">
                    {p}
                  </TrackLink>
                </li>
              ))}
              <li>
                <TrackLink event="email_click" placement="footer" href={`mailto:${contact.email}`} className="link-u break-all text-ivory">
                  {contact.email}
                </TrackLink>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-taupe">Servicios</p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="link-u">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/diseno-de-interiores-cumbaya" className="link-u">
                  Diseño de interiores en Cumbayá
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-taupe">Explora</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-u">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 text-taupe">Zonas</p>
            <p className="mt-4 leading-relaxed">{areas.join(" · ")}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 pb-24 text-xs text-ivory/45 sm:flex-row sm:justify-between sm:px-8 lg:px-12 lg:pb-6">
          <p>© {new Date().getFullYear()} Visual Diseño de Interiores · Quito, Ecuador</p>
          <p>Diseño de interiores en Quito, Cumbayá y Tumbaco</p>
        </div>
      </div>

      {/* Marca de agua */}
      <p aria-hidden="true" className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] leading-none tracking-logo text-ivory/[0.03]">
        VISUAL
      </p>
    </footer>
  );
}
