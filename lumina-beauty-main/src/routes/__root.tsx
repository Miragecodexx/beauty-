import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="eyebrow">Lost in the atelier</span>
        <h1 className="mt-6 font-serif text-7xl text-foreground">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Koko's Beauty Place · Lagos Makeup Artist — Timeless Beauty, Perfected" },
      { name: "description", content: "Lagos-based makeup artist crafting quietly luxurious bridal, soft glam and editorial looks." },
      { name: "author", content: "Koko's Beauty Place" },
      { property: "og:title", content: "Koko's Beauty Place · Lagos Makeup Artist" },
      { property: "og:description", content: "Quietly luxurious bridal, soft glam and editorial makeup in Lagos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "icon",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%233B2A26'/%3E%3Ctext x='32' y='28' font-family='cursive' font-size='20' font-weight='400' fill='%23F6F1EB' text-anchor='middle'%3EKoko%3Ctspan fill='%23C9A46C'%3E%27s%3C/tspan%3E%3C/text%3E%3Ctext x='32' y='44' font-family='Arial, sans-serif' font-size='8' font-weight='400' fill='%23F6F1EB' text-anchor='middle' letter-spacing='1'%3EBEAUTY PLACE%3C/text%3E%3C/svg%3E",
      },
      {
        rel: "shortcut icon",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%233B2A26'/%3E%3Ctext x='32' y='28' font-family='cursive' font-size='20' font-weight='400' fill='%23F6F1EB' text-anchor='middle'%3EKoko%3Ctspan fill='%23C9A46C'%3E%27s%3C/tspan%3E%3C/text%3E%3Ctext x='32' y='44' font-family='Arial, sans-serif' font-size='8' font-weight='400' fill='%23F6F1EB' text-anchor='middle' letter-spacing='1'%3EBEAUTY PLACE%3C/text%3E%3C/svg%3E",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster position="bottom-center" richColors />
    </>
  );
}
