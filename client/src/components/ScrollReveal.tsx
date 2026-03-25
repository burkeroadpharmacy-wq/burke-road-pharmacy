/**
 * ScrollReveal
 *
 * Wraps children in a container that fades/slides in when scrolled into view.
 * Uses IntersectionObserver — no external dependencies.
 *
 * Usage:
 *   <ScrollReveal>
 *     <SomeSection />
 *   </ScrollReveal>
 *
 *   <ScrollReveal direction="left" delay={200}>
 *     <Card />
 *   </ScrollReveal>
 */
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animClass =
    direction === "left"
      ? "scroll-fade-left"
      : direction === "right"
      ? "scroll-fade-right"
      : "scroll-fade";

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`${animClass} ${className}`}>
      {children}
    </Tag>
  );
}
