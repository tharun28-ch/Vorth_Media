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

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let wasSnapping = false;
    const cardCount = cards.length;

    // Use scroll position to precisely detect when we're within the card zone.
    // This cleanly disengages snap the moment we pass the last card.
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // How far we've scrolled into this container (positive = top has scrolled above viewport)
      const scrolledInto = -rect.top;

      // Total scroll travel to reach the last card's sticky position
      const totalCardTravel = (cardCount - 1) * (vh * scrollBufferVh / 100);

      // Snap is active only while we're between the section header and the last card
      const shouldSnap =
        scrolledInto > vh * 0.1 &&      // Past the section header
        scrolledInto < totalCardTravel;  // Haven't passed the last card

      if (shouldSnap && !wasSnapping) {
        wasSnapping = true;
        activeSnapSections++;
        document.documentElement.style.scrollSnapType = "y mandatory";
      } else if (!shouldSnap && wasSnapping) {
        wasSnapping = false;
        activeSnapSections = Math.max(0, activeSnapSections - 1);
        if (activeSnapSections === 0) {
          document.documentElement.style.scrollSnapType = "";
        }
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      if (wasSnapping) {
        activeSnapSections = Math.max(0, activeSnapSections - 1);
        if (activeSnapSections === 0) {
          document.documentElement.style.scrollSnapType = "";
        }
      }
    };
  }, [cards.length, scrollBufferVh]);

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
