import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@app/hooks";
import { ROUTES } from "@constants/routes";

/**
 * 추후 실제 인증 로직 붙일 때 사용
 * 지금은 로그인 상태가 false면 /login 으로 보냄
 */
export const useAuthGuard = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated,
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(ROUTES.login);
        }
    }, [isAuthenticated, navigate]);
};
