import Header from "@/composants/header";

const services = [
  {
    titre: "Sites et applications web",
    texte:
      "Du site vitrine à la plateforme complète : rapides, sécurisés, bien référencés et faciles à faire évoluer.",
    points: [
      "Sites vitrines et e-commerce",
      "Applications et espaces clients",
      "Tableaux de bord et outils internes",
      "Référencement naturel (SEO) de base",
      "Affichage adapté à tous les écrans",
    ],
  },
  {
    titre: "Applications mobiles",
    texte:
      "Des applications iOS et Android pensées pour un usage quotidien, avec une interface claire et fluide.",
    points: [
      "iOS et Android",
      "Notifications et mode hors ligne",
      "Connexion à vos données et à vos services",
      "Publication sur les stores",
      "Mises à jour et évolutions",
    ],
  },
  {
    titre: "Solutions sur mesure",
    texte:
      "Un besoin précis que rien ne couvre ? Nous concevons l'outil qui s'adapte à votre façon de travailler.",
    points: [
      "Outils métiers",
      "Automatisation de tâches",
      "Connexion à vos outils existants",
      "Gestion des utilisateurs et des droits",
      "Import et export de vos données",
    ],
  },
  {
    titre: "Maintenance et évolution",
    texte:
      "Une fois en ligne, votre projet continue de vivre : corrections, mises à jour et nouvelles fonctionnalités.",
    points: [
      "Suivi et corrections",
      "Mises à jour de sécurité",
      "Nouvelles fonctionnalités",
      "Sauvegardes et surveillance",
      "Reprise d'un projet existant",
    ],
  },
];

const inclus = [
  { titre: "Un cadrage clair", texte: "Périmètre, fonctionnalités et planning validés avant de commencer." },
  { titre: "Un design soigné", texte: "Des maquettes que vous approuvez avant le développement." },
  { titre: "Une application testée", texte: "Chaque fonctionnalité est vérifiée avant la livraison." },
  { titre: "La mise en ligne", texte: "Nous déployons votre projet et le rendons accessible." },
  { titre: "Une documentation", texte: "Les informations nécessaires pour comprendre et reprendre le projet." },
  { titre: "Un accompagnement", texte: "Une prise en main pour utiliser l'outil en autonomie." },
];

const besoins = [
  { titre: "Vous démarrez une activité", texte: "Un site ou une application pour exister en ligne et rassurer vos premiers clients." },
  { titre: "Vous perdez du temps", texte: "Un outil interne qui remplace les tableaux, les papiers et les relances manuelles." },
  { titre: "Vous voulez vendre en ligne", texte: "Une boutique ou un service de commande avec un parcours simple pour vos clients." },
  { titre: "Votre outil actuel vieillit", texte: "Une reprise, une modernisation ou une reconstruction de ce qui existe déjà." },
];

// À adapter aux technologies réellement utilisées par Fluno
const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "React Native","Laravel"];

const questions = [
  {
    q: "Quel service choisir pour mon projet ?",
    r: "Si vous hésitez, décrivez simplement votre besoin. Nous vous indiquons si une application web, mobile ou les deux sont les plus adaptées, et pourquoi.",
  },
  {
    q: "Puis-je commencer petit et faire évoluer ensuite ?",
    r: "Oui. Nous conseillons souvent de lancer une première version utile, puis de l'enrichir selon les retours de vos utilisateurs.",
  },
  {
    q: "Mon projet sera-t-il adapté aux téléphones ?",
    r: "Les sites et applications web que nous réalisons s'affichent correctement sur ordinateur, tablette et téléphone.",
  },
  {
    q: "Comment sont fixés les prix ?",
    r: "Ils dépendent du périmètre, de la complexité et des délais. Après un premier échange, vous recevez une proposition détaillée avant de vous engager.",
  },
];

export default function NosServices() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/60 text-gray-900">
      {/* Halos bleus discrets */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-24 top-60 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="relative">
        <Header />

        {/* Introduction */}
        <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 lg:pt-20">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Tout ce qu'il faut pour{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              lancer votre projet.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            Du premier croquis à la mise en ligne, puis au suivi : une seule équipe prend en charge
            votre projet web ou mobile.
          </p>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.titre}
                className="rounded-2xl border border-blue-100 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
              >
                <h2 className="text-lg font-semibold text-blue-700">{s.titre}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.texte}</p>
                <ul className="mt-5 space-y-2 border-t border-blue-100 pt-5 text-sm text-gray-800">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5">
                      <svg className="h-4 w-4 shrink-0 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Pour quels besoins */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Dans quel cas faire appel à nous</h2>
          <div className="mt-6 grid divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {besoins.map((b) => (
              <article key={b.titre} className="p-6">
                <h3 className="text-base font-semibold text-blue-700">{b.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{b.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Inclus dans chaque projet */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Inclus dans chaque projet</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            Quel que soit le service choisi, vous retrouvez les mêmes garanties.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((x) => (
              <article
                key={x.titre}
                className="rounded-2xl border border-blue-100 bg-white/70 p-6 backdrop-blur"
              >
                <h3 className="text-base font-semibold text-gray-900">{x.titre}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{x.texte}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Les technologies que nous utilisons</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
            Des outils modernes et éprouvés, choisis selon les besoins de chaque projet.
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

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <h2 className="text-2xl font-bold tracking-tight">Questions fréquentes</h2>
          <div className="mt-6 divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur">
            {questions.map((item) => (
              <details key={item.q} className="group px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-xl shadow-blue-900/20 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">Un projet en tête ?</h2>
              <p className="mt-1 text-sm text-blue-100">
                Décrivez-nous votre besoin, nous revenons vers vous rapidement.
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
              href="/contact"
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