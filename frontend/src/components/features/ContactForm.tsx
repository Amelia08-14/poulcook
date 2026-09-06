"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/data/content";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink-dim/50 transition-colors focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20";
const labelClasses = "text-sm font-medium text-ink-dim";

/**
 * Le backend (Node/Express/Prisma) n'existe pas encore : le message part par
 * mailto vers contact@poulcook.com. À remplacer par un vrai appel API une fois le
 * backend en place (cf. PRODUCT.md).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `Nom : ${form.get("name")}`,
      `Email : ${form.get("email")}`,
      `Numéro : ${form.get("phone")}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      String(form.get("subject") ?? "Contact Poulcook")
    )}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="name">
          Nom *
        </label>
        <input id="name" name="name" required className={inputClasses} autoComplete="name" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="email">
          Email *
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} autoComplete="email" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="phone">
          Numéro *
        </label>
        <input id="phone" name="phone" type="tel" required className={inputClasses} autoComplete="tel" />
      </div>
      <div className="flex flex-col gap-2">
        <label className={labelClasses} htmlFor="subject">
          Sujet *
        </label>
        <input id="subject" name="subject" required className={inputClasses} />
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
            Votre client mail s&apos;est ouvert avec votre message pré-rempli.
          </p>
        )}
      </div>
    </form>
  );
}
