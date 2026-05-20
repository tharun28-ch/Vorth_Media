import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Credibility } from "@/components/site/Credibility";
import { Logos } from "@/components/site/Logos";
import { Problems } from "@/components/site/Problems";
import { Packages } from "@/components/site/Packages";

import { USP } from "@/components/site/USP";
import { WhyVorth } from "@/components/site/WhyVorth";
import { Team } from "@/components/site/Team";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vorth Media Content that Converts" },
      {
        name: "description",
        content:
          "Premium content production and performance marketing agency. We turn knowledge into story, story into brand, brand into revenue.",
      },
      { property: "og:title", content: "Vorth Media Content that Converts" },
      {
        property: "og:description",
        content: "Premium content production and performance marketing agency.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Credibility />
      <Logos />
      <Problems />
      <Packages />

      <USP />
      <WhyVorth />
      <Team />

    </SiteLayout>
  );
}
