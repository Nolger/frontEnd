// src/data/noticias.js
export const noticias = [
    {
      id: 1,
      titulo: "Nuevo avance tecnológico revoluciona la industria",
      subtitulo: "La innovación promete cambiar el futuro del sector",
      fecha: "2024-02-23",
      imagen: "/images/noticia1.jpg",
      categoria: "Tecnología",
      contenido: [
        {
          tipo: "parrafo",
          texto: "El día de hoy se presentó una innovación que promete revolucionar la manera en que interactuamos con la tecnología..."
        },
        {
          tipo: "subtitulo",
          texto: "Impacto en el mercado"
        },
        {
          tipo: "parrafo",
          texto: "Los expertos predicen que esta tecnología tendrá un impacto significativo en..."
        },
        {
          tipo: "imagen",
          url: "/images/noticia1-detalle.jpg",
          descripcion: "Presentación del nuevo dispositivo"
        }
      ]
    },
    {
      id: 2,
      titulo: "Descubrimiento científico sorprende a la comunidad",
      subtitulo: "Investigadores revelan hallazgos importantes",
      fecha: "2024-02-22",
      imagen: "/images/noticia2.jpg",
      categoria: "Ciencia",
      contenido: [
        {
          tipo: "parrafo",
          texto: "Un equipo de científicos ha realizado un descubrimiento que podría cambiar nuestra comprensión de..."
        }
      ]
    }
  ];