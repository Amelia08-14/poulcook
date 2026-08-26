"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/data/content";
import LineDot from "@/components/ui/LineDot";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-board-line bg-board/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Poulcook — accueil">
          <Image
            src="/images/poulcook-logo-horizontal.png"
            alt="Poulcook"
            width={168}
            height={71}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Plan de ligne — desktop */}
        <nav aria-label="Navigation principale" className="hidden flex-1 items-center justify-center lg:flex">
          <ol className="flex items-center">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href} className="flex items-center">
                {index > 0 && <span className="h-px w-10 bg-board-line" aria-hidden="true" />}
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 px-3 py-2 font-display font-expanded text-sm uppercase tracking-[0.14em] text-cream-dim transition-colors hover:text-cream"
                >
                  <LineDot line={link.line} className="transition-transform group-hover:scale-125" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-coral px-4 py-2 font-display font-expanded text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-coral-strong"
          >
            Commander
          </a>
          <a
            href={SITE.appStoreUrl}
            className="px-2 py-2 text-xs uppercase tracking-[0.1em] text-cream-dim transition-colors hover:text-cream"
          >
            L&apos;app →
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
        >
          <span className="sr-only">Basculer le menu</span>
          <span className={`h-0.5 w-6 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="border-t border-board-line px-4 pb-6 lg:hidden">
          <ol className="flex flex-col divide-y divide-board-line">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-4 font-display font-expanded uppercase tracking-[0.14em] text-cream"
                >
                  <LineDot line={link.line} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-coral px-4 py-3 text-center font-display font-expanded uppercase tracking-[0.14em] text-cream"
            >
              Commander
            </a>
            <a
              href={SITE.appStoreUrl}
              className="text-center text-xs uppercase tracking-[0.1em] text-cream-dim"
            >
              Télécharger l&apos;app →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
