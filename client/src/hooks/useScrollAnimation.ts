/**
 * useScrollAnimation
 *
 * Lightweight Intersection Observer hook for scroll-triggered animations.
 * Returns a ref to attach to any element, and a boolean `isVisible`.
 *
 * Usage:
 *   const { ref, isVisible } = useScrollAnimation();
 *   <div ref={ref} className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
 */
import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  /** Once visible, stay visible (default: true) */
  once?: boolean;
}

export function useScrollAnimation({
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * useCountUp
 *
 * Animates a number from 0 to `target` over `duration` ms.
 * Starts when `start` is true.
 */
export function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}
