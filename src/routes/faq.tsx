import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ Vorth Media" },
      {
        name: "description",
        content: "Answers to the most common questions about working with Vorth Media.",
      },
      { property: "og:title", content: "FAQ Vorth Media" },
      {
        property: "og:description",
        content: "Answers to the most common questions about working with Vorth Media.",
      },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How fast can we start?",
        a: "Most engagements kick off within 7 days of your discovery call. We move fast without skipping strategy.",
      },
      {
        q: "Do you work with early-stage brands?",
        a: "Yes. We have packages tailored for founders building from zero, plus enterprise retainers for scale-ups.",
      },
      {
        q: "What does the onboarding process look like?",
        a: "After your discovery call, we send a short brand questionnaire, align on goals, and deliver a content roadmap within 3 business days. Then we hit record.",
      },
    ],
  },
  {
    category: "Services & Scope",
    items: [
      {
        q: "What's included in a retainer?",
        a: "Strategy, content production (reels, ads, photography), performance media, and monthly reporting fully managed.",
      },
      {
        q: "Can I choose only content production or only ads?",
        a: "Absolutely. Our packages are modular. You can start with content production, add performance marketing later, or run both simultaneously.",
      },
      {
        q: "Do you handle scripting and creative direction?",
        a: "Yes every package includes scripting, shot planning, and creative direction. You just show up; we handle the rest.",
      },
    ],
  },
  {
    category: "Results & Reporting",
    items: [
      {
        q: "Do you guarantee results?",
        a: "We guarantee craft, communication, and consistency. Performance is a partnership we share dashboards weekly so you see every number.",
      },
      {
        q: "How do you measure success?",
        a: "We track platform-native metrics (reach, engagement, follower growth) alongside business metrics (leads, ROAS, revenue). You get a clear monthly report.",
      },
      {
        q: "What ROAS can I expect from paid ads?",
        a: "Our clients have averaged 4x ROAS. Results depend on offer strength, budget, and audience we'll set realistic benchmarks in your discovery call.",
      },
    ],
  },
  {
    category: "Logistics",
    items: [
      {
        q: "Where are you based?",
        a: "We're a remote-first studio based in Chennai, Tamil Nadu, with shoot capabilities across South India.",
      },
      {
        q: "What if I'm not happy with the content?",
        a: "We offer unlimited revisions within scope until you're proud to post it. Quality isn't negotiable.",
      },
      {
        q: "How do I get started?",
        a: "Fill out the contact form or email us at vorthmediaa@gmail.com. We'll book a no-pressure discovery call within 24 hours.",
      },
    ],
  },
];

function AccordionItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: idx * 0.04 }}
      className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] transition hover:border-white/20"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-white">{q}</span>
        <span
          className={`flex-shrink-0 text-2xl text-brand transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">{a}</p>
      </div>
    </motion.div>
  );
}

function FAQPage() {
  return (
    <SiteLayout>
      <section className="bg-black pt-40 pb-28">
        <div className="container-x">
          {/* Hero */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-brand">Got questions?</p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] md:text-7xl">
              Frequently <span className="text-brand">Asked</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-white/70">
              Everything you need to know before we start building together.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="mx-auto mt-20 max-w-3xl space-y-14">
            {FAQS.map((cat) => (
              <div key={cat.category}>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-brand">
                  {cat.category}
                </p>
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} idx={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mx-auto mt-20 max-w-xl rounded-2xl border border-white/10 bg-surface/60 p-10 text-center">
            <p className="text-lg font-bold">Still not answered?</p>
            <p className="mt-2 text-sm text-white/70">
              Drop us a message and we'll get back within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-lg bg-brand px-8 py-3 font-bold text-white transition hover:scale-105 hover:glow-brand"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
