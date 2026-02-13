/**
 * @file src/shared/components/button/Button.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import styles from "./Button.module.css";
import type {ButtonProps} from "@shared/components/button/Button.types.ts";


const Button: React.FC<ButtonProps> = ({
                                           variant = "primary",
                                           className,
                                           ...rest
                                       }) => {
    return <button className={`${styles.button} ${variant === "secondary" ? styles.secondary : styles.primary} ${className ?? ""}`} {...rest} />;
};

export default Button;
