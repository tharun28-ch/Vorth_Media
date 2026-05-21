import React, { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MobileStickyCardStackProps = {
  cards: ReactNode[];
  /** Optional title for the section */
  title?: ReactNode;
  /** Optional description for the section */
  description?: ReactNode;
  className?: string;
  /** Top position for the sticky elements, in px */
  stickyTopPx?: number;
  /** Vertical offset between stacked cards, in px */
  stackOffsetPx?: number;
  /** Scroll distance required to 'stack' each card */
  scrollBufferVh?: number;
};

let activeSnapSections = 0;

export function MobileStickyCardStack({
  cards,
  title,
  description,
  className,
  stickyTopPx = 70,
  stackOffsetPx = 8,
  scrollBufferVh = 45, // Lowered to 45 to make swiping easier (1 normal swipe = 1 card)
}: MobileStickyCardStackProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const sentinelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    const sentinel = sentinelRef.current;
    if (!el || !sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === el) {
          if (entry.isIntersecting) {
            activeSnapSections++;
          } else {
            activeSnapSections = Math.max(0, activeSnapSections - 1);
          }
        } else if (entry.target === sentinel) {
          // When sentinel is not intersecting, we're past the section
          if (!entry.isIntersecting) {
            activeSnapSections = 0;
          }
        }
        // Apply snap type based on active counters
        document.documentElement.style.scrollSnapType =
          activeSnapSections > 0 ? "y mandatory" : "";
      });
    }, { rootMargin: "-40% 0px -40% 0px" });

    observer.observe(el);
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      activeSnapSections = Math.max(0, activeSnapSections - 1);
      if (activeSnapSections === 0) {
        document.documentElement.style.scrollSnapType = "";
      }
    };
  }, []);

  if (cards.length === 0) return null;

  // Calculate total height: each card adds a significant scrollable distance.
  const totalScrollHeight = `${(cards.length - 1) * scrollBufferVh + 100}vh`;

  return (
    <div className={cn("md:hidden", className)} ref={containerRef}>
      <div className="relative w-full" style={{ minHeight: totalScrollHeight }}>
        {/* Sticky Header Section - Now stays at the top, below the site header */}
        <div 
          className="sticky z-[100] mb-10 px-4 text-center pb-6 pt-4 bg-black/90 backdrop-blur-md"
          style={{ top: "80px" }}
        >
          {title && <div className="mb-2">{title}</div>}
          {description && <div className="text-[13px] leading-relaxed text-white/70">{description}</div>}
        </div>

        <div className="relative">
          {cards.map((node, i) => (
            <Fragment key={i}>
              {/* The sticky card - Acts as the only snap point */}
              <div
                className="sticky w-full px-5 snap-start"
                style={{
                  // Adjusted top: 80px (site header) + ~180px (stack header) + stack offset
                  top: `${stickyTopPx + 180 + i * stackOffsetPx}px`,
                  zIndex: 10 + i * 10,
                  scrollMarginTop: `${stickyTopPx + 180 + i * stackOffsetPx}px`,
                  scrollSnapStop: "always", // Forces browser to stop at this card even on a hard swipe
                }}
              >
                <div className="overflow-hidden min-h-[420px] flex flex-col rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                  <div className="flex-1 flex flex-col">
                    {node}
                  </div>
                </div>
              </div>
              
              {/* Spacer to create scroll length for the NEXT card to slide up */}
              {i < cards.length - 1 && (
                <div 
                  className="w-full shrink-0" 
                  style={{ height: `${scrollBufferVh}vh` }} 
                  aria-hidden 
                />
              )}
            </Fragment>
          ))}
        </div>
        
        {/* Final buffer - reduced to keep it tight */}
        <div style={{ height: "4vh" }} />
      </div>
    </div>
  );
}
