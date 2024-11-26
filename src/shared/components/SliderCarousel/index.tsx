"use client";

import { ElementRef, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

import styles from "./styles.module.scss";

export const ImageGallery = ({
  images,
  initialActiveImageIndex,
}: {
  images: Array<string | StaticImageData>;
  initialActiveImageIndex?: number;
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(initialActiveImageIndex ?? 0);

  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const activeImage = images[activeImageIndex];
  return (
    <dialog ref={dialogRef} className={styles["slider-carousel-dialog"]}>
      <div className={styles["slider-carousel-wrapper"]}>
        <button
          className={styles["arrow-button"]}
          onClick={() => setActiveImageIndex((current) => (current + 1 !== images.length ? current + 1 : 0))}
        >
          <FontAwesomeIcon className={styles.arrow} icon={faChevronLeft} />
        </button>
        {typeof activeImage === "object" ? (
          <Image className={styles["slider-carousel-image"]} src={activeImage} alt="" />
        ) : (
          <img className={styles["slider-carousel-image"]} src={activeImage} alt="" />
        )}
        <button
          className={styles["arrow-button"]}
          onClick={() => setActiveImageIndex((current) => (current === 0 ? images.length - 1 : current - 1))}
        >
          <FontAwesomeIcon className={styles.arrow} icon={faChevronRight} />
        </button>
      </div>
    </dialog>
  );
};
