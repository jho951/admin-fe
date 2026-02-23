/**
 * @file src/features/auth/components/LoginModal.tsx
 * @description 인증 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import React from "react";

import LoginForm from "./LoginForm";
import styles from "./LoginModal.module.css";

const LoginModal: React.FC = () => {
    return (
        <div className={styles.overlay}>
            <div
                className={styles.loginModal}
                role="dialog"
                aria-modal="true"
                aria-label="로그인"
            >
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginModal;
