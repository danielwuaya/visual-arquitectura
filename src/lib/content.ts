export type ProjectCategory = "residencial" | "corporativo";

export type Project = {
  src: string;
  title: string;
  alt: string;
  category: ProjectCategory;
  /** Proporción original de la foto (ancho / alto). */
  ratio: number;
};

export const projects: Project[] = [
  { src: "/images/project-living-kitchen.jpg", title: "Sala y cocina abierta", alt: "Sala y cocina abierta con luz natural, diseño de interiores residencial en Quito", category: "residencial", ratio: 553 / 737 },
  { src: "/images/project-kitchen-island.jpg", title: "Cocina con isla", alt: "Cocina moderna con isla y barra de desayuno diseñada por Visual", category: "residencial", ratio: 552 / 737 },
  { src: "/images/project-dining.jpg", title: "Comedor contemporáneo", alt: "Comedor contemporáneo con lámpara lineal y ventanal hacia jardín vertical", category: "residencial", ratio: 1105 / 737 },
  { src: "/images/project-tv-corridor.jpg", title: "Mueble de TV con celosía", alt: "Mueble de TV a medida con celosía de madera e iluminación indirecta", category: "residencial", ratio: 552 / 737 },
  { src: "/images/services-hero.jpg", title: "Sala minimalista", alt: "Sala minimalista en tonos neutros con chimenea empotrada", category: "residencial", ratio: 546 / 602 },
  { src: "/images/project-bathroom-visual.jpg", title: "Baño en piedra natural", alt: "Baño con revestimiento de piedra natural y luz cálida", category: "residencial", ratio: 496 / 737 },
  { src: "/images/project-cabin-livingroom.jpg", title: "Sala tipo loft", alt: "Sala tipo loft con ladrillo visto, chimenea y comedor de madera", category: "residencial", ratio: 552 / 737 },
  { src: "/images/project-tv-shelf.jpg", title: "Chimenea y repisas", alt: "Pared de TV con chimenea eléctrica y repisas de madera iluminadas", category: "residencial", ratio: 552 / 737 },
  { src: "/images/project-diningroom-classic.jpg", title: "Comedor clásico", alt: "Comedor clásico con candelabro de cristal y pared de mármol", category: "residencial", ratio: 492 / 737 },
  { src: "/images/project-bathroom-shower.jpg", title: "Baño con ducha de vidrio", alt: "Baño moderno con ducha de vidrio y grifería negra", category: "residencial", ratio: 570 / 734 },
  { src: "/images/home-hero.jpg", title: "Dormitorio natural", alt: "Dormitorio en tonos naturales con texturas de madera y fibras", category: "residencial", ratio: 1311 / 737 },
  { src: "/images/project-bathroom-2.jpg", title: "Baño social", alt: "Baño social con ladrillo visto, espejo redondo y lavabo negro", category: "residencial", ratio: 557 / 737 },
  { src: "/images/project-bathroom-1.jpg", title: "Baño con espejo iluminado", alt: "Baño con espejo circular retroiluminado y revestimiento de madera", category: "residencial", ratio: 415 / 737 },
  { src: "/images/project-tv-wall.jpg", title: "Sala y comedor integrados", alt: "Sala y comedor integrados con chimenea y lámpara escultórica", category: "residencial", ratio: 588 / 332 },
  { src: "/images/project-window.jpg", title: "Rincón de lectura", alt: "Rincón de lectura junto a la ventana con cortina enrollable", category: "residencial", ratio: 477 / 737 },
  { src: "/images/project-office.jpg", title: "Oficina ejecutiva", alt: "Oficina ejecutiva con panel de listones de madera, diseño corporativo en Quito", category: "corporativo", ratio: 635 / 737 },
  { src: "/images/category-comercial.jpg", title: "Boutique de moda", alt: "Diseño de local comercial: boutique de moda con exhibidores iluminados", category: "corporativo", ratio: 660 / 371 },
  { src: "/images/category-corporativo.jpg", title: "Oficina con luz cenital", alt: "Oficina con listones de madera, luz cenital y escritorio a medida", category: "corporativo", ratio: 462 / 461 },
  { src: "/images/project-retail-1.jpg", title: "Tienda deportiva", alt: "Local comercial de ropa deportiva con counter de atención a medida", category: "corporativo", ratio: 983 / 737 },
  { src: "/images/project-bar.jpg", title: "Showroom con barra", alt: "Espacio comercial con barra alta, exhibición de acabados y luz lineal", category: "corporativo", ratio: 553 / 737 },
  { src: "/images/project-chapel.jpg", title: "Capilla", alt: "Diseño interior de capilla con paneles verticales y altar iluminado", category: "corporativo", ratio: 1308 / 737 },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Foto horizontal de buena resolución para la franja del encabezado (opcional). */
  heroImage?: string;
  gallery: string[];
  includes: { title: string; text: string }[];
  idealFor: string[];
  faqs: Faq[];
  waMessage: string;
};

export type Faq = { q: string; a: string };

