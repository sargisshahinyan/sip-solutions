import { ComponentProps } from "react";
import classNames from "classnames/bind.js";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Button = ({ className = "", children, ...props }: ComponentProps<"button">) => {
  return (
    <button className={cx("button", className)} {...props}>
      {children}
    </button>
  );
};
