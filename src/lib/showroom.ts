/** Fotos del showroom digital en alta resolución (hasta 3840 px, 4K). Generadas desde los originales del Drive. */
export type ShowroomSlide = { src: string; w: number; h: number; caption: string };

export const showroomSlides: Record<string, ShowroomSlide[]> = {
  "casa-betania": [
    { src: "/images/showroom/casa-betania-01.jpg", w: 3840, h: 2560, caption: "Dormitorio principal" },
    { src: "/images/showroom/casa-betania-02.jpg", w: 3840, h: 2560, caption: "Dormitorio infantil" },
    { src: "/images/showroom/casa-betania-03.jpg", w: 3840, h: 2560, caption: "Repisas iluminadas" },
    { src: "/images/showroom/casa-betania-04.jpg", w: 2560, h: 3840, caption: "Rincón de juegos" },
    { src: "/images/showroom/casa-betania-05.jpg", w: 2560, h: 3840, caption: "Mueble y listones de madera" },
    { src: "/images/showroom/casa-betania-06.jpg", w: 2560, h: 3840, caption: "Detalle de mobiliario" },
    { src: "/images/showroom/casa-betania-07.jpg", w: 3840, h: 2560, caption: "Mueble bajo a medida" },
    { src: "/images/showroom/casa-betania-08.jpg", w: 3840, h: 2560, caption: "Cielo falso con luz cálida" },
  ],
  "boutique-almara": [
    { src: "/images/showroom/boutique-almara-01.jpg", w: 2880, h: 3840, caption: "Recepción" },
    { src: "/images/showroom/boutique-almara-02.jpg", w: 2880, h: 3840, caption: "Zona de vestidos" },
    { src: "/images/showroom/boutique-almara-03.jpg", w: 2880, h: 3840, caption: "Isla de exhibición" },
    { src: "/images/showroom/boutique-almara-04.jpg", w: 2880, h: 3840, caption: "Counter acanalado" },
    { src: "/images/showroom/boutique-almara-05.jpg", w: 2880, h: 3840, caption: "Mueble curvo" },
  ],
  "consultorio-axxis": [
    { src: "/images/showroom/consultorio-axxis-01.jpg", w: 2464, h: 3280, caption: "Recepción" },
    { src: "/images/showroom/consultorio-axxis-02.jpg", w: 2464, h: 3280, caption: "Consultorio con vidrio" },
    { src: "/images/showroom/consultorio-axxis-03.jpg", w: 2464, h: 3280, caption: "Consultorio" },
    { src: "/images/showroom/consultorio-axxis-04.jpg", w: 2464, h: 3280, caption: "Mueble con listones" },
    { src: "/images/showroom/consultorio-axxis-05.jpg", w: 2464, h: 3280, caption: "Lavamanos de mármol" },
    { src: "/images/showroom/consultorio-axxis-06.jpg", w: 2464, h: 3280, caption: "Nichos iluminados" },
  ],
  "camposanto": [
    { src: "/images/showroom/camposanto-01.jpg", w: 2880, h: 3840, caption: "Espejos retroiluminados" },
    { src: "/images/showroom/camposanto-02.jpg", w: 2880, h: 3840, caption: "Lavamanos dobles" },
    { src: "/images/showroom/camposanto-03.jpg", w: 2880, h: 3840, caption: "Detalle de iluminación" },
  ],
  "sala-muro-geometrico": [
    { src: "/images/showroom/sala-muro-geometrico-01.jpg", w: 2880, h: 3840, caption: "Muro geométrico" },
    { src: "/images/showroom/sala-muro-geometrico-02.jpg", w: 3280, h: 2464, caption: "Sala" },
  ],
  "banos-danes": [
    { src: "/images/showroom/banos-danes-01.jpg", w: 2464, h: 3280, caption: "Baño con ducha de vidrio" },
    { src: "/images/showroom/banos-danes-02.jpg", w: 2880, h: 3840, caption: "Espejo ovalado" },
    { src: "/images/showroom/banos-danes-03.jpg", w: 2464, h: 3280, caption: "Baño social" },
  ],
};
