import Header from "@/composants/header";
import Carousel from "@/composants/caroussel";

const services = [
  {
    titre: "Web",
    texte: "Sites et applications rapides, sécurisés, faciles à faire évoluer.",
  },
  {
    titre: "Mobile",
    texte: "Applications iOS et Android, pensées pour un usage quotidien.",
  },
  {
    titre: "Sur mesure",
    texte: "Vous décrivez le besoin, nous construisons l'outil qui y répond.",
  },
];

const avantages = [
  {
    titre: "Une seule équipe",
    texte: "Conception, design, développement et mise en ligne : vous n'avez qu'un interlocuteur.",
  },
  {
    titre: "Des projets suivis",
    texte: "Des points réguliers pour valider chaque étape, sans mauvaise surprise à la fin.",
  },
  {
    titre: "Un code durable",
    texte: "Un travail propre et documenté, que vous pouvez faire évoluer avec nous ou sans nous.",
  },
  {
    titre: "Un accompagnement continu",
    texte: "Après la mise en ligne, nous assurons corrections, mises à jour et nouvelles fonctionnalités.",
  },
];

const realisations = [
  { titre: "Sites vitrines", texte: "Présentez votre activité et gagnez en visibilité." },
  { titre: "Boutiques en ligne", texte: "Vendez vos produits avec un parcours d'achat simple." },
  { titre: "Espaces clients", texte: "Donnez à vos clients un accès à leurs informations." },
  { titre: "Outils internes", texte: "Gagnez du temps sur la gestion et le suivi quotidien." },
  { titre: "Applications mobiles", texte: "Touchez vos utilisateurs directement sur leur téléphone." },
  { titre: "Tableaux de bord", texte: "Visualisez vos données et pilotez votre activité." },
];

// À adapter aux technologies réellement utilisées par Fluno
const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "React Native", "Laravel", "PHP" , "Python"];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/60 text-gray-900">
      {/* Halos bleus discrets */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="relative">
        <Header />

        {/* Hero */}
        <main className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:py-20">
          <section className="flex flex-col items-start">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Nous créons vos applications{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                web et mobiles.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
              Fluno conçoit des solutions sur mesure pour répondre aux besoins de ses clients,
              de l'idée jusqu'à la mise en ligne.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-600 hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contactez-nous
              </a>
              <a
                href="/offres"
                className="rounded-xl border border-blue-200 bg-white/70 px-6 py-3 text-sm font-semibold text-blue-700 backdrop-blur transition hover:border-blue-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Nos services
              </a>
            </div>
          </section>

          {/* Carousel dans son cadre vitré */}
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
              <div className="flex min-h-[18rem] items-center justify-center overflow-hidden rounded-2xl bg-white/80">
                <Carousel />
              </div>
            </div>

            <div className="absolute -left-3 bottom-8 hidden rounded-xl border border-white/70 bg-white/90 px-3.5 py-2.5 text-sm shadow-lg backdrop-blur sm:block">
              <p className="font-semibold text-gray-900">Web & mobile</p>
              <p className="text-xs text-gray-500">Une seule équipe, de A à Z</p>
            </div>
            <div className="absolute -right-3 top-12 hidden rounded-xl border border-white/70 bg-white/90 px-3.5 py-2.5 text-sm shadow-lg backdrop-blur sm:block">
              <p className="font-semibold text-gray-900">Sur mesure</p>
              <p className="text-xs text-gray-500">Rien de générique</p>
            </div>
          </section>
        </main>

        {/* Services */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur md:grid-cols-3 md:divide-x md:divide-y-0">
            {services.map((s) => (
              <article key={s.titre} className="p-6">
                <h2 className="text-lg font-semibold text-blue-700">{s.titre}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pourquoi Fluno */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Pourquoi travailler avec Fluno</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            Un projet numérique réussi tient autant à la méthode qu'à la technique.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {avantages.map((a) => (
              <article
                key={a.titre}
                className="rounded-2xl border border-blue-100 bg-white/70 p-6 backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-gray-900">{a.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{a.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Ce que nous réalisons */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Ce que nous réalisons</h2>
          <div className="mt-6 grid divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
            {realisations.map((r) => (
              <article key={r.titre} className="border-blue-100 p-6 sm:border-b lg:[&:nth-last-child(-n+3)]:border-b-0">
                <h3 className="text-base font-semibold text-blue-700">{r.titre}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{r.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Nos outils</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            Des technologies modernes et éprouvées, choisies selon les besoins de chaque projet.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {technologies.map((t) => (
              <li
                key={t}
                className="rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Appel à l'action */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-xl shadow-blue-900/20 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">Un projet en tête ?</h2>
              <p className="mt-1 text-sm text-blue-100">
                Parlez-nous de votre besoin, nous vous répondons rapidement.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contactez-nous
            </a>
          </div>
        </section>

        <footer className="border-t border-blue-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Fluno</p>
            <a
              href="/infos"
              className="rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-600 hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Suivant
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}