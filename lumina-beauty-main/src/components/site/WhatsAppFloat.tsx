import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-soft fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-luxe transition-transform duration-300 hover:-translate-y-0.5"
    >
      <MessageCircle size={22} />
    </a>
  );
}
