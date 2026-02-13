/**
 * @file src/features/auth/authSlice.ts
 * @description 인증 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    accessToken: string | null;
    username: string | null;
    email: string | null;
    role: string | null;
    isAuthenticated: boolean; // 인증 여부 명시
}

// 초기 로드 시 로컬 스토리지 확인
const token = localStorage.getItem("auth-token");

const initialState: AuthState = {
    accessToken: token,
    username: null,
    email: null,
    role: null,
    isAuthenticated: !!token, // 토큰이 있으면 로그인된 것으로 간주
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(
            state,
            action: PayloadAction<{
                accessToken?: string | null;
                username: string;
                email: string;
                role: string;
            }>,
        ) {
            const token = action.payload.accessToken ?? null;
            state.accessToken = token;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.isAuthenticated = true;

            if (token) {
                localStorage.setItem("auth-token", token);
            } else {
                localStorage.removeItem("auth-token");
            }
        },
        restoreFromToken(
            state,
            action: PayloadAction<{ accessToken: string; username?: string }>
        ) {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            if (action.payload.username) state.username = action.payload.username;
        },
        logout(state) {
            state.accessToken = null;
            state.username = null;
            state.email = null;
            state.role = null;
            state.isAuthenticated = false;

            // 로컬 스토리지 삭제
            localStorage.removeItem("auth-token");
        },
    },
});

export const { loginSuccess, restoreFromToken, logout } = authSlice.actions;
export default authSlice.reducer;
