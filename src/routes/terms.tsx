import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Policies — Vorth Media" },
      {
        name: "description",
        content: "Terms, conditions, refund policy and disclaimers for Vorth Media services.",
      },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    id: "intro",
    title: "Introduction",
    body: "Welcome to Vorth Media. These terms govern your use of our content production and performance marketing services.",
  },
  {
    id: "services",
    title: "Services Overview",
    body: "We offer Content Consulting, Content Production (Starter & Growth), and Performance Marketing retainers.",
  },
  {
    id: "general",
    title: "General Terms & Conditions",
    body: "All engagements require signed agreements and adherence to communication, scope, and timeline standards.",
  },
  {
    id: "consulting",
    title: "Content Consulting Terms",
    body: "Non-refundable. 24 hours notice required for rescheduling. Full payment required before the first session.",
  },
  {
    id: "production",
    title: "Content Production Terms",
    body: "50% advance, 1 free trial reel, balance 50% before content goes live. 3-month minimum commitment.",
  },
  {
    id: "performance",
    title: "Performance Marketing Terms",
    body: "Monthly retainer paid in advance. Ad spend billed by Meta separately. Full Business Manager access required Day 1.",
  },
  {
    id: "refund",
    title: "Refund Policy",
    body: "All payments are non-refundable once a service period has begun.",
    warn: true,
  },
  {
    id: "results",
    title: "Results Disclaimer",
    body: "We do not guarantee specific results. Performance varies based on industry, offer, and market conditions.",
    warn: true,
  },
  {
    id: "ip",
    title: "Intellectual Property Rights",
    body: "Final delivered assets transfer to client upon full payment. Vorth retains rights to use work in portfolio.",
  },
  {
    id: "nda",
    title: "Confidentiality & NDA",
    body: "Mutual confidentiality applies to all proprietary information shared during the engagement.",
  },
  {
    id: "liability",
    title: "Liability Limitations",
    body: "Liability is limited to fees paid for the most recent month of service.",
  },
  {
    id: "legal",
    title: "Legal Compliance",
    body: "Both parties shall comply with all applicable laws and platform policies.",
  },
  {
    id: "dispute",
    title: "Dispute Resolution Process",
    body: "Disputes will first be addressed through good-faith negotiation, then mediation in Chennai, India.",
  },
];

function Terms() {
  const [openId, setOpenId] = useState<string | null>("intro");

  return (
    <SiteLayout footerMinimal={true}>
      <section className="bg-black pt-32 pb-24">
        <div className="container-x">
          <h1 className="text-4xl font-bold md:text-5xl">Terms & Policies</h1>
          <p className="mt-3 text-white/80">Last updated: 2026</p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-1 rounded-lg border-r border-brand bg-surface p-5">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setOpenId(s.id)}
                    className={`block border-l-2 px-3 py-2 text-sm transition ${
                      openId === s.id
                        ? "border-brand text-brand"
                        : "border-transparent text-white/75 hover:text-brand"
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-4">
              {SECTIONS.map((s) => {
                const isOpen = openId === s.id;
                return (
                  <div
                    key={s.id}
                    id={s.id}
                    className={`rounded-md border border-brand bg-surface/30 ${s.warn ? "border-l-4" : ""}`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : s.id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="text-lg font-bold md:text-xl">{s.title}</span>
                      <span
                        className={`text-brand transition-transform ${isOpen ? "rotate-90" : ""}`}
                      >
                        ›
                      </span>
                    </button>
                    {isOpen && <div className="px-6 pb-6 text-white/85">{s.body}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
