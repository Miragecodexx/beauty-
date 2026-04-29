import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { ServicesList } from "@/components/site/ServicesList";
import { AboutSplit } from "@/components/site/AboutSplit";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koko's Beauty Place · Lagos Makeup Artist — Timeless Beauty, Perfected" },
      { name: "description", content: "Quietly luxurious bridal, soft glam and editorial makeup, crafted in Lagos by Koko." },
      { property: "og:title", content: "Koko's Beauty Place · Lagos Makeup Artist" },
      { property: "og:description", content: "Quietly luxurious bridal, soft glam and editorial makeup in Lagos." },
    ],
  }),
  component: Index,
});

function SectionHeader({ eyebrow, title, align = "center" }: { eyebrow: string; title: React.ReactNode; align?: "center" | "left" }) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className={`mt-5 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl ${align === "center" ? "mx-auto max-w-2xl" : ""}`}>
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

function Index() {
  return (
    <>
      <Hero />

      {/* Portfolio preview */}
      <section className="bg-background px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Selected Work"
            title={<>A portfolio of <em className="not-italic text-primary">quiet</em> beauty.</>}
          />
          <PortfolioGrid limit={3} />
          <Reveal delay={0.2}>
            <div className="mt-14 text-center">
              <Link
                to="/portfolio"
                className="link-underline text-[12px] uppercase tracking-[0.22em] text-foreground"
              >
                View Full Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/40 px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The Services"
            title={<>Considered, never <em className="not-italic text-primary">excessive.</em></>}
          />
          <ServicesList />
        </div>
      </section>

      {/* About */}
      <section className="bg-background px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <AboutSplit />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 px-6 py-24 md:py-32 lg:px-12">
        <Testimonials />
      </section>

      {/* CTA */}
      <section className="bg-cocoa px-6 py-28 text-ivory lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow !text-primary">Reserve Your Date</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              Let's create something <em className="not-italic text-primary">unforgettable.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center bg-primary px-10 py-4 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Book Appointment
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
