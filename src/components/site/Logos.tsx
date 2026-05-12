import { motion } from "framer-motion";

const LOGOS = [
  { name: "Cosmos Clinique", image: "/logos/cosmos.jpg" },
  { name: "Genclosers", image: "/logos/genclosers.png" },
  { name: "MH Crafts", image: "/logos/mhcrafts.jpg" },
  { name: "Cosma Academy", image: "/logos/cosmaa.jpeg" },
];

// Duplicate for seamless loop
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

export function Logos() {
  return (
    <section className="border-y border-white/5 bg-black py-20">
      <div className="container-x">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Brands That Trust Us
        </h2>

        {/* ── Mobile: auto-scrolling marquee (left → right) ── */}
        <div className="mt-14 overflow-hidden sm:hidden">
          <div className="logos-marquee flex w-max">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex gap-10 pr-10">
                {LOGOS.map((brand, i) => (
                  <div
                    key={`${brand.name}-${setIndex}-${i}`}
                    className="flex shrink-0 flex-col items-center gap-3"
                  >
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-surface/60 transition-all duration-300">
                      {brand.image ? (
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl font-bold text-brand">
                          {brand.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest text-white/60">
                      {brand.name.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop: static grid ── */}
        <div className="mt-14 hidden flex-wrap items-center justify-center gap-12 sm:flex md:gap-20">
          {LOGOS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-surface/60 overflow-hidden transition-all duration-300 hover:scale-110 hover:border-brand hover:shadow-[0_0_30px_rgba(255,45,55,0.2)]">
                {brand.image ? (
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-bold text-brand">
                    {brand.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold tracking-widest text-white/60">
                {brand.name.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee keyframe injected inline */}
      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .logos-marquee {
          animation: marquee-ltr 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
