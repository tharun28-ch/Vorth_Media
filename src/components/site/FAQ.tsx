import { motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "How fast can we start?",
    a: "Most engagements kick off within 7 days of your discovery call We move fast without skipping strategy",
  },
  {
    q: "Do you work with early-stage brands?",
    a: "Yes We have packages tailored for founders building from zero plus enterprise retainers for scale ups",
  },
  {
    q: "What's included in a retainer?",
    a: "Strategy content production (reels ads photography) performance media and monthly reporting fully managed",
  },
  {
    q: "Where are you based?",
    a: "We're a remote first studio with hubs in Bengaluru and Mumbai working with brands globally",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee craft communication and consistency Performance is a partnership we share dashboards weekly so you see every number",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-bold md:text-5xl"
        >
          Frequently <span className="text-brand">Asked</span>
        </motion.h2>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-bold text-white">{f.q}</span>
                  <span
                    className={`text-2xl text-brand transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-white/75">{f.a}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
