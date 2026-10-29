import Header from "@/composants/header";

const valeurs = [
  {
    titre: "Sur mesure",
    texte: "Chaque projet part de votre besoin, pas d'un modèle préfabriqué.",
  },
  {
    titre: "Transparence",
    texte: "Vous savez où en est votre projet, ce qu'il coûte et ce qui reste à faire.",
  },
  {
    titre: "Qualité",
    texte: "Un code propre, testé et documenté, que vous pouvez faire évoluer.",
  },
  {
    titre: "Proximité",
    texte: "Un interlocuteur unique, disponible, du premier échange à la mise en ligne.",
  },
];

const etapes = [
  { titre: "Écoute", texte: "Nous comprenons votre activité, vos utilisateurs et vos objectifs." },
  { titre: "Conception", texte: "Nous définissons ensemble les écrans, les fonctionnalités et le planning." },
  { titre: "Développement", texte: "Nous construisons par étapes, avec des points réguliers pour valider." },
  { titre: "Mise en ligne", texte: "Nous déployons, puis nous restons là pour le suivi et les évolutions." },
];

export default function QuiSommesNous() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/60 text-gray-900">
      {/* Halos bleus discrets */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-24 top-60 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="relative">
        <Header />

        {/* Présentation */}
        <main className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:py-20">
          <section className="flex flex-col items-start">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Une équipe qui construit{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                des outils qui servent.
              </span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
              Fluno est une entreprise spécialisée dans le développement web et mobile. Nous
              aidons nos clients à transformer une idée ou un besoin en application concrète,
              fiable et agréable à utiliser.
            </p>
            <a
              href="/contact"
              className="mt-7 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-600 hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Parlons de votre projet
            </a>
          </section>

          <section className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-blue-500/30 to-blue-200/30 blur-2xl"
            />
            <div className="relative rounded-3xl border border-white/70 bg-white/60 p-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl">
              <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
              </div>
              <div className="rounded-2xl bg-white/80 p-8">
                <h2 className="text-lg font-semibold text-blue-700">Notre mission</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Rendre le numérique simple pour ceux qui le commandent comme pour ceux qui
                  l'utilisent. Une application réussie est une application que l'on comprend
                  du premier coup et qui répond vraiment au besoin de départ.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Valeurs */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Ce qui guide notre travail</h2>
          <div className="mt-6 grid divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {valeurs.map((v) => (
              <article key={v.titre} className="p-6">
                <h3 className="text-lg font-semibold text-blue-700">{v.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Méthode : une vraie suite d'étapes */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Comment nous travaillons</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {etapes.map((e, i) => (
              <li
                key={e.titre}
                className="rounded-2xl border border-blue-100 bg-white/70 p-6 backdrop-blur"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{e.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{e.texte}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className="border-t border-blue-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Fluno</p>
            <a href="/contact" className="text-sm font-medium text-blue-700 hover:underline">
              Nous contacter
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}