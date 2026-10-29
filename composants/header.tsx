"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/infos", label: "Qui sommes-nous ?" },
  { href: "/offres", label: "Nos services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [ouvert, setOuvert] = useState(false);
  const pathname = usePathname();

  // Ferme le menu quand on change de page
  useEffect(() => {
    setOuvert(false);
  }, [pathname]);

  // Échap pour fermer + blocage du scroll quand le menu est ouvert
  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e: KeyboardEvent) => e.key === "Escape" && setOuvert(false);
    document.addEventListener("keydown", surTouche);
    const ancien = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", surTouche);
      document.body.style.overflow = ancien;
    };
  }, [ouvert]);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/20 px-6 py-4 shadow-lg shadow-black/5 backdrop-blur-xl">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          <span className="text-blue-600">Fluno</span>
        </a>

        {/* Navigation ordinateur */}
        <ul className="hidden items-center gap-8 md:flex">
          {liens.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-medium transition hover:text-blue-600 ${
                  pathname === l.href ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton ordinateur */}
        <a
          href="/contact"
          className="hidden rounded-xl border border-white/30 bg-blue-600/85 px-5 py-3 text-sm font-semibold text-white shadow-md backdrop-blur-md transition hover:bg-blue-700 md:inline-block"
        >
          Demandez un devis
        </a>

        {/* Bouton menu mobile / tablette */}
        <button
          type="button"
          onClick={() => setOuvert(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-900 transition hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 md:hidden"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {/* Fond sombre (hors du <nav> : le flou y décalerait le menu fixe) */}
      <div
        onClick={() => setOuvert(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          ouvert ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu qui glisse depuis la droite */}
      <aside
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!ouvert}
        className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85%] flex-col bg-white shadow-2xl shadow-blue-900/20 transition-transform duration-300 ease-out md:hidden ${
          ouvert ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-blue-100 px-6 py-5">
          <a href="/" className="text-2xl font-bold tracking-tight text-blue-600">
            Fluno
          </a>
          <button
            type="button"
            onClick={() => setOuvert(false)}
            aria-label="Fermer le menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ul className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
          {liens.map((l) => {
            const actif = pathname === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOuvert(false)}
                  aria-current={actif ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                    actif
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-blue-100 p-6">
          <a
            href="/contact"
            onClick={() => setOuvert(false)}
            className="block rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-600 hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Demandez un devis
          </a>
        </div>
      </aside>
    </header>
  );
}