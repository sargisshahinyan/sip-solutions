import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

type GalleryAsset =
  | {
      type: "image";
      src: StaticImageData;
    }
  | {
      type: "video";
      src: string;
    };

interface GallerySectionProps {
  assets: Array<GalleryAsset>;
  placement?: "left" | "right";
  onClick?: (image: StaticImageData) => void;
}

const cx = classNames.bind(styles);

export const GallerySection = ({ assets, placement = "left", onClick }: GallerySectionProps) => {
  return (
    <section className={cx("gallery-section", { [placement]: true })}>
      {assets.map((asset, index) => (
        <Fragment key={index}>
          {asset.type === "image" ? (
            <Image onClick={() => onClick?.(asset.src)} className={styles.asset} src={asset.src} alt="" />
          ) : (
            <video className={styles.asset} src={asset.src} controls />
          )}
        </Fragment>
      ))}
    </section>
  );
};
