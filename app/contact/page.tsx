"use client";

import { useState } from "react";
import Header from "@/composants/header";
import ScrollReveal from "@/composants/ScrollReveal";

// Coordonnées de Fluno
const coordonnees = [
  { label: "Email", valeur: "fluno4cg@.com" },
  { label: "Téléphone", valeur: "+242 05 690 21 78" },
  { label: "Localisation", valeur: "Brazzaville, Republique du Congo" },
  { label: "Horaires", valeur: "Lun - Ven, 8h - 17h" },
];

const typesProjet = [
  "Site ou application web",
  "Application mobile",
  "Solution sur mesure",
  "Maintenance",
  "Autre",
];

const budgets = [
  "À définir ensemble",
  "Moins de 500 000 FCFA",
  "500 000 - 2 000 000 FCFA",
  "Plus de 2 000 000 FCFA",
];

const delais = [
  "Pas de date précise",
  "Moins d'un mois",
  "1 à 3 mois",
  "Plus de 3 mois",
];

const etapes = [
  {
    titre: "Nous lisons votre demande",
    texte: "Un membre de l'équipe étudie votre message et prépare ses questions.",
  },
  {
    titre: "Nous échangeons",
    texte: "Un appel ou une visio pour comprendre vos objectifs, vos utilisateurs et vos contraintes.",
  },
  {
    titre: "Vous recevez une proposition",
    texte: "Périmètre, planning et budget détaillés, que vous pouvez ajuster avant de vous engager.",
  },
];

const questions = [
  {
    q: "Que dois-je préciser dans mon message ?",
    r: "Le problème que vous voulez résoudre, les personnes qui utiliseront l'outil et, si vous en avez, une idée du délai et du budget. Même quelques lignes suffisent pour démarrer.",
  },
  {
    q: "Dois-je avoir un cahier des charges ?",
    r: "Non. Beaucoup de projets démarrent d'une simple idée. Nous vous aidons à la préciser et à la transformer en fonctionnalités concrètes.",
  },
  {
    q: "Comment se passe le suivi d'un projet ?",
    r: "Le développement avance par étapes, avec des points réguliers pour valider ce qui est fait avant de passer à la suite. Vous gardez un interlocuteur unique du début à la fin.",
  },
  {
    q: "Pouvez-vous reprendre un projet existant ?",
    r: "Oui. Nous commençons par auditer l'existant, puis nous vous disons honnêtement s'il vaut mieux le faire évoluer ou le reconstruire.",
  },
  {
    q: "Et après la mise en ligne ?",
    r: "Nous proposons un suivi pour les corrections, les mises à jour de sécurité et les nouvelles fonctionnalités, selon vos besoins.",
  },
];

const champ =
  "mt-1.5 w-full rounded-xl border border-blue-100 bg-white/80 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/15";

