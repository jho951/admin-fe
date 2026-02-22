/**
 * @file src/app/state/types.ts
 * @description Redux 전역 타입을 정의하는 모듈입니다.
 */
import type { store } from "./store";

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

