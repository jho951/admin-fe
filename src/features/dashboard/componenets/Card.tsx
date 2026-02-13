/**
 * @file src/features/dashboard/componenets/Card.tsx
 * @description 대시보드 화면 구성 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import styles from "./Card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...rest }) => {
    const cls = [styles.card, className].filter(Boolean).join(" ");
    return (
        <section className={cls} {...rest}>
            {children}
        </section>
    );
};

export default Card;