export default function Contact() {
  const [etat, setEtat] = useState<"repos" | "envoi" | "ok" | "erreur">("repos");

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formulaire = e.currentTarget;
    const donnees = Object.fromEntries(new FormData(formulaire));

    setEtat("envoi");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees),
      });

      if (!res.ok) throw new Error();

      formulaire.reset();
      setEtat("ok");
    } catch {
      setEtat("erreur");
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/60 text-gray-900">
      {/* Halos bleus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-24 top-60 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="relative">
        <Header />

        <main className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          {/* Texte et coordonnées */}
          <section className="flex flex-col items-start">
            <ScrollReveal direction="left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Contact
              </p>

              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Parlons de{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                  votre projet.
                </span>
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
                Décrivez-nous votre besoin en quelques lignes. Plus vous nous donnez de contexte,
                plus notre première réponse sera précise.
              </p>
            </ScrollReveal>

            <dl className="mt-8 w-full max-w-md divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur">
              {coordonnees.map((c, index) => (
                <ScrollReveal key={c.label} delay={index * 0.08}>
                  <div className="flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-300 hover:bg-blue-50">
                    <dt className="text-sm text-gray-500">{c.label}</dt>
                    <dd className="break-words text-right text-sm font-medium text-gray-900">
                      {c.valeur}
                    </dd>
                  </div>
                </ScrollReveal>
              ))}
            </dl>

            <ScrollReveal delay={0.15}>
              <div className="mt-6 w-full max-w-md rounded-2xl border border-blue-100 bg-white/70 p-5 backdrop-blur transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
                <h2 className="text-sm font-semibold text-blue-700">
                  Premier échange gratuit
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  Le premier échange pour cadrer votre besoin est sans engagement. Vous repartez avec
                  une vision claire, que vous travailliez avec nous ou non.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Formulaire */}
          <ScrollReveal direction="right" delay={0.1}>
            <section className="relative self-start">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-blue-500/30 to-blue-200/30 blur-2xl"
              />

              <div className="relative rounded-3xl border border-white/70 bg-white/60 p-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl">
                <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                </div>

                <form onSubmit={envoyer} className="rounded-2xl bg-white/80 p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-medium text-gray-800">
                      Nom
                      <input
                        name="nom"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Votre nom"
                        className={champ}
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-800">
                      Entreprise{" "}
                      <span className="font-normal text-gray-400">(facultatif)</span>
                      <input
                        name="entreprise"
                        type="text"
                        autoComplete="organization"
                        placeholder="Votre société"
                        className={champ}
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-800">
                      Email
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="vous@exemple.com"
                        className={champ}
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-800">
                      Téléphone{" "}
                      <span className="font-normal text-gray-400">(facultatif)</span>
                      <input
                        name="telephone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+000 00 000 0000"
                        className={champ}
                      />
                    </label>
                  </div>

                  <label className="mt-5 block text-sm font-medium text-gray-800">
                    Type de projet
                    <select name="projet" defaultValue={typesProjet[0]} className={champ}>
                      {typesProjet.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-medium text-gray-800">
                      Budget envisagé
                      <select name="budget" defaultValue={budgets[0]} className={champ}>
                        {budgets.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </label>

                    <label className="text-sm font-medium text-gray-800">
                      Délai souhaité
                      <select name="delai" defaultValue={delais[0]} className={champ}>
                        {delais.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="mt-5 block text-sm font-medium text-gray-800">
                    Votre projet
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Quel problème voulez-vous résoudre ? Qui utilisera l'outil ? Avez-vous des exemples qui vous plaisent ?"
                      className={`${champ} resize-y`}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={etat === "envoi"}
                    className="mt-6 w-full rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-800 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    {etat === "envoi" ? "Envoi en cours…" : "Envoyer le message"}
                  </button>

                  <p role="status" aria-live="polite" className="mt-4 min-h-5 text-sm">
                    {etat === "ok" && (
                      <span className="text-blue-700">
                        Merci, votre message a bien été envoyé.
                      </span>
                    )}

                    {etat === "erreur" && (
                      <span className="text-gray-700">
                        L'envoi a échoué. Réessayez ou écrivez-nous directement par email.
                      </span>
                    )}
                  </p>
                </form>
              </div>
            </section>
          </ScrollReveal>
        </main>

        {/* Étapes après l'envoi */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight">
              Ce qui se passe après votre message
            </h2>
          </ScrollReveal>

          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {etapes.map((e, i) => (
              <ScrollReveal key={e.titre} delay={i * 0.12}>
                <li className="h-full rounded-2xl border border-blue-100 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-sm font-semibold text-white">
                    {i + 1}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{e.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{e.texte}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight">Questions fréquentes</h2>
          </ScrollReveal>

          <div className="mt-6 divide-y divide-blue-100 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur">
            {questions.map((item, index) => (
              <ScrollReveal key={item.q} delay={index * 0.07}>
                <details className="group px-6 py-4 transition-colors duration-300 open:bg-blue-50/70">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                    {item.q}

                    <svg
                      className="h-4 w-4 shrink-0 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
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
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-blue-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Fluno
            </p>

            <a
              href="/"
              className="rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:from-blue-600 hover:to-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Accueil
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}