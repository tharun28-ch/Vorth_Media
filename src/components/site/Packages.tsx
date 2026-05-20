import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import doodleMegaphone from "@/assets/doodle-megaphone.png";
import { MobileStickyCardStack } from "@/components/site/MobileStickyCardStack";

type Bullet = {
  title: string;
  desc?: string;
};

type Pkg = {
  name: string;
  price?: string;
  meta: string;
  bullets: Bullet[];
  variant: "white" | "red" | "dark";
  span?: string;
  cta: string;
};

const PACKAGES: Pkg[] = [
  {
    name: "Growth Production",
    meta: "Maximum content Maximum growth 12 Reels 2 Shoot Days 6 Carousels",
    bullets: [
      { title: "2 monthly strategy calls" },
      { title: "12 scripts written for you" },
      { title: "Full shoot + editing handled" },
      { title: "Social media fully managed" },
    ],
    variant: "red",
    span: "md:col-span-2",
    cta: "Scale My Content",
  },
  {
    name: "Starter Production",
    meta: "Consistent content Structured growth 8 Reels 1 Shoot Day 4 Carousels",
    bullets: [
      { title: "Monthly strategy session" },
      { title: "8 scripts written for you" },
      { title: "Shoot + editing handled" },
      { title: "Social media fully managed" },
    ],
    variant: "white",
    cta: "Start My Content",
  },
  {
    name: "Content Consulting",
    meta: "Clarity before scale 12 Sessions 3 Months",
    bullets: [
      { title: "Weekly 1 on 1 strategy" },
      { title: "Monthly content planning" },
      { title: "Script guidance" },
      { title: "Performance tracking" },
    ],
    variant: "dark",
    cta: "Get Clarity",
  },
  {
    name: "Accelerator Production",
    meta: "Maximum content Maximum growth 12 Reels 2 Shoot Days 6 Carousels",
    bullets: [
      { title: "2 monthly strategy calls" },
      { title: "10 scripts written for you" },
      { title: "Full shoot + editing handled" },
      { title: "Social media fully managed" },
    ],
    variant: "white",
    span: "md:col-span-2",
    cta: "Accelerate My Content",
  },
  {
    name: "Custom Growth Plan",
    price: "Custom",
    meta: "Built for your goals Flexible scope Scalable",
    bullets: [
      { title: "Tailored content strategy" },
      { title: "Custom production volume" },
      { title: "Platform specific growth" },
      { title: "Dedicated support" },
    ],
    variant: "dark",
    span: "md:col-span-2",
    cta: "Build My Plan",
  },
  {
    name: "Performance Marketing",
    meta: "Turn content into revenue Meta Ads FB + IG",
    bullets: [
      { title: "Full funnel ad strategy" },
      { title: "4 ad creatives monthly" },
      { title: "Targeting & optimization" },
      { title: "Performance reporting" },
    ],
    variant: "red",
    cta: "Scale With Ads",
  },
];

function packageSurfaceClass(pkg: Pkg) {
  const base =
    pkg.variant === "white" ? "bento-white" : pkg.variant === "red" ? "bento-red" : "bento-dark";
  return `${base} ${pkg.span ?? ""} group relative flex flex-col h-full rounded-2xl p-7 transition md:hover:-translate-y-1`;
}

function PackageCardBody({ pkg }: { pkg: Pkg }) {
  const muted = pkg.variant === "red" ? "text-white/85" : "text-white/70";
  const dot = pkg.variant === "red" ? "bg-white" : "bg-brand";
  const priceBox = pkg.variant === "red" ? "bg-black text-white" : "bg-brand text-white";
  const cta =
    pkg.variant === "red"
      ? "bg-white text-brand hover:bg-black hover:text-white"
      : "bg-brand text-white hover:scale-105";

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-xl font-bold leading-tight">{pkg.name}</h4>
        {pkg.price && (
          <div className={`rounded-md px-3 py-1.5 sm:text-right w-fit ${priceBox}`}>
            <div className="text-lg font-bold leading-none whitespace-nowrap">{pkg.price}</div>
          </div>
        )}
      </div>
      <p className={`mt-2 text-sm ${muted}`}>{pkg.meta}</p>
      <ul className="mt-6 flex-1 space-y-4 text-sm text-white/90">
        {pkg.bullets.map((b) => (
          <li key={b.title} className="flex gap-3">
            <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            <div>
              <span className="font-semibold block">{b.title}</span>
              {b.desc && <span className={`block mt-1 leading-relaxed ${muted}`}>{b.desc}</span>}
            </div>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-8 inline-flex w-fit rounded-md px-5 py-2.5 text-sm font-bold transition ${cta}`}
      >
        {pkg.cta}
      </Link>
    </>
  );
}

function PackagesHeading() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold md:text-5xl">Our Packages</h2>
      <p className="mx-auto mt-4 max-w-2xl text-white/80">
        Tailored solutions for every stage of your journey.
      </p>
    </div>
  );
}

function Card({ pkg, idx }: { pkg: Pkg; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      className={packageSurfaceClass(pkg)}
    >
      <PackageCardBody pkg={pkg} />
    </motion.div>
  );
}

export function Packages() {
  const mobileStackCards = PACKAGES.map((pkg) => (
    <div key={pkg.name} className={packageSurfaceClass(pkg)}>
      <PackageCardBody pkg={pkg} />
    </div>
  ));

  return (
    <section id="services" className="relative overflow-x-clip bg-black py-16 md:py-28">
      <img
        src={doodleMegaphone}
        alt=""
        aria-hidden
        loading="lazy"
        className="float-y pointer-events-none absolute right-2 top-16 hidden w-24 -rotate-[10deg] opacity-50 md:block lg:right-10 lg:w-32"
        style={{ ["--dur" as string]: "9s" }}
      />
      <div className="container-x relative z-10">
        <div className="hidden md:block">
          <PackagesHeading />
        </div>

        <MobileStickyCardStack
          title={<PackagesHeading />}
          cards={mobileStackCards}
          className="md:hidden"
        />

        <div className="mx-auto mt-14 hidden max-w-5xl auto-rows-fr gap-5 md:grid md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Card key={p.name} pkg={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
