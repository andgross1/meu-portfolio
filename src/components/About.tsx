export function About() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto" id="sobre">
      
      {/* Bloco 1: Textos e Assinatura */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24">
        {/* Título na esquerda (Desktop) / Cima (Mobile) */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Sobre meu trabalho</h3>
        </div>
        
        {/* Textos na direita (Desktop) / Baixo (Mobile) */}
        <div className="md:w-2/3 flex flex-col gap-6 text-[var(--color-text-secondary)] leading-relaxed">
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
          <p>
            Cada projeto de portfólio aqui é real — um reflexo de envolvimento profundo, 
            resolução de problemas e impacto duradouro. Cada passo visa entregar interfaces 
            limpas e experiências intuitivas para usuários reais.
          </p>
          
          {/* Assinatura (Usando uma fonte cursiva para simular) */}
          <div className="mt-4">
             {/* Você pode trocar essa div por uma tag <img> depois, caso tenha a imagem da sua assinatura */}
            <span className="font-['Dancing_Script',cursive] text-4xl text-[var(--color-text-primary)] -rotate-3 inline-block">
              André Gross
            </span>
          </div>
        </div>
      </div>

      {/* Bloco 2: Linha do Tempo (Skills / Experiência) */}
      <div className="flex flex-col border-t border-gray-200">
        
        {/* Item da Lista */}
        <div className="flex flex-col md:flex-row justify-between py-6 border-b border-gray-200 gap-2">
          <span className="font-bold text-[var(--color-text-primary)]">Desenvolvedor Frontend Freelance</span>
          <span className="text-[var(--color-text-secondary)] text-sm">2023–Presente</span>
        </div>

        {/* Item da Lista */}
        <div className="flex flex-col md:flex-row justify-between py-6 border-b border-gray-200 gap-2">
          <span className="font-bold text-[var(--color-text-primary)]">Líder de Produção & Qualidade</span>
          <span className="text-[var(--color-text-secondary)] text-sm">Experiência Prévia</span>
        </div>

        {/* Item da Lista */}
        <div className="flex flex-col md:flex-row justify-between py-6 border-b border-gray-200 gap-2">
          <span className="font-bold text-[var(--color-text-primary)]">Stack Principal: React, TS, Tailwind</span>
          <span className="text-[var(--color-text-secondary)] text-sm">Em uso Constante</span>
        </div>

        {/* Item da Lista */}
        <div className="flex flex-col md:flex-row justify-between py-6 border-b border-gray-200 gap-2">
          <span className="font-bold text-[var(--color-text-primary)]">Projetos Pessoais & Automação</span>
          <span className="text-[var(--color-text-secondary)] text-sm">Contínuo</span>
        </div>

      </div>
    </section>
  );
}