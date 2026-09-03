type IconProps = { className?: string };

const common = "w-10 h-10";

export function CalendarIcon({ className = common }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <rect x="7" y="10" width="34" height="30" rx="1" />
      <line x1="7" y1="18" x2="41" y2="18" />
      <line x1="15" y1="6" x2="15" y2="14" />
      <line x1="33" y1="6" x2="33" y2="14" />
      <circle cx="15" cy="26" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="26" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="33" cy="26" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="33" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="33" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SwatchIcon({ className = common }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M24 8 L38 22 L24 36 L10 22 Z" />
      <path d="M24 14 L32 22 L24 30 L16 22 Z" />
    </svg>
  );
}

export function CubeIcon({ className = common }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M24 6 L42 15 V33 L24 42 L6 33 V15 Z" />
      <path d="M6 15 L24 24 L42 15" />
      <line x1="24" y1="24" x2="24" y2="42" />
    </svg>
  );
}

export function CoinsIcon({ className = common }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <ellipse cx="18" cy="16" rx="10" ry="5" />
      <path d="M8 16v8c0 2.8 4.5 5 10 5s10-2.2 10-5v-8" />
      <ellipse cx="30" cy="26" rx="10" ry="5" />
      <path d="M20 26v8c0 2.8 4.5 5 10 5s10-2.2 10-5v-8" />
    </svg>
  );
}

export function ExecutionIcon({ className = common }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M24 4 L42 13 V29 L24 38 L6 29 V13 Z" />
      <path d="M24 4 V21" />
      <path d="M6 13 L24 21 L42 13" />
      <path d="M24 21 V38" />
    </svg>
  );
}
