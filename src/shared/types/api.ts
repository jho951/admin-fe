/**
 * @file src/shared/types/api.ts
 * @description 공통 타입 선언을 담당하는 모듈입니다.
 */
interface ApiResponse<T> {
    data: T;
    message?: string;
}

interface PagedResult<T> {
    items: T[];
    total: number;
}

export type {ApiResponse, PagedResult};