import { motion } from "framer-motion";

const STEPS = ["Knowledge", "Story", "Brand", "Revenue"];

export function USP() {
  return (
    <section className="bg-black py-28">
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.25] md:text-5xl">
          We turn your knowledge into <span className="text-brand">story</span>. <br />
          Story into brand. Brand into <span className="text-brand">revenue</span>.
        </h2>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-3">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="min-w-[180px] rounded-md border border-white/15 bg-surface px-6 py-4 text-center text-lg font-bold tracking-wide"
              >
                {s}
              </motion.div>
              {i < STEPS.length - 1 && (
                <span className="rotate-90 text-2xl font-bold text-brand md:rotate-0">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
