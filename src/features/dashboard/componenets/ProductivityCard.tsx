/**
 * @file src/features/dashboard/componenets/ProductivityCard.tsx
 * @description 대시보드 화면 구성 컴포넌트을 담당하는 모듈입니다.
 */
// src/features/dashboard/components/ProductivityCard.tsx
import React from "react";
import Card from "./Card";
import styles from "./ProductivityCard.module.css";

const ProductivityCard: React.FC = () => {
    return (
        <Card className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>Productivity</h3>
                <button className={styles.rangeButton} type="button">
                    01–07 May ▾
                </button>
            </div>

            {/* 여기 나중에 chart 라이브러리 붙이면 됨 */}
            <div className={styles.chartPlaceholder}>
                Chart area
            </div>
        </Card>
    );
};

export default ProductivityCard;
