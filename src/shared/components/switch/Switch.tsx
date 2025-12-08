import React from "react";
import styles from "./Switch.module.css";

export interface SwitchProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: React.ReactNode;
}

const Switch: React.FC<SwitchProps> = ({
                                           label,
                                           className,
                                           ...rest
                                       }) => {
    return (
        <label className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <span className={styles.track}>
        <input className={styles.input} type="checkbox" {...rest} />
        <span className={styles.thumb} />
      </span>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};

export default Switch;
