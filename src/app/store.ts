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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
