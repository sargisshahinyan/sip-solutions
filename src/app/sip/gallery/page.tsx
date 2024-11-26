"use client";

import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";

import { GallerySection } from "./components/GallerySection";
import { ImageGallery } from "@/shared/components/SliderCarousel";

import img1 from "@/app/assets/images/gallery/1.jpeg";
import img2 from "@/app/assets/images/gallery/2.jpeg";
import img3 from "@/app/assets/images/gallery/3.jpeg";
import img4 from "@/app/assets/images/gallery/4.jpeg";
import img5 from "@/app/assets/images/gallery/5.jpeg";
import img6 from "@/app/assets/images/gallery/6.jpeg";
import img7 from "@/app/assets/images/gallery/7.jpeg";
import img8 from "@/app/assets/images/gallery/8.jpeg";
import img9 from "@/app/assets/images/gallery/9.jpeg";
import img10 from "@/app/assets/images/gallery/10.jpeg";
import img11 from "@/app/assets/images/gallery/11.jpeg";
import img12 from "@/app/assets/images/gallery/12.jpeg";
import img13 from "@/app/assets/images/gallery/13.jpeg";
import img14 from "@/app/assets/images/gallery/14.jpeg";
import img15 from "@/app/assets/images/gallery/15.jpeg";

import styles from "./styles.module.scss";
import { useState } from "react";

const GalleryPage = () => {
  const [clickedElement, setClickedElement] = useState<undefined | typeof img1>();

  return (
    <>
      <Navbar />
      {clickedElement && (
        <ImageGallery
          images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]}
          initialActiveImageIndex={[
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12,
            img13,
            img14,
            img15,
          ].indexOf(clickedElement)}
          onClose={() => setClickedElement(undefined)}
        />
      )}
      <main className={styles.gallery}>
        <PageTitle>Gallery</PageTitle>
        <div className={styles.content}>
          <GallerySection
            assets={[
              { type: "image", src: img1 },
              { type: "image", src: img2 },
              { type: "image", src: img3 },
              { type: "image", src: img4 },
              { type: "image", src: img5 },
            ]}
            onClick={(image) => setClickedElement(image)}
          />
          <GallerySection
            placement="right"
            assets={[
              { type: "image", src: img6 },
              { type: "image", src: img7 },
              { type: "image", src: img8 },
              { type: "image", src: img9 },
              { type: "image", src: img10 },
            ]}
            onClick={(image) => setClickedElement(image)}
          />
          <GallerySection
            assets={[
              { type: "image", src: img11 },
              { type: "image", src: img12 },
              { type: "image", src: img13 },
              { type: "image", src: img14 },
              { type: "image", src: img15 },
            ]}
            onClick={(image) => setClickedElement(image)}
          />
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
