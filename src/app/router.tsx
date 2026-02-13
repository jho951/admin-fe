/**
 * @file src/app/router.tsx
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import UsersPage from "@pages/users/UsersPage";
import SettingsPage from "@pages/settings/SettingsPage";
import DashboardPage from "@pages/dashboard/DashboardPage";

import MainLayout from "@layout/mainlayout/MainLayout";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/login" element={<LoginModal />} />*/}
                {/*<Route element={<RequireAuth />}>*/}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Route>
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
