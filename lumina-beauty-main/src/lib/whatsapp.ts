export const WHATSAPP_NUMBER = "2349076736246";
export const WHATSAPP_DISPLAY = "+234 907 673 6246";

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? "Hello Koko, I'd like to book a makeup appointment.",
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
