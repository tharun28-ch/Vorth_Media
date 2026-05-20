import { Fragment, type ReactNode } from "react";
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
  /**
   * Scroll distance required to reveal each card.
   * 130vh means you must scroll 1.3× the screen height — even with
   * momentum a single swipe won't accidentally jump two cards.
   */
  scrollBufferVh?: number;
};

export function MobileStickyCardStack({
  cards,
  title,
  description,
  className,
  stickyTopPx = 70,
  stackOffsetPx = 8,
  scrollBufferVh = 130,
}: MobileStickyCardStackProps) {
  if (cards.length === 0) return null;

  // Total scrollable height: (N-1) buffers + final card breathing room
  const totalScrollHeight = `${(cards.length - 1) * scrollBufferVh + 100}vh`;

  return (
    <div
      className={cn("md:hidden", className)}
      // Contain scroll momentum inside the section so one swipe = one card
      style={{ overscrollBehavior: "contain", touchAction: "pan-y" }}
    >
      <div className="relative w-full" style={{ minHeight: totalScrollHeight }}>
        {/* Sticky section heading — sits below the site header */}
        <div
          className="sticky z-[100] mb-10 px-4 text-center pb-6 pt-4 bg-black/90 backdrop-blur-md"
          style={{ top: "80px" }}
        >
          {title && <div className="mb-2">{title}</div>}
          {description && (
            <div className="text-[13px] leading-relaxed text-white/70">{description}</div>
          )}
        </div>

        <div className="relative">
          {cards.map((node, i) => (
            <Fragment key={i}>
              {/* Sticky card */}
              <div
                className="sticky w-full px-5"
                style={{
                  top: `${stickyTopPx + 180 + i * stackOffsetPx}px`,
                  zIndex: 10 + i * 10,
                }}
              >
                <div className="overflow-hidden min-h-[420px] flex flex-col rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                  <div className="flex-1 flex flex-col">{node}</div>
                </div>
              </div>

              {/* Scroll spacer — 130 vh guarantees one full swipe per card */}
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

        {/* Final breathing room */}
        <div style={{ height: "4vh" }} />
      </div>
    </div>
  );
}
