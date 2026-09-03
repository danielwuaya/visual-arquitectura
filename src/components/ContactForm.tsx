"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-xs italic text-white/70">
            Nombre
          </label>
          <input id="firstName" name="firstName" className="field-input text-white" required />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-xs italic text-white/70">
            Apellido
          </label>
          <input id="lastName" name="lastName" className="field-input text-white" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-xs italic text-white/70">
          Email *
        </label>
        <input id="email" name="email" type="email" required className="field-input text-white" />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-xs italic text-white/70">
          Teléfono
        </label>
        <input id="phone" name="phone" className="field-input text-white" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-xs italic text-white/70">
          Mensaje
        </label>
        <textarea id="message" name="message" rows={4} className="field-input text-white" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-taupe py-3 text-xs uppercase tracking-wide-nav text-white transition-colors hover:bg-taupe-dark disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Send"}
      </button>

      {status === "sent" && (
        <p className="text-xs text-white/80">¡Gracias! Te responderemos pronto.</p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-300">
          Hubo un problema. Escríbenos directo a{" "}
          <a className="underline" href="mailto:Visual.disenoyarquitectura@gmail.com">
            Visual.disenoyarquitectura@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
