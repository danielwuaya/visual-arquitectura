"use client";

import { useId, useState, type FormEvent } from "react";
import { contact, waLink } from "@/lib/site";
import { track } from "@/lib/track";
import { WhatsAppIcon } from "@/components/icons";
import { ArrowIcon } from "@/components/ui";

type Status = "idle" | "sending" | "sent" | "error";

const projectTypes = ["Casa o departamento", "Oficina", "Local comercial", "Airbnb", "Otro"];
const zones = ["Cumbayá", "Tumbaco", "Quito", "Nayón / Puembo", "Otra ciudad"];

function Field({
  id,
  label,
  type = "text",
  required,
  textarea,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
}) {
  const props = { id, name: id, required, placeholder: " ", autoComplete, className: "field peer" };
  return (
    <div className="relative">
      {textarea ? <textarea rows={3} {...props} /> : <input type={type} inputMode={inputMode} {...props} />}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-4 text-[0.95rem] text-body/80 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.68rem] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-taupe-deep peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.68rem] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.18em]"
      >
        {label}
        {required ? <span className="text-taupe-deep"> *</span> : <span className="text-body/50"> (opcional)</span>}
      </label>
    </div>
  );
}

export default function ContactForm({ placement = "form" }: { placement?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [lead, setLead] = useState<{ name: string; zone: string; message: string } | null>(null);
  const uid = useId();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fd, projectType, page: window.location.pathname }),
      });
      if (!res.ok) throw new Error("request failed");
      track("generate_lead", { placement, project_type: projectType, zone: fd.zone });
      setLead({ name: fd.name, zone: fd.zone, message: fd.message });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    const waMsg = `Hola Visual, soy ${lead?.name ?? ""}. Acabo de enviar el formulario de la web: proyecto ${projectType.toLowerCase()}${lead?.zone ? ` en ${lead.zone}` : ""}. ¿Coordinamos la asesoría?`;
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-taupe-deep text-taupe-deep">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-6 w-6" aria-hidden="true">
            <path d="M5 12.5 10 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="mt-8 font-display text-3xl text-ink">¡Gracias{lead?.name ? `, ${lead.name.split(" ")[0]}` : ""}!</p>
        <p className="mt-3 max-w-sm leading-relaxed">
          Recibimos tu mensaje. Te contactaremos muy pronto para agendar tu asesoría.
          Si prefieres avanzar ahora mismo, escríbenos por WhatsApp.
        </p>
        <a
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { placement: "form-success" })}
          className="btn btn-wa mt-8"
        >
          <WhatsAppIcon className="h-4 w-4" /> Continuar por WhatsApp
        </a>
        <button type="button" onClick={() => setStatus("idle")} className="link-u-on mt-6 text-xs uppercase tracking-[0.18em]">
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-sm" noValidate={false}>
      <fieldset>
        <legend className="eyebrow mb-4">¿Qué quieres diseñar?</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((option) => {
            const id = `${uid}-${option}`;
            const active = projectType === option;
            return (
              <div key={option}>
                <input
                  type="radio"
                  id={id}
                  name="projectTypeRadio"
                  value={option}
                  checked={active}
                  onChange={() => setProjectType(option)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={id}
                  className={`block cursor-pointer rounded-full border px-4 py-2.5 text-[0.8rem] transition-all duration-300 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-taupe-deep ${
                    active
                      ? "border-ink bg-ink text-ivory"
                      : "border-ink/20 text-body hover:border-ink/60"
                  }`}
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Field id="name" label="Nombre" required autoComplete="name" />
        <Field id="phone" label="WhatsApp o teléfono" type="tel" inputMode="tel" required autoComplete="tel" />
        <Field id="email" label="Email" type="email" inputMode="email" autoComplete="email" />
        <div className="relative">
          <select id="zone" name="zone" defaultValue="" className="field appearance-none pr-8 text-[0.95rem]">
            <option value="" disabled>
              Zona del proyecto
            </option>
            {zones.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-0 top-5 h-4 w-4 text-body" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
          <label htmlFor="zone" className="sr-only">Zona del proyecto</label>
        </div>
        <div className="sm:col-span-2">
          <Field id="message" label="Cuéntanos sobre tu espacio" textarea />
        </div>
      </div>

      {/* Campo trampa anti-spam: invisible para personas */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-web`}>No llenar</label>
        <input id={`${uid}-web`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {status === "sending" ? "Enviando…" : "Quiero mi asesoría"}
          {status !== "sending" && <ArrowIcon />}
        </button>
        <p className="text-xs text-body/70">Sin compromiso. Tus datos solo se usan para contactarte.</p>
      </div>

      {status === "error" && (
        <p className="mt-5 text-sm text-red-700" role="alert">
          No pudimos enviar tu mensaje. Escríbenos por{" "}
          <a className="underline" href={waLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{" "}
          o a{" "}
          <a className="underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
