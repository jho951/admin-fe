/**
 * @file src/features/auth/components/LoginModal.tsx
 * @description 인증 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import React from "react";
import Modal from "@shared/components/modal/Modal";

import LoginForm from "./LoginForm";

import styles from "./LoginModal.module.css"

const LoginModal: React.FC = () => {
    return (
        <Modal className={styles.loginModal} isOpen width={480}>
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;