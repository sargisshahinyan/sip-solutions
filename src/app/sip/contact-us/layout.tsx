import type { Metadata } from "next";

import Page from "./page";

const title = "Contact Us | Sip Solution";

export const metadata: Metadata = {
  title,
  description:
    "Get in touch with Sip Solution to elevate your event with luxury catering services. Contact us for inquiries, bookings, or more information.",
  keywords:
    "contact Sip Solution, luxury catering inquiries, event booking, catering services, customer support, Sip Solution contact",
  openGraph: {
    type: "website",
    title,
    description:
      "Reach out to Sip Solution for bespoke luxury catering services. We're here to answer your questions and help plan your perfect event.",
    url: "https://groupofsolutions.com/sip/contact-us",
  },
  twitter: {
    card: "summary",
    title,
    description:
      "Contact Sip Solution for luxury catering services and event inquiries. Let's create unforgettable experiences together.",
  },
};

export default Page;
