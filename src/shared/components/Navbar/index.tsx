"use client";

import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/components/Button";

import { navItems } from "@/shared/components/Navbar/navItems";

import logo from "../../../app/assets/images/logo.png";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export const Navbar = ({ className = "", isTransparent = false }: { className?: string; isTransparent?: boolean }) => {
  const { push } = useRouter();

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
    </header>
  );
};
