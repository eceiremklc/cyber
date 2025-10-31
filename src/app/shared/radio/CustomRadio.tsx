import React from "react";
import styles from "./CustomRadio.module.scss";

type Props = {
  label?: string;
  checked: boolean;
  onChange: () => void;
};

const CustomRadio: React.FC<Props> = ({ label, checked, onChange }) => {
  return (
    <label className={styles.wrapper}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      <span className={styles.circle} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default CustomRadio;
