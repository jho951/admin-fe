/**
 * @file src/features/dashboard/componenets/DashboardHeader.tsx
 * @description 대시보드 화면 구성 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import styles from "./DashboardHeader.module.css";
import Icon from "../../../shared/components/icon/Icon";

const DashboardHeader: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.searchBox}>
                <Icon name="search" className={styles.searchIcon} />
                <input
                    className={styles.searchInput}
                    placeholder="Search"
                    type="text"
                />
            </div>

            <div className={styles.right}>
                <button className={styles.dateButton} type="button">
                    Monday, 6th March
                </button>

                <div className={styles.viewToggle}>
                    <button
                        className={`${styles.viewBtn} ${styles.viewBtnActive}`}
                        type="button"
                    >
                        Card
                    </button>
                    <button className={styles.viewBtn} type="button">
                        List
                    </button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
