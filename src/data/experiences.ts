// src/data/experiences.ts

export interface Experience {
  id: number;
  title: string;
  period: string;
  company: string;
  description: string;
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Desenvolvedor Frontend Freelance",
    period: "2023 – Presente",
    company: "Projetos Independentes & MVP",
    description: "Desenvolvimento de um MVP de sistema web para geração automática de cartas-proposta. Foco na automação de documentos complexos, estruturação de rotas, integração de APIs e consumo/leitura de dados via planilhas CSV utilizando PapaParse. Construído integralmente com React, TypeScript e Tailwind CSS."
  },
  {
    id: 2,
    title: "Líder de Produção & Qualidade",
    period: "Anos Anteriores",
    company: "Gestão de Indústria & Torrefação",
    description: "Atuação em funções técnicas com liderança direta de equipes e gestão de recursos na área de produção. Foco forte na melhoria contínua, análise de indicadores (KPIs) e controle rigoroso de qualidade, incluindo o desenvolvimento de perfis na gestão de processos de torrefação de cafés especiais."
  },
  {
    id: 3,
    title: "Stack Principal & Estudos Contínuos",
    period: "Em uso Constante",
    company: "Desenvolvimento Web",
    description: "Proficiência avançada na trindade moderna do frontend (React, TS, Tailwind), com domínio em arquitetura de pastas e deploy de aplicações (Vercel). Atualmente expandindo conhecimentos para o ecossistema backend, explorando rotas com Node.js/Express, autenticação e bancos de dados para futuros sistemas de controle financeiro."
  }
];