/**
 * Proyectos reales (fotos del Drive del estudio). Cada uno tiene su propia
 * página en /portafolio/[slug]. Para agregar un proyecto: crea la carpeta
 * public/images/proyectos/<slug>/ con fotos 01.jpg, 02.jpg… y suma una
 * entrada aquí.
 */
export type CaseCategory = "residencial" | "corporativo" | "comercial";

export type CaseImage = { src: string; w: number; h: number; alt: string };

export type CaseStudy = {
  slug: string;
  title: string;
  category: CaseCategory;
  type: string;
  summary: string;
  description: string[];
  highlights: string[];
  service: string; // slug de servicio relacionado
  images: CaseImage[];
  /** Fotos que muestran el proceso de obra (opcional). */
  process?: CaseImage[];
};

const P = (slug: string, n: number, w: number, h: number, alt: string): CaseImage => ({
  src: `/images/proyectos/${slug}/${String(n).padStart(2, "0")}.jpg`,
  w,
  h,
  alt,
});

const L = [2400, 1600] as const; // horizontal
const V = [1800, 2400] as const; // vertical

export const caseStudies: CaseStudy[] = [
  {
    slug: "casa-betania",
    title: "Casa Betania",
    category: "residencial",
    type: "Vivienda completa",
    summary:
      "Una casa luminosa con vista al valle: dormitorios con cabeceras tapizadas, muebles a medida en madera y luz cálida integrada.",
    description: [
      "Diseñamos los interiores de una casa familiar de grandes ventanales, buscando que cada ambiente se sintiera cálido sin perder la amplitud y la luz natural.",
      "La paleta combina neutros arena, madera y texturas suaves. En el dormitorio infantil, las cabeceras en forma de nube y las estrellas en la pared crean un espacio lúdico y sereno; en el principal, una cabecera tapizada y un nicho iluminado dan calidez y orden.",
    ],
    highlights: [
      "Cabeceras tapizadas diseñadas a medida",
      "Repisas flotantes con iluminación LED y listones de madera",
      "Baño con lavabo en piedra natural y espejo retroiluminado",
      "Cielos falsos con luz perimetral cálida",
      "Rincón de juegos y lectura para los niños",
    ],
    service: "diseno-interiores-residencial",
    images: [
      P("casa-betania", 2, L[0], L[1], "Dormitorio principal con cabecera tapizada y nicho iluminado, Casa Betania"),
      P("casa-betania", 1, L[0], L[1], "Dormitorio infantil con cabeceras en forma de nube y vista al valle"),
      P("casa-betania", 3, L[0], L[1], "Repisas flotantes iluminadas con panel de listones de madera"),
      P("casa-betania", 5, 1200, 1600, "Baño con lavabo de piedra natural y espejo con luz cálida"),
      P("casa-betania", 4, 1600, 2400, "Rincón de juegos infantil con casita, mesa y libreros"),
      P("casa-betania", 7, 1200, 1600, "Sofá curvo en tela clara en la sala principal"),
      P("casa-betania", 8, 1200, 1600, "Escritorio a medida con panel de madera y luz de pared"),
      P("casa-betania", 6, 960, 1280, "Sala familiar con mueble de TV y ventanales al jardín"),
      P("casa-betania", 9, L[0], L[1], "Mueble bajo a medida y panel de listones en dormitorio"),
      P("casa-betania", 10, 1200, 1600, "Sala de estar en el segundo piso con vista a las montañas"),
      P("casa-betania", 11, L[0], L[1], "Cielo falso con iluminación perimetral cálida"),
    ],
  },
  {
    slug: "boutique-almara",
    title: "Boutique Almara",
    category: "comercial",
    type: "Local comercial de ropa",
    summary:
      "Una boutique de vestidos de fiesta con mobiliario curvo en menta y madera clara, pensada para que cada visita se sienta especial.",
    description: [
      "Para Almara diseñamos un espacio femenino y luminoso que pone los vestidos en primer plano. Los tonos rosa empolvado y menta crean una identidad reconocible desde la entrada.",
      "Las formas curvas del counter de recepción y de las islas de exhibición suavizan el recorrido y guían a la clienta por toda la tienda, mientras los percheros dorados y la iluminación lineal resaltan el color de cada prenda.",
    ],
    highlights: [
      "Counter de recepción curvo con acanalado y luz inferior",
      "Islas de exhibición a medida en madera acanalada",
      "Percheros perimetrales y puf central para probadores",
      "Paleta de marca: rosa empolvado, menta y dorado",
    ],
    service: "diseno-locales-comerciales",
    images: [
      P("boutique-almara", 1, V[0], V[1], "Recepción de la Boutique Almara con counter curvo menta y logo en pared rosa"),
      P("boutique-almara", 2, V[0], V[1], "Percheros con vestidos de colores y puf central en la Boutique Almara"),
      P("boutique-almara", 3, V[0], V[1], "Isla de exhibición curva en madera acanalada dentro de la boutique"),
      P("boutique-almara", 4, V[0], V[1], "Detalle del counter acanalado menta con arreglo floral"),
      P("boutique-almara", 5, V[0], V[1], "Mueble de exhibición curvo con repisas abiertas"),
    ],
  },
  {
    slug: "consultorio-axxis",
    title: "Consultorio Axxis",
    category: "corporativo",
    type: "Consultorio médico",
    summary:
      "Un consultorio médico sereno y funcional: recepción con identidad de marca, consultas privadas y circulaciones de vidrio llenas de luz.",
    description: [
      "Diseñamos un consultorio que transmite confianza desde la recepción. Los paneles de listones, la luz lineal y la paleta gris cálida dan una imagen profesional sin perder calidez para el paciente.",
      "Las divisiones de vidrio mantienen la luz en todo el espacio, y cada consultorio cuenta con mobiliario a medida, lavamanos y almacenamiento integrado para el trabajo diario.",
    ],
    highlights: [
      "Recepción con logo corporativo sobre panel de listones",
      "Consultorios con escritorio y almacenamiento a medida",
      "Divisiones de vidrio para aprovechar la luz natural",
      "Nichos iluminados y lavamanos con mesón de mármol",
    ],
    service: "diseno-de-oficinas",
    images: [
      P("consultorio-axxis", 1, 1803, 2400, "Recepción del Consultorio Axxis con logo sobre panel de listones"),
      P("consultorio-axxis", 2, 1803, 2400, "Consultorio con divisiones de vidrio y escritorio a medida"),
      P("consultorio-axxis", 3, 1803, 2400, "Consultorio médico con sillas tapizadas y cielo falso iluminado"),
      P("consultorio-axxis", 5, 1803, 2400, "Mueble bajo con listones de madera y luz lineal"),
      P("consultorio-axxis", 4, 1803, 2400, "Escritorio de consulta con iluminación indirecta"),
      P("consultorio-axxis", 6, 1803, 2400, "Lavamanos con mesón de mármol y gabinetes a medida"),
      P("consultorio-axxis", 7, 1803, 2400, "Pasillo con divisiones de vidrio y luz lineal"),
      P("consultorio-axxis", 8, 1803, 2400, "Área de apoyo con lavamanos y lámparas colgantes"),
      P("consultorio-axxis", 9, 1803, 2400, "Nichos iluminados empotrados en la pared"),
    ],
  },
  {
    slug: "sala-muro-geometrico",
    title: "Sala con muro geométrico",
    category: "residencial",
    type: "Remodelación de sala",
    summary:
      "Una sala renovada con un muro de molduras geométricas en verde salvia, luz indirecta y mueble de TV a medida.",
    description: [
      "Transformamos la sala de un departamento con un elemento protagonista: un muro de molduras geométricas pintado en verde salvia, que da carácter al espacio sin recargarlo.",
      "La iluminación perimetral en el cielo falso acompaña el muro, y el mueble de TV a medida con paneles de madera ordena la zona de estar. Te mostramos también parte del proceso de obra.",
    ],
    highlights: [
      "Muro de molduras geométricas diseñado a medida",
      "Paleta en verde salvia y madera clara",
      "Cielo falso con luz indirecta",
      "Mueble de TV y repisas a medida",
    ],
    service: "diseno-interiores-residencial",
    images: [
      P("sala-muro-geometrico", 1, V[0], V[1], "Muro de molduras geométricas en verde salvia con luz indirecta"),
      P("sala-muro-geometrico", 2, 2400, 1803, "Sala con muro verde salvia, sofá blanco y planta decorativa"),
      P("sala-muro-geometrico", 3, 2400, 1803, "Sala con mueble de TV a medida y paneles de madera"),
    ],
    process: [
      P("sala-muro-geometrico", 4, 1803, 2400, "Instalación de las molduras geométricas durante la obra"),
      P("sala-muro-geometrico", 5, 1803, 2400, "Equipo de obra trazando y colocando las molduras"),
    ],
  },
  {
    slug: "camposanto",
    title: "Camposanto",
    category: "corporativo",
    type: "Baterías sanitarias institucionales",
    summary:
      "Baños de uso público con espejos retroiluminados, piedra y luz cálida: un espacio institucional que se siente cuidado.",
    description: [
      "Renovamos las baterías sanitarias de un camposanto con un diseño que eleva la experiencia de los visitantes en un momento sensible.",
      "Los espejos verticales retroiluminados, los mesones claros y el revestimiento texturizado crean un ambiente sereno y fácil de mantener.",
    ],
    highlights: [
      "Espejos verticales con luz LED perimetral",
      "Mesones y lavamanos de uso intensivo",
      "Revestimiento texturizado y paleta neutra",
    ],
    service: "diseno-de-oficinas",
    images: [
      P("camposanto", 1, V[0], V[1], "Baño institucional con espejos verticales retroiluminados"),
      P("camposanto", 2, V[0], V[1], "Lavamanos dobles con espejos iluminados y mesón claro"),
      P("camposanto", 3, V[0], V[1], "Espejos con luz LED y revestimiento texturizado"),
      P("camposanto", 4, V[0], V[1], "Batería sanitaria con iluminación cálida y grifería negra"),
    ],
  },
  {
    slug: "banos-danes",
    title: "Baños Danes",
    category: "residencial",
    type: "Remodelación de baños",
    summary:
      "Baños de departamento con espejos ovalados retroiluminados, mampara de vidrio y mosaico en la ducha.",
    description: [
      "Remodelamos los baños de un departamento con un lenguaje limpio y actual: espejos ovalados con luz, muebles flotantes oscuros y duchas con mampara corrediza.",
      "El mosaico en la pared de la ducha aporta textura, mientras los tonos claros y la iluminación hacen que el espacio se sienta más amplio.",
    ],
    highlights: [
      "Espejos ovalados con iluminación LED",
      "Mampara corrediza de vidrio templado",
      "Muebles de lavabo flotantes",
      "Mosaico decorativo en ducha",
    ],
    service: "diseno-interiores-residencial",
    images: [
      P("banos-danes", 1, 1803, 2400, "Baño con espejo ovalado iluminado y ducha con mampara de vidrio"),
      P("banos-danes", 3, 1800, 2400, "Espejo ovalado retroiluminado sobre lavabo blanco"),
      P("banos-danes", 2, 1803, 2400, "Ducha con mosaico y mampara corrediza junto al mueble flotante"),
      P("banos-danes", 4, 1803, 2400, "Baño social con mueble flotante oscuro y espejo ovalado"),
      P("banos-danes", 5, 1803, 2400, "Ducha con mosaico gris y espejo iluminado"),
    ],
  },
];

export const categoryLabel: Record<CaseCategory, string> = {
  residencial: "Residencial",
  corporativo: "Corporativo",
  comercial: "Comercial",
};

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
