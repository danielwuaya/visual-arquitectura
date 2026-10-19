import { NextResponse } from "next/server";

// El formulario de Wix enviaba los mensajes al backend interno de Wix.
// Este endpoint reemplaza esa funcionalidad y notifica los mensajes por
// WhatsApp usando la WhatsApp Business Platform (Meta Cloud API).
//
// Variables de entorno necesarias (Vercel → Project → Settings →
// Environment Variables). Ver README.md para el paso a paso completo:
//
//   WHATSAPP_TOKEN          Token de acceso permanente del System User
//   WHATSAPP_PHONE_ID       Phone Number ID del número emisor (WhatsApp Manager)
//   WHATSAPP_TO             Número que RECIBE la notificación, en E.164 sin "+" (ej. 593997534238)
//   WHATSAPP_TEMPLATE_NAME  Nombre de la plantilla aprobada (por defecto: nuevo_contacto_web)
//   WHATSAPP_TEMPLATE_LANG  Código de idioma de la plantilla (por defecto: es)
//
// Si estas variables no están configuradas, el endpoint sigue funcionando
// normalmente y solo registra el mensaje en los logs (no se pierde nada).

async function sendWhatsAppNotification(fields: {
  name?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const to = process.env.WHATSAPP_TO;

  if (!token || !phoneId || !to) {
    console.log(
      "WhatsApp no configurado (faltan WHATSAPP_TOKEN / WHATSAPP_PHONE_ID / WHATSAPP_TO); se omite el envío."
    );
    return;
  }

  const templateName = process.env.WHATSAPP_TEMPLATE_NAME || "nuevo_contacto_web";
  const templateLang = process.env.WHATSAPP_TEMPLATE_LANG || "es";

  const nombre = fields.name || "Sin nombre";
  const telefono = fields.phone || "No indicado";
  const tipoProyecto = fields.projectType || "No indicado";
  const mensaje = fields.message || "Sin mensaje";

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${phoneId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: templateName,
          language: { code: templateLang },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: nombre },
                { type: "text", text: telefono },
                { type: "text", text: tipoProyecto },
                { type: "text", text: mensaje },
              ],
            },
          ],
        },
      }),
    }
  );

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("Error al enviar notificación de WhatsApp:", res.status, errorBody);
  }
}

const clean = (v: unknown, max = 1000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) ?? {};

    // Campo trampa: si un bot lo llena, respondemos OK sin procesar nada.
    if (clean(data.website)) return NextResponse.json({ ok: true });

    const lead = {
      name: clean(data.name, 120),
      phone: clean(data.phone, 40),
      email: clean(data.email, 160),
      zone: clean(data.zone, 60),
      projectType: clean(data.projectType, 60),
      message: clean(data.message, 2000),
      page: clean(data.page, 200),
    };

    if (!lead.name || (!lead.phone && !lead.email)) {
      return NextResponse.json(
        { error: "Nombre y un teléfono o email son requeridos" },
        { status: 400 }
      );
    }

    console.log("Nuevo lead desde la web:", { ...lead, date: new Date().toISOString() });

    // No dejamos que un fallo en WhatsApp rompa el envío del formulario:
    // el mensaje ya quedó registrado en los logs de todas formas.
    try {
      await sendWhatsAppNotification({
        name: lead.name,
        phone: lead.phone || "No indicado",
        projectType: [lead.projectType, lead.zone].filter(Boolean).join(" · "),
        message: [lead.message || "Sin mensaje", lead.email && `Email: ${lead.email}`]
          .filter(Boolean)
          .join(" — "),
      });
    } catch (err) {
      console.error("Error al notificar por WhatsApp:", err);
    }

    // Ejemplo con Resend, si además quieres recibir los mensajes por email:
    //   1. npm install resend
    //   2. Agrega RESEND_API_KEY en las variables de entorno de Vercel
    //   3. Descomenta el bloque de abajo
    //
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Visual Web <onboarding@resend.dev>",
    //   to: "Visual.disenoyarquitectura@gmail.com",
    //   subject: `Nuevo lead web: ${lead.name} (${lead.projectType})`,
    //   text: Object.entries(lead).map(([k, v]) => `${k}: ${v}`).join("\n"),
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error al procesar" }, { status: 500 });
  }
}
