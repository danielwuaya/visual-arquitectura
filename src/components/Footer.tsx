import { contact } from "@/lib/site";
import {
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
  LinkedInIcon,
} from "@/components/icons";
import ContactForm from "@/components/ContactForm";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <h2 className="font-display text-3xl tracking-wide-nav uppercase">
            Contáctanos
          </h2>

          <div className="mt-8 space-y-6 font-sans text-sm">
            <div>
              <p className="text-taupe">Dirección</p>
              <p className="mt-1">{contact.address}</p>
            </div>
            <div>
              <p className="text-taupe">Email</p>
              <p className="mt-1">{contact.email}</p>
            </div>
            <div>
              <p className="text-taupe">Teléfono</p>
              <p className="mt-1">{contact.phones[0]}</p>
              <p>{contact.phones[1]}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon className="h-6 w-6" />
            </a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href={contact.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon className="h-6 w-6" />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center font-sans text-xs text-white/40 lg:px-10">
        © {new Date().getFullYear()} Visual Diseño de Interiores. Todos los derechos reservados.
      </div>
    </footer>
  );
}
