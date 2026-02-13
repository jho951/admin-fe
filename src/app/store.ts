/**
 * @file src/app/store.ts
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@features/ui/uiSlice";
import authReducer from '@features/auth/authSlice';
import usersReducer from '@features/users/usersSlice';
import settingsReducer from '@features/settings/settingsSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        users: usersReducer,
        settings: settingsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

