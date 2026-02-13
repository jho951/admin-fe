/**
 * @file src/shared/components/switch/Switch.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
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
