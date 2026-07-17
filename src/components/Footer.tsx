export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 text-center text-sm text-[var(--color-text-secondary)] border-t border-gray-100">
      <p>© {currentYear} André Gross. Todos os direitos reservados.</p>
    </footer>
  );
}