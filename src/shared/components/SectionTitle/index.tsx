import { ReactNode } from "react";
import classNames from "classnames/bind.js";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const SectionTitle = ({ className = "", children }: { className?: string; children?: ReactNode }) => {
  return (
    <>
      <h2 className={cx("section-title", className)}>{children}</h2>
    </>
  );
};
