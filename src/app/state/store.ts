/**
 * @file src/app/state/store.ts
 * @description Redux 스토어를 생성하는 모듈입니다.
 */
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

/**
 * 전역 스토어 인스턴스입니다.
 * 미들웨어/DevTools/사전 로드 상태 확장은 이 파일에서 관리합니다.
 */
export const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
});

