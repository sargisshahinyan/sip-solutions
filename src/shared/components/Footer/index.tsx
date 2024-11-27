import classnames from "classnames/bind";

import styles from "./styles.module.scss";

import Image from "next/image";

import fbIcon from "@/app/assets/icons/fb-icon.svg";
import inIcon from "@/app/assets/icons/in-icon.svg";
import ytIcon from "@/app/assets/icons/yt-icon.svg";
import Link from "next/link";

const cx = classnames.bind(styles);

export const Footer = ({
  theme = "dark",
  showSocialIcons = true,
}: {
  theme?: "light" | "dark";
  showSocialIcons?: boolean;
}) => {
  return (
    <div className={cx("footer", "flex-spb-c", theme, { "with-social": showSocialIcons })}>
      <p className={styles["footer-text"]}>Copyright © 2024 Sip Solution - All Rights Reserved.</p>
      {showSocialIcons && (
        <div className={cx("flex-c", "footer-social")}>
          <Link href="/">
            <Image className={styles["footer-social__icon"]} src={fbIcon} alt="fbIcon" />
          </Link>
          <Link href="/">
            <Image className={styles["footer-social__icon"]} src={inIcon} alt="inIcon" />
          </Link>
          <Link href="/">
            <Image className={styles["footer-social__icon"]} src={ytIcon} alt="ytIcon" />
          </Link>
        </div>
      )}
    </div>
  );
};
