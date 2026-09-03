import { NextResponse } from "next/server";

// El formulario de Wix enviaba los mensajes al backend interno de Wix.
// Este endpoint reemplaza esa funcionalidad. Para recibir los mensajes
// por email, conecta un proveedor como Resend (https://resend.com):
//
//   1. npm install resend
//   2. Agrega RESEND_API_KEY en las variables de entorno de Vercel
//   3. Descomenta el bloque de envío más abajo
//
// Mientras tanto, los envíos quedan registrados en los logs de Vercel
// (Project → Logs) para que no se pierda ningún mensaje.

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, message } = data ?? {};

    if (!email) {
      return NextResponse.json({ error: "Email requerido" }, { status: 400 });
    }

    console.log("Nuevo mensaje de contacto:", {
      firstName,
      lastName,
      email,
      phone,
      message,
      date: new Date().toISOString(),
    });

    // Ejemplo con Resend una vez configurado:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Visual Web <onboarding@resend.dev>",
    //   to: "Visual.disenoyarquitectura@gmail.com",
    //   subject: `Nuevo contacto de ${firstName ?? "sitio web"}`,
    //   text: `${firstName} ${lastName}\n${email}\n${phone}\n\n${message}`,
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error al procesar" }, { status: 500 });
  }
}
