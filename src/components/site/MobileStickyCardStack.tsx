import { Fragment, type CSSProperties, type ReactNode } from "react";
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

export function MobileStickyCardStack({
  cards,
  title,
  description,
  className,
  stickyTopPx = 70,
  stackOffsetPx = 8,
  scrollBufferVh = 80,
}: MobileStickyCardStackProps) {
  if (cards.length === 0) return null;

  // Calculate total height: each card adds a significant scrollable distance.
  const totalScrollHeight = `${(cards.length - 1) * scrollBufferVh + 100}vh`;

  return (
    <div className={cn("md:hidden", className)}>
      <div className="relative w-full" style={{ minHeight: totalScrollHeight }}>
        {/* Sticky Header Section - Now stays at the top, below the site header */}
        <div 
          className="sticky z-50 mb-10 px-4 text-center pb-6 pt-4 bg-black/90 backdrop-blur-md"
          style={{ top: "80px" }}
        >
          {title && <div className="mb-2">{title}</div>}
          {description && <div className="text-[13px] leading-relaxed text-white/70">{description}</div>}
        </div>

        <div className="relative">
          {cards.map((node, i) => (
            <Fragment key={i}>
              {/* The sticky card */}
              <div
                className="sticky w-full px-5"
                style={{
                  // Adjusted top: 80px (site header) + ~90px (stack header) + stack offset
                  top: `${stickyTopPx + 110 + i * stackOffsetPx}px`,
                  zIndex: 10 + i * 10,
                }}
              >
                <div className="rounded-[2.5rem] border border-white/10 bg-surface/98 shadow-[0_25px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl ring-1 ring-white/5 overflow-hidden">
                  {node}
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
