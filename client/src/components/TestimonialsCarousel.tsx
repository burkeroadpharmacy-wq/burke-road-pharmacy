import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import ScrollReveal from "@/components/ScrollReveal";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

/**
 * Auto-rotating testimonials carousel with dot navigation.
 * Shows 1 card on mobile, 2 on md, 3 on lg+.
 */
export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  // Visible indices: active, active+1, active+2 (wrapping)
  const visible = [0, 1, 2].map((offset) => (active + offset) % total);

  return (
    <div>
      {/* Header */}
      <ScrollReveal className="text-center mb-12">
        <div className="brp-badge mx-auto mb-4">Patient Reviews</div>
        <h2 className="brp-section-heading text-4xl mb-4">What our patients say</h2>
        <div className="flex items-center justify-center gap-2" style={{ color: "var(--brp-muted)" }}>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-semibold" style={{ color: "var(--brp-text)" }}>4.9 / 5</span>
          <span>on Google Reviews</span>
        </div>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visible.map((idx, pos) => {
          const t = testimonials[idx];
          return (
            <ScrollReveal key={`${idx}-${pos}`} delay={pos * 80}>
              <div
                className="brp-card p-6 h-full transition-all duration-500"
                style={{ opacity: pos === 0 ? 1 : 0.85 }}
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic flex-1" style={{ color: "#374151" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
                    style={{ backgroundColor: "var(--brp-green-800)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--brp-text)" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--brp-muted)" }}>{t.role}</div>
                    <div className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "var(--brp-muted)" }}>
                      <img src={`${CDN}/logo-final-square_18df8581.png`} alt="" className="h-3 w-3 rounded-sm" />
                      Google Review
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:bg-white"
          style={{ borderColor: "var(--brp-green-200)", color: "var(--brp-green-700)" }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: i === active ? "var(--brp-green-700)" : "var(--brp-green-200)",
                transform: i === active ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:bg-white"
          style={{ borderColor: "var(--brp-green-200)", color: "var(--brp-green-700)" }}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
