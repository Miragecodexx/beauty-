import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparentEligible = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentEligible || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        solid
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" aria-label="Koko's Beauty Place — Home">
          <BrandMark size="sm" className={solid ? "" : "[&_*]:text-ivory [&_.text-primary]:text-primary"} />
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`link-underline text-[13px] uppercase tracking-[0.18em] ${solid ? "text-foreground/80" : "text-ivory/80"} transition-colors hover:${solid ? "text-foreground" : "text-ivory"}`}
                activeOptions={{ exact: true }}
                activeProps={{ className: solid ? "text-foreground" : "text-ivory" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${solid ? "text-foreground" : "text-ivory"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden border-t border-border bg-ivory"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm uppercase tracking-[0.18em] text-foreground/80"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-block bg-primary px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-primary-foreground"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
