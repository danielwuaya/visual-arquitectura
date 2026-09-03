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
endpoint propio (`/api/contact`) que por ahora solo registra los mensajes
en los logs del servidor.

Para recibir los mensajes por correo, la forma más simple es con
[Resend](https://resend.com) (tiene plan gratuito):

```bash
npm install resend
```

Agrega la variable de entorno `RESEND_API_KEY` en Vercel (Project →
Settings → Environment Variables) y descomenta el bloque de envío en
`src/app/api/contact/route.ts`.

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
