import { useState } from 'react';
import { Reveal } from './Reveal';

// Aqui estão os seus projetos reais adaptados para a estrutura
const projectsData = [
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
    description: "Estudos avançados e desenvolvimento de plataforma de controle financeiro explorando rotas com Node.js e Express, focada em segurança e banco de dados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Dashboard de Gestão",
    category: "UI/UX & Frontend",
    description: "Interface focada em análise de indicadores (KPIs) para linhas de produção, traduzindo dados complexos em visuais limpos, interativos e de rápida leitura.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto" id="projetos">
      
      <Reveal>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-brand-900)]">
            Projetos Selecionados.
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Lado Esquerdo: Lista Interativa */}
        <div className="lg:w-5/12 flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <Reveal key={project.id} delay={index * 150}>
              <button
                onMouseEnter={() => setActiveProject(project)}
                onClick={() => setActiveProject(project)}
                className={`text-left w-full group flex flex-col gap-2 py-6 border-b border-[var(--color-brand-100)] transition-opacity duration-300 ${
                  activeProject.id === project.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-brand-900)] transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-[var(--color-brand-500)] uppercase tracking-wider">
                  {project.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Lado Direito: Visualizador de Imagem */}
        <Reveal delay={300}>
          <div className="lg:w-7/12 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden bg-[var(--color-brand-100)] group shadow-xl">
            <img
              key={activeProject.id}
              src={activeProject.image}
              alt={activeProject.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradiente sutil para garantir leitura do texto, usando tons da paleta */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-900)] via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg drop-shadow-md animate-fade-in">
                {activeProject.description}
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}