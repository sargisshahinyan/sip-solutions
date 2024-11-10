import { Button } from "@/shared/components/Button";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div>
      <h1 className={styles["some-class"]}>Home page</h1>
      <Button>Hello me</Button>
    </div>
  );
}
