import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { BookingForm } from "@/components/site/BookingForm";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";

const INSTAGRAM_URL =
  "https://www.instagram.com/koko_beautyplace?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Session — Koko's Beauty Place" },
      { name: "description", content: "Reserve your date with Koko. Bridal, soft glam, traditional and owambe makeup in Lagos." },
      { property: "og:title", content: "Book a Session — Koko's Beauty Place" },
      { property: "og:description", content: "Reserve your date with Koko." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, label: "WhatsApp", value: WHATSAPP_DISPLAY, href: whatsappLink() },
    { icon: Mail, label: "Email", value: "coco@kokobeautyplace.com", href: "mailto:coco@kokobeautyplace.com" },
    { icon: Instagram, label: "Instagram", value: "@koko_beautyplace", href: INSTAGRAM_URL },
    { icon: MapPin, label: "Studio", value: "Lagos, Nigeria", href: undefined as string | undefined },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Reserve Your Date"
        title={<>Let's begin <em className="not-italic text-primary">quietly.</em></>}
        intro="Share a few details below and I'll personally respond within 24 hours to confirm availability."
      />
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <BookingForm />
        </div>
      </section>
      <section className="border-t border-border bg-muted/30 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-10 text-center md:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mx-auto block w-fit text-primary hover:text-primary/80"
                  >
                    <c.icon size={20} />
                  </a>
                ) : (
                  <c.icon className="mx-auto text-primary" size={20} />
                )}
                <div className="mt-4 eyebrow">{c.label}</div>
                <div className="mt-2 font-serif text-lg text-foreground">{c.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
