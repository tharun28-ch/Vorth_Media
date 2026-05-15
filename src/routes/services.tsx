import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { USP } from "@/components/site/USP";
import { WhyVorth } from "@/components/site/WhyVorth";
import { MobileStickyCardStack } from "@/components/site/MobileStickyCardStack";
import doodleMegaphone from "@/assets/doodle-megaphone.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services Vorth Media" },
      {
        name: "description",
        content:
          "Premium content production, performance marketing, and brand systems built to convert.",
      },
      { property: "og:title", content: "Services Vorth Media" },
      {
        property: "og:description",
        content:
          "Premium content production, performance marketing, and brand systems built to convert.",
      },
    ],
  }),
  component: ServicesPage,
});

type Bullet = { title: string; desc?: string };
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
    name: "Starter Production",
    meta: "Consistent content Structured growth 8 Reels 1 Shoot Day 4 Carousels",
    bullets: [
      { title: "Monthly strategy session" },
      { title: "8 scripts written for you" },
      { title: "Shoot + editing handled" },
      { title: "Social media fully managed" },
    ],
    variant: "red",
    span: "lg:col-span-3",
    cta: "Start My Content",
  },
  {
    name: "Growth Production",
    meta: "Maximum content Maximum growth 12 Reels 2 Shoot Days 6 Carousels",
    bullets: [
      { title: "2 monthly strategy calls" },
      { title: "12 scripts written for you" },
      { title: "Full shoot + editing handled" },
      { title: "Social media fully managed" },
    ],
    variant: "dark",
    span: "lg:col-span-3",
    cta: "Scale My Content",
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
    span: "lg:col-span-2 md:col-span-1",
    cta: "Build My Plan",
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
    span: "lg:col-span-2 md:col-span-1",
    cta: "Get Clarity",
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
    span: "lg:col-span-2 md:col-span-2",
    cta: "Scale With Ads",
  },
];

function ServiceCard({ pkg, idx, isStatic }: { pkg: Pkg; idx: number; isStatic?: boolean }) {
  const base =
    pkg.variant === "white" ? "bento-white" : pkg.variant === "red" ? "bento-red" : "bento-dark";
  const muted = pkg.variant === "red" ? "text-white/85" : "text-white/70";
  const dot = pkg.variant === "red" ? "bg-white" : "bg-brand";
  const priceBox = pkg.variant === "red" ? "bg-black text-white" : "bg-brand text-white";
  const cta =
    pkg.variant === "red"
      ? "bg-white text-brand hover:bg-black hover:text-white"
      : "bg-brand text-white hover:scale-105";

  const content = (
    <div className={`${base} ${pkg.span ?? ""} group relative flex flex-col h-full rounded-2xl p-7 transition hover:-translate-y-1`}>
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
    </div>
  );

  if (isStatic) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      className="h-full"
    >
      {content}
    </motion.div>
  );
}

function ServicesPage() {
  return (
    <SiteLayout>
      <section id="services" className="relative overflow-x-clip bg-black pt-40 pb-28">
        <img
          src={doodleMegaphone}
          alt=""
          aria-hidden
          loading="lazy"
          className="float-y pointer-events-none absolute right-2 top-16 hidden w-24 -rotate-[10deg] opacity-50 md:block lg:right-10 lg:w-32"
          style={{ ["--dur" as string]: "9s" }}
        />
        <div className="container-x relative z-10">
          <div className="text-center hidden md:block">
            <p className="text-xs uppercase tracking-[0.4em] text-brand">What we do</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.05]">
              Services that turn <br /> stories into revenue.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              A focused suite of premium content production, distribution, and brand systems
              engineered for founders who refuse to be ignored.
            </p>
          </div>

          <div className="hidden md:grid mt-16 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-6">
            {PACKAGES.map((p, i) => (
              <ServiceCard key={p.name} pkg={p} idx={i} />
            ))}
          </div>

          <MobileStickyCardStack
            title={
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand">What we do</p>
                <h1 className="mt-2 text-3xl font-bold leading-tight">
                  Services that turn <br /> stories into revenue.
                </h1>
              </div>
            }
            cards={PACKAGES.map((pkg, i) => (
              <ServiceCard key={pkg.name} pkg={pkg} idx={i} isStatic />
            ))}
            className="md:hidden"
          />
        </div>
      </section>
      <USP />
      <WhyVorth />
    </SiteLayout>
  );
}
