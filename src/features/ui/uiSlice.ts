/**
 * @file src/features/ui/uiSlice.ts
 * @description UI 전역 상태 관리을 담당하는 모듈입니다.
 */
import { createSlice } from "@reduxjs/toolkit";

interface UiState {
    isSidebarOpen: boolean;
}

const initialState: UiState = {
    isSidebarOpen: true,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        openSidebar(state) {
            state.isSidebarOpen = true;
        },
        closeSidebar(state) {
            state.isSidebarOpen = false;
        },
    },
});

export const { toggleSidebar, openSidebar, closeSidebar } = uiSlice.actions;
export default uiSlice.reducer;
