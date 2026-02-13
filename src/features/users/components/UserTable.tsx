/**
 * @file src/features/users/components/UserTable.tsx
 * @description 사용자 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import React from "react";
import { useAppSelector } from "@app/hooks";
import { Table } from "@jho951/ui-components";
import styles from "./UserTable.module.css";

const UserTable: React.FC = () => {
    const users = useAppSelector((state) => state.users.items);
    const columns = [
        { key: "id", header: "ID" },
        { key: "name", header: "이름" },
        { key: "email", header: "이메일" },
    ] as const;

    const rows = users.map((user) => ({
        id: String(user.id),
        name: user.name,
        email: user.email,
    }));

    return (
        <div className={styles.table}>
            <Table columns={[...columns]} data={rows} striped />
        </div>
    );
};

export default UserTable;
