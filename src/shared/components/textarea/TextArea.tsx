/**
 * @file src/shared/components/textarea/TextArea.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import styles from "./TextArea.module.css";

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    hasError?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({className, hasError, rows = 4, ...rest}) => {
    const cls = [
        styles.textarea,
        hasError ? styles.textareaError : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return <textarea className={cls} rows={rows} {...rest} />;
};

export default TextArea;
