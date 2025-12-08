import React from "react";
import styles from "./DashboardPage.module.css";

const DashboardPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>요약</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <span className={styles.cardLabel}>전체 사용자</span>
                    <span className={styles.cardValue}>1,234</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.cardLabel}>오늘 방문</span>
                    <span className={styles.cardValue}>87</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.cardLabel}>에러 로그</span>
                    <span className={styles.cardValueError}>3</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
