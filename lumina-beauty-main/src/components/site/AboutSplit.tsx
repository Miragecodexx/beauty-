import { motion } from "framer-motion";
import aboutImage from "@/assets/about-portrait.jpg";

export function AboutSplit() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <img
          src={aboutImage}
          alt="Koko applying makeup"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
        <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-primary md:block" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">The Artist</span>
        <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Beauty is not added.
          <br />
          It is <em className="not-italic text-primary">revealed.</em>
        </h2>
        <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-muted-foreground">
          <p>
            I'm Koko, a Lagos-based makeup artist with 6+ years of craft
            behind the brush. My work is rooted in restraint: dewy skin,
            considered shadow, and the kind of finish that photographs like a
            memory rather than a statement.
          </p>
          <p>
            From intimate brides to editorial sets across West Africa, every
            face is approached with the same philosophy: enhance what is
            already extraordinary, and let nothing else compete.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
          {[
            { n: "6+", l: "Years" },
            { n: "500+", l: "Faces" },
            { n: "30+", l: "Editorials" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-3xl text-primary">{s.n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-foreground/60">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
