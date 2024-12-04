import type { ComponentProps } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Checkbox = ({ className, ...props }: Omit<ComponentProps<"input">, "type">) => {
  return <input className={cx("checkbox", className)} type="checkbox" {...props} />;
};
