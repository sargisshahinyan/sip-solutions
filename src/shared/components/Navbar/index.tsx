import { ReactNode } from "react";
import classNames from "classnames/bind";
import { Button } from "@/shared/components/Button";

import Image from "next/image";
import logo from "../../../app/assets/images/logo.png";

import Link from "next/link";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Navbar = ({ className = "" }: { className?: string; children?: ReactNode }) => {
  return (
    <div className={cx("navbar", "flex-sp-c", className)}>
      <div className={styles["logo"]}>
        <Link className={styles["logo-link"]} href="/">
          <Image className={styles["logo-img"]} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={cx("menu", "flex-sp-c")}>
        <div className={cx("menu-items", "flex-sp-c")}>
          <ul className={cx("menu-items__list", "flex-sp-c")}>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                About
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Why choose Us?
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Services & Pricing
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Signature cocktails
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Sip team
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Gallery
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Press
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Blog
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["menu-btn"]}>
          <Button className={cx("button-1", "some-class")}>Request</Button>
        </div>
      </div>
    </div>
  );
};
