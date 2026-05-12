import { Link } from "@tanstack/react-router";
import { useState } from "react";
import rocket from "@/assets/doodle-rocket.png";

const FOOTER_FAQS = [
  {
    q: "How fast can we start?",
    a: "Most engagements kick off within 7 days of your discovery call",
  },
  {
    q: "Do you work with early-stage brands?",
    a: "Yes we have packages for founders building from zero and retainers for scale ups",
  },
  {
    q: "What's included in a retainer?",
    a: "Strategy content production performance media and weekly reporting fully managed",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee craft communication and consistency You get dashboards weekly",
  },
  {
    q: "Do you handle scripting and creative direction?",
    a: "Yes every package includes scripting shot planning and creative direction You just show up we handle the rest",
  },
  {
    q: "Can I choose only content or only ads?",
    a: "Absolutely Our packages are modular Start with content production add performance marketing later or run both simultaneously",
  },
  {
    q: "What ROAS can I expect from paid ads?",
    a: "Our clients have averaged 4x ROAS Results depend on offer strength budget and audience we'll set realistic benchmarks in your discovery call",
  },
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
      </div>
      <img
        src={rocket}
        alt=""
        loading="lazy"
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-6 hidden w-44 opacity-80 md:block lg:w-56"
      />
      <div className="container-x relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.2] md:text-6xl">
          We don't just create content. <br />
          We build brands that <span className="text-brand">convert</span>.
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-lg bg-brand px-10 py-4 font-bold text-white transition hover:scale-105 hover:glow-brand active:scale-95"
        >
          Book a Consultation
        </Link>
        <p className="mt-6 text-lg font-bold text-brand">Absolutely Vorth It.</p>
      </div>
    </section>
  );
}

export function Footer({ minimal = false }: { minimal?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <footer className="bg-black">
      {!minimal && (
        <>
          {/* Footer FAQ */}
          <div className="container-x py-10 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Quick answers
              </p>
              <h3 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Still have <span className="text-brand">questions?</span>
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-white/65">
                The essentials, in one place. For anything else,{" "}
                <Link to="/contact" className="story-link text-white">
                  drop us a line
                </Link>
                . Or visit our{" "}
                <Link to="/faq" className="story-link text-white">
                  full FAQ page
                </Link>
                .
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-2">
              {FOOTER_FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left"
                    >
                      <span className="text-sm font-semibold text-white">{f.q}</span>
                      <span
                        className={`text-xl text-brand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-sm leading-relaxed text-white/70">{f.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <FinalCTA />
        </>
      )}

      {/* Bottom row */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand pulse-dot" />
            <span className="text-sm font-bold tracking-widest">VORTH MEDIA</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <Link to="/services" className="story-link hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="story-link hover:text-white">
              Contact
            </Link>
            <Link to="/careers" className="story-link hover:text-white">
              Careers
            </Link>
            <Link to="/faq" className="story-link hover:text-white">
              FAQ
            </Link>
            <Link to="/terms" className="story-link hover:text-white">
              Terms & Policies
            </Link>
          </div>
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Vorth Media</div>
        </div>
      </div>
    </footer>
  );
}
