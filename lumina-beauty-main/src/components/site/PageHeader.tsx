import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl pt-40 pb-20 text-center md:pt-48 md:pb-28">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
