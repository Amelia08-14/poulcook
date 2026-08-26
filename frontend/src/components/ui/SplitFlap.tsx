"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

const DEFAULT_CHARSET =
  " ABCDEFGHIJKLMNOPQRSTUVWXYZÀÂÉÈÊËÎÏÔÙÛÇ0123456789°€!?'.,-";

type SplitFlapProps = {
  value: string;
  as?: "span" | "div" | "h1" | "h2";
  className?: string;
  cellClassName?: string;
  /** Délai (ms) avant que la première cellule ne commence à tourner. */
  startDelay?: number;
  /** Décalage (ms) entre le démarrage de chaque cellule, gauche vers droite. */
  stagger?: number;
  /** Nombre de caractères aléatoires affichés avant que la cellule ne se pose sur la valeur finale. */
  spins?: number;
};

/**
 * Rejoue le "clic" mécanique d'un panneau à volets (split-flap) de quai de gare :
 * chaque caractère tourne sur des valeurs aléatoires puis se pose sur le caractère
 * final, décalé de gauche à droite. C'est l'interaction signature du site.
 *
 * Les cellules sont regroupées par mot (groupe non coupable) séparées par la
 * cellule "espace" elle-même, pour que le retour à la ligne ne coupe jamais un
 * mot en deux — seulement au niveau d'un espace, comme sur un vrai panneau.
 */
export default function SplitFlap({
  value,
  as: Tag = "span",
  className = "",
  cellClassName = "",
  startDelay = 0,
  stagger = 45,
  spins = 10,
}: SplitFlapProps) {
  const characters = value.split("");
  const [display, setDisplay] = useState<string[]>(() => characters.map(() => " "));
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (reduceMotion) {
      return;
    }

    characters.forEach((finalChar, index) => {
      let tick = 0;
      const cellStart = startDelay + index * stagger;

      const runTick = () => {
        setDisplay((prev) => {
          const next = [...prev];
          next[index] =
            tick < spins
              ? DEFAULT_CHARSET[Math.floor(Math.random() * DEFAULT_CHARSET.length)]
              : finalChar;
          return next;
        });

        tick += 1;
        if (tick <= spins) {
          const t = setTimeout(runTick, 40 + tick * 4);
          timers.current.push(t);
        }
      };

      const t = setTimeout(runTick, cellStart);
      timers.current.push(t);
    });

    return () => {
      timers.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduceMotion]);

  const shown = reduceMotion ? characters : display;

  const renderCell = (index: number) => (
    <span
      key={index}
      aria-hidden="true"
      className={`relative inline-block bg-board-raised text-center tabular-nums before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-board ${cellClassName}`}
    >
      {shown[index] === " " ? " " : shown[index]}
    </span>
  );

  const words = value.split(" ");
  let cursor = 0;
  const nodes: ReactNode[] = [];
  words.forEach((word, wordIndex) => {
    const wordCells = word.split("").map(() => renderCell(cursor++));
    nodes.push(
      <span key={`word-${wordIndex}`} className="inline-flex flex-none">
        {wordCells}
      </span>
    );
    if (wordIndex < words.length - 1) {
      nodes.push(renderCell(cursor++));
    }
  });

  return (
    <Tag className={`inline-flex flex-wrap ${className}`} aria-label={value}>
      {nodes}
    </Tag>
  );
}
