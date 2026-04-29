import { Reveal } from "./Reveal";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
  {
    title: "Bridal Glam",
    description:
      "A serene, all-day experience for the bride who values softness over spectacle. Trial, day-of application and a discreet touch-up kit included.",
  },
  {
    title: "Soft & Natural Beat",
    description:
      "Luminous skin, feathered brows and a barely-there finish. Perfect for engagements, dinners and intimate portraits where you should still look like you.",
  },
  {
    title: "Traditional Bridal Looks",
    description:
      "Rich, ceremonial glam tailored to your culture — from Yoruba and Igbo to Hausa and Edo brides. Bold pigments, ornate detailing and lasting wear for every rite.",
  },
  {
    title: "Event | Owambe Glam",
    description:
      "Full sculpted glam for owambes, galas and unforgettable evenings. Photo-ready, sweat-resistant and built to dance through the night.",
  },
  {
    title: "Editorial & Events",
    description:
      "Considered makeup design for campaigns, lookbooks, content series and brand activations. Custom quoted per production.",
  },
  {
    title: "Makeup Consultation",
    description:
      "A one-on-one sit-down to map your bridal look, build a personal routine, or refine your everyday signature. Includes face mapping and product guidance.",
  },
];

export function ServicesList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08}>
          <article className="group relative h-full overflow-hidden border border-border bg-ivory p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe">
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-2xl transition-all duration-700 group-hover:scale-150" />
            <span className="eyebrow">0{i + 1}</span>
            <h3 className="mt-4 font-serif text-3xl text-foreground">{s.title}</h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <span className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">Investment</span>
              <a
                href={whatsappLink(`Hello Koko, I'd like to discuss pricing for ${s.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-serif text-base text-primary"
              >
                Discuss with stylist
              </a>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
