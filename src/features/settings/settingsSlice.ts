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
