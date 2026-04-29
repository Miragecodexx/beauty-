import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSplit } from "@/components/site/AboutSplit";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Koko's Beauty Place" },
      { name: "description", content: "Meet Koko — Lagos-based makeup artist devoted to quiet, restrained beauty." },
      { property: "og:title", content: "About — Koko's Beauty Place" },
      { property: "og:description", content: "Meet the artist behind the brush." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Atelier"
        title={<>The face <em className="not-italic text-primary">behind</em> the brush.</>}
      />
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <AboutSplit />
        </div>
      </section>
      <section className="bg-muted/40 px-6 py-24 lg:px-12">
        <Testimonials />
      </section>
    </>
  );
}
