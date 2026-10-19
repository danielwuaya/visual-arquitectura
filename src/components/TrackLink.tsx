"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@/lib/track";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: "whatsapp_click" | "phone_click" | "email_click";
  /** Dónde está el botón (header, hero, footer…) para saber qué convierte. */
  placement: string;
};

/** Enlace externo (WhatsApp, teléfono, email) que registra la conversión. */
export default function TrackLink({ event, placement, onClick, children, ...rest }: Props) {
  const external = rest.href?.startsWith("http");
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={(e) => {
        track(event, { placement });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
