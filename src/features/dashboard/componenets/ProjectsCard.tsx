/**
 * @file src/features/dashboard/componenets/ProjectsCard.tsx
 * @description 대시보드 화면 구성 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import Card from "./Card";
import styles from "./ProjectsCard.module.css";

const ProjectsCard: React.FC = () => {
    return (
        <Card className={styles.card}>
            <h3 className={styles.title}>Projects in progress:</h3>

            <div className={styles.stack}>
                <div className={styles.topCard}>
                    <div className={styles.tags}>
                        <span className={styles.tag}>Feedback</span>
                        <span className={styles.tag}>Bug</span>
                        <span className={styles.tag}>Design System</span>
                    </div>
                    <p className={styles.mainText}>Improve cards readability</p>
                    <p className={styles.date}>21.03.22</p>
                </div>
            </div>
        </Card>
    );
};

export default ProjectsCard;
