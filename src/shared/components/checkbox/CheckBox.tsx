import React from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "type" | "children"
    > {
    label?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
                                               label,
                                               className,
                                               ...rest
                                           }) => {
    return (
        <label className={[styles.wrapper, className].filter(Boolean).join(" ")}>
            <input className={styles.input} type="checkbox" {...rest} />
            <span className={styles.box} aria-hidden="true">
        ✓
      </span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};

export default Checkbox;
