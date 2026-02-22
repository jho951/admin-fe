/**
 * @file src/app/state/rootReducer.ts
 * @description Redux 루트 리듀서를 조합하는 모듈입니다.
 */
import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "@features/ui/uiSlice";
import authReducer from "@features/auth/authSlice";
import usersReducer from "@features/users/usersSlice";
import settingsReducer from "@features/settings/settingsSlice";

/**
 * 기능 단위 리듀서를 하나의 루트 리듀서로 결합합니다.
 * 새로운 도메인 상태를 추가할 때 이 객체에만 확장하면 됩니다.
 */
export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    users: usersReducer,
    settings: settingsReducer,
});

