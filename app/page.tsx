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

            <a
              href="/contact"
              className="mt-7 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-600 hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contactez-nous
            </a>
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

        <footer className="border-t border-blue-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Fluno</p>
            <button
              type="button"
              className="rounded-xl bg-gradient-to-b from-blue-500 to-blue-700
               px-5 py-2.5 text-sm font-semibold text-white shadow-lg
                shadow-blue-600/25 transition hover:from-blue-600 
                hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <a href="/infos">Suivant</a>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}