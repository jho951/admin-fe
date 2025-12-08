import React from "react";
import Modal from "@shared/components/modal/Modal";
import LoginForm from "./LoginForm";

const LoginModal: React.FC = () => {
    return (
        <Modal isOpen width={420}>
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;