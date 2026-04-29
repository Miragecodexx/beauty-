import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bridal1 from "@/assets/portfolio-bridal-1.jpg";
import bridal2 from "@/assets/portfolio-bridal-2.jpg";
import soft1 from "@/assets/portfolio-soft-1.jpg";
import soft2 from "@/assets/portfolio-soft-2.jpg";
import full1 from "@/assets/portfolio-full-1.jpg";
import full2 from "@/assets/portfolio-full-2.jpg";

type Category = "All" | "Bridal" | "Soft Glam" | "Full Glam";

const items: { src: string; alt: string; category: Exclude<Category, "All">; tall?: boolean }[] = [
  { src: bridal1, alt: "Bridal soft glam", category: "Bridal", tall: true },
  { src: soft1, alt: "Soft glam beauty portrait", category: "Soft Glam" },
  { src: full1, alt: "Full glam editorial", category: "Full Glam" },
  { src: bridal2, alt: "Bridal with gold jewelry", category: "Bridal" },
  { src: soft2, alt: "Soft glam side profile", category: "Soft Glam", tall: true },
  { src: full2, alt: "Full glam evening", category: "Full Glam" },
];

const categories: Category[] = ["All", "Bridal", "Soft Glam", "Full Glam"];

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<Category>("All");
  const filtered = (active === "All" ? items : items.filter((i) => i.category === active)).slice(0, limit);

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`relative px-3 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors ${
              active === c ? "text-foreground" : "text-foreground/50 hover:text-foreground/80"
            }`}
          >
            {c}
            {active === c && (
              <motion.span
                layoutId="cat-underline"
                className="absolute inset-x-3 -bottom-0.5 h-px bg-primary"
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, idx) => (
            <motion.figure
              layout
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden bg-muted ${item.tall ? "lg:row-span-2" : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:brightness-[1.03] ${
                  item.tall ? "aspect-[3/5]" : "aspect-[4/5]"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute bottom-5 left-5 translate-y-2 text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="eyebrow !text-ivory/80">{item.category}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