export const services: Service[] = [
  {
    slug: "diseno-interiores-residencial",
    name: "Diseño residencial",
    short:
      "Casas, departamentos y Airbnb que se sienten como tú: funcionales, cálidos y llenos de armonía.",
    h1: "Diseño de interiores residencial en Quito y Cumbayá",
    metaTitle: "Diseño de Interiores Residencial en Quito y Cumbayá",
    metaDescription:
      "Diseñamos casas, departamentos y Airbnb en Quito, Cumbayá y Tumbaco. Distribución, materiales, iluminación y mobiliario a medida, del concepto a la ejecución.",
    intro:
      "Tu casa debería sentirse como tú. Diseñamos casas, departamentos y Airbnb en Quito, Cumbayá y Tumbaco con un equilibrio cuidadoso entre estética, funcionalidad y bienestar, desde el primer boceto hasta el último detalle.",
    image: "/images/project-living-kitchen.jpg",
    imageAlt: "Sala y cocina abierta diseñada por Visual en Quito",
    heroImage: "/images/project-dining.jpg",
    gallery: [
      "/images/project-kitchen-island.jpg",
      "/images/project-bathroom-visual.jpg",
      "/images/project-tv-corridor.jpg",
    ],
    includes: [
      { title: "Distribución y planos", text: "Optimizamos cada metro para que el espacio fluya y responda a cómo vives." },
      { title: "Concepto y materiales", text: "Paletas, texturas y acabados que crean una atmósfera coherente en toda la casa." },
      { title: "Iluminación", text: "Capas de luz natural y artificial pensadas para cada momento del día." },
      { title: "Mobiliario a medida", text: "Muebles de TV, cocinas, closets y baños diseñados al milímetro." },
      { title: "Renders 3D", text: "Ves tu espacio terminado antes de invertir en obra." },
      { title: "Ejecución y dirección", text: "Coordinamos proveedores y obra para que el resultado sea fiel al diseño." },
    ],
    idealFor: [
      "Casas y departamentos nuevos por amoblar",
      "Remodelación de cocina, baños o sala",
      "Airbnb y departamentos de renta",
      "Espacios pequeños que necesitan sentirse amplios",
    ],
    faqs: [
      { q: "¿Pueden diseñar solo una parte de mi casa?", a: "Sí. Trabajamos proyectos completos o por ambientes: una cocina, un baño, la sala o el dormitorio principal. Definimos el alcance juntos en la primera visita." },
      { q: "¿Diseñan departamentos para Airbnb?", a: "Sí. Diseñamos espacios atractivos en fotos, cómodos para el huésped y resistentes al uso, pensando en la rentabilidad del departamento." },
      { q: "¿Puedo ver cómo quedará antes de ejecutar?", a: "Sí. Presentamos el diseño con renders y una propuesta de materiales para que apruebes cada decisión antes de la obra." },
    ],
    waMessage: "Hola Visual, me interesa el diseño de interiores de mi casa/departamento.",
  },
  {
    slug: "diseno-de-oficinas",
    name: "Diseño de oficinas",
    short:
      "Oficinas que impulsan el bienestar y la productividad de tu equipo, coherentes con tu marca.",
    h1: "Diseño de oficinas y espacios corporativos en Quito",
    metaTitle: "Diseño de Oficinas y Espacios Corporativos en Quito",
    metaDescription:
      "Diseño interior de oficinas en Quito y Cumbayá: distribución, iluminación, acústica y mobiliario funcional que potencian la productividad y reflejan tu marca.",
    intro:
      "Un buen espacio de trabajo se nota en la energía del equipo. Diseñamos oficinas en Quito y Cumbayá que cuidan la distribución, la iluminación y el mobiliario para potenciar la motivación, la eficiencia y la identidad de cada empresa.",
    image: "/images/project-office.jpg",
    imageAlt: "Oficina ejecutiva con panel de madera diseñada por Visual en Quito",
    gallery: [
      "/images/category-corporativo.jpg",
      "/images/project-chapel.jpg",
      "/images/project-bar.jpg",
    ],
    includes: [
      { title: "Planificación del espacio", text: "Puestos, salas de reunión y zonas comunes distribuidas según cómo trabaja tu equipo." },
      { title: "Identidad de marca", text: "Colores, materiales y detalles que hacen que tu oficina hable de tu empresa." },
      { title: "Iluminación y confort", text: "Luz adecuada para trabajar mejor y ambientes que reducen el estrés." },
      { title: "Mobiliario funcional", text: "Escritorios, almacenamiento y recepción diseñados para el uso diario." },
      { title: "Renders y presupuesto", text: "Propuesta visual clara y presupuesto detallado antes de ejecutar." },
      { title: "Ejecución coordinada", text: "Organizamos la obra para minimizar el impacto en tu operación." },
    ],
    idealFor: [
      "Oficinas nuevas o mudanzas",
      "Consultorios y estudios profesionales",
      "Renovación de recepción y salas de reunión",
      "Espacios institucionales",
    ],
    faqs: [
      { q: "¿Trabajan con oficinas pequeñas?", a: "Sí. Diseñamos desde consultorios y oficinas ejecutivas hasta pisos corporativos completos." },
      { q: "¿Pueden reflejar la marca de mi empresa en el diseño?", a: "Ese es uno de nuestros focos: trasladamos los valores y colores de tu marca a materiales, mobiliario y detalles del espacio." },
    ],
    waMessage: "Hola Visual, me interesa el diseño de una oficina.",
  },
  {
    slug: "diseno-locales-comerciales",
    name: "Diseño comercial",
    short:
      "Tiendas, boutiques y locales con diseño estratégico que atrae, conecta y vende.",
    h1: "Diseño de locales comerciales en Quito y Cumbayá",
    metaTitle: "Diseño de Locales Comerciales y Retail en Quito",
    metaDescription:
      "Diseñamos tiendas, boutiques, showrooms y locales comerciales en Quito y Cumbayá con un diseño estratégico que atrae clientes y refleja tu marca.",
    intro:
      "Tu espacio habla por tu marca. Diseñamos tiendas, boutiques, showrooms y locales en Quito y Cumbayá con una estrategia clara: atraer, guiar al cliente y convertir la visita en venta.",
    image: "/images/category-comercial.jpg",
    imageAlt: "Boutique de moda con exhibidores iluminados diseñada por Visual",
    heroImage: "/images/project-retail-1.jpg",
    gallery: [
      "/images/project-retail-1.jpg",
      "/images/project-bar.jpg",
      "/images/showroom-hero.jpg",
    ],
    includes: [
      { title: "Recorrido del cliente", text: "Distribución que guía la mirada y el paso hacia tus productos clave." },
      { title: "Exhibición y vitrinas", text: "Mobiliario de exhibición a medida que pone tu producto en primer plano." },
      { title: "Iluminación comercial", text: "Luz que resalta el producto y crea la atmósfera de tu marca." },
      { title: "Identidad en el espacio", text: "Materiales, color y señalética coherentes con tu imagen." },
      { title: "Renders 3D", text: "Visualiza tu local terminado antes de invertir." },
      { title: "Ejecución", text: "Coordinamos proveedores y obra para cumplir los tiempos de apertura." },
    ],
    idealFor: [
      "Tiendas y boutiques",
      "Showrooms de producto",
      "Restaurantes, cafeterías y bares",
      "Locales en centros comerciales",
    ],
    faqs: [
      { q: "¿Diseñan locales dentro de centros comerciales?", a: "Sí. Trabajamos considerando los lineamientos técnicos de cada centro comercial para que el diseño se apruebe sin contratiempos." },
      { q: "¿Pueden ayudarme con la apertura de un local nuevo?", a: "Sí. Acompañamos desde el concepto hasta la ejecución, coordinando tiempos para que puedas abrir en la fecha planificada." },
    ],
    waMessage: "Hola Visual, me interesa el diseño de un local comercial.",
  },
];

