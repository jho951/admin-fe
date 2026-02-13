/**
 * @file src/features/settings/settingsSlice.ts
 * @description 설정 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import {createSlice, type PayloadAction,} from "@reduxjs/toolkit";

interface SettingsState {
    siteTitle: string;
    enableSignup: boolean;
}

const initialState: SettingsState = {
    siteTitle: "관리자 콘솔",
    enableSignup: false,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        updateSiteTitle(state, action: PayloadAction<string>) {
            state.siteTitle = action.payload;
        },
        updateEnableSignup(state, action: PayloadAction<boolean>) {
            state.enableSignup = action.payload;
        },
    },
});

export const { updateSiteTitle, updateEnableSignup } = settingsSlice.actions;
export default settingsSlice.reducer;
