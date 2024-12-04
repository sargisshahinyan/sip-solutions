import type { Metadata } from "next";

import Gallery from "./page";

const title = "Gallery | Sip Solution";

export const metadata: Metadata = {
  title,
  description:
    "Explore the Sip Solution gallery showcasing exquisite culinary artistry and luxury event presentations. A visual feast of elegance and sophistication.",
  keywords:
    "luxury catering gallery, catering photography, event catering images, gourmet dishes, elegant presentations, Sip Solution gallery, fine dining visuals",
  openGraph: {
    type: "website",
    title,
    description:
      "Browse the Sip Solution gallery to discover luxurious catering setups, gourmet creations, and impeccable event styling.",
    url: "https://groupofsolutions.com/sip/gallery",
  },
  twitter: {
    card: "summary",
    title,
    description:
      "A visual showcase of Sip Solution's luxury catering services, highlighting gourmet dishes and elegant event setups.",
  },
};

export default Gallery;
