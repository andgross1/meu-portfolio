export function Header() {
  return (
    <header className="flex items-center justify-between py-8 px-8 md:px-16 w-full max-w-7xl mx-auto">
      <div className="font-bold text-xl tracking-tight text-[var(--color-brand-900)]">Gross®</div>
      
      <nav className="hidden md:flex gap-12 text-sm font-medium text-[var(--color-brand-700)]">
        <a href="#inicio" className="hover:text-[var(--color-brand-500)] transition-colors">Home</a>
        <a href="#projetos" className="hover:text-[var(--color-brand-500)] transition-colors">Projetos</a>
        <a href="#contato" className="hover:text-[var(--color-brand-500)] transition-colors">Contato</a>
      </nav>
    </header>
  )
}