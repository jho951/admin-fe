import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
                                           variant = "primary",
                                           className,
                                           ...rest
                                       }) => {
    const cls = `${styles.button} ${
        variant === "secondary" ? styles.secondary : styles.primary
    } ${className ?? ""}`;

    return <button className={cls} {...rest} />;
};

export default Button;
