import { phaseStripImages } from "@/lib/site-images";

export type ServiceSlug =
  | "engenharia"
  | "consultoria"
  | "gestao-da-construcao"
  | "inovacao";

export type ServicePage = {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  subtitle: string;
  bullets: string[];
  phases: Array<{
    id: string;
    title: string;
    description: string;
    bullets: string[];
    image: (typeof phaseStripImages)[keyof typeof phaseStripImages];
  }>;
  deliverables: string[];
  faq: Array<{ q: string; a: string }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "engenharia",
    eyebrow: "Especialista em renováveis",
    title: "Engenharia",
    subtitle:
      "Especialistas em projetos de energia renovável e infraestrutura de evacuação elétrica, incorporando também soluções de hibridização e armazenamento. Serviço de engenharia e assessoria técnica 360º ao longo de todo o ciclo de vida, da concepção ao comissionamento.",
    bullets: [
      "Projetos de energia renovável e evacuação elétrica",
      "Hibridização e armazenamento",
      "Engenharia e assessoria técnica 360º",
      "Otimização de projetos e inovação tecnológica",
      "Suporte a licenças e autorizações (níveis local/regional/nacional)",
      "Atuação do desenvolvimento ao comissionamento",
      "Especialistas em solar, eólica, subestações e linhas",
    ],
    phases: [
      {
        id: "desenvolvimento",
        title: "Fase de desenvolvimento",
        description:
          "Atuação como parceiro estratégico do promotor até o status “pronto para construir” (RTB), com foco em otimização, inovação e conformidade regulatória para licenças e autorizações.",
        bullets: [
          "Estudos de viabilidade, acesso e conexão",
          "Avaliação de recursos e rendimentos",
          "Engenharia conceitual (CAPEX/OPEX/LCOE)",
          "Engenharia para licenciamento e código de rede",
        ],
        image: phaseStripImages.desenvolvimento,
      },
      {
        id: "construcao",
        title: "Fase de construção",
        description:
          "Com o RTB, suporte a promotores e EPC para padrões elevados de qualidade e segurança, otimização de custos e cumprimento de prazos.",
        bullets: [
          "Especificações técnicas e apoio a contratação",
          "Assessoria em negociação de contratos",
          "Engenharia do Proprietário e EPCM",
          "Estudos e validações para conexão à rede",
        ],
        image: phaseStripImages.construcao,
      },
      {
        id: "comissionamento",
        title: "Comissionamento e entrada em operação",
        description:
          "Suporte para início da operação, com foco em requisitos e procedimentos de conexão à rede.",
        bullets: [
          "Documentação As-built",
          "Revisão de protocolos e supervisão de testes",
          "Manuais de O&M",
          "Suporte técnico para legalização e conexão à rede",
        ],
        image: phaseStripImages.comissionamento,
      },
    ],
    deliverables: [
      "Estudos de viabilidade",
      "Estudos de acesso e conexão à rede",
      "Estudos de avaliação de recursos e rendimentos",
      "Estudos de alternativas e otimização de conexão à rede",
      "Estudos de hibridização e armazenamento",
      "Engenharia conceitual (CAPEX/OPEX/LCOE)",
      "Documentação para licenciamento e autorizações",
      "Engenharia básica avançada para licitação EPC",
      "Especificações técnicas para licitação (EPC/BOS/BOP/Main Equipment)",
      "Documentação As-built e manuais de O&M",
    ],
    faq: [
      {
        q: "Em quais tipos de projetos a SÓLIDA atua?",
        a: "Em projetos de energia renovável e na infraestrutura associada de evacuação e interligação elétrica, incluindo hibridização e armazenamento quando aplicável.",
      },
      {
        q: "O que significa RTB (“pronto para construir”)?",
        a: "É o status em que o projeto atinge as condições necessárias para iniciar a fase de construção, após desenvolvimento, otimizações e atendimento aos requisitos de licenças e autorizações.",
      },
      {
        q: "Vocês fazem EPC ou atuam como apoio técnico?",
        a: "Atuamos em engenharia, Engenharia do Proprietário e EPCM, além de suporte técnico para licitações e negociação de contratos.",
      },
      {
        q: "Quais entregas aparecem na etapa de comissionamento?",
        a: "Documentação As-built, revisão de protocolos, supervisão de testes e comissionamento, manuais de O&M e suporte para legalização e conexão à rede.",
      },
    ],
  },
  {
    slug: "consultoria",
    eyebrow: "Assessoria técnica independente",
    title: "Consultoria",
    subtitle:
      "Consultoria para renováveis com equipe especializada, conhecimento de regulação e tecnologia e visão global do negócio. A SÓLIDA analisa riscos do projeto e entrega conclusões com critérios técnicos rigorosos, com soluções de alto valor agregado.",
    bullets: [
      "Due Diligence Técnica",
      "Lender’s Technical Advisor",
      "Auditoria especializada",
      "Contratos de assessoria técnica",
      "Análise de riscos com critérios técnicos rigorosos",
      "Atuação em renováveis e infraestrutura elétrica de interligação à rede",
      "Serviços para promotores, fundos e instituições financeiras",
    ],
    phases: [
      {
        id: "avaliacao",
        title: "Entendimento do projeto e do mercado",
        description:
          "Alinhamento com o cliente para considerar realidade local, regulação e tecnologia, mantendo uma visão global do negócio para orientar a análise.",
        bullets: [
          "Contexto local e regulação",
          "Tecnologia e configuração do projeto",
          "Premissas e documentação base",
          "Critérios e escopo da análise",
        ],
        image: phaseStripImages.desenvolvimento,
      },
      {
        id: "contratos",
        title: "Análise técnica e de riscos (Red-flag)",
        description:
          "Avaliação minuciosa de riscos e pontos críticos do projeto, consolidando achados técnicos para suportar decisões relevantes.",
        bullets: [
          "Identificação de pontos críticos",
          "Riscos e recomendações de mitigação",
          "Conclusões técnicas estruturadas",
          "Base para decisão de investimento",
        ],
        image: phaseStripImages.construcao,
      },
      {
        id: "monitoramento",
        title: "Revisões especializadas e validações",
        description:
          "Revisões técnicas de configuração do projeto, produção e interconexão elétrica, além de temas como permissões, urbanismo e meio ambiente, conforme necessário.",
        bullets: [
          "Produção e configuração técnica",
          "Interconexão elétrica",
          "Permissões e licenças",
          "Urbanismo e meio ambiente",
        ],
        image: phaseStripImages.comissionamento,
      },
      {
        id: "decisao",
        title: "Suporte a decisões e negociações",
        description:
          "Entrega de conclusões e insumos técnicos para compra e financiamento, negociação de contratos e resolução de conflitos, quando aplicável.",
        bullets: [
          "Insumos para negociação",
          "Revisões técnicas de contratos",
          "Matriz de risco e recomendações",
          "Suporte a decisões críticas",
        ],
        image: phaseStripImages.comissionamento,
      },
    ],
    deliverables: [
      "Análise de Red-flag",
      "Avaliação do terreno",
      "Revisão da configuração técnica do projeto",
      "Análise de produção",
      "Análise de interconexão elétrica",
      "Avaliação de urbanismo e meio ambiente",
      "Estimativa de CAPEX/OPEX",
      "Revisão de permissões",
      "Revisão técnica de contratos (EPC, O&M, PPA…)",
      "Matriz de Risco e insumos para modelo financeiro",
    ],
    faq: [
      {
        q: "O que está incluído em uma Due Diligence Técnica?",
        a: "Análises como Red-flag, terreno, configuração técnica, produção, interconexão elétrica, urbanismo e meio ambiente, CAPEX/OPEX, permissões, contratos (EPC/O&M/PPA…), além de matriz de risco e insumos para modelo financeiro.",
      },
      {
        q: "A SÓLIDA atua como assessora independente?",
        a: "Sim. A atuação é como assessoria técnica independente.",
      },
      {
        q: "Para quem é esse tipo de consultoria?",
        a: "Para promotores, fundos de investimento e instituições financeiras, apoiando compra, financiamento e tomada de decisão.",
      },
      {
        q: "Além de Due Diligence, em que mais vocês apoiam?",
        a: "Assessoria para interconexão de rede, negociação de contratos, resolução de conflitos e auditorias especializadas.",
      },
    ],
  },
  {
    slug: "gestao-da-construcao",
    eyebrow: "Gestão de projetos e site",
    title: "Gestão da construção",
    subtitle:
      "Gestão de projetos com visão abrangente que integra engenharia, licenciamento, aquisição, construção e comissionamento. Equipes experientes focadas em segurança, qualidade, prazos e resultado econômico do projeto.",
    bullets: [
      "Visão abrangente: engenharia a comissionamento",
      "Equipes de supervisão e gestão no local",
      "Foco em Zero Acidentes",
      "Padrões máximos de qualidade",
      "Cumprimento de prazos",
      "Resultado econômico esperado",
      "Experiência em gestão de sites para renováveis",
    ],
    phases: [
      {
        id: "mobilizacao",
        title: "Preparação e validação",
        description:
          "Apoio aos interesses do cliente desde a validação do projeto final, garantindo base consistente para execução.",
        bullets: [
          "Validação do projeto final",
          "Planejamento e prontidão de execução",
          "Base de governança e rotinas",
          "Alinhamento com objetivos do cliente",
        ],
        image: phaseStripImages.construcao,
      },
      {
        id: "supervisao",
        title: "Gestão da execução em campo",
        description:
          "Supervisão e gestão do local com abordagem pragmática e decisiva, orientada a resultados durante a fase de maior demanda.",
        bullets: [
          "Supervisão e gestão no local",
          "Acompanhamento de avanço e frentes",
          "Resolução de problemas em campo",
          "Foco em entrega e produtividade",
        ],
        image: phaseStripImages.construcao,
      },
      {
        id: "governanca",
        title: "Controle e governança",
        description:
          "Controle orçamentário, gestão de contratos e coordenação de atividades para assegurar aderência ao plano e aos objetivos.",
        bullets: [
          "Controle orçamentário",
          "Gestão de contratos",
          "Coordenação de atividades",
          "Aderência a plano e metas",
        ],
        image: phaseStripImages.comissionamento,
      },
      {
        id: "sqc",
        title: "Segurança, qualidade e comissionamento",
        description:
          "Supervisão de HSE e qualidade, além de acompanhamento de comissionamento, visando padrões e conformidade durante a entrega.",
        bullets: [
          "Coordenação de HSE (Zero Acidentes)",
          "Padrões de qualidade e inspeções",
          "Acompanhamento de comissionamento",
          "Conformidade e evidências",
        ],
        image: phaseStripImages.comissionamento,
      },
    ],
    deliverables: [
      "Assistência técnica durante a construção",
      "Inspeções FAT",
      "Coordenação do HSE",
      "Gestão da Construção",
      "EPCM",
      "Supervisão de obras no local (Civil)",
      "Supervisão de obras no local (Mecânico)",
      "Supervisão de obras no local (Elétrico)",
      "Supervisão de obras no local (Qualidade)",
      "Supervisão de obras no local (HSE) e Comissionamento",
    ],
    faq: [
      {
        q: "Quais são os objetivos básicos da gestão no local?",
        a: "Zero acidentes, padrões máximos de qualidade, cumprimento de prazos e resultado econômico esperado.",
      },
      {
        q: "Que tipos de serviços aparecem nessa página?",
        a: "Assistência técnica durante a construção, inspeções FAT, coordenação de HSE, gestão da construção, EPCM e supervisão de obras (civil, mecânica, elétrica, qualidade, HSE e comissionamento).",
      },
      {
        q: "A atuação é apenas para renováveis?",
        a: "A página destaca experiência em projetos de energia renovável.",
      },
      {
        q: "Como a SÓLIDA apoia o cliente durante a construção?",
        a: "Representando os interesses do cliente e garantindo a correta execução do projeto, desde a validação do projeto final até controle orçamentário e supervisão de segurança.",
      },
    ],
  },
  {
    slug: "inovacao",
    eyebrow: "Tecnologia, digitalização e automação",
    title: "Inovação",
    subtitle:
      "Cultura de inovação com foco em digitalização e automação de processos. Desenvolvimento de ferramentas digitais verticais exclusivas para engenharia especializada em renováveis, com metodologia SCRUM e equipe multidisciplinar.",
    bullets: [
      "Vocação tecnológica desde a criação",
      "Inovação, digitalização e automação como cultura",
      "Desenvolvimento convive com engenharia",
      "Ferramentas digitais verticais exclusivas",
      "Metodologia SCRUM",
      "Otimização de processos de engenharia",
      "Projetos de plantas mais eficientes",
      "Soluções para problemas complexos",
    ],
    phases: [
      {
        id: "imersao",
        title: "Imersão com engenharia",
        description:
          "A equipe de desenvolvimento trabalha próxima aos engenheiros para entender necessidades reais e transformar requisitos técnicos em soluções digitais aplicáveis.",
        bullets: [
          "Entendimento de necessidades reais",
          "Requisitos técnicos para produto",
          "Proximidade com o dia a dia",
          "Soluções digitais aplicáveis",
        ],
        image: phaseStripImages.desenvolvimento,
      },
      {
        id: "scrum",
        title: "Desenvolvimento ágil (SCRUM)",
        description:
          "Construção contínua de ferramentas e modelos, com ciclos iterativos para validar hipóteses, refinar funcionalidades e acelerar a entrega de valor.",
        bullets: [
          "Ciclos iterativos de entrega",
          "Validação e refinamento",
          "Evolução contínua",
          "Rapidez com controle técnico",
        ],
        image: phaseStripImages.construcao,
      },
      {
        id: "modelagem",
        title: "Modelagem e simulação proprietária",
        description:
          "Criação de modelos próprios para análises avançadas e simulações detalhadas, voltadas a otimização e eficiência de projetos.",
        bullets: [
          "Modelos próprios para análises",
          "Simulações detalhadas",
          "Otimização e eficiência",
          "Base técnica rastreável",
        ],
        image: phaseStripImages.comissionamento,
      },
      {
        id: "adocao",
        title: "Industrialização e adoção",
        description:
          "Incorporação das ferramentas ao trabalho cotidiano, apoiando padronização, automação e melhoria contínua em diferentes departamentos.",
        bullets: [
          "Padronização de processos",
          "Automação e escala",
          "Adoção no dia a dia",
          "Melhoria contínua",
        ],
        image: phaseStripImages.comissionamento,
      },
    ],
    deliverables: [
      "Modelo proprietário de Ray Tracing",
      "Modelo proprietário para hibridização de usinas fotovoltaicas e termelétricas solares",
      "Ferramenta para otimização de terraplenagem em plantas fotovoltaicas",
      "Modelo proprietário para simulação detalhada de plantas CSP (coletores cilindro-parabólicos e torre central)",
      "Ferramenta de Business Intelligence para gestão de plantas CSP",
      "Ferramenta para cálculo de sombras em parques eólicos (shadow flicker)",
      "Modelo proprietário para estratégias de despacho sob medida com armazenamento",
      "Ferramenta para estudos de capacidade e otimização de trackers em topografias complexas",
    ],
    faq: [
      {
        q: "Qual é o foco principal da inovação na SÓLIDA?",
        a: "Digitalização e automação de processos, com desenvolvimento de ferramentas exclusivas para engenharia em renováveis.",
      },
      {
        q: "Que metodologias e competências a equipe de P&D utiliza?",
        a: "A página menciona metodologia SCRUM e domínio de linguagens como Python, Java e C#.",
      },
      {
        q: "As ferramentas são de mercado ou próprias?",
        a: "A página descreve desenvolvimento de ferramentas e modelos proprietários.",
      },
      {
        q: "Que tipos de soluções são citadas como histórias de sucesso?",
        a: "Modelos e ferramentas para simulação, otimização (ex.: terraplenagem e trackers), BI em CSP, shadow flicker e estratégias de despacho com armazenamento.",
      },
    ],
  },
];

export function getServicePage(slug: ServiceSlug): ServicePage {
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown service slug: ${slug}`);
  return page;
}

