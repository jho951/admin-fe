import React from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "@app/hooks";
import Sidebar from "@layout/sidebar/Sidebar";
import styles from "./MainLayout.module.css";

const MainLayout: React.FC = () => {
    const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);

    return (
        <div className={styles.app}>
            <Sidebar isOpen={isSidebarOpen} />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
