import { ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Wrapper = ({ className = "", children }: { className?: string; children?: ReactNode }) => {
  return <div className={cx("wrapper", className)}>{children}</div>;
};
