export function Header() {
  return (
    // Grid de 4 colunas
    <header className="grid grid-cols-4 items-center py-8 px-8 md:px-16 w-full max-w-7xl mx-auto">
      
      {/* Coluna 1: Logo na extrema esquerda */}
      <div className="font-bold text-xl tracking-tight text-[var(--color-brand-900)] justify-self-start">
        Gross®
      </div>
      
      {/* Colunas 2, 3 e 4: Links distribuídos, cada um em sua coluna */}
      <a href="#inicio" className="text-center text-sm font-medium text-[var(--color-brand-700)] hover:text-[var(--color-brand-500)] transition-colors">
        Home
      </a>
      <a href="#projetos" className="text-center text-sm font-medium text-[var(--color-brand-700)] hover:text-[var(--color-brand-500)] transition-colors">
        Projetos
      </a>
      <a href="#contato" className="text-center text-sm font-medium text-[var(--color-brand-700)] hover:text-[var(--color-brand-500)] transition-colors">
        Contato
      </a>
      
    </header>
  )
}