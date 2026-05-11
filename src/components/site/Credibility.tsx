import { motion } from "framer-motion";

const METRICS = [
  { n: "1000+", l: "Leads Generated" },
  { n: "10M+", l: "Generated Views" },
  { n: "10L+", l: "Ad Spent" },
  { n: "4x", l: "Avg ROAS" },
];

export function Credibility() {
  return (
    <section className="bg-black py-24">
      <div className="container-x text-center">
        <h2 className="text-4xl font-bold md:text-5xl">By The Numbers</h2>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {METRICS.map((m, idx) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="border-l-2 border-brand bg-surface/30 p-5 text-left sm:p-8"
            >
              <div className="text-3xl font-bold text-brand sm:text-4xl md:text-5xl">{m.n}</div>
              <div className="mt-2 text-xs text-white/80 sm:mt-3 sm:text-sm md:text-base">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
