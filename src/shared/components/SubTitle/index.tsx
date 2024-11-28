import { ReactNode } from "react";
import classNames from "classnames/bind.js";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const SubTitle = ({ className = "", children }: { className?: string; children?: ReactNode }) => {
  return <p className={cx("sub-title", className)}>{children}</p>;
};
