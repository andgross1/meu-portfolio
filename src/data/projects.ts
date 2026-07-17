// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Gerador de Propostas",
    category: "Automação & Web App",
    description: "MVP desenvolvido em React e TypeScript para automação de documentos complexos, com integração de APIs e leitura de dados em massa via CSV.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Sistema Financeiro",
    category: "Fullstack / Backend",
    description: "Plataforma de controle financeiro explorando rotas com Node.js e Express, focada em segurança, autenticação e gerenciamento de banco de dados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Dashboard de Gestão",
    category: "UI/UX & Frontend",
    description: "Interface focada em análise de indicadores (KPIs) para linhas de produção, traduzindo dados complexos em visuais limpos e interativos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  }
];