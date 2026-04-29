import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Editorial portrait of soft glam makeup"
          className="hero-zoom h-full w-full object-cover object-[60%_30%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/20 to-cocoa/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa/55 via-cocoa/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
          }}
          className="max-w-2xl text-ivory"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="eyebrow !text-primary"
          >
            Koko's Beauty Place · Lagos
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mt-6 font-serif text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Timeless Beauty,
            <br />
            <em className="not-italic text-primary">Perfected.</em>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mt-8 max-w-md text-base font-light text-ivory/85 md:text-lg"
          >
            A professional makeup artist crafting quietly luxurious looks for
            brides, editorials and unforgettable evenings.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Book Appointment
            </a>
            <Link
              to="/portfolio"
              className="link-underline text-[12px] uppercase tracking-[0.22em] text-ivory/90"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/70"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
