import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  {
    text: "Koko made me feel like the most luminous version of myself on my wedding day. Nothing felt 'done' — only quietly perfect.",
    name: "Adaeze O.",
    role: "Bride, Lagos",
  },
  {
    text: "The most considered makeup artist I've worked with. Her restraint is what makes her work feel editorial without ever feeling cold.",
    name: "Kemi A.",
    role: "Creative Director",
  },
  {
    text: "Calm, precise, deeply intuitive. I've booked her for every important evening since.",
    name: "Tolu E.",
    role: "Private Client",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <span className="eyebrow">Words from Clients</span>
      <div className="relative mt-10 min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl"
          >
            <span className="text-primary">"</span>
            {quotes[i].text}
            <span className="text-primary">"</span>
            <footer className="mt-8 text-[11px] uppercase tracking-[0.25em] text-foreground/60">
              {quotes[i].name} · {quotes[i].role}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {quotes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Testimonial ${idx + 1}`}
            className={`h-px transition-all duration-500 ${
              idx === i ? "w-10 bg-primary" : "w-6 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
