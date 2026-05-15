import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import doodleCamera from "@/assets/doodle-camera.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vorth Media" },
      {
        name: "description",
        content: "Get in touch with the Vorth Media team. We typically respond within 24 hours.",
      },
      { property: "og:title", content: "Contact Vorth Media" },
      { property: "og:description", content: "Let's build together. Reach the Vorth Media team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const scriptURL = "https://script.google.com/macros/s/AKfycbwHp1rkt5W7zxFxoLN4AoaTlAXJUgyx5s_EthtOh6n7SsN7tU8dJMpjJ3ZN90OeFakt/exec";

  const onSubmit = () => {
    setStatus("sending");
    
    // With iframe submission, we can't reliably detect success due to cross-origin, 
    // so we assume success after a short delay.
    setTimeout(() => {
      setStatus("sent");
      // Reset the form manually since we aren't using e.preventDefault()
      const form = document.getElementById("contactForm") as HTMLFormElement;
      if (form) form.reset();
      setAgreed(false);
      
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const field =
    "w-full rounded border border-brand bg-surface px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:shadow-[0_0_0_3px_rgba(255,45,55,0.15)]";

  return (
    <SiteLayout footerMinimal>
      <section className="bg-black pt-36 pb-24">
        <div className="container-x">
          <div className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Let's Build Together</h1>
            <p className="mt-3 text-white/80">Get in touch with the Vorth team.</p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
              
              {/* Invisible iframe to handle the form submission without redirecting */}
              <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>

              <form id="contactForm" action={scriptURL} method="POST" target="hidden_iframe" onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-bold">Full Name *</label>
                  <input type="text" name="FullName" placeholder="Your Name" required className={field} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold">Phone Number (Whatsapp) *</label>
                  <input type="tel" name="Phone" placeholder="+91 XXXXXXXXXX" required className={field} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold">Mail *</label>
                  <input type="email" name="Email" placeholder="you@brand.com" required className={field} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold">Instagram Username (Eg: @Yourusername) *</label>
                  <input type="text" name="Instagram" placeholder="@yourusername" required className={field} />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">Profession *</label>
                  <select name="Profession" required className={field} defaultValue="">
                    <option value="" disabled>Select your profession</option>
                    <option>Self Employed</option>
                    <option>Business owner</option>
                    <option>Online coach</option>
                    <option>Content Creator</option>
                    <option>Consultant</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">What is your current Monthly income? *</label>
                  <select name="MonthlyIncome" required className={field} defaultValue="">
                    <option value="" disabled>Select your income range</option>
                    <option>More than 2L</option>
                    <option>1L - 2L</option>
                    <option>75K - 1L</option>
                    <option>50K - 75K</option>
                    <option>30K - 50K</option>
                    <option>20K - 30K</option>
                    <option>Below 20K</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">Do you currently post on Instagram? *</label>
                  <select name="PostOnInstagram" required className={field} defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option>Yes Regularly</option>
                    <option>Yes occasionally</option>
                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">What is your niche or Industry? (Eg: Marketing,Fitness, Finance, IT, etc.) *</label>
                  <input type="text" name="Niche" placeholder="Your niche/industry" required className={field} />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">What is your expectation from Content Creation? *</label>
                  <select name="Expectation" required className={field} defaultValue="">
                    <option value="" disabled>Select your expectation</option>
                    <option>Virality and face value</option>
                    <option>Clients</option>
                    <option>Just need to figure out</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">Instagram algorithm takes at least 3 months to notice and push your content consistently. Are you ready to commit? *</label>
                  <select name="Commitment" required className={field} defaultValue="">
                    <option value="" disabled>Select your commitment level</option>
                    <option>Yes, I understand and I'm fully committed</option>
                    <option>I need to understand more before committing</option>
                    <option>No, I'm looking for immediate results</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">What is your biggest challenge in creating content ? *</label>
                  <textarea name="BiggestChallenge" rows={3} placeholder="Describe your challenge..." required className={field} />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">Are you ready to spend at least ₹50K a month to produce quality content? *</label>
                  <select name="BudgetReady" required className={field} defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option>Yes, I'm ready to invest seriously</option>
                    <option>Maybe, depends on the package!</option>
                    <option>Not right now</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">How soon are you looking to start? *</label>
                  <select name="Timeline" required className={field} defaultValue="">
                    <option value="" disabled>Select a timeframe</option>
                    <option>Immediately</option>
                    <option>Within 2 weeks</option>
                    <option>Within a month</option>
                    <option>Just exploring</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-bold">Any other doubts you want us to clarify?</label>
                  <textarea name="Doubts" rows={3} placeholder="Ask us anything..." className={field} />
                </div>

              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 accent-[var(--brand)]"
                />
                <span>
                  I agree to the{" "}
                  <a href="/terms" className="text-brand">
                    Terms & Policies
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={!agreed || status !== "idle"}
                className="w-full rounded-lg bg-brand px-8 py-3.5 font-bold text-white transition hover:scale-[1.02] hover:glow-brand disabled:opacity-50 md:w-auto"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent!"
                    : "Send Message"}
              </button>
            </form>

            <div className="space-y-6 lg:sticky lg:top-32">
              <InfoCard
                icon="✉"
                label="Email"
                value="vorthmediaa@gmail.com"
                href="mailto:vorthmediaa@gmail.com"
              />
              <InfoCard icon="✆" label="Phone" value="+91 96772 30409" href="tel:+919677230409" />
              <InfoCard icon="◉" label="Location" value="Chennai, Tamil Nadu, India" />
              <p className="italic text-white/80">We typically respond within 24 hours.</p>

              <div className="relative mt-16 hidden lg:flex h-64 items-center justify-center pointer-events-none">
                 <img src={doodleCamera} alt="" className="w-64 opacity-80 -rotate-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <>
      <div className="text-2xl text-brand">{icon}</div>
      <div className="mt-2 text-sm font-bold">{label}</div>
      <div className="mt-1 text-white/90">{value}</div>
    </>
  );
  return (
    <div className="rounded-lg border border-brand bg-surface p-7">
      {href ? (
        <a href={href} className="block hover:text-brand">
          {Body}
        </a>
      ) : (
        Body
      )}
    </div>
  );
}
