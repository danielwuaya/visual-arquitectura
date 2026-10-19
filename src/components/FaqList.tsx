"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";
import { delay } from "@/components/ui";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-ink/15">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={f.q} className="faq-item border-b border-ink/15" data-open={isOpen} data-reveal="up" style={delay(i * 0.06)}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg text-ink transition-colors hover:text-taupe-deep sm:text-xl"
              >
                {f.q}
                <span className="faq-icon relative h-4 w-4 shrink-0" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-current" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-current" />
                </span>
              </button>
            </h3>
            <div id={id} className="faq-body" role="region">
              <div>
                <p className="max-w-2xl pb-7 leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
