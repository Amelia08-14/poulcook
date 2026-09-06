"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "span" | "h1" | "h2" | "h3" | "p" | "li" | "figure";
type Direction = "up" | "down" | "left" | "right" | "zoom";

/**
 * Entrée au défilement — un même mécanisme (IntersectionObserver + easing à
 * léger rebond), décliné en 5 directions pour que les blocs arrivent de
 * côtés différents plutôt que le même fondu répété partout.
 */
export default function Reveal({
  children,
  as: TagName = "div",
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  direction?: Direction;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = TagName as unknown as "div";

  return (
    <Component
      ref={ref as never}
      className={`reveal reveal-${direction} ${visible ? "reveal-visible" : ""} ${className}`}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
