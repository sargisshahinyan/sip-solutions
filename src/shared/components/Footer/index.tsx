import classnames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classnames.bind(styles);

export const Footer = ({
  theme = "dark",
  showSocialIcons = true,
}: {
  theme?: "light" | "dark";
  showSocialIcons?: boolean;
}) => {
  return (
    <div className={cx("footer", theme, { "with-social": showSocialIcons })}>
      <p className={styles["footer-text"]}>Copyright © 2024 Sip Solution - All Rights Reserved.</p>
      {showSocialIcons && <span>social</span>}
    </div>
  );
};
