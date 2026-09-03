export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.87 9.87 0 0 0 4.62 1.17h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.79 2.4a8.2 8.2 0 0 1 2.41 5.84c0 4.55-3.71 8.24-8.25 8.24a8.3 8.3 0 0 1-4.2-1.14l-.3-.18-3.22.81.86-3.13-.2-.32a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.71-8.24 8.37-8.24Zm-3.3 4.44c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.2.87 2.35.99 2.51.12.16 1.7 2.72 4.19 3.7 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.36-.76-1.86-.2-.48-.4-.42-.55-.43Z"/>
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 2h-3.2v13.6a2.6 2.6 0 1 1-1.86-2.49v-3.3a5.9 5.9 0 1 0 5.06 5.84V8.4a7.6 7.6 0 0 0 4.4 1.4V6.6a4.4 4.4 0 0 1-4.4-4.4Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.98h4v10.02H3V9.98Zm7.02 0h3.83v1.37h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v6.58h-4v-5.84c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.08v5.94h-4V9.98Z" />
    </svg>
  );
}
