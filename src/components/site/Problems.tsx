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

// Desktop scattered positions (% based)
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

/** Inner + outer elliptical rings so blob centers stay separated around the center CTA (mobile). */
function mobileBlobRingPosition(i: number, total: number) {
  const innerCount = Math.ceil(total / 2);
  const isInner = i < innerCount;
  const slot = isInner ? i : i - innerCount;
  const ringSize = isInner ? innerCount : total - innerCount;
  const step = 360 / ringSize;
  const angleDeg = -90 + step * slot + (isInner ? 0 : step / 2);
  // Increased radii for better spacing between center and rings
  const rx = isInner ? 33 : 47;
  const ry = isInner ? 28 : 42;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + rx * Math.cos(rad)}%`,
    top: `${50 + ry * Math.sin(rad)}%`,
    isInner,
  };
}

export function Problems() {
  return (
    <section className="relative overflow-x-clip bg-black py-28">
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

        {/* ── Mobile: dual-ring blob layout (avoids center-pile overlap from compressed desktop coords) ── */}
        <div className="relative mx-auto mt-10 h-[min(620px,82svh)] w-full max-w-[min(420px,100%)] overflow-visible md:hidden">
          {PROBLEMS.map((text, i) => {
            const { left, top, isInner } = mobileBlobRingPosition(i, PROBLEMS.length);
            return (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (i % 12) * 0.06 }}
                className="absolute z-[5] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left, top }}
              >
                <div
                  className={`float-y bg-surface-2/85 text-center italic leading-snug text-white/90 shadow-sm transition hover:scale-105 hover:bg-surface-2 active:scale-[1.03] ${
                    isInner
                      ? "w-[92px] px-2.5 py-2 text-[9px] min-[400px]:w-[102px] min-[400px]:text-[10px]"
                      : "w-[min(30vw,110px)] px-3 py-2.5 text-[10px] min-[400px]:w-[118px] min-[400px]:text-[11px]"
                  }`}
                  style={{
                    borderRadius: RADII[i % 3],
                    ["--dur" as string]: `${4 + (i % 4)}s`,
                    animationDelay: `${(i % 5) * 0.4}s`,
                  }}
                >
                  "{text}"
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="absolute left-1/2 top-1/2 z-20 flex w-[min(160px,42vw)] max-w-[160px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-brand px-4 py-4 text-center text-[11px] font-bold leading-snug text-white shadow-[0_0_60px_rgba(255,45,55,0.45)] min-[400px]:w-[172px] min-[400px]:max-w-[172px] min-[400px]:px-5 min-[400px]:py-5 min-[400px]:text-sm"
            style={{ borderRadius: "55% 45% 60% 40% / 50% 60% 40% 50%" }}
          >
            Why People Choose Us
          </motion.div>
        </div>

        {/* ── Desktop: absolute blob layout ── */}
        <div className="relative mx-auto mt-16 hidden max-w-6xl md:block md:h-[560px]">
          {PROBLEMS.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 12) * 0.07 }}
              className="float-y absolute w-[180px] cursor-pointer bg-surface-2/85 px-5 py-4 text-center text-[15px] italic text-white/90 transition hover:scale-105 hover:bg-surface-2"
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

          {/* Center hero blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 z-10 flex w-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-brand px-6 py-6 text-center font-bold text-white shadow-[0_0_60px_rgba(255,45,55,0.45)]"
            style={{ borderRadius: "55% 45% 60% 40% / 50% 60% 40% 50%" }}
          >
            Why People Choose Us
          </motion.div>
        </div>
      </div>
    </section>
  );
}
