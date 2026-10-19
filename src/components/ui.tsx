import type { CSSProperties, ReactNode } from "react";

/** Retardo para animaciones escalonadas: style={delay(0.2)} */
export function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

/** Título que aparece línea por línea al entrar en pantalla. */
export function RevealLines({
  lines,
  as: Tag = "h2",
  className = "",
  start = 0,
}: {
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  start?: number;
}) {
  return (
    <Tag className={className} data-reveal="lines">
      {lines.map((line, i) => (
        <span key={i} className="line">
          <span style={delay(start + i * 0.12)}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </p>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
