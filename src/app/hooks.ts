/**
 * @file src/app/hooks.ts
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
