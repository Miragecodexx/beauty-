import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesList } from "@/components/site/ServicesList";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Koko's Beauty Place" },
      { name: "description", content: "Bridal, soft glam, traditional bridal and owambe event makeup in Lagos." },
      { property: "og:title", content: "Services — Koko's Beauty Place" },
      { property: "og:description", content: "Bridal, soft glam, traditional and event makeup services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Services"
        title={<>Considered, never <em className="not-italic text-primary">excessive.</em></>}
        intro="A small, intentional menu — refined over a decade of craft. Every booking is custom-tailored to your face, your event and your wardrobe."
      />
      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ServicesList />
        </div>
      </section>
    </>
  );
}
