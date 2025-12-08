import React from "react";
import styles from "./Select.module.css";

export interface SelectOption {
    value: string | number;
    label: string;
}

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    hasError?: boolean;
}

const Select: React.FC<SelectProps> = ({className, options, hasError, ...rest}) => {
    const cls = [
        styles.select,
        hasError ? styles.selectError : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={styles.wrapper}>
            <select className={cls} {...rest}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <span className={styles.arrow} aria-hidden="true">
        ▾
      </span>
        </div>
    );
};

export default Select;
