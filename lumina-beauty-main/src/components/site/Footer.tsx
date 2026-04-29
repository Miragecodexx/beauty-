import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";

const INSTAGRAM_URL =
  "https://www.instagram.com/koko_beautyplace?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function Footer() {
  return (
    <footer className="bg-cocoa text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 lg:px-12">
        <div>
          <Link to="/" aria-label="Koko's Beauty Place — Home" className="text-ivory [&_*]:!text-ivory [&_.text-primary]:!text-primary">
            <BrandMark size="sm" />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/70">
            A Lagos-based makeup atelier devoted to quiet luxury, soft glam,
            and the art of timeless beauty.
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-primary">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/80">
            <li><Link to="/portfolio" className="link-underline">Portfolio</Link></li>
            <li><Link to="/services" className="link-underline">Services</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Book a session</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-primary">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/80">
            <li className="flex items-center gap-3">
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80">
                <Phone size={14} />
              </a>
              <span>{WHATSAPP_DISPLAY}</span>
            </li>
            <li className="flex items-center gap-3">
              <a href="mailto:coco@kokobeautyplace.com" className="text-primary hover:text-primary/80">
                <Mail size={14} />
              </a>
              <span>coco@kokobeautyplace.com</span>
            </li>
            <li className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80">
                <Instagram size={14} />
              </a>
              <span>@koko_beautyplace</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.2em] text-ivory/50 md:flex-row lg:px-12">
          <span>© {new Date().getFullYear()} Koko's Beauty Place</span>
          <span>Lagos · Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
