import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Koko's Beauty Place" },
      { name: "description", content: "A curated portfolio of bridal, soft glam, traditional and event makeup work by Koko." },
      { property: "og:title", content: "Portfolio — Koko's Beauty Place" },
      { property: "og:description", content: "Bridal, soft glam and editorial makeup work." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Portfolio"
        title={<>Work that <em className="not-italic text-primary">whispers.</em></>}
        intro="A selection of brides, editorials and evenings — each crafted with restraint, intention and a quiet sense of luxury."
      />
      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
