import React, { useState, forwardRef } from "react";
import styles from "./TextInput.module.css";
import Icon from "@shared/components/icon/Icon";

export interface TextInputProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "type" | "className"
    > {
    id?: string;
    label: string;
    type?: string;
    hasError?: boolean;
    clearable?: boolean;
    onClear?: () => void;
    className?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            id,
            label,
            type = "text",
            value,
            hasError,
            clearable = true,
            onClear,
            onFocus,
            onBlur,
            className,
            ...rest
        },
        ref,
    ) => {
        const [isFocused, setIsFocused] = useState(false);

        const stringValue =
            typeof value === "string" || typeof value === "number"
                ? String(value)
                : "";

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            onBlur?.(e);
        };

        const handleClear = () => {
            onClear?.();
        };

        const shouldFloat = isFocused || stringValue.length > 0;

        const wrapperClass = [
            styles.wrapper,
            hasError ? styles.hasError : "",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        const labelClass = [
            styles.label,
            shouldFloat ? styles.labelFloat : "",
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div className={wrapperClass}>
                <div className={styles.field}>
                    <input
                        id={id}
                        ref={ref}
                        className={styles.input}
                        type={type}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        {...rest}
                    />
                    <label className={labelClass} htmlFor={id}>
                        {label}
                    </label>
                    {clearable && stringValue.length > 0 && onClear && (
                        <button
                            type="button"
                            className={styles.clearButton}
                            onClick={handleClear}
                            aria-label={`${label} 입력 지우기`}
                        >
                            <Icon name="close-circle" className={styles.clearIcon} />
                        </button>
                    )}
                </div>
            </div>
        );
    },
);

TextInput.displayName = "TextInput";

export default TextInput;
