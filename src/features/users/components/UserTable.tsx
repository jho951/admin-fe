import React from "react";
import { useAppSelector } from "@app/hooks";
import styles from "./UserTable.module.css";

const UserTable: React.FC = () => {
    const users = useAppSelector((state) => state.users.items);

    return (
        <div className={styles.table}>
            <div className={styles.headerRow}>
                <span>ID</span>
                <span>이름</span>
                <span>이메일</span>
            </div>
            {users.map((user) => (
                <div key={user.id} className={styles.row}>
                    <span>{user.id}</span>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                </div>
            ))}
        </div>
    );
};

export default UserTable;
