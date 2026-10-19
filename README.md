# Visual — Diseño de Interiores

Sitio web reconstruido en código (Next.js 16 + Tailwind CSS 4) a partir del
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

## SEO local (Quito / Cumbayá)

- Cada página tiene su propio `canonical`, título y descripción (helper `pageMetadata` en `src/lib/seo.ts`).
- Páginas que posicionan búsquedas concretas:
  - `/` → "diseño de interiores Quito / Cumbayá"
  - `/servicios/diseno-interiores-residencial`, `/servicios/diseno-de-oficinas`, `/servicios/diseno-locales-comerciales`
  - `/diseno-de-interiores-cumbaya` → "diseño de interiores Cumbayá / Tumbaco"
- Datos estructurados (schema.org): negocio local, servicios, preguntas frecuentes, migas de pan y galería.
- `sitemap.xml` y `robots.txt` automáticos.
- Textos, servicios, preguntas frecuentes y proyectos se editan en `src/lib/content.ts`; contacto y zonas en `src/lib/site.ts`.

### Después de publicar

1. Da de alta el sitio en **Google Search Console** y envía `/sitemap.xml`.
   Pon el código de verificación en la variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
2. En el **Perfil de Empresa de Google** (Google Maps) usa exactamente el mismo
   nombre, dirección y teléfono que el sitio, y enlaza a la web. Es lo que más
   pesa para aparecer en el mapa al buscar "diseño de interiores Cumbayá".

## Medición de conversiones

El sitio registra eventos `generate_lead` (formulario) y `whatsapp_click`,
`phone_click`, `email_click` (con la ubicación del botón). Se activan al
definir en Vercel:

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics 4 (`G-XXXXXXX`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID del Meta Pixel (anuncios de Facebook/Instagram) |

## Animaciones

- Transición de cortina entre páginas y scroll suave: `src/components/Experience.tsx`
- Revelados al hacer scroll: atributo `data-reveal="up | img | mask | lines"` (estilos en `globals.css`)
- Todo se desactiva automáticamente si el visitante tiene activado "reducir movimiento".

## Nota sobre fuentes

Se usan **Marcellus** (títulos), **Jost** (texto) y **Cormorant Garamond
itálica** (acentos), alojadas en `src/fonts/` para cargar más rápido y sin
depender de Google Fonts. Se cambian en `src/app/layout.tsx`.
