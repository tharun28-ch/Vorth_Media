import React, { type ReactNode } from "react";
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
  if (cards.length === 0) return null;

  return (
    <div className={cn("md:hidden", className)}>
      {title && <div className="mb-2 px-4 text-center">{title}</div>}
      {description && (
        <div className="mb-8 px-4 text-center text-[13px] leading-relaxed text-white/70">
          {description}
        </div>
      )}
      <div className="flex flex-col gap-5 px-5">
        {cards.map((node, i) => (
          <div key={i}>{node}</div>
        ))}
      </div>
    </div>
  );
}
