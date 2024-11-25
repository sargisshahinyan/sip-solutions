import { ReactNode } from "react";
import classNames from "classnames/bind.js";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const PageTitle = ({ className = "", children }: { className?: string; children?: ReactNode }) => {
  return <h1 className={cx("page-title", className)}>{children}</h1>;
};
