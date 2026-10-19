"use client";

import Lenis from "lenis";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type CurtainState = "idle" | "cover" | "reveal";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Capa de experiencia global:
 *  - Scroll suave (Lenis)
 *  - Revelado de elementos al entrar en pantalla ([data-reveal])
 *  - Transición de cortina entre páginas
 */
export default function Experience() {
  const pathname = usePathname();
  const router = useRouter();
  const [curtain, setCurtain] = useState<CurtainState>("idle");
  const lenisRef = useRef<Lenis | null>(null);
  const navigating = useRef(false);

  // Scroll suave
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({
      lerp: 0.09,
      autoRaf: true,
      anchors: { offset: -90 },
      prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
    });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Revelado al hacer scroll — se vuelve a escanear en cada página
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    const scan = () =>
      document
        .querySelectorAll("[data-reveal]:not(.is-in)")
        .forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  // Al llegar a la nueva página: descubrir la cortina
  useEffect(() => {
    if (!navigating.current) return;
    navigating.current = false;
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    if (!window.location.hash) window.scrollTo(0, 0);
    setCurtain("reveal");
    const t = window.setTimeout(() => setCurtain("idle"), 900);
    return () => window.clearTimeout(t);
  }, [pathname]);

  // Interceptar clics en enlaces internos para cubrir con la cortina
  useEffect(() => {
    if (prefersReducedMotion()) return;

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download") || a.dataset.noTransition !== undefined) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // mismo destino o ancla: lo maneja Lenis/Next

      e.preventDefault();
      navigating.current = true;
      setCurtain("cover");
      lenisRef.current?.stop();
      const href = url.pathname + url.search + url.hash;
      window.setTimeout(() => {
        router.push(href);
        lenisRef.current?.start();
      }, 560);
      // Seguridad: si la navegación tarda demasiado, no dejamos la pantalla cubierta
      window.setTimeout(() => {
        if (navigating.current) {
          navigating.current = false;
          setCurtain("reveal");
        }
      }, 4000);
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [router]);

  return (
    <div className="curtain" data-state={curtain} aria-hidden="true">
      <span className="curtain-logo font-display text-3xl tracking-logo text-ivory">
        VISUAL
      </span>
    </div>
  );
}
