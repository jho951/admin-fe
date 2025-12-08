import React, { useState, forwardRef } from "react";
import styles from "./PasswordInput.module.css";
import Icon from "@shared/components/icon/Icon";

export interface PasswordInputProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "type" | "className" | "value"
    > {
    id?: string;
    label: string;
    value: string;
    hasError?: boolean;
    onClear?: () => void;
    className?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    (
        {
            id,
            label,
            value,
            hasError,
            onClear,
            onFocus,
            onBlur,
            className,
            ...rest
        },
        ref,
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const [visible, setVisible] = useState(false);

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            onBlur?.(e);
        };

        const handleToggleVisible = () => {
            setVisible((prev) => !prev);
        };

        const handleClear = () => {
            onClear?.();
        };

        const shouldFloat = isFocused || value.length > 0;

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
                        type={visible ? "text" : "password"}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        autoComplete={rest.autoComplete ?? "current-password"}
                        {...rest}
                    />

                    <label htmlFor={id} className={labelClass}>
                        {label}
                    </label>

                    {value.length > 0 && (
                        <>
                            <button
                                type="button"
                                className={styles.eyeButton}
                                onClick={handleToggleVisible}
                                aria-label={visible ? "비밀번호 숨기기" : "비밀번호 보기"}
                            >
                                <Icon
                                    name={visible ? "eye-open" : "eye-closed"}
                                    className={styles.eyeIcon}
                                />
                            </button>

                            {onClear && (
                                <button
                                    type="button"
                                    className={styles.clearButton}
                                    onClick={handleClear}
                                    aria-label={`${label} 입력 지우기`}
                                >
                                    <Icon name="close-circle" className={styles.clearIcon} />
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        );
    },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
