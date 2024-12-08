"use client";

import Image from "next/image";

import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";
import { ContactUsForm } from "@/shared/components/ContactUsForm";
import { Footer } from "@/shared/components/Footer";

import fbIcon from "./assets/fb-icon.svg";
import inIcon from "./assets/in-icon.svg";
import ytIcon from "./assets/yt-icon.svg";

import styles from "./styles.module.scss";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className={styles["contact-us"]}>
        <PageTitle>Contact us</PageTitle>
        <div className={styles.content}>
          <ContactUsForm className={styles.form} />
          <div className={styles.references}>
            <div className={styles.details}>
              <h5 className={styles.references_title}>Contact Us</h5>
              <a href="tel:+17473328603">+17473328603</a>
              <a href="mailto:sipsolutionsip@outlook.com">sipsolutionsip@outlook.com</a>
              <span>1319 Stanley avenue, Glendale, CA, United States</span>
            </div>
            <div className={styles.social}>
              <h5 className={styles.references_title}>Follow Us</h5>
              <div className={styles.social_links}>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61558992350036">
                  <Image className={styles.social_icon} src={fbIcon} alt="fbIcon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://youtube.com/@howtomakeitsip">
                  <Image className={styles.social_icon} src={ytIcon} alt="ytIcon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sipsolutionsip">
                  <Image className={styles.social_icon} src={inIcon} alt="inIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
