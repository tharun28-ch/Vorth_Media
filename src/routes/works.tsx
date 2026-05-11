import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Portfolio } from "@/components/site/Portfolio";
import { Logos } from "@/components/site/Logos";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works — Vorth Media" },
      { name: "description", content: "Selected case studies and brand work from Vorth Media." },
      { property: "og:title", content: "Our Works — Vorth Media" },
      {
        property: "og:description",
        content: "Selected case studies and brand work from Vorth Media.",
      },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  return (
    <SiteLayout>
      <section className="bg-black pt-40 pb-10">
        <div className="container-x text-center">
          <h1 className="text-5xl font-bold md:text-6xl">Our Works</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            A look at the brands we've helped scale through content and performance.
          </p>
        </div>
      </section>
      <Portfolio showHeading={false} />
      <Logos />
    </SiteLayout>
  );
}
