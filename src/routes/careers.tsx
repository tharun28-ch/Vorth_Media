import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers Vorth Media" },
      {
        name: "description",
        content:
          "Join Vorth Media. Explore open roles in content production and performance marketing.",
      },
      { property: "og:title", content: "Careers Vorth Media" },
      {
        property: "og:description",
        content:
          "Join Vorth Media. Explore open roles in content production and performance marketing.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SiteLayout footerMinimal>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        </div>

        <div className="container-x relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.25em] text-brand"
          >
            Careers at Vorth
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl"
          >
            Build the future of <span className="text-brand">content & performance</span> with us.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
          >
            We're always on the lookout for sharp creators, strategists and operators who care
            deeply about craft and outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-surface/60 p-10 backdrop-blur"
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs uppercase tracking-widest text-brand">
              <span className="inline-block h-2 w-2 rounded-full bg-brand pulse-dot" />
              Currently hiring status
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">No open vacancies right now</h2>
            <p className="mt-4 text-white/75">
              We don't have any active roles at the moment. But great talent never goes unnoticed
              drop us a line and we'll reach out the moment something fits.
            </p>
            <a
              href="https://forms.gle/gd5suPb8jyxioFHNA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg bg-brand px-8 py-3.5 font-bold text-white transition hover:scale-105 hover:glow-brand active:scale-95"
            >
              Introduce Yourself
            </a>
          </motion.div>

          <p className="mt-10 text-sm text-white/50">Applications reviewed on a rolling basis.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
