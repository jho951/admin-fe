/**
 * @file src/shared/components/checkbox/CheckBox.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
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
