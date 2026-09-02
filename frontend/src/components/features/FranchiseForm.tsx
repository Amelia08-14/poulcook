"use client";

import { useState, type FormEvent } from "react";
import { HOW_HEARD_OPTIONS, SITE } from "@/data/content";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink-dim/50 transition-colors focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";
const labelClasses = "text-sm font-medium text-ink-dim";

/**
 * Le backend (Node/Express/Prisma) n'existe pas encore : la candidature part par
 * mailto vers contact@poulcook.com. À remplacer par un vrai appel API une fois le
 * backend en place (cf. PRODUCT.md).
 */
export default function FranchiseForm() {
  const [hasLocal, setHasLocal] = useState<"oui" | "non" | "">("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `Nom & Prénom : ${form.get("prenom")} ${form.get("nom")}`,
      `Email : ${form.get("email")}`,
      `Téléphone : ${form.get("telephone")}`,
      `Local déjà disponible : ${hasLocal}${hasLocal === "oui" ? ` (${form.get("surface")} m²)` : ""}`,
      `Ville d'implantation : ${form.get("ville")}`,
      `Budget : ${form.get("budget")}`,
      `Comment avez-vous entendu parler de nous : ${form.get("source")}`,
      "",
      `Message :`,
      String(form.get("message") ?? ""),
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Candidature franchise Poulcook"
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="prenom">
          Prénom *
        </label>
        <input id="prenom" name="prenom" required className={inputClasses} autoComplete="given-name" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="nom">
          Nom *
        </label>
        <input id="nom" name="nom" required className={inputClasses} autoComplete="family-name" />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="email">
          E-mail *
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} autoComplete="email" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="telephone">
          Téléphone *
        </label>
        <input id="telephone" name="telephone" type="tel" required className={inputClasses} autoComplete="tel" />
      </div>

      <fieldset className="flex flex-col gap-2 sm:col-span-2">
        <legend className={labelClasses}>Avez-vous déjà un local ? *</legend>
        <div className="flex gap-6">
          {(["oui", "non"] as const).map((option) => (
            <label key={option} className="flex items-center gap-2 text-ink">
              <input
                type="radio"
                name="local"
                value={option}
                required
                checked={hasLocal === option}
                onChange={() => setHasLocal(option)}
                className="accent-coral"
              />
              {option === "oui" ? "Oui" : "Non"}
            </label>
          ))}
        </div>
      </fieldset>

      {hasLocal === "oui" && (
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelClasses} htmlFor="surface">
            Combien de m² ?
          </label>
          <input id="surface" name="surface" type="number" min={0} className={inputClasses} />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="ville">
          Ville d&apos;implantation *
        </label>
        <input id="ville" name="ville" required className={inputClasses} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="budget">
          Budget *
        </label>
        <input id="budget" name="budget" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className={labelClasses} htmlFor="source">
          Comment avez-vous entendu parler de nous ?
        </label>
        <select id="source" name="source" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Choisissez une option
          </option>
          {HOW_HEARD_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className={labelClasses} htmlFor="message">
          Message *
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-coral px-8 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-coral-strong"
        >
          Envoyer
        </button>
        {sent && (
          <p className="mt-3 text-sm font-medium text-teal">
            Votre client mail s&apos;est ouvert avec votre candidature pré-remplie.
          </p>
        )}
      </div>
    </form>
  );
}
