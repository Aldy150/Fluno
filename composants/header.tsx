export default function Header() {
  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/20 px-6 py-4 shadow-lg shadow-black/5 backdrop-blur-xl">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          <span className="text-blue-600">Fluno</span>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a href="/" className="font-medium text-gray-900 transition hover:text-blue-600">
              Accueil
            </a>
          </li>
          <li>
            <a href="/infos" className="font-medium text-gray-700 transition hover:text-blue-600">
              Qui sommes-nous ?
            </a>
          </li>
          <li>
            <a href="/offres" className="font-medium text-gray-700 transition hover:text-blue-600">
              Nos services
            </a>
          </li>
          <li>
            <a href="/contact" className="font-medium text-gray-700 transition hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Bouton */}
        <a
          href="/contact"
          className="rounded-xl border border-white/30 bg-blue-600/85 px-5 py-3 text-sm font-semibold text-white shadow-md backdrop-blur-md transition hover:bg-blue-700"
        >
          Demandez un devis
        </a>
      </nav>
    </header>
  );
}