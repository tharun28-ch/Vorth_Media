import { motion } from "framer-motion";
import doodleReel from "@/assets/doodle-reel.png";
import { MobileStickyCardStack } from "@/components/site/MobileStickyCardStack";

type Item = { t: string; d: string; variant: "white" | "red" | "dark"; span?: string };

const ITEMS: Item[] = [
  {
    t: "Deep Research First",
    d: "We study your story your audience and your goals before we write a single word",
    variant: "red",
    span: "md:col-span-2",
  },
  {
    t: "All-In-One Team",
    d: "Strategy scripting shooting editing and social media one team handles everything for you",
    variant: "white",
  },
  {
    t: "Your Genuine Voice",
    d: "Every script is built from your own voice notes and stories so it actually sounds like you",
    variant: "dark",
  },
  {
    t: "Compounding Growth",
    d: "The longer we work together the deeper we understand your brand every month builds on the last compounding into stronger content sharper messaging and better results",
    variant: "white",
    span: "md:col-span-2",
  },
  {
    t: "High-Intent Content",
    d: "Every piece we produce is built around one question: will this bring the right client closer?",
    variant: "dark",
    span: "md:col-span-2",
  },
  {
    t: "Systems Not Chaos",
    d: "Batch scripting and planned delivery keep your page consistent without you chasing us",
    variant: "red",
  },
];

function whySurfaceClass(it: Item) {
  const base =
    it.variant === "white" ? "bento-white" : it.variant === "red" ? "bento-red" : "bento-dark";
  return `${base} ${it.span ?? ""} rounded-2xl p-8 transition md:hover:-translate-y-1`;
}

function WhyCardBody({ it }: { it: Item }) {
  const muted = "text-white/85";
  const iconBg = it.variant === "red" ? "bg-white text-brand" : "bg-brand/20 text-brand";
  return (
    <>
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-bold">{it.t}</h3>
      <p className={`mt-2 ${muted}`}>{it.d}</p>
    </>
  );
}

export function WhyVorth() {
  const mobileStackCards = ITEMS.map((it) => (
    <div key={it.t} className={whySurfaceClass(it)}>
      <WhyCardBody it={it} />
    </div>
  ));

  return (
    <section id="about" className="relative overflow-x-clip bg-black py-16 md:py-28">
      <img
        src={doodleReel}
        alt=""
        aria-hidden
        loading="lazy"
        className="float-y pointer-events-none absolute -left-4 top-10 hidden w-28 rotate-[12deg] opacity-60 invert md:block lg:left-8 lg:w-36"
        style={{ ["--dur" as string]: "8s" }}
      />
      <div className="container-x relative z-10">
        <h2 className="hidden text-center text-4xl font-bold md:block md:text-5xl">
          Why Choose Vorth
        </h2>

        <MobileStickyCardStack
          title={<h2 className="text-4xl font-bold md:text-5xl">Why Choose Vorth</h2>}
          cards={mobileStackCards}
          className="md:hidden"
          scrollBufferVh={28}
        />

        <div className="mx-auto mt-14 hidden max-w-5xl auto-rows-fr gap-5 md:grid md:grid-cols-3">
          {ITEMS.map((it, i) => {
            return (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={whySurfaceClass(it)}
              >
                <WhyCardBody it={it} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
