export function BrandMark({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const script =
    size === "lg" ? "text-6xl md:text-7xl" : size === "sm" ? "text-3xl" : "text-4xl";
  const sub =
    size === "lg" ? "text-[11px] md:text-[12px]" : size === "sm" ? "text-[9px]" : "text-[10px]";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`${script} text-foreground`}
        style={{ fontFamily: "var(--font-script)", lineHeight: 0.9 }}
      >
        Koko<span className="text-primary">'s</span>
      </span>
      <span
        className={`${sub} mt-1 uppercase tracking-[0.35em] text-foreground/80`}
      >
        Beauty Place
      </span>
    </span>
  );
}
