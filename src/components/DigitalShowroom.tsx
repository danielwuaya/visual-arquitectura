"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon } from "@/components/ui";

export type ShowroomRoom = {
  slug: string;
  title: string;
  type: string;
  slides: { src: string; w: number; h: number; caption: string }[];
};

const SLIDE_MS = 6500;

/**
 * Showroom digital: visor a pantalla completa de los proyectos en alta
 * resolución (hasta 4K). Cambia de proyecto con las pestañas, de foto con
 * flechas / teclado / deslizando, reproducción automática y modo pantalla
 * completa.
 */
export default function DigitalShowroom({ rooms }: { rooms: ShowroomRoom[] }) {
  const [room, setRoom] = useState(0);
  const [slide, setSlide] = useState(0);
  const [prevSrc, setPrevSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);
  const [full, setFull] = useState(false);
  const [fill, setFill] = useState(false);
  const [tick, setTick] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const inView = useRef(false);

  const slides = rooms[room].slides;
  const current = slides[slide];
  const next = slides[(slide + 1) % slides.length];

  const goTo = useCallback(
    (r: number, s: number) => {
      setPrevSrc(rooms[room].slides[slide].src);
      setRoom(r);
      setSlide(s);
      setTick((t) => t + 1);
    },
    [room, slide, rooms]
  );

  const step = useCallback(
    (dir: 1 | -1) => {
      const len = rooms[room].slides.length;
      let r = room;
      let s = slide + dir;
      if (s >= len) {
        r = (room + 1) % rooms.length;
        s = 0;
      } else if (s < 0) {
        r = (room - 1 + rooms.length) % rooms.length;
        s = rooms[r].slides.length - 1;
      }
      goTo(r, s);
    },
    [room, slide, rooms, goTo]
  );

  // Reproducción automática (solo cuando el visor está en pantalla)
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      if (inView.current || document.fullscreenElement) step(1);
      else setTick((t) => t + 1);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [playing, step, tick]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (inView.current = e.intersectionRatio > 0.5), { threshold: [0, 0.5, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!inView.current && !document.fullscreenElement) return;
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === " ") {
        e.preventDefault();
        setPlaying((p) => !p);
      } else if (e.key.toLowerCase() === "f") toggleFull();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    const onChange = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function toggleFull() {
    const el = stageRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen?.();
    else el.requestFullscreen?.().catch(() => undefined);
  }

  const waMsg = `Hola Visual, vi el proyecto "${rooms[room].title}" en su showroom digital y me gustaría algo así.`;

  return (
    <div>
      <div
        ref={stageRef}
        data-lenis-prevent
        className="relative h-[100svh] min-h-[560px] w-full scroll-mt-0 select-none overflow-hidden bg-ink text-ivory"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        aria-roledescription="carrusel"
        aria-label="Showroom digital de proyectos"
      >
        {/* Fondo ambiental difuminado (rellena los bordes de fotos verticales) */}
        <div key={`bg-${current.src}`} className="sr-fade absolute inset-0 scale-110 opacity-60 blur-2xl">
          <Image src={current.src} alt="" fill sizes="64px" quality={40} className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-ink/35" />

        {/* Foto anterior (queda debajo mientras entra la nueva) */}
        {prevSrc && prevSrc !== current.src && (
          <div key={`prev-${tick}`} className="sr-out absolute inset-0">
            <Image src={prevSrc} alt="" fill sizes="100vw" quality={90} className={fill ? "object-cover" : "object-contain"} />
          </div>
        )}

        {/* Foto actual en alta resolución */}
        <div key={current.src} className={`sr-in absolute inset-0 ${playing ? "sr-zoom" : ""}`}>
          <Image
            src={current.src}
            alt={`${rooms[room].title}: ${current.caption}`}
            fill
            priority={room === 0 && slide === 0}
            sizes="100vw"
            quality={90}
            className={fill ? "object-cover" : "object-contain"}
          />
        </div>

        {/* Precarga de la siguiente foto */}
        <div className="pointer-events-none absolute inset-0 opacity-0" aria-hidden="true">
          <Image src={next.src} alt="" fill sizes="100vw" quality={90} loading="eager" className="object-cover" />
        </div>

        {/* Degradados para legibilidad */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />

        {/* Info superior */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 px-5 pt-6 sm:px-8 lg:px-12 lg:pt-8">
          <div key={`t-${room}-${slide}`} className="sr-text">
            <p className="eyebrow text-sand">
              {rooms[room].type} · {String(slide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <p className="mt-2 font-display text-3xl text-ivory sm:text-5xl">{rooms[room].title}</p>
            <p className="mt-1 font-accent text-xl italic text-ivory/80 sm:text-2xl">{current.caption}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden rounded-full border border-ivory/30 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-ivory/80 sm:inline">
              {Math.max(current.w, current.h) >= 3840 ? "4K" : "HD+"}
            </span>
            <button type="button" onClick={() => setFill((v) => !v)} className="sr-btn" aria-label={fill ? "Ver foto completa" : "Llenar pantalla"} title={fill ? "Ver foto completa" : "Llenar pantalla"}>
              {fill ? "⤡" : "⤢"}
            </button>
            <button type="button" onClick={() => setPlaying((p) => !p)} className="sr-btn" aria-label={playing ? "Pausar" : "Reproducir"}>
              {playing ? "❚❚" : "►"}
            </button>
            <button type="button" onClick={toggleFull} className="sr-btn" aria-label={full ? "Salir de pantalla completa" : "Pantalla completa"}>
              {full ? "✕" : "⛶"}
            </button>
          </div>
        </div>

        {/* Flechas */}
        <button type="button" onClick={() => step(-1)} aria-label="Foto anterior" className="sr-arrow left-3 sm:left-6">
          <ArrowIcon className="h-6 w-6 rotate-180" />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Foto siguiente" className="sr-arrow right-3 sm:right-6">
          <ArrowIcon className="h-6 w-6" />
        </button>

        {/* Barra inferior: progreso + proyectos */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-[4.75rem] sm:px-8 lg:px-12 lg:pb-8">
          <div className="flex gap-1.5" aria-hidden="true">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                tabIndex={-1}
                onClick={() => goTo(room, i)}
                className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-ivory/25"
              >
                <span
                  key={i === slide ? `p-${tick}` : `s-${i}`}
                  className={`absolute inset-y-0 left-0 bg-ivory ${i < slide ? "w-full" : i === slide ? (playing ? "sr-progress" : "w-full opacity-60") : "w-0"}`}
                  style={{ animationDuration: `${SLIDE_MS}ms` }}
                />
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-end justify-between gap-6">
            <div role="tablist" aria-label="Proyectos" className="-mx-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              {rooms.map((r, i) => (
                <button
                  key={r.slug}
                  role="tab"
                  aria-selected={i === room}
                  type="button"
                  onClick={() => goTo(i, 0)}
                  className={`group flex shrink-0 items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-4 text-left text-xs transition-all duration-500 ${
                    i === room ? "border-ivory bg-ivory text-ink" : "border-ivory/25 bg-ink/30 text-ivory/85 backdrop-blur hover:border-ivory/60"
                  }`}
                >
                  <span className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image src={r.slides[0].src} alt="" fill sizes="32px" quality={40} className="object-cover" />
                  </span>
                  {r.title}
                </button>
              ))}
            </div>
            <div className="hidden shrink-0 gap-2 lg:flex">
              <Link href={`/portafolio/${rooms[room].slug}`} className="btn btn-outline-light min-h-11 px-5">
                Ver proyecto
              </Link>
              <a
                href={waLink(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { placement: `showroom-${rooms[room].slug}` })}
                className="btn btn-wa min-h-11 px-5"
              >
                <WhatsAppIcon className="h-4 w-4" /> Quiero algo así
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones en móvil */}
      <div className="grid grid-cols-2 gap-px bg-ink/10 lg:hidden">
        <Link href={`/portafolio/${rooms[room].slug}`} className="flex h-14 items-center justify-center bg-ivory text-[0.72rem] uppercase tracking-[0.16em] text-ink">
          Ver proyecto
        </Link>
        <a
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { placement: `showroom-${rooms[room].slug}` })}
          className="flex h-14 items-center justify-center gap-2 bg-[#1f7a4d] text-[0.72rem] uppercase tracking-[0.16em] text-white"
        >
          <WhatsAppIcon className="h-4 w-4" /> Quiero algo así
        </a>
      </div>
    </div>
  );
}
