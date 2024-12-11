import styles from "./styles.module.scss";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { PageTitle } from "@/shared/components/PageTitle";
import { Wrapper } from "@/shared/components/Wrapper";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function WhyChooseUsPage() {
  return (
    <>
      <Navbar />
      <main className={styles["why-choose-us"]}>
        <Wrapper>
          <PageTitle>Why choose Us?</PageTitle>
          <div className={cx("why-choose-us-content", "flex-col")}>
            <div className={cx("why-choose-us-content__row", "flex-spb-c")}>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>1</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>
                    We provide a curated shopping list which will help you choose the needed products and their quantity
                    for your event.
                  </p>
                </div>
              </div>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>2</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>We use elegant glassware which emphasizes the high-leve, eco-friendly experience we offer.</p>
                </div>
              </div>
            </div>
            <div className={cx("why-choose-us-content__row", "flex-spb-c")}>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>3</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Over 13 years of experience in crafting unforgettable events for over 8500 happy clients.</p>
                </div>
              </div>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>4</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Our professionals are award winning, licensed and certified specialists who know what you need.</p>
                </div>
              </div>
            </div>
            <div className={cx("why-choose-us-content__row", "flex-spb-c")}>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>5</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Comprehensive insurance for peace of mind.</p>
                </div>
              </div>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>6</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>You’ll find professional and caring service.</p>
                </div>
              </div>
            </div>
            <div className={cx("why-choose-us-content__row", "flex-spb-c")}>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>7</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Expert gourmet food pairing opportunity.</p>
                </div>
              </div>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>8</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Mastery of fine spirits for perfect serves.</p>
                </div>
              </div>
            </div>
            <div className={cx("why-choose-us-content__row", "flex-spb-c")}>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>9</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Unparalleled gastronomic excellence.</p>
                </div>
              </div>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>10</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Surprise gift created specifically for your event.</p>
                </div>
              </div>
            </div>
            <div className={cx("why-choose-us-content__row", "flex-spb-c")}>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>11</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Luxury rental and design services for outstanding special occasions.</p>
                </div>
              </div>
              <div className={styles["why-choose-us-content__row-item"]}>
                <div className={styles["why-choose-us-content__row-item-number"]}>12</div>
                <div className={styles["why-choose-us-content__row-item-text"]}>
                  <p>Guaranteed WOW effect.</p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
