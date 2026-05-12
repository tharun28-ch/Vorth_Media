import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { value: 10, suffix: "L+", label: "Leads Generated" },
  { value: 10, suffix: "M+", label: "Generated Views" },
  { value: 30, suffix: "L+", label: "Ad Spent" },
  { value: 4, suffix: "x", label: "Avg ROAS" },
];

function CountUp({
  to,
  suffix,
  duration = 2000,
}: {
  to: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold text-brand sm:text-4xl md:text-5xl tabular-nums">
      {count}
      {suffix}
    </div>
  );
}

export function Credibility() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container-x text-center">
        <h2 className="text-4xl font-bold md:text-5xl">By The Numbers</h2>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {METRICS.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="border-l-2 border-brand bg-surface/30 p-5 text-left sm:p-8"
            >
              <CountUp to={m.value} suffix={m.suffix} duration={800} />
              <div className="mt-2 text-xs text-white/80 sm:mt-3 sm:text-sm md:text-base">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
