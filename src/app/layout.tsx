import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./generals.scss";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Sip Solution | Luxury Catering Services";

export const metadata: Metadata = {
  title,
  description:
    "Sip Solution offers luxury catering services, creating unforgettable culinary experiences for your special occasions. Discover elegance and sophistication in every detail.",
  keywords:
    "luxury catering, catering services, gourmet catering, elegant catering, bespoke catering, fine dining events, event catering, Sip Solution",
  openGraph: {
    type: "website",
    title,
    description:
      "Experience the finest in luxury catering with Sip Solution. Elevate your events with gourmet culinary creations and impeccable service.",
    url: "https://groupofsolutions.com/sip",
  },
  twitter: {
    card: "summary",
    title,
    description:
      "Sip Solution provides bespoke luxury catering for your most important occasions. Taste sophistication and elegance.",
  },
  icons: [
    {
      url: "/meta-files/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
      rel: "icon",
    },
    {
      url: "/meta-files/favicon.svg",
      type: "image/svg+xml",
    },
    {
      url: "/meta-files/favicon.ico",
      rel: "shortcut icon",
    },
    {
      url: "/meta-files/apple-touch-icon.png",
      sizes: "180x180",
      rel: "apple-touch-icon",
    },
    {
      url: "/meta-files/site.webmanifest",
      rel: "manifest",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
