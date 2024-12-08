"use client";

import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";
import { ContactUsForm } from "@/shared/components/ContactUsForm";

import styles from "./styles.module.scss";
import { Footer } from "@/shared/components/Footer";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className={styles["contact-us"]}>
        <PageTitle>Contact us</PageTitle>
        <div className={styles.content}>
          <ContactUsForm className={styles.form} />
        </div>
      </main>
      <Footer />
    </>
  );
}
