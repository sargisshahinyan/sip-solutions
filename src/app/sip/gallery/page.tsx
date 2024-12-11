"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";

import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";
import { Footer } from "@/shared/components/Footer";
import { SliderCarousel } from "@/shared/components/SliderCarousel";
import { GallerySection } from "./components/GallerySection";

import { galleryImages } from "@/shared/data/galleryImages";

import styles from "./styles.module.scss";

const GalleryPage = () => {
  const [clickedElement, setClickedElement] = useState<undefined | StaticImageData>();

  return (
    <>
      <Navbar />
      {clickedElement && (
        <SliderCarousel
          images={galleryImages}
          initialActiveImageIndex={galleryImages.indexOf(clickedElement)}
          onClose={() => setClickedElement(undefined)}
        />
      )}
      <main className={styles.gallery}>
        <PageTitle>Gallery</PageTitle>
        <div className={styles.content}>
          <GallerySection
            assets={galleryImages.slice(0, 5).map((image) => ({
              type: "image",
              src: image,
            }))}
            onClick={(image) => setClickedElement(image)}
          />
          <GallerySection
            placement="right"
            assets={galleryImages.slice(5, 10).map((image) => ({
              type: "image",
              src: image,
            }))}
            onClick={(image) => setClickedElement(image)}
          />
          <GallerySection
            assets={galleryImages.slice(10, 15).map((image) => ({
              type: "image",
              src: image,
            }))}
            onClick={(image) => setClickedElement(image)}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
