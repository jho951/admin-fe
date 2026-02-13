/**
 * @file src/layout/mainlayout/MainLayout.tsx
 * @description 페이지 레이아웃 및 내비게이션 구성을 담당하는 모듈입니다.
 */
import React from "react";
import { Outlet } from "react-router-dom";

import { useContextMenu } from "@app/provider/contextMenuContext";

import Sidebar from "@layout/sidebar/Sidebar";

import styles from "./MainLayout.module.css";


const MainLayout: React.FC = () => {

    const { showMenu } = useContextMenu();

    const handleContextMenu = (e: React.MouseEvent) => {
        showMenu(e, [
            { label: '새 프로젝트 생성', onClick: () => alert('생성!') },
            { label: '최근 문서 보기', onClick: () => console.log('이동') },
            { label: '로그아웃', onClick: () => alert('로그아웃') }
        ]);
    };
    return (
        <main onContextMenu={handleContextMenu} style={{ height: '100vh', background: '#eee' }}>
            <div className={styles.app}>
                <Sidebar />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default MainLayout;
