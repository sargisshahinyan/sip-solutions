import { Button } from "@/shared/components/Button";
import { Wrapper } from "@/shared/components/Wrapper";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <section className={styles["top-section"]}>
        <div className={styles["top-section__inner-content"]}>
          <Navbar></Navbar>

          <div className={cx("flex-col-c", "top-section__inner-content__info")}>
            <h1 className={styles["top-section-title"]}>Lorem ipsum dolor</h1>
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
          <h1 className={cx("page-title", "info-section-content__title")}>Lorem ipsum dolor sit amet</h1>
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
          <div className={cx("flex-spar-c", "achievements-section-content")}>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>35+</div>
              <div className={styles["achievements-section-content__item-description"]}>Years in business</div>
            </div>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>285+</div>
              <div className={styles["achievements-section-content__item-description"]}>Events thrown</div>
            </div>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>968+</div>
              <div className={styles["achievements-section-content__item-description"]}>Coctails created</div>
            </div>
          </div>
        </Wrapper>
      </section>
      <Footer></Footer>
    </>
  );
}
