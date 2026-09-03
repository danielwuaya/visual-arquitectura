# Visual — Diseño de Interiores

Sitio web reconstruido en código (Next.js 15 + Tailwind CSS 4) a partir del
sitio original en Wix (visualarquitecturainterior.com), con el mismo
contenido, fotografías y estilo visual, pero con control total del código
para SEO, rendimiento y hosting.

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/app/` — páginas (Inicio, Sobre nosotros, Servicios, Portafolio, Showroom virtual)
- `src/components/` — Header, Footer, formulario de contacto, iconos
- `src/lib/site.ts` — datos de contacto y navegación (edítalo para cambiar teléfono, dirección, redes, etc.)
- `public/images/` — fotografías del sitio
- `src/app/api/contact/route.ts` — endpoint del formulario de contacto (ver sección abajo)

## Formulario de contacto

El formulario original de Wix enviaba los mensajes al backend interno de
Wix. Ese backend no es exportable, así que este proyecto incluye un
endpoint propio (`/api/contact`) que registra cada mensaje en los logs del
servidor y, si está configurado, lo envía automáticamente por WhatsApp.

### Recibir los mensajes automáticamente en WhatsApp

Para que cada envío del formulario llegue solo, sin que nadie tenga que
tocar nada, se usa la **WhatsApp Business Platform** de Meta (la API
oficial). Es gratis para este volumen de mensajes, pero requiere una
configuración única de unos 15-30 minutos:

1. **Crea una app de Meta for Developers**
   Entra a [developers.facebook.com/apps](https://developers.facebook.com/apps),
   crea una app de tipo "Business" y agrégale el producto **WhatsApp**.

2. **Verifica tu negocio (Meta Business Manager)**
   Si aún no tienes una cuenta de Meta Business verificada, Meta te guía
   para crearla y verificarla (nombre del negocio, dirección, etc.).

3. **Registra tu número de WhatsApp**
   En WhatsApp Manager, agrega el número que quieres usar como emisor
   (puede ser un número nuevo dedicado a esto; no puede ser un número que
   ya use WhatsApp normal/Business app en un celular). Meta te da un
   **Phone Number ID**.

4. **Genera un token de acceso permanente**
   En Business Settings → System Users, crea un System User, asígnale
   permisos sobre la app de WhatsApp y genera un **token de acceso
   permanente** (no el token temporal de 24h que aparece por defecto).

5. **Crea la plantilla de mensaje**
   Los mensajes que una empresa inicia (como esta notificación) deben
   usar una plantilla aprobada por Meta. En WhatsApp Manager → Message
   Templates, crea una plantilla llamada `nuevo_contacto_web`, categoría
   **Utility**, idioma **Spanish (es)**, con este cuerpo (4 variables):

   ```
   Nuevo contacto desde la web:

   Nombre: {{1}}
   Teléfono: {{2}}
   Proyecto: {{3}}
   Mensaje: {{4}}
   ```

   La aprobación suele tardar entre minutos y 24 horas.

6. **Agrega las variables de entorno en Vercel**
   Project → Settings → Environment Variables:

   | Variable | Valor |
   |---|---|
   | `WHATSAPP_TOKEN` | El token permanente del paso 4 |
   | `WHATSAPP_PHONE_ID` | El Phone Number ID del paso 3 |
   | `WHATSAPP_TO` | El número que debe recibir los mensajes, en formato E.164 sin `+` (ej. `593997534238`) |
   | `WHATSAPP_TEMPLATE_NAME` | `nuevo_contacto_web` (o el nombre que le hayas puesto) |
   | `WHATSAPP_TEMPLATE_LANG` | `es` |

7. **Redespliega**
   Después de agregar las variables, haz un redeploy desde Vercel
   (Deployments → ⋯ → Redeploy) para que el sitio las tome.

Mientras no configures esto, el formulario sigue funcionando con
normalidad: los mensajes solo quedan en los logs de Vercel (Project →
Logs).

### Recibir los mensajes por correo (alternativa/complemento)

También puedes recibir los mensajes por correo con
[Resend](https://resend.com) (tiene plan gratuito):

```bash
npm install resend
```

Agrega la variable de entorno `RESEND_API_KEY` en Vercel y descomenta el
bloque de envío en `src/app/api/contact/route.ts`.

## Subir el código a GitHub

Desde la carpeta del proyecto (sin `node_modules` ni `.next`, que ya están
excluidos por `.gitignore`):

```bash
git init
git add .
git commit -m "Sitio Visual Diseño de Interiores"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/visual-arquitectura.git
git push -u origin main
```

(Crea antes el repositorio vacío en GitHub, sin README ni licencia, para
que el `git push` no tenga conflictos.)

## Desplegar en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new)
2. Importa el repositorio de GitHub que acabas de crear
3. Vercel detecta Next.js automáticamente — solo dale a **Deploy**
4. Cada `git push` a `main` vuelve a desplegar el sitio automáticamente

## Dominio propio

Una vez desplegado, en el proyecto de Vercel ve a **Settings → Domains**
y agrega `visualarquitecturainterior.com` (o el dominio que prefieras).
Vercel te da los registros DNS exactos para apuntar el dominio, ya sea
que lo compres en Vercel o lo tengas en otro proveedor.

## SEO

El proyecto ya incluye:

- Metadata (title, description, Open Graph) por página, editable en cada
  `page.tsx` y en `src/app/layout.tsx`
- `sitemap.xml` generado automáticamente (`src/app/sitemap.ts`)
- `robots.txt` generado automáticamente (`src/app/robots.ts`)
- Imágenes optimizadas automáticamente por Next.js (`next/image`)

Para verificación de Google Search Console, Meta Business, etc., agrega
las etiquetas `meta` correspondientes en `src/app/layout.tsx` dentro de
`metadata.verification`.

## Nota sobre fuentes

El sitio original usa fuentes con licencia de Wix (Florania y DIN Next)
que no se pueden exportar. Este proyecto usa **Marcellus** (para títulos)
y **Jost** (para texto), dos fuentes gratuitas de Google Fonts con un
espíritu visual muy cercano al original. Puedes cambiarlas en
`src/app/layout.tsx`.
