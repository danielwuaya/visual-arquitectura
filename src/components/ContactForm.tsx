"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const projectTypes = ["Residencial", "Corporativo", "Comercial", "Otro"];

function Field({
  id,
  label,
  type = "text",
  required,
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const commonProps = {
    id,
    name: id,
    required,
    placeholder: " ",
    className:
      "peer w-full border-0 border-b border-white/30 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder-shown:border-white/30 focus:border-taupe",
  };

  return (
    <div className="relative">
      {textarea ? (
        <textarea rows={4} {...commonProps} />
      ) : (
        <input type={type} {...commonProps} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-3 font-sans text-sm text-white/60 transition-all duration-200 ease-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/60 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-taupe peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-white/80"
      >
        {label}
        {required && <span className="text-taupe"> *</span>}
      </label>
      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-taupe transition-all duration-300 ease-out peer-focus:w-full" />
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [projectType, setProjectType] = useState<string>("Residencial");
  const formId = useId();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      projectType,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
      setProjectType("Residencial");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center border border-white/15 px-6 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-taupe text-taupe">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M5 12.5 10 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="mt-6 font-display text-xl text-white">¡Mensaje enviado!</p>
        <p className="mt-2 max-w-xs font-sans text-sm text-white/60">
          Gracias por escribirnos. Te responderemos muy pronto para agendar tu
          asesoría.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 font-sans text-xs uppercase tracking-wide-nav text-taupe underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="font-sans text-sm">
      <p className="font-display text-2xl text-white">Cuéntanos tu proyecto</p>
      <p className="mt-2 text-sm text-white/60">
        Completa el formulario y te contactamos para agendar tu asesoría de
        diseño de interiores.
      </p>

      <fieldset className="mt-8">
        <legend className="mb-3 text-xs uppercase tracking-wide-nav text-white/60">
          Tipo de proyecto
        </legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((option) => {
            const inputId = `${formId}-${option}`;
            const active = projectType === option;
            return (
              <div key={option}>
                <input
                  type="radio"
                  id={inputId}
                  name="projectTypeRadio"
                  value={option}
                  checked={active}
                  onChange={() => setProjectType(option)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={inputId}
                  className={`block cursor-pointer border px-4 py-2 text-xs uppercase tracking-wide-nav transition-colors ${
                    active
                      ? "border-taupe bg-taupe text-white"
                      : "border-white/30 text-white/70 hover:border-white/60"
                  }`}
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
        <Field id="firstName" label="Nombre" required />
        <Field id="lastName" label="Apellido" />
        <div className="col-span-2">
          <Field id="email" label="Email" type="email" required />
        </div>
        <div className="col-span-2">
          <Field id="phone" label="Teléfono" type="tel" />
        </div>
        <div className="col-span-2">
          <Field id="message" label="Cuéntanos sobre tu espacio" textarea />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-10 flex w-full items-center justify-center gap-3 border border-taupe bg-transparent py-3.5 text-xs uppercase tracking-wide-nav text-white transition-colors hover:bg-taupe disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        {status !== "sending" && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {status === "error" && (
        <p className="mt-4 text-xs text-red-300">
          Hubo un problema al enviar tu mensaje. Escríbenos directo a{" "}
          <a className="underline" href="mailto:Visual.disenoyarquitectura@gmail.com">
            Visual.disenoyarquitectura@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
