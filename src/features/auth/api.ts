/**
 * @file src/features/auth/api.ts
 * @description 인증 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import { fetchClient } from "@shared/lib/fetchClient";

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginUser {
    id: number;
    username: string;
    email: string;
    role: "SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER";
}

export interface BaseResponse<T> {
    success: boolean;
    code: string;
    message: string;
    data: T;
}

export async function login(payload: LoginPayload): Promise<LoginUser> {
    const res = await fetchClient.post<BaseResponse<LoginUser>>(
        "/api/auth/login",
        payload,
    );

    if (!res.success) {
        throw new Error(res.message || "로그인에 실패했습니다.");
    }

    return res.data;
}
