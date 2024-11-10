import { ReactNode } from "react";
import classNames from "classnames/bind.js";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Button = ({ className = "", children }: { className?: string; children?: ReactNode }) => {
  return (
    <button type="button" className={cx("button", className)}>
      {children}
    </button>
  );
};
