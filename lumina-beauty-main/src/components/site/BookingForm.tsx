import { useState, type FormEvent } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { whatsappLink } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid number").max(30),
  date: z.string().trim().min(1, "Select a date"),
  service: z.string().trim().min(1, "Select a service"),
  location: z.string().trim().min(2, "Where will the session be?").max(120),
  notes: z.string().trim().max(500).optional(),
});

const services = [
  "Bridal Glam",
  "Soft & Natural Beat",
  "Traditional Bridal Looks",
  "Event | Owambe Glam",
  "Editorial & Events",
  "Makeup Consultation",
];

export function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      setSubmitting(false);
      toast.error("Please complete the required fields.");
      return;
    }
    setErrors({});
    const { name, phone, date, service, location, notes } = result.data;
    const message =
      `Hello Koko, I'd like to book an appointment.\n\n` +
      `Name: ${name}\nPhone: ${phone}\nDate: ${date}\nService: ${service}\nLocation: ${location}` +
      (notes ? `\nNotes: ${notes}` : "");
    toast.success("Request ready — opening WhatsApp to confirm.");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitting(false);
  };

  const field = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-0 transition-colors";
  const label = "block text-[11px] uppercase tracking-[0.22em] text-foreground/60";

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={onSubmit}
      noValidate
      className="mx-auto grid max-w-2xl gap-8"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Name</label>
          <input id="name" name="name" className={field} placeholder="Your full name" maxLength={80} />
          {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+234 ..." maxLength={30} />
          {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className={label} htmlFor="date">Date</label>
          <input id="date" name="date" type="date" className={field} />
          {errors.date && <p className="mt-2 text-xs text-destructive">{errors.date}</p>}
        </div>
        <div>
          <label className={label} htmlFor="service">Service</label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="mt-2 text-xs text-destructive">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="location">Location</label>
        <input id="location" name="location" className={field} placeholder="Studio, hotel, home address..." maxLength={120} />
        {errors.location && <p className="mt-2 text-xs text-destructive">{errors.location}</p>}
      </div>

      <div>
        <label className={label} htmlFor="notes">Notes <span className="normal-case tracking-normal text-foreground/40">(optional)</span></label>
        <textarea id="notes" name="notes" rows={3} className={field + " resize-none"} placeholder="Tell me about the event..." maxLength={500} />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-3 bg-primary px-10 py-4 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Booking Request"}
        </button>
        <p className="mt-4 text-xs text-foreground/50">
          On submit you'll be redirected to WhatsApp with your details prefilled.
        </p>
      </div>
    </motion.form>
  );
}
