import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";

import { Button } from "@/shared/components/Button";

import logo from "../../../app/assets/images/logo.png";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Navbar = ({ className = "", isTransparent = false }: { className?: string; isTransparent?: boolean }) => {
  return (
    <div
      className={cx("navbar", "flex-spb-c", className, {
        transparent: isTransparent,
      })}
    >
      <div className={styles["logo"]}>
        <Link className={styles["logo-link"]} href="/sip">
          <Image className={styles["logo-img"]} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={cx("menu", "flex-spb-c")}>
        <div className={cx("menu-items", "flex-spb-c")}>
          <ul className={cx("menu-items__list", "flex-spb-c")}>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/sip/about">
                About
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/sip/why-choose-us">
                Why choose Us?
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/sip/services-and-pricing">
                Services & Pricing
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/sip/signature-cocktails">
                Signature cocktails
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/sip/sip-team">
                Sip team
              </Link>
            </li>
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/sip/gallery">
                Gallery
              </Link>
            </li>
            {/*<li className={cx("menu-items__list-item")}>*/}
            {/*  <Link className={cx("menu-items__list-item-link")} href="/">*/}
            {/*    Press*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/*<li className={cx("menu-items__list-item")}>*/}
            {/*  <Link className={cx("menu-items__list-item-link")} href="/">*/}
            {/*    Blog*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className={cx("menu-items__list-item")}>
              <Link className={cx("menu-items__list-item-link")} href="/sip/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["menu-btn-content"]}>
          <Button className={cx("menu-btn")}>Request</Button>
        </div>
      </div>
    </div>
  );
};
