"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, contact, waLink } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import TrackLink from "@/components/TrackLink";
import { delay } from "@/components/ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > last + 2);
      if (y < last - 2) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al cambiar de página
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled && !open
            ? "bg-canvas/80 shadow-[0_1px_0_rgb(243_239_232/0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
          <Link
            href="/"
            className={`relative z-[70] leading-none transition-colors duration-500 ${open ? "text-ivory" : "text-ink"}`}
          >
            <span className="block font-display text-[1.75rem] tracking-logo">VISUAL</span>
            <span className="mt-1.5 block font-sans text-[0.55rem] font-normal tracking-[0.42em]">
              DISEÑO DE INTERIORES
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`link-u font-sans text-[0.92rem] text-ink/80 transition-colors hover:text-ink ${
                  isActive(item.href) ? "is-active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <TrackLink
              event="whatsapp_click"
              placement="header"
              href={waLink()}
              aria-label="Escríbenos por WhatsApp"
              className="text-ink transition-colors hover:text-taupe-deep"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </TrackLink>
            <Link href="/contacto" className="btn btn-primary min-h-11 px-6">
              Agenda tu asesoría
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[70] flex h-11 w-11 items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="relative block h-3 w-7">
              <span
                className={`absolute left-0 h-px w-7 transition-all duration-500 ${
                  open ? "top-1.5 rotate-45 bg-ivory" : "top-0 bg-ink"
                }`}
              />
              <span
                className={`absolute left-0 h-px transition-all duration-500 ${
                  open ? "top-1.5 w-7 -rotate-45 bg-ivory" : "top-3 w-5 bg-ink"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-movil"
        data-lenis-prevent
        className={`fixed inset-0 z-[60] flex flex-col bg-espresso px-6 pb-10 pt-28 text-ivory transition-[clip-path] duration-700 ease-[cubic-bezier(.65,0,.35,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        {open && (
          <>
            <nav aria-label="Menú móvil" className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="menu-item flex items-baseline gap-4 py-2 font-display text-4xl text-ivory"
                  style={delay(0.15 + i * 0.06)}
                >
                  <span className="font-sans text-xs text-taupe">0{i + 1}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="menu-item mt-auto space-y-4" style={delay(0.6)}>
              <TrackLink
                event="whatsapp_click"
                placement="menu-movil"
                href={waLink()}
                className="btn btn-wa w-full"
              >
                <WhatsAppIcon className="h-5 w-5" /> Escríbenos por WhatsApp
              </TrackLink>
              <div className="flex items-center justify-between text-sm text-ivory/70">
                <TrackLink event="phone_click" placement="menu-movil" href={`tel:${contact.phonesE164[0]}`}>
                  {contact.phones[0]}
                </TrackLink>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <InstagramIcon className="h-4 w-4" /> {contact.instagramHandle}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
