import { motion } from "framer-motion";
import doodleCamera from "@/assets/doodle-camera.png";
import doodlePlay from "@/assets/doodle-play.png";

const PROBLEMS = [
  "Invisible Online: I'm an expert, but nobody sees me!",
  "I Know More, but My Competitor is Fully Booked!",
  "Money Burned on Ads with Nothing to Show!",
  "Views are Sky-High, but My Bank Account is Still!",
  "Why are My Campaigns Just Not Converting?",
  "Ads have Reach, but Zero Actual Leads!",
  "Great Ideas Stuck in My Head, Nothing on Screen!",
  "Posting Constantly, but Where are the Leads?",
  "Running Ads with Zero Strategy and Just Hoping!",
  "My amateur Page is definitely Costing Me Clients!",
  "My DIY Ads have Results that Make Zero Sense!",
  "The Agency I Hired Just Didn't Understand My Brand!",
];

// pre-defined scattered positions (% based)
const POS = [
  { x: 6, y: 8 },
  { x: 78, y: 4 },
  { x: 38, y: 0 },
  { x: 2, y: 38 },
  { x: 84, y: 32 },
  { x: 18, y: 70 },
  { x: 70, y: 70 },
  { x: 44, y: 80 },
  { x: 12, y: 18 },
  { x: 86, y: 60 },
  { x: 30, y: 30 },
  { x: 62, y: 22 },
];

const RADII = [
  "62% 38% 55% 45% / 50% 60% 40% 50%",
  "45% 55% 70% 30% / 60% 40% 60% 40%",
  "55% 45% 40% 60% / 45% 55% 45% 55%",
];

export function Problems() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <img
        src={doodleCamera}
        alt=""
        aria-hidden
        loading="lazy"
        width={160}
        height={160}
        className="float-y pointer-events-none absolute -left-6 top-16 hidden w-32 -rotate-6 opacity-20 invert md:block lg:left-10 lg:w-40"
        style={{ ["--dur" as string]: "7s" }}
      />
      <img
        src={doodlePlay}
        alt=""
        aria-hidden
        loading="lazy"
        width={140}
        height={140}
        className="float-y pointer-events-none absolute -right-4 bottom-20 hidden w-28 rotate-12 opacity-20 invert md:block lg:right-10 lg:w-36"
        style={{ ["--dur" as string]: "8s", animationDelay: "1s" }}
      />
      <div className="container-x">
        <h2 className="text-center text-4xl font-bold md:text-5xl">Common Challenges We Solve</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          You're not alone. These are the questions we hear every week — and exactly what we fix.
        </p>

        <div className="relative mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-center gap-3 md:block md:h-[560px]">
          {/* Center hero blob for mobile */}
          <div className="mb-6 flex w-full justify-center md:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="z-10 w-[200px] bg-brand px-6 py-6 text-center font-bold text-white shadow-[0_0_60px_rgba(255,45,55,0.45)]"
              style={{ borderRadius: "55% 45% 60% 40% / 50% 60% 40% 50%" }}
            >
              Why People Choose Us
            </motion.div>
          </div>

          {PROBLEMS.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 12) * 0.07 }}
              className={`static float-y w-auto max-w-[280px] cursor-pointer bg-surface-2/85 px-4 py-3 text-center text-sm italic text-white/90 transition hover:scale-105 hover:bg-surface-2 md:absolute md:w-[180px] md:px-5 md:py-4 md:text-[15px] ${
                i >= 8 ? "hidden md:block" : ""
              }`}
              style={{
                left: `${POS[i].x}%`,
                top: `${POS[i].y}%`,
                borderRadius: RADII[i % 3],
                ["--dur" as string]: `${4 + (i % 4)}s`,
                animationDelay: `${(i % 5) * 0.4}s`,
              }}
            >
              "{text}"
            </motion.div>
          ))}

          {/* Center hero blob for desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 z-10 hidden w-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-brand px-6 py-6 text-center font-bold text-white shadow-[0_0_60px_rgba(255,45,55,0.45)] md:flex"
            style={{ borderRadius: "55% 45% 60% 40% / 50% 60% 40% 50%" }}
          >
            Why People Choose Us
          </motion.div>
        </div>
      </div>
    </section>
  );
}
