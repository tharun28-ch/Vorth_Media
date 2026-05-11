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
            className="relative flex flex-col justify-center bg-brand p-10 md:p-16"
          >
            <ul className="space-y-6">
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
                        className="text-3xl font-bold text-white transition hover:translate-x-2 inline-block"
                      >
                        {item}
                      </a>
                    ) : (
                      <Link
                        to={path as "/"}
                        onClick={onClose}
                        className="text-3xl font-bold text-white transition hover:translate-x-2 inline-block"
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="absolute bottom-8 left-10 right-10 md:left-16">
              <p className="text-xs uppercase tracking-widest text-white/80">Follow Us</p>
              <div className="mt-3 flex gap-4 text-white/90">
                {["LinkedIn", "Instagram"].map((s) => (
                  <a key={s} href="#" className="text-sm hover:text-white">
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
            className="relative flex flex-col items-center justify-center bg-black p-10 md:p-16 border-l border-white/10"
          >
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
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
            <h3 className="text-3xl font-bold text-white">Got An Idea?</h3>
            <p className="mt-3 text-white/70">Let's craft your <span className="text-brand">Brand</span> together!</p>
            <Link
              to="/contact"
              onClick={onClose}
              className="mt-6 rounded-lg bg-brand px-8 py-3.5 font-bold text-white transition hover:bg-white hover:text-black glow-brand"
            >
              Get In Touch
            </Link>
            <div className="absolute bottom-8 text-center text-sm text-white/60">
              India
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
