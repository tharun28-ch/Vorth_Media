import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Team } from "@/components/site/Team";
import { WhyVorth } from "@/components/site/WhyVorth";
import { FounderVideo } from "@/components/site/FounderVideo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vorth Media" },
      {
        name: "description",
        content: "Learn more about Vorth Media and our mission.",
      },
      { property: "og:title", content: "About Vorth Media" },
      {
        property: "og:description",
        content: "Meet the team behind Vorth Media and learn what drives our work.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-black pt-40 pb-10">
        <div className="container-x text-center">
          <h1 className="text-5xl font-bold md:text-6xl">About Vorth</h1>
          <p className="mx-auto mt-4 max-w-4xl text-white/70 leading-relaxed">
            Every expert has a story worth telling. Most never tell it not because they don't want
            to, but because they don't know how. They post. They disappear. They wonder why nobody
            is paying attention. We started Vorth Media because we understood one truth that most
            content agencies miss people don't buy from brands they find. They buy from brands
            they feel. And feeling comes from story. We exist to take what you know, shape it into
            content that connects, and build a brand so strong that your audience doesn't just
            follow you they trust you before they ever speak to you. That's what we do. Not just
            content. Not just reels. A brand that converts.
          </p>
        </div>
      </section>
      <WhyVorth />
      <Team />
      <FounderVideo />
    </SiteLayout>
  );
}
