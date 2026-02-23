/**
 * @file src/shared/lib/fetchClient.ts
 * @description 공통 유틸리티 및 인프라 로직을 담당하는 모듈입니다.
 */
import { setAccessToken, getAccessToken, clearAccessToken } from "./tokenStore";
import { env } from "@shared/config/env";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchJsonOptions extends Omit<RequestInit, "body" | "method"> {
    method?: HttpMethod;
    body?: unknown;
}

type ErrorWithStatus = Error & { status?: number };

const API_BASE_URL = env.apiUrl;

async function rawFetchJson<T>(
    path: string,
    options: FetchJsonOptions = {},
): Promise<T> {
    const { method = "GET", body, headers, ...rest } = options;

    const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;

    const mergedHeaders = new Headers(headers ?? {});
    mergedHeaders.set("Accept", "application/json");

    // HttpOnly 쿠키 기반 인증을 기본값으로 사용합니다.
    // (하위 호환을 위해 메모리 토큰이 있을 때만 Authorization 헤더를 붙입니다.)
    const token = getAccessToken();
    if (token && !mergedHeaders.has("Authorization")) {
        mergedHeaders.set("Authorization", `Bearer ${token}`);
    }

    if (body != null && !mergedHeaders.has("Content-Type")) {
        mergedHeaders.set("Content-Type", "application/json");
    }

    const res = await fetch(url, {
        method,
        headers: mergedHeaders,
        body: body != null ? JSON.stringify(body) : undefined,
        credentials: "include", // 🔹 refresh 쿠키를 위해 필요
        ...rest,
    });

    const text = await res.text();
    let data: unknown = null;

    if (text) {
        try {
            data = JSON.parse(text);
        } catch {
            data = text;
        }
    }

    if (!res.ok) {
        const payload =
            typeof data === "object" && data !== null
                ? (data as { message?: unknown })
                : undefined;
        const message =
            (typeof payload?.message === "string" && payload.message) ||
            `Request failed: ${res.status}`;

        const error: ErrorWithStatus = new Error(message);
        error.status = res.status;
        throw error;
    }

    return data as T;
}

// 401 나오면 refresh 시도 후 재요청
export async function fetchJson<T>(
    path: string,
    options: FetchJsonOptions = {},
): Promise<T> {
    try {
        return await rawFetchJson<T>(path, options);
    } catch (err) {
        const e = err as ErrorWithStatus;
        if (e.status === 401) {
            // refresh 시도
            try {
                const refreshRes = await rawFetchJson<
                    | { data?: { accessToken?: string | null } | null }
                    | null
                >("/api/auth/refresh", { method: "POST" });

                const newToken =
                    refreshRes &&
                    typeof refreshRes === "object" &&
                    "data" in refreshRes &&
                    refreshRes.data &&
                    typeof refreshRes.data === "object" &&
                    typeof refreshRes.data.accessToken === "string"
                        ? refreshRes.data.accessToken
                        : null;

                // 쿠키-only(refresh가 Set-Cookie만 수행)인 경우 null일 수 있음.
                setAccessToken(newToken);

                // 다시 한 번 원래 요청 재시도
                return await rawFetchJson<T>(path, options);
            } catch (refreshErr) {
                // refresh 실패 → 완전 로그아웃 처리
                clearAccessToken();
                throw refreshErr;
            }
        }

        throw e;
    }
}

export const fetchClient = {
    get<T>(path: string, options?: Omit<FetchJsonOptions, "method" | "body">) {
        return fetchJson<T>(path, { ...options, method: "GET" });
    },
    post<T>(
        path: string,
        body?: unknown,
        options?: Omit<FetchJsonOptions, "method" | "body">,
    ) {
        return fetchJson<T>(path, { ...options, method: "POST", body });
    },
    put<T>(
        path: string,
        body?: unknown,
        options?: Omit<FetchJsonOptions, "method" | "body">,
    ) {
        return fetchJson<T>(path, { ...options, method: "PUT", body });
    },
    patch<T>(
        path: string,
        body?: unknown,
        options?: Omit<FetchJsonOptions, "method" | "body">,
    ) {
        return fetchJson<T>(path, { ...options, method: "PATCH", body });
    },
    delete<T>(
        path: string,
        options?: Omit<FetchJsonOptions, "method" | "body">,
    ) {
        return fetchJson<T>(path, { ...options, method: "DELETE" });
    },
};
