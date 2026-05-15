import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

const NAV = ["Home", "Services", "About", "Contact"];

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid grid-cols-1 md:grid-cols-2"
        >
          {/* LEFT: red */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex h-[50vh] flex-col justify-center bg-brand p-8 md:h-full md:p-16"
          >
            <ul className="space-y-4 md:space-y-6">
              {NAV.map((item) => {
                const path =
                  item === "Home"
                    ? "/"
                    : item === "Contact"
                      ? "/contact"
                      : `/#${item.toLowerCase()}`;
                const isHash = path.startsWith("/#");
                return (
                  <li key={item}>
                    {isHash ? (
                      <a
                        href={path.slice(1)}
                        onClick={onClose}
                        className="text-2xl font-bold text-white transition hover:translate-x-2 inline-block md:text-3xl"
                      >
                        {item}
                      </a>
                    ) : (
                      <Link
                        to={path as "/"}
                        onClick={onClose}
                        className="text-2xl font-bold text-white transition hover:translate-x-2 inline-block md:text-3xl"
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="absolute bottom-6 left-8 right-8 md:bottom-8 md:left-16">
              <p className="text-[10px] uppercase tracking-widest text-white/80">Follow Us</p>
              <div className="mt-2 flex gap-4 text-white/90">
                {["LinkedIn", "Instagram"].map((s) => (
                  <a key={s} href="#" className="text-xs hover:text-white md:text-sm">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: navy */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex h-[50vh] flex-col items-center justify-center bg-black p-8 md:h-full md:p-16 border-t border-white/10 md:border-t-0 md:border-l"
          >
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 md:right-6 md:top-6"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white md:text-3xl">Got An Idea?</h3>
              <p className="mt-2 text-sm text-white/70 md:mt-3 md:text-base">Let's craft your <span className="text-brand">Brand</span> together!</p>
              <Link
                to="/contact"
                onClick={onClose}
                className="mt-5 inline-block rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black glow-brand md:mt-6 md:px-8 md:py-3.5 md:text-base"
              >
                Get In Touch
              </Link>
            </div>
            <div className="absolute bottom-6 text-center text-[10px] text-white/60 md:bottom-8 md:text-sm">
              India
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
