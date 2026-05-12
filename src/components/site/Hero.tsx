import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const EYEBROW = ["content production", "performance marketing"];
const HEAD = ["build", "grow"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % 2), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pt-20 md:pt-28">
      {/* subtle red glow */}
      <div className="pointer-events-none absolute inset-0">
        {/* grid lines */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        {/* noise */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />
        {/* radial brand glows */}
        <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-[360px] w-[360px] rounded-full bg-brand/5 blur-3xl" />
        {/* spotlight conic */}
        <div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,45,55,0.18) 90deg, transparent 180deg, rgba(255,45,55,0.10) 270deg, transparent 360deg)",
            maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          }}
        />
        {/* bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="container-x relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center justify-center gap-2 text-sm tracking-[0.08em] text-white/85 md:text-base"
        >
          <span>we are a</span>
          <span className="relative inline-flex min-w-[130px] justify-center text-left md:min-w-[160px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={EYEBROW[i]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="text-brand whitespace-nowrap"
              >
                {EYEBROW[i]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>agency</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          Your content is the sales engine.
          <br />
          We{" "}
          <span className="relative inline-flex min-w-[70px] justify-center text-left align-baseline md:min-w-[100px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={HEAD[i]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-brand"
              >
                {HEAD[i]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          it. We make it convert.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
        >
          We help brands turn content into consistent revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <Link
            to="/contact"
            className="rounded-lg bg-brand px-10 py-4 font-bold text-white transition hover:scale-105 hover:glow-brand active:scale-95"
          >
            Book a Consultation
          </Link>
          <p className="text-sm tracking-wide text-white/70">
            Trusted by growing brands & creators
          </p>
        </motion.div>
      </div>
    </section>
  );
}
