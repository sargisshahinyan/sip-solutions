import { ReactNode } from "react";
import classNames from "classnames/bind.js";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const SectionTitleSmall = ({ className = "", children }: { className?: string; children?: ReactNode }) => {
  return <h3 className={cx("section-title-small", className)}>{children}</h3>;
};
