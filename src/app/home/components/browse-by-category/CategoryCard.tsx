import React, { ReactNode } from "react";
import styles from "./Browse.module.scss";
import { Flex } from "antd";

interface CategoryCardProps {
  icon: ReactNode;
  header: string;
  onClick?: () => void;
}
const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  header,
  onClick,
}) => {
  return (
    <button className={styles.card} onClick={onClick}>
      <Flex vertical align="center" justify="center">
        {icon}
        <p>{header}</p>
      </Flex>
    </button>
  );
};

export default CategoryCard;
