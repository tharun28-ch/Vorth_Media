import { Fragment, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MobileStickyCardStackProps = {
  cards: ReactNode[];
  /** Renders above the first card inside the sticky frame (e.g. section title) */
  pinnedHeader?: ReactNode;
  className?: string;
  /** Root `top` for the first (framed) sticky card, in rem */
  stickyTopRem?: number;
  /** Extra `top` below `--stack-top` for every card after the first (same offset; z-index orders the stack) */
  layerInsetPx?: number;
  /** Empty scroll height before each card after the first (smaller = less gap, snappier stack) */
  segmentVh?: number;
  frameClassName?: string;
};

export function MobileStickyCardStack({
  cards,
  pinnedHeader,
  className,
  stickyTopRem = 6,
  layerInsetPx = 12,
  segmentVh = 32,
  frameClassName,
}: MobileStickyCardStackProps) {
  if (cards.length === 0) return null;

  const [first, ...rest] = cards;
  /** Spacers + stacked stickies share this root so sticky isn’t clipped by a short per-card wrapper. */
  const rootStyle: CSSProperties = {
    ["--stack-top" as string]: `${stickyTopRem}rem`,
    ...(rest.length > 0
      ? { minHeight: `max(100vh, ${rest.length * segmentVh + 18}vh)` }
      : undefined),
  };

  return (
    <div className={cn("md:hidden", className)}>
      <div className="relative w-full" style={rootStyle}>
        <div className="sticky z-10 w-full" style={{ top: "var(--stack-top)" }}>
          <div
            className={cn(
              "rounded-3xl border border-white/20 bg-black/50 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.7)] ring-1 ring-white/10 backdrop-blur-sm",
              pinnedHeader && "flex flex-col gap-6",
              frameClassName,
            )}
          >
            {pinnedHeader}
            {first}
          </div>
        </div>

        {rest.map((node, i) => (
          <Fragment key={i}>
            <div className="w-full shrink-0" style={{ minHeight: `${segmentVh}vh` }} aria-hidden />
            <div
              className="sticky w-full"
              style={{
                top: `calc(var(--stack-top) + ${layerInsetPx}px)`,
                zIndex: 20 + i * 10,
              }}
            >
              <div className="rounded-2xl shadow-2xl ring-1 ring-black/30">{node}</div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
