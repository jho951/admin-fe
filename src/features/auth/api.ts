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

export interface LoginResult {
    accessToken: string | null;
    user: LoginUser;
}

export interface BaseResponse<T> {
    success: boolean;
    code: string;
    message: string;
    data: T;
}

type LoginResponseData =
    | LoginUser
    | {
          accessToken?: string;
          token?: string;
          user?: LoginUser;
          member?: LoginUser;
      };

const isLoginUser = (value: unknown): value is LoginUser => {
    if (!value || typeof value !== "object") return false;

    const candidate = value as Partial<LoginUser>;
    return (
        typeof candidate.id === "number" &&
        typeof candidate.username === "string" &&
        typeof candidate.email === "string" &&
        typeof candidate.role === "string"
    );
};

const normalizeLoginResponse = (
    data: LoginResponseData,
): LoginResult => {
    if (isLoginUser(data)) {
        return {
            accessToken: null,
            user: data,
        };
    }

    const accessToken = data.accessToken ?? data.token ?? null;
    const user = data.user ?? data.member;

    if (!user || !isLoginUser(user)) {
        throw new Error("로그인 응답 형식이 올바르지 않습니다.");
    }

    return { accessToken, user };
};

export async function login(payload: LoginPayload): Promise<LoginResult> {
    const res = await fetchClient.post<BaseResponse<LoginResponseData>>(
        "/api/auth/login",
        payload,
    );

    if (!res.success) {
        throw new Error(res.message || "로그인에 실패했습니다.");
    }

    const result = normalizeLoginResponse(res.data);
    return result;
}
