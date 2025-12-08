import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";
import MainLayout from "@layout/mainlayout/MainLayout";
import { useAppSelector } from "@app/hooks";
import DashboardPage from "@pages/dashboard/DashboardPage";
import UsersPage from "@pages/users/UsersPage";
import SettingsPage from "@pages/settings/SettingsPage";
import LoginModal from "@features/auth/components/LoginModal.tsx";

const RequireAuth: React.FC = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <Outlet />;
};

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginModal />} />

                <Route element={<RequireAuth />}>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
