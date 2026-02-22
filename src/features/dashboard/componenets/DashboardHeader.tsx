/**
 * @file src/features/dashboard/componenets/DashboardHeader.tsx
 * @description 대시보드 화면 구성 컴포넌트을 담당하는 모듈입니다.
 */
import React, { useState } from "react";
import { Button, Input, SegmentedControl } from "@jho951/ui-components";
import styles from "./DashboardHeader.module.css";
import Icon from "../../../shared/components/icon/Icon";

const DashboardHeader: React.FC = () => {
    const [search, setSearch] = useState("");
    const [viewMode, setViewMode] = useState("card");

    return (
        <header className={styles.header}>
            <div className={styles.searchBox}>
                <Input
                    fullWidth
                    placeholder="Search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    startIcon={<Icon name="search" className={styles.searchIcon} />}
                />
            </div>

            <div className={styles.right}>
                <Button className={styles.dateButton} type="button" variant="ghost" size="s">
                    Monday, 6th March
                </Button>

                <div className={styles.viewToggle}>
                    <SegmentedControl
                        value={viewMode}
                        onChange={setViewMode}
                        options={[
                            { label: "Card", value: "card" },
                            { label: "List", value: "list" },
                        ]}
                    />
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
