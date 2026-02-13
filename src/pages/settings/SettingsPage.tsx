/**
 * @file src/pages/settings/SettingsPage.tsx
 * @description 라우트 단위 페이지 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import SettingsForm from "@features/settings/components/SettingsForm";
import styles from "./SettingsPage.module.css";

const SettingsPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>설정</h2>
            <SettingsForm />
        </div>
    );
};

export default SettingsPage;
