import { contact } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping [animation-duration:2.5s]" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-md bg-black/80 px-3 py-1.5 font-sans text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}