export const process = [
  { title: "Agenda tu visita", text: "Conversamos sobre tu espacio, tus necesidades y tu estilo. Visitamos el lugar o nos reunimos en nuestro showroom en Cumbayá." },
  { title: "Planificación", text: "Definimos alcance, prioridades y tiempos. Levantamos medidas y analizamos el potencial del espacio." },
  { title: "Diseño", text: "Creamos el concepto, la distribución, los materiales y los renders para que veas el resultado antes de construir." },
  { title: "Presupuesto", text: "Te entregamos un presupuesto claro y detallado, sin sorpresas, para que decidas con tranquilidad." },
  { title: "Ejecución", text: "Coordinamos proveedores y obra, cuidando cada detalle hasta entregarte un espacio listo para vivir." },
];

export const homeFaqs: Faq[] = [
  { q: "¿En qué zonas trabajan?", a: "Nuestro estudio y showroom están en Cumbayá. Diseñamos proyectos en Cumbayá, Tumbaco, Quito, Nayón y Puembo, y evaluamos proyectos en otras ciudades del Ecuador." },
  { q: "¿Cómo es la primera asesoría?", a: "Agendas una cita por WhatsApp o con el formulario. Conversamos sobre tu espacio, lo que necesitas y tu estilo, y te explicamos cómo trabajaríamos tu proyecto." },
  { q: "¿Solo diseñan o también ejecutan la obra?", a: "Hacemos ambas cosas. Puedes contratar solo el diseño o el acompañamiento completo: diseño, presupuesto y ejecución con nuestro equipo de proveedores." },
  { q: "¿Trabajan con mi presupuesto?", a: "Sí. Antes de ejecutar preparamos un presupuesto detallado y ajustamos materiales y alcance para que el diseño responda a tu inversión." },
  { q: "¿Qué tipo de proyectos hacen?", a: "Proyectos residenciales (casas, departamentos y Airbnb), oficinas y espacios corporativos, y locales comerciales como tiendas, boutiques y showrooms." },
];

export const testimonials = [
  {
    quote:
      "La experiencia ha sido increíble, transformaron un espacio súper pequeño en algo acogedor y confortable. Estamos encantados con el servicio.",
    name: "Alain Rodríguez",
    project: "Proyecto residencial",
  },
];
