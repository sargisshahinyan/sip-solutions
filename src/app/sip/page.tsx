import { Button } from "@/shared/components/Button";
import { Wrapper } from "@/shared/components/Wrapper";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { PageTitle } from "@/shared/components/PageTitle";
import { SectionTitle } from "@/shared/components/SectionTitle";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <section className={styles["top-section"]}>
        <div className={styles["top-section__inner-content"]}>
          <Navbar></Navbar>
          <div className={cx("flex-col-c", "top-section__inner-content__info")}>
            <SectionTitle className={cx("top-section-title")}>Lorem ipsum dolor</SectionTitle>
            <p className={styles["top-section-text"]}>
              Lorem ipsum dolor sit amet consectetur. Dui in dolor in vitae. Viverra pulvinar ornare
              <br />
              sapien pulvinar cursus sit. Diam fames vulputat.
            </p>
            <Button className={cx("top-section-btn")}>Request</Button>
          </div>
        </div>
      </section>

      <section className={styles["info-section"]}>
        <div className={cx("flex-col-c", "info-section-content")}>
          <PageTitle className={cx("info-section-content__title")}>Lorem ipsum dolor sit amet</PageTitle>
          <p className={cx("info-section-content__text")}>
            Lorem ipsum dolor sit amet consectetur. Nisl euismod dui nullam volutpat et. Quis mattis diam tortor diam
            volutpat quisque suspendisse cursus adipiscing. Lorem nibh aliquam quis elementum porta tincidunt lacus
            pellentesque convallis.
          </p>
          <Button className={cx("")}>About us</Button>
        </div>
      </section>

      <section className={styles["achievements-section"]}>
        <Wrapper>
          <div className={cx("flex-spb-c", "achievements-section-content")}>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>35+</div>
              <div className={styles["achievements-section-content__item-description"]}>Years in business</div>
            </div>
            <div className={styles["achievements-section-content__line"]}></div>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>285+</div>
              <div className={styles["achievements-section-content__item-description"]}>Events thrown</div>
            </div>
            <div className={styles["achievements-section-content__line"]}></div>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>968+</div>
              <div className={styles["achievements-section-content__item-description"]}>Coctails created</div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className={styles["gallery-section"]}>
        <Wrapper>
          <SectionTitle>Gallery</SectionTitle>
        </Wrapper>
      </section>

      <section className={styles["contacts-section"]}>
        <Wrapper>
          <div className={cx("flex-spb-st", "contacts-section-content")}>
            <div className={cx("flex-col-spb-st", "contacts-section-content__info")}>
              <div>
                <SectionTitle className={cx("contacts-section-content__info-title")}>Lorem ipsum dolor</SectionTitle>
                <p className={styles["contacts-section-content__info-subtitle"]}>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div>{/*  contacts */}</div>
              <div>{/*  socials */}</div>
            </div>
            <div className={styles["contacts-section-content__form"]}></div>
          </div>
        </Wrapper>
      </section>

      <Footer></Footer>
    </>
  );
}
