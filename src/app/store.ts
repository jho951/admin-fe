/**
 * @file src/app/store.ts
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
/**
 * 기존 import 경로(@app/store)와의 호환을 위해
 * 실제 구현을 state 폴더에서 재노출합니다.
 */
export { store } from "./state/store";
export type { AppDispatch, AppStore, RootState } from "./state/types";
