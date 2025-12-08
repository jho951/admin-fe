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
