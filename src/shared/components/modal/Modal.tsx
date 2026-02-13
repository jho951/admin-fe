/**
 * @file src/shared/components/modal/Modal.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import type {ModalProps} from "@shared/components/modal/Modal.types.ts";

import styles from "./Modal.module.css";



const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         children,
                                         width = 420,
                                         className,
                                     }) => {

    useEffect(() => {
        const open = isOpen ?? true;
        if (!open || !onClose) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const open = isOpen ?? true;
    const container =
        typeof document !== "undefined"
            ? document.getElementById("modal-root")
            : null;

    if (!container || !open) {
        return null;
    }

    const handleBackdropClick = () => {
        if (onClose) onClose();
    };

    const handleContentClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    return createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div
                className={`${styles.modal} ${className}`}
                style={{ maxWidth: width }}
                onClick={handleContentClick}
            >
                {children}
            </div>
        </div>,
        container,
    );
};

export default Modal;
