export function Footer() {
  return (
    <footer className="w-full py-8 text-center text-sm bg-[var(--color-brand-900)] text-gray-400 border-t border-[var(--color-brand-700)]">
      <p>© {new Date().getFullYear()} André Gross. Desenvolvido com React, TS e Tailwind.</p>
    </footer>
  );
}