"use client";

import { ElementRef, useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

import styles from "./styles.module.scss";

export const ImageGallery = ({
  images,
  initialActiveImageIndex,
  onClose,
}: {
  images: Array<string | StaticImageData>;
  initialActiveImageIndex?: number;
  onClose?: () => void;
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(initialActiveImageIndex ?? 0);

  const dialogRef = useRef<ElementRef<"dialog">>(null);

  const onPrev = useCallback(() => {
    setActiveImageIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);
  const onNext = useCallback(() => {
    setActiveImageIndex((current) => (current + 1 !== images.length ? current + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
        return;
      }

      switch (e.key) {
        case "ArrowLeft": {
          onPrev();
          break;
        }
        case "ArrowRight": {
          onNext();
          break;
        }
      }
    };

    window.addEventListener("keydown", onKeyDown, false);

    return () => {
      window.removeEventListener("keydown", onKeyDown, false);
    };
  }, [onNext, onPrev]);

  const activeImage = images[activeImageIndex];
  return (
    <dialog onClose={onClose} ref={dialogRef} className={styles["slider-carousel-dialog"]}>
      <div className={styles["slider-carousel-wrapper"]}>
        <button className={styles["arrow-button"]} onClick={onPrev}>
          <FontAwesomeIcon className={styles.arrow} icon={faChevronLeft} />
        </button>
        {typeof activeImage === "object" ? (
          <Image className={styles["slider-carousel-image"]} src={activeImage} alt="" />
        ) : (
          <img className={styles["slider-carousel-image"]} src={activeImage} alt="" />
        )}
        <button className={styles["arrow-button"]} onClick={onNext}>
          <FontAwesomeIcon className={styles.arrow} icon={faChevronRight} />
        </button>
      </div>
    </dialog>
  );
};
