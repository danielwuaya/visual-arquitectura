"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProcessStep } from "@/lib/content";

/**
 * Proceso interactivo: cada paso muestra su entregable (planos, renders 3D,
 * materiales, obra) con un fundido suave entre imágenes.
 */
export default function ProcessShowcase({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-14">
      <ol className="lg:col-span-5" role="tablist" aria-label="Etapas del proceso">
        {steps.map((step, i) => {
          const on = i === active;
          return (
            <li key={step.title} className="border-t border-ivory/12 last:border-b" data-reveal="up">
              <button
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="proceso-panel"
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex w-full items-start gap-5 py-6 text-left"
              >
                <span
                  className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs transition-colors duration-500 ${
                    on ? "border-ivory bg-ivory text-espresso" : "border-taupe/60 text-taupe group-hover:border-ivory/60"
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="flex-1">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className={`font-display text-2xl transition-colors duration-500 ${on ? "text-ivory" : "text-ivory/55 group-hover:text-ivory/80"}`}>
                      {step.title}
                    </span>
                    <span className={`hidden text-[0.7rem] uppercase tracking-[0.18em] transition-opacity duration-500 sm:inline ${on ? "text-taupe opacity-100" : "opacity-0"}`}>
                      {step.tag}
                    </span>
                  </span>
                  <span
                    className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                      on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block pt-3 text-[0.95rem] leading-relaxed text-ivory/70">{step.text}</span>
                      {/* En móvil la imagen aparece dentro del paso */}
                      <span className="relative mt-5 block aspect-[5/4] overflow-hidden rounded-[1.25rem] bg-[#aca9af] lg:hidden">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div id="proceso-panel" role="tabpanel" className="hidden lg:col-span-7 lg:block">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#aca9af]" data-reveal="img">
          {steps.map((step, i) => (
            <div
              key={step.image}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            >
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                sizes="(min-width: 1400px) 760px, 55vw"
                className="object-cover"
              />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/60 to-transparent" />
          <span className="absolute bottom-5 left-5 z-10 rounded-full bg-espresso/70 px-4 py-2 text-xs text-ivory backdrop-blur-md">
            0{active + 1} · {steps[active].tag}
          </span>
        </div>
      </div>
    </div>
  );
}
