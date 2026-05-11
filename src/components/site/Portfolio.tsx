import { motion } from "framer-motion";

const CASES = [
  {
    brand: "Lumen Apparel",
    type: "Content Production",
    desc: "Built a new content engine that drove organic momentum in 60 days.",
    result: "+420% engagement",
  },
  {
    brand: "Northwave Coffee",
    type: "Performance Marketing",
    desc: "Restructured Meta funnel and creative testing program.",
    result: "3.8x ROAS",
  },
  {
    brand: "Atlas Skincare",
    type: "Content + Ads",
    desc: "Full system: shoots, edits, and paid scaling under one roof.",
    result: "₹1.2Cr revenue",
  },
  {
    brand: "Verra Fitness",
    type: "Content Production",
    desc: "Authority-building reels and carousels for the founder.",
    result: "+38k followers",
  },
  {
    brand: "Kindred Foods",
    type: "Performance Marketing",
    desc: "Lookalike scaling + offer testing across IG and FB.",
    result: "-46% CPA",
  },
  {
    brand: "Stride Footwear",
    type: "Content + Ads",
    desc: "End-to-end launch campaign with shoot, edit, ads.",
    result: "5.2x ROAS",
  },
];

export function Portfolio({ showHeading = true }: { showHeading?: boolean } = {}) {
  return (
    <section id="work" className={`bg-black ${showHeading ? "py-28" : "pt-6 pb-24"}`}>
      <div className="container-x">
        {showHeading && <h2 className="text-center text-4xl font-bold md:text-5xl">Our Work</h2>}
        <div
          className={`mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-14" : "mt-0"}`}
        >
          {CASES.map((c, i) => (
            <motion.div
              key={c.brand}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-surface transition hover:-translate-y-1 hover:border-brand hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <div
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, var(--surface), var(--surface-2)), repeating-linear-gradient(45deg, transparent 0 12px, rgba(255,45,55,0.15) 12px 14px)`,
                    backgroundBlendMode: "screen",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
                  <span className="rounded bg-brand px-4 py-2 text-sm font-bold text-white">
                    View Case Study →
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-brand">
                  {c.type}
                </div>
                <div className="mt-2 text-lg font-bold">{c.brand}</div>
                <p className="mt-2 text-sm text-white/80">{c.desc}</p>
                <div className="mt-4 text-base font-bold text-brand">{c.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
