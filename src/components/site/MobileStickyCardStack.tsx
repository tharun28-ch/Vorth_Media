import { useRef, useState, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MobileStickyCardStackProps = {
  cards: ReactNode[];
  /** Optional title for the section */
  title?: ReactNode;
  /** Optional description for the section */
  description?: ReactNode;
  className?: string;
};

export function MobileStickyCardStack({
  cards,
  title,
  description,
  className,
}: MobileStickyCardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // scrolled = how many px we've scrolled INTO the container from the top
      const scrolled = -rect.top;

      if (scrolled < 0) {
        setActiveIndex(0);
        return;
      }

      // Each card occupies exactly viewportH px of scroll space → 1 swipe = 1 card
      const idx = Math.min(
        Math.floor(scrolled / viewportH),
        cards.length - 1
      );
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount in case already scrolled
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  if (cards.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={cn("md:hidden", className)}
      // Total scroll distance = cards.length full viewports
      style={{ height: `${cards.length * 100}vh` }}
    >
      {/* Sticky window — stays 100vh tall while the outer container scrolls */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* ── Section header ── */}
        {(title || description) && (
          <div
            className="shrink-0 z-10 px-4 pt-4 pb-3 text-center bg-black/90 backdrop-blur-md border-b border-white/5"
            style={{ marginTop: "80px" }} // below site header
          >
            {title && <div className="mb-1">{title}</div>}
            {description && (
              <div className="text-[13px] leading-relaxed text-white/70">{description}</div>
            )}
          </div>
        )}

        {/* ── Card stage ── */}
        <div className="relative flex-1 px-5 py-4">
          {cards.map((card, i) => {
            const isCurrent = i === activeIndex;
            const isPast = i < activeIndex;

            return (
              <div
                key={i}
                aria-hidden={!isCurrent}
                className="absolute inset-x-5 top-4 bottom-4 overflow-hidden rounded-2xl
                           shadow-[0_25px_70px_rgba(0,0,0,0.9)]
                           transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: isCurrent ? 1 : 0,
                  transform: isCurrent
                    ? "translateY(0) scale(1)"
                    : isPast
                    ? "translateY(-28px) scale(0.97)"
                    : "translateY(48px) scale(0.97)",
                  pointerEvents: isCurrent ? "auto" : "none",
                  zIndex: isCurrent ? 10 : 0,
                }}
              >
                {/* inner scroll in case card content is tall */}
                <div className="h-full overflow-y-auto">{card}</div>
              </div>
            );
          })}
        </div>

        {/* ── Progress dots + counter ── */}
        <div className="shrink-0 flex flex-col items-center gap-2 pb-5">
          <div className="flex gap-2">
            {cards.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === activeIndex ? "w-5 bg-brand" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            {activeIndex + 1} / {cards.length}
          </p>
        </div>
      </div>
    </div>
  );
}
