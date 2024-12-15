"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { Button } from "@/shared/components/Button";

import { navItems } from "@/shared/components/Navbar/navItems";

import logo from "../../../app/assets/images/logo.png";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Navbar = ({ className = "", isTransparent = false }: { className?: string; isTransparent?: boolean }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [isOpened]);

  return (
    <header
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
        <nav className={cx("menu-items", "flex-spb-c")}>
          <ul className={cx("menu-items__list", "flex-spb-c")}>
            {navItems.map((item) => (
              <li className={cx("menu-items__list-item")} key={item.title + item.href}>
                <Link className={cx("menu-items__list-item-link")} href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles["menu-btn-content"]}>
          <Button onClick={() => push("/sip/request")} className={cx("menu-btn")}>
            Request
          </Button>
        </div>
      </div>

      <button
        onClick={() => setIsOpened(!isOpened)}
        className={styles["burger-button"]}
        type="button"
        aria-label="Menu"
      >
        <FontAwesomeIcon className={styles["burger-icon"]} icon={faBars} />
      </button>

      <div className={cx("menu-mobile", { open: isOpened })}>
        <ul className={styles["menu-mobile-list"]}>
          {navItems.map((item) => (
            <li key={item.title + item.href}>
              <Link className={styles["menu-mobile-list-item-link"]} href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <div className={styles["menu-btn-content"]}>
              <Button onClick={() => push("/sip/request")} className={cx("menu-btn")}>
                Request
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
