import { ReactNode } from "react";

import styles from "./styles.module.scss";

export const Footer = ({}: { className?: string; children?: ReactNode }) => {
  return (
    <div className={styles["footer"]}>
      <p className={styles["footer-text"]}>Copyright © 2024 Sip Solution - All Rights Reserved.</p>
    </div>
  );
};
