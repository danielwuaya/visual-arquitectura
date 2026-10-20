"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon, delay } from "@/components/ui";

export type HeroSlide = { src: string; alt: string; label: string };

const MS = 6000;

/**
 * Panel principal del inicio: imágenes aspiracionales que se funden entre sí
 * con un acercamiento lento, una tarjeta de vidrio y el llamado a la acción.
 */
export default function HeroShowcase({ slides }: { slides: HeroSlide[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % slides.length), MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="hero-unveil relative h-[64svh] min-h-[440px] w-full overflow-hidden rounded-[2rem] bg-canvas-3 sm:h-[68svh] lg:h-[70svh]" style={delay(0.25)}>
      {slides.map((s, n) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] ${n === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={n !== i}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={n === 0}
            sizes="(min-width: 1400px) 1300px, 100vw"
            className={`object-cover ${n === i ? "hero-drift" : ""}`}
          />
        </div>
      ))}

      {/* Velos para dar profundidad y legibilidad */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-espresso/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-transparent" />

      {/* Tarjeta de vidrio */}
      <div className="glass hero-fade absolute right-4 top-4 hidden w-[19rem] rounded-[1.75rem] p-7 text-ivory sm:block lg:right-8 lg:top-1/2 lg:w-[21rem] lg:-translate-y-1/2" style={delay(1)}>
        <p className="eyebrow text-ivory/70">Nuestra filosofía</p>
        <p className="mt-4 font-display text-[2.1rem] leading-[1.05] text-ivory">
          Armonía, estilo <span className="accent">y bienestar</span>
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/75">
          Cada espacio nace de escuchar cómo vives. Luz, materiales y proporción
          en equilibrio, diseñados al detalle.
        </p>
        <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
          {slides.map((s, n) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Ver ${s.label}`}
              className={`h-[3px] rounded-full transition-all duration-700 ${n === i ? "w-8 bg-ivory" : "w-3 bg-ivory/30 hover:bg-ivory/60"}`}
            />
          ))}
          <span key={i} className="sr-text ml-auto text-xs text-ivory/70">{slides[i].label}</span>
        </div>
      </div>

      {/* Llamado a la acción */}
      <div className="hero-fade absolute bottom-5 left-5 right-5 flex flex-col gap-3 sm:bottom-8 sm:left-8 sm:right-auto sm:flex-row sm:items-center" style={delay(0.9)}>
        <Link href="/contacto" className="btn btn-primary">
          Agenda tu asesoría <ArrowIcon />
        </Link>
        <Link href="/showroom-virtual" className="btn btn-dark">
          Explora el showroom digital
        </Link>
      </div>
    </div>
  );
}
