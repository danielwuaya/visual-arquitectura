import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import TrackLink from "@/components/TrackLink";
import Link from "next/link";

/**
 * Escritorio: botón flotante de WhatsApp.
 * Móvil: barra fija inferior con las dos acciones que convierten.
 */
export default function WhatsAppButton() {
  return (
    <>
      <TrackLink
        event="whatsapp_click"
        placement="flotante"
        href={waLink()}
        aria-label="Escríbenos por WhatsApp"
        className="group fixed bottom-8 right-8 z-[55] hidden h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-[0_18px_40px_-12px_rgb(0_0_0/0.45)] transition-transform duration-500 hover:scale-110 lg:flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="pointer-events-none absolute right-[4.5rem] whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
          ¿Hablamos de tu proyecto?
        </span>
      </TrackLink>

      <div className="fixed inset-x-0 bottom-0 z-[55] grid grid-cols-2 border-t border-ink/10 bg-ivory/95 backdrop-blur-md lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <TrackLink
          event="whatsapp_click"
          placement="barra-movil"
          href={waLink()}
          className="flex h-14 items-center justify-center gap-2 bg-[#1f7a4d] text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </TrackLink>
        <Link
          href="/contacto"
          className="flex h-14 items-center justify-center text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink"
        >
          Agendar asesoría
        </Link>
      </div>
    </>
  );
}
