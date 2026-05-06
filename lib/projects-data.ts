import { projectCardImages } from "@/lib/site-images";

export type ProjectTechnology =
  | "Fotovoltaica"
  | "Eólica"
  | "Armazenamento"
  | "Subestações e linhas";

export type Project = {
  id: string;
  technology: ProjectTechnology;
  title: string;
  power: string;
  location: string;
  summary: string;
  image: (typeof projectCardImages)[keyof typeof projectCardImages];
};

export const PROJECT_TECHNOLOGIES: Array<ProjectTechnology | "Todos"> = [
  "Todos",
  "Fotovoltaica",
  "Eólica",
  "Armazenamento",
  "Subestações e linhas",
];

export const projects: Project[] = [
  {
    id: "fv-grande-escala",
    technology: "Fotovoltaica",
    title: "Complexo solar de grande escala",
    power: "850 MW",
    location: "Brasil",
    summary:
      "Engenharia completa do conceito ao comissionamento, com integração à rede e otimização de CAPEX/OPEX.",
    image: projectCardImages.solarLarge,
  },
  {
    id: "fv-semiarido",
    technology: "Fotovoltaica",
    title: "Parque FV em ambiente semiárido",
    power: "320 MW",
    location: "Brasil",
    summary:
      "Estudos de viabilidade, layout otimizado, terraplenagem e documentação técnica para licenciamento e EPC.",
    image: projectCardImages.solarArid,
  },
  {
    id: "eolica-onshore",
    technology: "Eólica",
    title: "Parque eólico onshore",
    power: "205 MW",
    location: "Brasil",
    summary:
      "Avaliação de recursos, engenharia elétrica e civil, e suporte técnico durante construção e comissionamento.",
    image: projectCardImages.wind,
  },
  {
    id: "bess-integrado",
    technology: "Armazenamento",
    title: "BESS integrado ao despacho",
    power: "200 MWh",
    location: "Brasil",
    summary:
      "Estratégia de hibridização e especificações técnicas para integração, testes e entrada em operação.",
    image: projectCardImages.grid,
  },
  {
    id: "se-linha-evacuacao",
    technology: "Subestações e linhas",
    title: "Subestação e linha para evacuação",
    power: "230 kV",
    location: "Brasil",
    summary:
      "Projeto elétrico e coordenação de comissionamento, com documentação as-built e interface com concessionária.",
    image: projectCardImages.grid,
  },
];

