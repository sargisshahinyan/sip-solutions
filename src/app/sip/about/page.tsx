import styles from "./styles.module.scss";
import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";
import { Footer } from "@/shared/components/Footer";
import { Wrapper } from "@/shared/components/Wrapper";
import classNames from "classnames/bind";

import Image from "next/image";

import img1 from "@/app/assets/images/about/1.jpeg";
import img2 from "@/app/assets/images/about/2.jpg";
import img3 from "@/app/assets/images/about/3.jpeg";
import { SectionTitle } from "@/shared/components/SectionTitle";

const cx = classNames.bind(styles);

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles["about"]}>
        <Wrapper>
          <PageTitle>About</PageTitle>
          <div className={styles["about-content"]}>
            <div className={cx("flex-spb-c", "about-content-item")}>
              <div className={styles["about-content-item__img"]}>
                <Image src={img1} alt="img1" />
              </div>
              <div className={styles["about-content-item__desc"]}>
                <SectionTitle className={styles["about-content-item__desc-title"]}>About Sipology</SectionTitle>
                <p>
                  At Sip Solution, we&#39;re more than just a team; we&#39;re architects of unforgettable Luxury
                  experiences. With over 13 years of hospitality mastery, we infuse warmth and authenticity into every
                  event specifically, depending on your liking and preferences.
                  <br />
                  From crafting vibrant and elegant cocktails that reflect your unique style to delivering impeccable
                  service, we ensure each moment is filled with joy and surprise with us.
                </p>
                <p>
                  Join us on a journey where happiness is always on the menu. Welcome to Sip Solution, where every sip
                  is a celebration of life&#39;s beautiful moments.
                </p>
              </div>
            </div>
            <div className={cx("flex-spb-c", "about-content-item")}>
              <div className={styles["about-content-item__img"]}>
                <Image src={img2} alt="img2" />
              </div>
              <div className={styles["about-content-item__desc"]}>
                <SectionTitle className={styles["about-content-item__desc-title"]}>Our Values</SectionTitle>
                <p>
                  At Sip Solution, our values are our essence, shaping our culture and guiding every action.
                  <br />
                  We celebrate your individuality by delivering exceptional service, warmth, authenticity, and genuine
                  care which defines our commitment to excellence.
                </p>
              </div>
            </div>
            <div className={cx("flex-spb-c", "about-content-item")}>
              <div className={styles["about-content-item__img"]}>
                <Image src={img3} alt="img3" />
              </div>
              <div className={styles["about-content-item__desc"]}>
                <SectionTitle className={styles["about-content-item__desc-title"]}>Our Mission</SectionTitle>
                <p>
                  At Sip Solution, we create Luxury bar experiences celebrating your individuality, crafting cocktails
                  that reflect your personality. From casual gatherings to weddings, we prioritize quality service,
                  ensuring every sip brings you joy, surprise and relish, fostering a journey of celebration.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
