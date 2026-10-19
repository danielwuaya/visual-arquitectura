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
  /** true si las imágenes son renders 3D de la propuesta (no fotos de obra terminada). */
  render?: boolean;
};

const P = (slug: string, n: number, w: number, h: number, alt: string): CaseImage => ({
  src: `/images/proyectos/${slug}/${String(n).padStart(2, "0")}.jpg`,
  w,
  h,
  alt,
});

const L = [2400, 1600] as const; // horizontal
const V = [1800, 2400] as const; // vertical

const baseCases: CaseStudy[] = [
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
      P("consultorio-axxis", 12, 1440, 1920, "Oficina médica con panel de listones de madera y escritorio a medida"),
      P("consultorio-axxis", 11, 1440, 1920, "Sala de espera con butacas y panel de madera iluminado"),
      P("consultorio-axxis", 10, 1440, 1920, "Ingreso al consultorio con paneles de madera y luz lineal"),
      P("consultorio-axxis", 13, 1440, 1920, "Consultorio con repisas abiertas y mueble bajo blanco"),
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


const H = [1440, 1920] as const; // vertical de celular

const newCases: CaseStudy[] = [
  {
    slug: "qorner",
    title: "Departamento Qorner",
    category: "residencial",
    type: "Departamento completo",
    summary:
      "Un departamento sereno en tonos piedra y madera: sala con mesa de mármol, dormitorio tapizado, vestidor y un espejo orgánico retroiluminado.",
    description: [
      "Diseñamos un departamento de líneas suaves y paleta neutra, donde las texturas hacen el trabajo: paredes con acabado de piedra, madera cálida en pisos y paneles, y tapizados en tonos arena.",
      "Cada ambiente tiene un detalle protagonista: la mesa redonda de mármol en la sala, la cabecera tapizada del dormitorio, el vestidor abierto con perfilería negra y el espejo orgánico con luz LED junto a los listones de madera.",
    ],
    highlights: [
      "Sala con butacas curvas y mesa de mármol",
      "Dormitorio con cabecera tapizada y pared texturizada",
      "Vestidor abierto con perfilería negra y luz",
      "Mueble de TV y tocador a medida",
      "Espejo orgánico retroiluminado",
    ],
    service: "diseno-interiores-residencial",
    images: [
      P("qorner", 1, H[0], H[1], "Sala del departamento Qorner con mesa redonda de mármol y butacas curvas"),
      P("qorner", 6, 1920, 2400, "Espejo orgánico retroiluminado junto a panel de listones de madera"),
      P("qorner", 4, H[0], H[1], "Dormitorio con cabecera tapizada y pared con textura de piedra"),
      P("qorner", 2, H[0], H[1], "Sala con vista a la ciudad, mesa de mármol y decoración en tonos neutros"),
      P("qorner", 3, H[0], H[1], "Dormitorio con mueble de TV y tocador a medida en madera clara"),
      P("qorner", 5, H[0], H[1], "Vestidor abierto con perfilería negra, espejo de cuerpo entero y luz"),
    ],
  },
  {
    slug: "house-line",
    title: "Showroom House Line",
    category: "comercial",
    type: "Showroom de acabados",
    summary:
      "Un showroom de acabados en una gran nave industrial: ambientes de cocina y baño montados como en casa, con recorridos claros y mucha luz natural.",
    description: [
      "Para House Line diseñamos la exhibición de sus productos dentro de una nave de gran altura. La clave fue crear ambientes reconocibles —cocinas, baños, zonas de descanso— para que el cliente imagine cada acabado en su propia casa.",
      "Los módulos blancos, el césped sintético y el mobiliario ordenan el recorrido sin bloquear la luz de las claraboyas ni la vista hacia el exterior.",
    ],
    highlights: [
      "Ambientes de exhibición tipo hogar",
      "Isla de cocina con barra y campana",
      "Recorrido claro en nave industrial",
      "Zona de atención y descanso para clientes",
    ],
    service: "diseno-locales-comerciales",
    images: [
      P("house-line", 1, H[0], H[1], "Showroom House Line con módulos de baño y cocina dentro de una nave industrial"),
      P("house-line", 4, H[0], H[1], "Ambiente de cocina con isla y taburetes en el showroom House Line"),
      P("house-line", 2, H[0], H[1], "Exhibición de muebles de baño y mesones en el showroom"),
      P("house-line", 5, H[0], H[1], "Zona de atención al cliente con logo de House Line y césped sintético"),
      P("house-line", 6, H[0], H[1], "Área de descanso junto a ventanales con vista a la ciudad"),
      P("house-line", 3, H[0], H[1], "Recorrido del showroom con paneles de exhibición de acabados"),
      P("house-line", 7, H[0], H[1], "Vista general de la nave con exhibición de acabados"),
    ],
  },
  {
    slug: "el-merkato",
    title: "El Merkato",
    category: "comercial",
    type: "Supermercado",
    summary:
      "Un supermercado con identidad fuerte: muros verdes, rojo de marca y madera para que comprar se sienta fresco y cercano.",
    description: [
      "Diseñamos los interiores y la fachada de El Merkato combinando el rojo de la marca con jardines verticales y madera. El resultado es un espacio que se reconoce desde la calle y que guía al cliente desde el ingreso hasta las góndolas.",
      "Las columnas revestidas en madera y verde, la iluminación puntual y la señalética integrada ordenan un local de gran escala sin que pierda calidez.",
    ],
    highlights: [
      "Muros verdes y madera en columnas",
      "Identidad de marca en rojo integrada al espacio",
      "Fachada con vitrina y jardín vertical",
      "Zona de cajas y exhibición de impulso",
    ],
    service: "diseno-locales-comerciales",
    images: [
      P("el-merkato", 1, H[0], H[1], "Muro rojo de marca con jardín vertical en el supermercado El Merkato"),
      P("el-merkato", 2, H[0], H[1], "Zona de cajas de El Merkato con exhibidores y techo rojo"),
      P("el-merkato", 3, H[0], H[1], "Ingreso al supermercado con jardín vertical y paneles de madera"),
      P("el-merkato", 4, H[0], H[1], "Columnas revestidas en madera y verde entre las góndolas"),
      P("el-merkato", 5, H[0], H[1], "Fachada de El Merkato con vitrina y jardinera"),
    ],
  },
  {
    slug: "centro-infantil",
    title: "Centro Infantil",
    category: "corporativo",
    type: "Espacios exteriores de aprendizaje",
    summary:
      "Un patio de juego y aprendizaje en madera natural: plataformas sensoriales, circuitos y mobiliario pensado para que los niños exploren al aire libre.",
    description: [
      "Para un centro infantil diseñamos espacios exteriores inspirados en el juego libre y el contacto con la naturaleza. La madera natural, las texturas y los colores suaves invitan a explorar, trepar y descubrir.",
      "Las plataformas sensoriales bajo los árboles, los circuitos con llantas recicladas y las mesas de actividades se integran al jardín sin perder seguridad ni orden.",
    ],
    highlights: [
      "Plataforma sensorial de madera bajo los árboles",
      "Circuito de juego con llantas recicladas",
      "Mobiliario infantil en madera natural",
      "Zonas de actividades al aire libre",
    ],
    service: "diseno-de-oficinas",
    images: [
      P("centro-infantil", 1, 1600, 1200, "Área de juego al aire libre con mobiliario infantil de madera"),
      P("centro-infantil", 2, 1600, 1200, "Plataforma sensorial de madera con huerto y materiales naturales"),
      P("centro-infantil", 3, 1600, 1200, "Deck de madera con cerca y actividades sensoriales bajo los árboles"),
      P("centro-infantil", 4, 1200, 1600, "Rincón de juego con materiales naturales sobre el césped"),
      P("centro-infantil", 5, 1200, 1600, "Columpio de madera y llantas recicladas pintadas"),
      P("centro-infantil", 6, 1200, 1600, "Daniela y María José en el circuito de juego del centro infantil"),
      P("centro-infantil", 7, 1200, 1600, "Las fundadoras de Visual en el área exterior del centro infantil"),
    ],
  },
  {
    slug: "residencia-la-herradura",
    title: "Residencia La Herradura",
    category: "residencial",
    type: "Propuesta en renders 3D",
    render: true,
    summary:
      "Propuesta 3D para una residencia: dormitorios con cabeceras iluminadas, estudio integrado, baños con espejos retroiluminados y madera en todos los ambientes.",
    description: [
      "Así presentamos un proyecto antes de construirlo: renders realistas de cada ambiente para que el cliente vea materiales, luz y mobiliario y tome decisiones con seguridad.",
      "La propuesta combina tonos arena, madera natural y luz indirecta. Las cabeceras con iluminación, los muebles de TV con escritorio integrado y los baños con espejos retroiluminados crean una casa cálida y ordenada.",
    ],
    highlights: [
      "Dormitorio principal con cabecera de listones e iluminación",
      "Mueble de TV con escritorio integrado",
      "Tocador con espejo retroiluminado",
      "Baños con duchas de vidrio y grifería dorada",
      "Renders realistas para aprobar antes de construir",
    ],
    service: "diseno-interiores-residencial",
    images: [
      P("residencia-la-herradura", 1, 1536, 1024, "Render 3D de dormitorio principal con cabecera de listones y luz cálida"),
      P("residencia-la-herradura", 2, 1536, 1024, "Render 3D de dormitorio con cabecera redondeada y paleta neutra"),
      P("residencia-la-herradura", 3, 1536, 1024, "Render 3D de tocador con espejo retroiluminado y mueble de TV curvo"),
      P("residencia-la-herradura", 4, 1536, 1024, "Render 3D de estudio con mueble de TV y repisas iluminadas"),
      P("residencia-la-herradura", 5, 1536, 1024, "Render 3D de mueble de TV con escritorio y panel de listones"),
      P("residencia-la-herradura", 6, 1536, 1024, "Render 3D de baño con espejo retroiluminado y mueble de madera"),
      P("residencia-la-herradura", 7, 1024, 1024, "Render 3D de baño con ducha de vidrio y espejo ovalado"),
      P("residencia-la-herradura", 8, 1536, 1024, "Render 3D de estudio con escritorio y mueble de TV en madera"),
      P("residencia-la-herradura", 9, 1536, 1024, "Render 3D de dormitorio con pared texturizada y clóset"),
      P("residencia-la-herradura", 10, 1536, 1024, "Render 3D de muro decorativo con paneles de madera en arco"),
    ],
  },
  {
    slug: "stand-hove",
    title: "Stand Hove",
    category: "comercial",
    type: "Stand de feria",
    summary:
      "Un stand de cocina y baño para feria: paneles negros, madera, jardín vertical y producto en exhibición, montado como un ambiente real.",
    description: [
      "Diseñamos el stand de Hove para exhibir cocinas, lavabos y grifería en un ambiente que el visitante pueda recorrer y tocar.",
      "La combinación de negro mate, madera y verde crea un espacio contemporáneo que destaca dentro de la feria, con producto a la altura de la mano e iluminación puntual.",
    ],
    highlights: [
      "Ambiente de cocina y baño recorrible",
      "Jardín vertical y paneles de madera",
      "Producto exhibido en uso real",
      "Iluminación puntual para destacar acabados",
    ],
    service: "diseno-locales-comerciales",
    images: [
      P("stand-hove", 1, 1920, 1440, "Stand Hove con cocina, lavabos y jardín vertical en feria"),
      P("stand-hove", 2, 1920, 1440, "Vista general del stand con mesa de bar y paneles negros"),
      P("stand-hove", 3, H[0], H[1], "Detalle del stand con grifería y jardín vertical iluminado"),
      P("stand-hove", 4, H[0], H[1], "Stand de cocina y baño con madera y paneles oscuros"),
    ],
  },
  {
    slug: "home-vega",
    title: "Home Vega",
    category: "comercial",
    type: "Tienda de muebles y decoración",
    summary:
      "Una tienda de muebles y decoración organizada en ambientes: salas, comedores y una isla verde que invita a recorrer.",
    description: [
      "Diseñamos la exhibición de Home Vega en ambientes completos, para que el cliente vea cada pieza en contexto: una sala con chimenea y muro de leña, comedores y áreas de cocina.",
      "Los muros de piedra y leña, el jardín vertical sobre la isla y el techo negro crean un espacio cálido y con carácter.",
    ],
    highlights: [
      "Ambientes de exhibición completos",
      "Muro de leña y piedra con chimenea",
      "Isla de exhibición con jardín vertical",
    ],
    service: "diseno-locales-comerciales",
    images: [
      P("home-vega", 1, 1920, 1440, "Sala de exhibición con chimenea y muro de leña en Home Vega"),
      P("home-vega", 2, H[0], H[1], "Isla de exhibición con jardín vertical y lavabos"),
      P("home-vega", 3, 1920, 1440, "Zona de comedores y mesas en la tienda Home Vega"),
    ],
  },
  {
    slug: "casa-cunucbamba",
    title: "Casa Cunucbamba",
    category: "residencial",
    type: "Propuesta en renders 3D",
    render: true,
    summary:
      "Propuesta 3D para una casa con piscina interior, comedor de ladrillo visto y estudio con biblioteca, abierta a la luz natural.",
    description: [
      "Para esta casa propusimos un área social que gira en torno a una piscina interior bajo una gran claraboya, con comedor, cocina y zona de descanso integradas.",
      "El ladrillo visto, la madera en el cielo raso y la estructura metálica negra dan un carácter contemporáneo y cálido. Los renders permitieron validar la propuesta antes de construir.",
    ],
    highlights: [
      "Piscina interior con claraboya",
      "Comedor y cocina con ladrillo visto",
      "Estudio con biblioteca y ventanales",
      "Renders realistas para aprobar antes de construir",
    ],
    service: "diseno-interiores-residencial",
    images: [
      P("casa-cunucbamba", 1, 1920, 1080, "Render 3D de comedor con ladrillo visto y estructura negra"),
      P("casa-cunucbamba", 2, 1920, 1080, "Render 3D de piscina interior con claraboya"),
      P("casa-cunucbamba", 3, 1920, 1080, "Render 3D de zona de descanso junto a la piscina"),
      P("casa-cunucbamba", 4, 1920, 1080, "Render 3D de área social con comedor y escalera"),
      P("casa-cunucbamba", 5, 1920, 1080, "Render 3D de estudio con biblioteca y ventanales"),
    ],
  },
];

const order = [
  "casa-betania", "boutique-almara", "qorner", "consultorio-axxis", "house-line", "el-merkato",
  "residencia-la-herradura", "centro-infantil", "stand-hove", "sala-muro-geometrico",
  "camposanto", "banos-danes", "home-vega", "casa-cunucbamba",
];

export const caseStudies: CaseStudy[] = order
  .map((slug) => [...baseCases, ...newCases].find((c) => c.slug === slug))
  .filter((c): c is CaseStudy => Boolean(c));

export const categoryLabel: Record<CaseCategory, string> = {
  residencial: "Residencial",
  corporativo: "Corporativo",
  comercial: "Comercial",
};

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
