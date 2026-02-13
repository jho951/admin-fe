/**
 * @file src/shared/components/modal/Modal.types.ts
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import type {ReactNode} from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    children: ReactNode;
    className?: string;
    width?: number | string;
}

export type {ModalProps};