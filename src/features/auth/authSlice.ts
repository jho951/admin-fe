import {createSlice, type PayloadAction,} from "@reduxjs/toolkit";
import type { LoginUser } from "./api";

interface AuthState {
    isAuthenticated: boolean;
    user: LoginUser | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<LoginUser>) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
