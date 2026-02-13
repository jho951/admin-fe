/**
 * @file src/pages/dashboard/DashboardPage.tsx
 * @description 라우트 단위 페이지 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";

import DashboardHeader from "@features/dashboard/componenets/DashboardHeader.tsx";
import LastTasksCard from "@features/dashboard/componenets/LastTasksCard.tsx";
import ProductivityCard from "@features/dashboard/componenets/ProductivityCard.tsx";
import ProjectsCard from "@features/dashboard/componenets/ProjectsCard.tsx";

import styles from "./DashboardPage.module.css";

const DashboardPage: React.FC = () => {
    return (
        <section className={styles.page}>
            <DashboardHeader />
            <LastTasksCard />

            <div className={styles.bottomGrid}>
                <ProductivityCard />
                <ProjectsCard />
            </div>
        </section>
    );
};

export default DashboardPage;
