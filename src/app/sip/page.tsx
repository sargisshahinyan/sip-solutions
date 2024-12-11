"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import classNames from "classnames/bind";
import { useInView } from "react-intersection-observer";

import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { PageTitle } from "@/shared/components/PageTitle";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { Button } from "@/shared/components/Button";
import { Wrapper } from "@/shared/components/Wrapper";
import { SliderCarousel } from "@/shared/components/SliderCarousel";

import { galleryImages } from "@/shared/data/galleryImages";

import phoneIcon from "../assets/icons/phone-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";
import addressIcon from "../assets/icons/address-icon.svg";
import fbIcon from "../assets/icons/fb-icon.svg";
import inIcon from "../assets/icons/in-icon.svg";
import ytIcon from "../assets/icons/yt-icon.svg";
import sipVector from "../assets/images/sip-vector.svg";

import styles from "./styles.module.scss";
import { ContactUsForm } from "@/shared/components/ContactUsForm";

const cx = classNames.bind(styles);

export default function Home() {
  const [clickedElement, setClickedElement] = useState<undefined | StaticImageData>();
  const { ref, inView } = useInView({
    initialInView: true,
  });

  return (
    <>
      <Navbar className={cx("sticky-navbar", { visible: !inView })} />

      {clickedElement && (
        <SliderCarousel
          images={galleryImages}
          initialActiveImageIndex={galleryImages.indexOf(clickedElement)}
          onClose={() => setClickedElement(undefined)}
        />
      )}

      <section className={styles["top-section"]} ref={ref}>
        <div className={styles["top-section__inner-content"]}>
          <Navbar isTransparent />
          <div className={cx("flex-col-c", "top-section__inner-content__info")}>
            <SectionTitle className={cx("top-section-title")}>Lorem ipsum dolor</SectionTitle>
            <p className={styles["top-section-text"]}>
              Lorem ipsum dolor sit amet consectetur. Dui in dolor in vitae. Viverra pulvinar ornare &nbsp;
              <br />
              sapien pulvinar cursus sit. Diam fames vulputat.
            </p>
            <Button className={cx("top-section-btn")}>Request</Button>
          </div>
        </div>
      </section>

      <section className={styles["info-section"]}>
        <div className={cx("flex-col-c", "info-section-content")}>
          <PageTitle className={cx("info-section-content__title")}>Lorem ipsum dolor sit amet</PageTitle>
          <p className={cx("info-section-content__text")}>
            Lorem ipsum dolor sit amet consectetur. Nisl euismod dui nullam volutpat et. Quis mattis diam tortor diam
            volutpat quisque suspendisse cursus adipiscing. Lorem nibh aliquam quis elementum porta tincidunt lacus
            pellentesque convallis.
          </p>
          <Button className={cx("")}>About us</Button>
        </div>
      </section>

      <section className={styles["achievements-section"]}>
        <div className={styles["sip-vector-top-blue"]}>
          <Image className={styles["sip-vector-img"]} src={sipVector} alt="sipVector" />
        </div>
        <div className={styles["sip-vector-bottom-blue"]}>
          <Image className={styles["sip-vector-img"]} src={sipVector} alt="sipVector" />
        </div>
        <Wrapper className={styles["achievements-section-wrapper"]}>
          <div className={cx("flex-spb-c", "achievements-section-content")}>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>13+</div>
              <div className={styles["achievements-section-content__item-description"]}>Years in business</div>
            </div>
            <div className={styles["achievements-section-content__line"]}></div>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>285+</div>
              <div className={styles["achievements-section-content__item-description"]}>Events thrown</div>
            </div>
            <div className={styles["achievements-section-content__line"]}></div>
            <div className={styles["achievements-section-content__item"]}>
              <div className={styles["achievements-section-content__item-quantity"]}>968+</div>
              <div className={styles["achievements-section-content__item-description"]}>Coctails created</div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className={styles["gallery-section"]}>
        <div className={styles["sip-vector-bottom-white"]}>
          <Image className={styles["sip-vector-img"]} src={sipVector} alt="sipVector" />
        </div>
        <Wrapper>
          <SectionTitle className={styles["gallery-section-title"]}>Gallery</SectionTitle>
        </Wrapper>
        <div className={styles["images-carousel-wrapper"]}>
          <div className={styles["images-carousel"]}>
            {galleryImages.slice(0, 14).map((image, index) => (
              <div key={index} className={cx("images-carousel__item")} onClick={() => setClickedElement(image)}>
                <Image src={image} alt="" />
              </div>
            ))}

            {galleryImages.slice(0, 14).map((image, index) => (
              <div key={index} className={cx("images-carousel__item")} onClick={() => setClickedElement(image)}>
                <Image src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["contacts-section"]}>
        <div className={styles["sip-vector-top-blue"]}>
          <Image className={styles["sip-vector-img"]} src={sipVector} alt="sipVector" />
        </div>
        <div className={styles["sip-vector-bottom-blue"]}>
          <Image className={styles["sip-vector-img"]} src={sipVector} alt="sipVector" />
        </div>
        <Wrapper>
          <div className={cx("flex-spb", "contacts-section-content")}>
            <div className={cx("flex-col-spb", "contacts-section-content__info")}>
              <div>
                <SectionTitle className={cx("contacts-section-content__info-title")}>Lorem ipsum dolor</SectionTitle>
                <p className={styles["contacts-section-content__info-subtitle"]}>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div>
                <div className={cx("flex-c", "contacts-section-content__info-contact")}>
                  <Image
                    className={styles["contacts-section-content__info-contact__icon"]}
                    src={phoneIcon}
                    alt="phoneIcon"
                  />
                  <a className={styles["contacts-section-content__info-contact__link"]} href="tel:+17473328603">
                    +17473328603
                  </a>
                </div>

                <div className={cx("flex-c", "contacts-section-content__info-contact")}>
                  <Image
                    className={styles["contacts-section-content__info-contact__icon"]}
                    src={mailIcon}
                    alt="mailIcon"
                  />
                  <a
                    className={styles["contacts-section-content__info-contact__link"]}
                    href="mailto:sipsolutionsip@outlook.com"
                  >
                    sipsolutionsip@outlook.com
                  </a>
                </div>

                <div className={cx("flex-c", "contacts-section-content__info-contact")}>
                  <Image
                    className={styles["contacts-section-content__info-contact__icon"]}
                    src={addressIcon}
                    alt="addressIcon"
                  />
                  <span className={styles["contacts-section-content__info-contact__text"]}>
                    1319 Stanley avenue, Glendale, CA, United States
                  </span>
                </div>
              </div>
              <div>
                <div className={cx("flex-c", "contacts-section-content__info-social")}>
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61558992350036">
                    <Image
                      className={styles["contacts-section-content__info-social__icon"]}
                      src={fbIcon}
                      alt="fbIcon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sipsolutionsip">
                    <Image
                      className={styles["contacts-section-content__info-social__icon"]}
                      src={inIcon}
                      alt="inIcon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://youtube.com/@howtomakeitsip">
                    <Image
                      className={styles["contacts-section-content__info-social__icon"]}
                      src={ytIcon}
                      alt="ytIcon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <ContactUsForm className={styles["contacts-section-content__form"]} />
          </div>
        </Wrapper>
      </section>

      <Footer theme="light" showSocialIcons={false} />
    </>
  );
}
