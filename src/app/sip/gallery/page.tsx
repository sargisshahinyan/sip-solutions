import { Navbar } from "@/shared/components/Navbar";
import { PageTitle } from "@/shared/components/PageTitle";

import { GallerySection } from "./components/GallerySection";

import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/4.jpeg";
import img5 from "./assets/5.jpeg";

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
              { type: "image", src: img1 },
              { type: "image", src: img2 },
              { type: "image", src: img3 },
              { type: "image", src: img4 },
              { type: "image", src: img5 },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
