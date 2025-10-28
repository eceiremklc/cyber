import React from "react";
import styles from "./CustomInput.module.scss";
import { Flex } from "antd";

type InputProps = {
  type: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
};

const CustomInput: React.FC<InputProps> = ({
  type,
  placeholder,
  label,
  isRequired,
  onChange,
  disabled,
}) => {
  return (
    <Flex vertical>
      {isRequired ? (
        <label className={styles.label}>
          {label} <span className={styles.required}>*</span>
        </label>
      ) : (
        <label className={styles.label}>{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={styles.customInput}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </Flex>
  );
};

export default CustomInput;
