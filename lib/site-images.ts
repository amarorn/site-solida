/** URLs Unsplash (uso conforme licença Unsplash). Parâmetros limitam largura para desempenho. */
const q = "auto=format&fit=crop&q=80";

export const heroImage = {
  src: `https://images.unsplash.com/photo-1509391366360-2e959784a276?${q}&w=2400`,
  alt: "Campo de painéis solares em operação, representando engenharia em energia fotovoltaica em grande escala.",
} as const;

export const heroCarouselImages = [
  {
    src: `https://images.unsplash.com/photo-1509391366360-2e959784a276?${q}&w=2400`,
    alt: "Campo de painéis solares em operação — engenharia fotovoltaica de grande escala.",
  },
  {
    src: `https://images.unsplash.com/photo-1466611653911-95081537e5b7?${q}&w=2400`,
    alt: "Parque eólico ao amanhecer — geração eólica em escala industrial.",
  },
  {
    src: `https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?${q}&w=2400`,
    alt: "Aerogeradores em terreno aberto — projetos eólicos da Sólida Energías Renovables.",
  },
  {
    src: `https://images.unsplash.com/photo-1621905251918-48416bd8575a?${q}&w=2400`,
    alt: "Subestação elétrica de alta tensão — gestão de construção e comissionamento.",
  },
] as const;

export const projectCardImages = {
  solarLarge: {
    src: `https://images.unsplash.com/photo-1509391366360-2e959784a276?${q}&w=1200`,
    alt: "Painéis solares em extensão contínua, referência visual para complexo fotovoltaico de grande porte.",
  },
  solarArid: {
    src: `https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?${q}&w=1200`,
    alt: "Usina fotovoltaica em terreno semiárido, ilustrativo de projeto em condições de alta radiação.",
  },
  wind: {
    src: `https://images.unsplash.com/photo-1466611653911-95081537e5b7?${q}&w=1200`,
    alt: "Parque eólico com aerogeradores ao longo do horizonte, referência para projeto de geração eólica.",
  },
  grid: {
    src: `https://images.unsplash.com/photo-1621905251918-48416bd8575a?${q}&w=1200`,
    alt: "Profissional em ambiente de painéis e cablagem industrial, evocando subestação e comissionamento elétrico.",
  },
} as const;

export const phaseStripImages = {
  desenvolvimento: {
    src: `https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?${q}&w=900`,
    alt: "Parque eólico visto de perspectiva ampla, aludindo à fase de desenvolvimento e viabilização do projeto.",
  },
  construcao: {
    src: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?${q}&w=900`,
    alt: "Canteiro de obras com equipamentos de elevação, representando a fase de construção civil e montagem.",
  },
  comissionamento: {
    src: `https://images.unsplash.com/photo-1581094794329-c8112a89af12?${q}&w=900`,
    alt: "Equipamentos e painéis em sala elétrica, associados a testes, integração e comissionamento de sistemas.",
  },
} as const;
