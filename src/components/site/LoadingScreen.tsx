import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SIZE = 96;
const R = 42;
const C = 2 * Math.PI * R;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setVisible(false), 120);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const offset = C * (1 - progress);
  const cx = SIZE / 2;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-full bg-black/60 backdrop-blur-md glow-brand"
            style={{ width: SIZE, height: SIZE }}
          >
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE} height={SIZE} className="block">
              <circle
                cx={cx}
                cy={cx}
                r={R}
                stroke="rgba(255,255,255,0.08)"
                fill="none"
                strokeWidth="3"
              />
              <circle
                cx={cx}
                cy={cx}
                r={R}
                stroke="var(--brand)"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={offset}
                style={{
                  transition: "stroke-dashoffset 0.1s linear",
                  transform: "rotate(-90deg)",
                  transformOrigin: `${cx}px ${cx}px`,
                }}
              />
              <circle cx={cx} cy={cx} r="9" fill="var(--brand)" className="pulse-dot" />
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xs uppercase tracking-[0.5em] text-white/60"
          >
            Vorth Media
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
