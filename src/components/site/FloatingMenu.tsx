import { useEffect, useState } from "react";

const SIZE = 64;
const R = 28;
const C = 2 * Math.PI * R;

export function FloatingMenu({ onClick }: { onClick: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offset = C * (1 - progress);
  const cx = SIZE / 2;

  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="group fixed top-4 right-4 z-[60] transition-transform duration-300 hover:scale-110 hover:glow-brand rounded-full bg-black/60 backdrop-blur-md"
      style={{ width: SIZE, height: SIZE }}
    >
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE} height={SIZE} className="block">
        <circle
          cx={cx}
          cy={cx}
          r={R}
          stroke="var(--brand)"
          fill="none"
          strokeWidth="2.5"
          strokeDasharray={C}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.2s ease-out",
            transform: "rotate(-90deg)",
            transformOrigin: `${cx}px ${cx}px`,
          }}
        />
        <circle
          cx={cx}
          cy={cx}
          r="20"
          stroke="var(--brand)"
          fill="none"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <circle cx={cx} cy={cx} r="6" fill="var(--brand)" className="pulse-dot" />
      </svg>
    </button>
  );
}
