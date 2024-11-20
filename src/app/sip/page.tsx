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
          {/*<Wrapper>*/}
          {/*  /!*<h1 className={styles["some-class"]}>Home page</h1>*!/*/}
          {/*  /!*<Button className={cx("button-1", "some-class")}>Hello me</Button>*!/*/}
          {/*</Wrapper>*/}
          <Navbar></Navbar>
        </div>
      </section>
    </>
  );
}
