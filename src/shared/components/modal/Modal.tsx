import React, { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    children: ReactNode;
    width?: number | string;
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         children,
                                         width = 420,
                                     }) => {
    const [mounted, setMounted] = useState(false);
    const [container, setContainer] = useState<HTMLElement | null>(null);

    // modal-root 찾기
    useEffect(() => {
        if (typeof document === "undefined") return;
        const root = document.getElementById("modal-root");
        if (!root) return;
        setContainer(root);
        setMounted(true);
    }, []);

    // ESC로 닫기
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

    const open = isOpen ?? true; // ⬅ 안 넘기면 true

    if (!mounted || !container || !open) {
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
                className={styles.modal}
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
