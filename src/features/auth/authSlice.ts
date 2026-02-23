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

const initialState: AuthState = {
    accessToken: null,
    username: null,
    email: null,
    role: null,
    isAuthenticated: false,
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
        },
    },
});

export const { loginSuccess, restoreFromToken, logout } = authSlice.actions;
export default authSlice.reducer;
