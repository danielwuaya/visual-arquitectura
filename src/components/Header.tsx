"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, contact } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-taupe text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="font-display tracking-logo text-2xl leading-none">
          VISUAL
          <span className="mt-1 block text-[9px] tracking-[0.45em] font-sans font-light">
            DISEÑO DE INTERIORES
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-sans text-xs tracking-wide-nav lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-taupe"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4 font-sans text-sm tracking-wide-nav">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-4">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-taupe"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
