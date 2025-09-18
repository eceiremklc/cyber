import React from "react";
import styles from "./BannerBottom.module.scss";
import { Flex } from "antd";
import Image from "next/image";
import { ArrayTitleProduct, SimpleProduct } from "./ProductData";

interface ProductCardProps {
  product: SimpleProduct | ArrayTitleProduct;
  className: string;
  textClass: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  textClass,
}) => {
  let imageClass = "";
  if (className === styles.playStation) {
    imageClass = styles.playStationImage;
  } else if (className === styles.airpods) {
    imageClass = styles.airpodsImage;
  } else if (className === styles.visionPro) {
    imageClass = styles.vpImage;
  }

  return (
    <Flex className={className} justify="space-between">
      <div className={styles.imageWrapper}>
        <Image
          src={product.src}
          alt={product.alt}
          width={product.width}
          height={product.height}
          className={imageClass}
          priority={className.includes("playStation")}
        />
      </div>
      <Flex vertical justify="center" className={textClass}>
        <h3>
          {Array.isArray(product.title)
            ? product.title.map((part: string, index: number) => (
                <React.Fragment key={index}>
                  {part === "Max" || part === "Pro" ? (
                    <strong>{part}</strong>
                  ) : (
                    part
                  )}{" "}
                </React.Fragment>
              ))
            : product.title}
        </h3>
        <p className={styles.bannerText}>{product.description}</p>
      </Flex>
    </Flex>
  );
};
