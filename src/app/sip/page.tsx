import { Button } from "@/shared/components/Button";
import { Wrapper } from "@/shared/components/Wrapper";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { Navbar } from "@/shared/components/Navbar";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <section className={styles["top-section"]}>
        <div className={styles["top-section__inner-content"]}>
          <Navbar></Navbar>

          <div className={styles["top-section__inner-content__info"]}>
            <h1 className={styles["top-section-title"]}>Lorem ipsum dolor</h1>
            <p className={styles["top-section-text"]}>
              Lorem ipsum dolor sit amet consectetur. Dui in dolor in vitae. Viverra pulvinar ornare
              <br />
              sapien pulvinar cursus sit. Diam fames vulputat.
            </p>
            <Button className={cx("")}>Request</Button>
          </div>
        </div>
      </section>
    </>
  );
}
