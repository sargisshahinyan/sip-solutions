import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";

import { GallerySection } from "./components/GallerySection";

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

const GalleryPage = () => {
  return (
    <>
      <Navbar />
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
          />
          <GallerySection
            assets={[
              { type: "image", src: img11 },
              { type: "image", src: img12 },
              { type: "image", src: img13 },
              { type: "image", src: img14 },
              { type: "image", src: img15 },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
