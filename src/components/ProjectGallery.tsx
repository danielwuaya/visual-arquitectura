"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { delay } from "@/components/ui";

export type GalleryItem = { src: string; title: string; alt: string; category: string; ratio: number };

const labels: Record<string, string> = {
  residencial: "Residencial",
  corporativo: "Corporativo y comercial",
  comercial: "Comercial",
};

export default function ProjectGallery({ projects, filters: showFilters = true }: { projects: GalleryItem[]; filters?: boolean }) {
  const filters = [
    { key: "todos", label: "Todos" },
    ...Array.from(new Set(projects.map((p) => p.category))).map((c) => ({ key: c, label: labels[c] ?? c })),
  ];
  const [filter, setFilter] = useState("todos");
  const [index, setIndex] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const touchX = useRef<number | null>(null);

  const visible = filter === "todos" ? projects : projects.filter((p) => p.category === filter);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, go]);

  const current = index !== null ? visible[index] : null;

  return (
    <>
      {showFilters && (
      <div role="tablist" aria-label="Filtrar proyectos" className="mb-12 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f.key === "todos" ? projects.length : projects.filter((p) => p.category === f.key).length;
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => {
                setFilter(f.key);
                setAnimKey((k) => k + 1);
              }}
              className={`rounded-full border px-5 py-2.5 text-[0.8rem] transition-all duration-300 ${
                filter === f.key ? "border-ivory bg-ivory text-espresso" : "border-ink/20 hover:border-ink/60"
              }`}
            >
              {f.label} <span className="ml-1 opacity-50">{count}</span>
            </button>
          );
        })}
      </div>
      )}

      <ul key={animKey} className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
        {visible.map((p, i) => (
          <li key={p.src} className="break-inside-avoid hero-fade" style={delay(Math.min(i, 8) * 0.06)}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="zoom group relative block w-full overflow-hidden bg-canvas-3 text-left"
              aria-label={`Ver en grande: ${p.title}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={900}
                height={Math.round(900 / p.ratio)}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="absolute inset-x-5 bottom-5 translate-y-3 text-ivory opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="eyebrow block text-ivory/70">
                  {labels[p.category] ?? p.category}
                </span>
                <span className="mt-1 block font-display text-xl">{p.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lb fixed inset-0 z-[80] flex flex-col bg-espresso/95 text-ivory"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          data-lenis-prevent
          onClick={() => setIndex(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-5 py-5 text-sm sm:px-8">
            <p>
              <span className="font-display text-lg">{current.title}</span>
              <span className="ml-3 text-ivory/50">
                {index! + 1} / {visible.length}
              </span>
            </p>
            <button type="button" onClick={() => setIndex(null)} className="eyebrow text-ivory/80 hover:text-ivory" autoFocus>
              Cerrar ✕
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="lb-img object-contain px-4 pb-6 sm:px-24" />
            <button type="button" onClick={() => go(-1)} aria-label="Anterior" className="absolute left-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 transition hover:bg-ivory hover:text-espresso sm:flex">
              ←
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Siguiente" className="absolute right-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 transition hover:bg-ivory hover:text-espresso sm:flex">
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
