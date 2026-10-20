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
  { src: "/images/proyectos/varios/03.jpg", title: "Sala de estar", alt: "Sala de estar con sofá en tonos arena, cuadro colorido y luz indirecta", category: "residencial", ratio: 1800 / 2400 },
  { src: "/images/proyectos/varios/01.jpg", title: "Estudio a medida", alt: "Escritorio a medida con mesón de piedra y gabinetes de madera", category: "residencial", ratio: 1440 / 1920 },
  { src: "/images/proyectos/varios/02.jpg", title: "Baño social", alt: "Baño social con papel tapiz geométrico y luz cálida", category: "residencial", ratio: 1440 / 1920 },
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
    image: "/images/inspiracion/sala-doble-altura.jpg",
    imageAlt: "Sala de doble altura con lámpara escultórica de fibras naturales",
    heroImage: "/images/inspiracion/cocina-roble.jpg",
    gallery: ["/images/inspiracion/dormitorio-nogal.jpg", "/images/inspiracion/bano-spa.jpg", "/images/inspiracion/banca-ventana.jpg"],
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
    image: "/images/inspiracion/oficina-concreto.jpg",
    imageAlt: "Oficina contemporánea con concreto, madera y lámparas colgantes",
    heroImage: "/images/inspiracion/lounge-ejecutivo.jpg",
    gallery: ["/images/inspiracion/sala-reuniones-vidrio.jpg", "/images/inspiracion/oficina-dos-escritorios.jpg", "/images/inspiracion/estudio-sala.jpg"],
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
    image: "/images/inspiracion/lounge-ejecutivo.jpg",
    imageAlt: "Lounge con paneles de madera, sillones de cuero y luz cálida",
    heroImage: "/images/inspiracion/tv-divisor-luz.jpg",
    gallery: ["/images/inspiracion/jardin-nocturno.jpg", "/images/inspiracion/bano-azul.jpg", "/images/inspiracion/sala-reuniones-vidrio.jpg"],
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

/** Imágenes aspiracionales (inspiración) con su texto alternativo. */
export const inspirationAlt: Record<string, string> = {
  "/images/inspiracion/sala-doble-altura.jpg": "Sala de doble altura con lámpara escultórica de fibras naturales",
  "/images/inspiracion/cocina-roble.jpg": "Cocina blanca con madera de roble, listones e iluminación lineal",
  "/images/inspiracion/dormitorio-nogal.jpg": "Dormitorio cálido con cabecera tapizada y vestidor en nogal",
  "/images/inspiracion/bano-spa.jpg": "Baño tipo spa con tina de piedra y jardín interior",
  "/images/inspiracion/banca-ventana.jpg": "Bancas de ventana en madera con cojines y vista a la montaña",
  "/images/inspiracion/oficina-concreto.jpg": "Oficina contemporánea con concreto, madera y lámparas colgantes",
  "/images/inspiracion/lounge-ejecutivo.jpg": "Oficina ejecutiva con paneles de madera, luz indirecta y sala de cuero",
  "/images/inspiracion/sala-reuniones-vidrio.jpg": "Sala de reuniones con paredes de vidrio y perfilería negra",
  "/images/inspiracion/oficina-dos-escritorios.jpg": "Oficina con dos escritorios de madera y biblioteca iluminada",
  "/images/inspiracion/estudio-sala.jpg": "Estudio con escritorio de madera, sala y lámpara lineal",
  "/images/inspiracion/tv-divisor-luz.jpg": "Mueble divisor con TV, luz indirecta y comedor al fondo",
  "/images/inspiracion/jardin-nocturno.jpg": "Pasillo exterior ajardinado con iluminación cálida nocturna",
  "/images/inspiracion/bano-azul.jpg": "Baño con azulejos azules artesanales y mueble de madera",
};

export type ProcessStep = { title: string; text: string; image: string; imageAlt: string; tag: string; plan?: boolean };

export const process: ProcessStep[] = [
  { title: "Agenda tu asesoría", text: "Conversamos sobre tu espacio, tus necesidades y tu estilo, y visitamos el lugar para entender su potencial.", image: "/images/team-laptop.jpg", imageAlt: "Diseñadoras de Visual revisando ideas para un proyecto de interiores", tag: "Primera conversación" },
  { title: "Planificación", text: "Levantamos medidas y dibujamos los planos: distribución, circulación y mobiliario a escala, para que cada metro trabaje a tu favor.", image: "/images/proceso/plano-isometrico.jpg", imageAlt: "Plano isométrico de distribución de una oficina con medidas y mobiliario", tag: "Planos y distribución", plan: true },
  { title: "Diseño y renders 3D", text: "Creamos el concepto, los materiales y los renders fotorrealistas para que veas tu espacio terminado antes de construir.", image: "/images/proceso/render-cowork.jpg", imageAlt: "Render 3D de un espacio de trabajo diseñado por Visual", tag: "Render 3D" },
  { title: "Presupuesto", text: "Te entregamos un presupuesto claro y detallado, sin sorpresas, para que decidas con tranquilidad.", image: "/images/about-moodboard-2.jpg", imageAlt: "Muestras de materiales y acabados para un proyecto de interiores", tag: "Materiales y costos" },
  { title: "Ejecución", text: "Coordinamos proveedores y obra, cuidando cada detalle hasta entregarte un espacio listo para vivir.", image: "/images/proceso/obra.jpg", imageAlt: "Espacio terminado por Visual con muro geométrico", tag: "Obra y entrega" },
];

export const renders = [
  { src: "/images/proceso/plano-consultorio.jpg", alt: "Plano isométrico de un consultorio con distribución de mobiliario", label: "Plano", plan: true },
  { src: "/images/proceso/render-piscina.jpg", alt: "Render 3D nocturno de una piscina con iluminación cálida", label: "Render 3D" },
  { src: "/images/proceso/render-terraza.jpg", alt: "Render 3D de una cafetería con terraza", label: "Render 3D" },
  { src: "/images/proceso/render-cocina.jpg", alt: "Render 3D de una cocina con isla", label: "Render 3D" },
  { src: "/images/proceso/render-fachada.jpg", alt: "Render 3D de la fachada de una casa", label: "Render 3D" },
  { src: "/images/proceso/render-recepcion.jpg", alt: "Render 3D de la recepción de una oficina", label: "Render 3D" },
  { src: "/images/proceso/render-bar.jpg", alt: "Render 3D de la barra de una cafetería", label: "Render 3D" },
  { src: "/images/proceso/render-cocina-2.jpg", alt: "Render 3D de una cocina abierta", label: "Render 3D" },
];

export const homeFaqs: Faq[] = [
  { q: "¿En qué zonas trabajan?", a: "Nuestro estudio está en Cumbayá. Diseñamos proyectos en Cumbayá, Tumbaco, Quito, Nayón y Puembo, y evaluamos proyectos en otras ciudades del Ecuador." },
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
