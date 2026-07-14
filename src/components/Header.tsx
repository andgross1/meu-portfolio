export function Header() {
  return (
    <header className="flex items-center justify-between py-8 px-8 md:px-16 w-full max-w-7xl mx-auto">
      <div className="font-bold text-xl tracking-tight">Gross®</div>
      
      <nav className="hidden md:flex gap-12 text-sm font-medium text-[var(--color-text-secondary)]">
        <a href="#home" className="hover:text-[var(--color-text-primary)] transition-colors">Home</a>
        <a href="#projects" className="hover:text-[var(--color-text-primary)] transition-colors">Projects</a>
        <a href="#contact" className="hover:text-[var(--color-text-primary)] transition-colors">Contact</a>
      </nav>
    </header>
  )
}