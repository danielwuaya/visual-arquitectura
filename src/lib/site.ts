export const siteUrl = "https://www.visualarquitecturainterior.com";
export const siteName = "Visual Diseño de Interiores";

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Nosotras", href: "/sobre-nosotros" },
  { label: "Showroom digital", href: "/showroom-virtual" },
  { label: "Contacto", href: "/contacto" },
];

const waNumber = "593997534238";

export const contact = {
  address: "Urbanización Santa Lucía Lote 82, Cumbayá",
  street: "Urbanización Santa Lucía, Lote 82",
  locality: "Cumbayá",
  city: "Quito",
  region: "Pichincha",
  email: "Visual.disenoyarquitectura@gmail.com",
  phones: ["099 753 4238", "098 444 0277"],
  phonesE164: ["+593997534238", "+593984440277"],
  waNumber,
  whatsapp: `https://wa.me/${waNumber}`,
  instagram: "https://www.instagram.com/visual.design.arq/",
  instagramHandle: "@visual.design.arq",
  tiktok: "https://www.tiktok.com/@visualdisenointerior",
  linkedin:
    "https://www.linkedin.com/in/visual-dise%C3%B1o-de-interiores-a9945b277/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Urbanizaci%C3%B3n+Santa+Luc%C3%ADa+Lote+82+Cumbay%C3%A1+Quito",
  mapsEmbed:
    "https://www.google.com/maps?q=Urbanizaci%C3%B3n%20Santa%20Luc%C3%ADa%2C%20Cumbay%C3%A1%2C%20Quito&output=embed",
};

/** Zonas que atiende el estudio (usadas en copy y en schema areaServed). */
export const areas = [
  "Cumbayá",
  "Tumbaco",
  "Quito",
  "Nayón",
  "Puembo",
];

/** Enlace de WhatsApp con mensaje precargado según el contexto. */
export function waLink(message = "Hola Visual, me gustaría agendar una asesoría de diseño de interiores.") {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}
