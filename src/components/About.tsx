import { Reveal } from './Reveal';
// Mantenha o function ExperienceItem {...} aqui em cima exatamente como estava!
import { useState } from 'react';

function ExperienceItem({ title, period, company, description }: { title: string, period: string, company: string, description: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-brand-300)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-2 text-left hover:bg-[rgba(255,255,255,0.2)] transition-colors px-4 -mx-4 rounded-lg cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-[var(--color-brand-900)] group-hover:text-[var(--color-brand-700)] transition-colors">
            {title}
          </span>
          <svg 
            className={`w-4 h-4 text-[var(--color-brand-700)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span className="text-[var(--color-brand-700)] text-sm whitespace-nowrap">{period}</span>
      </button>
      
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden px-4 -mx-4">
          <div className="flex flex-col gap-2 mt-2">
            <span className="font-medium text-sm text-[var(--color-brand-700)]">{company}</span>
            <p className="text-sm text-[var(--color-brand-900)] leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="bg-[var(--color-brand-100)] w-full py-24" id="sobre">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        
        <Reveal>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24">
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold text-[var(--color-brand-900)]">Sobre meu trabalho</h3>
            </div>
            
            <div className="md:w-2/3 flex flex-col gap-6 text-[var(--color-brand-900)] leading-relaxed">
              <p>
                Sou o André Gross, desenvolvedor focado em construir produtos digitais significativos
                que unem clareza, velocidade e interação fluida. Minha paixão é trazer ideias de
                frontend à vida com polimento e intenção.
              </p>
              <p>
                Eu trabalho majoritariamente com React, TypeScript e Tailwind CSS, sempre buscando 
                elevar a acessibilidade e a precisão em cada solução. Projetos limpos e atenção aos 
                detalhes refletem o meu cuidado com a estrutura do código.
              </p>
              
              <div className="mt-4">
                <span className="font-['Dancing_Script',cursive] text-4xl text-[var(--color-brand-700)] -rotate-3 inline-block">
                  André Gross
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col border-t border-[var(--color-brand-300)]">
            <ExperienceItem 
              title="Desenvolvedor Frontend Freelance"
              period="2023 – Presente"
              company="Projetos Independentes & MVP"
              description="Desenvolvimento de um MVP de sistema web para geração automática de cartas-proposta. Foco na automação de documentos complexos, estruturação de rotas, integração de APIs e consumo/leitura de dados via planilhas CSV utilizando PapaParse. Construído integralmente com React, TypeScript e Tailwind CSS."
            />
            <ExperienceItem 
              title="Líder de Produção & Qualidade"
              period="Anos Anteriores"
              company="Gestão de Indústria & Torrefação"
              description="Atuação em funções técnicas com liderança direta de equipes e gestão de recursos na área de produção. Foco forte na melhoria contínua, análise de indicadores (KPIs) e controle rigoroso de qualidade, incluindo o desenvolvimento de perfis na gestão de processos de torrefação de cafés especiais."
            />
            <ExperienceItem 
              title="Stack Principal & Estudos Contínuos"
              period="Em uso Constante"
              company="Desenvolvimento Web"
              description="Proficiência avançada na trindade moderna do frontend (React, TS, Tailwind), com domínio em arquitetura de pastas e deploy de aplicações (Vercel). Atualmente expandindo conhecimentos para o ecossistema backend, explorando rotas com Node.js/Express, autenticação e bancos de dados para futuros sistemas de controle financeiro."
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}