import React from "react";
import UserTable from "@features/users/components/UserTable";
import styles from "./UsersPage.module.css";

const UsersPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>사용자 관리</h2>
            <UserTable />
        </div>
    );
};

export default UsersPage;
