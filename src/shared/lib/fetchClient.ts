export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchJsonOptions extends Omit<RequestInit, "body" | "method"> {
    method?: HttpMethod;
    body?: unknown;
}

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

/**
 * 내부 공용 fetch 함수
 */
export async function fetchJson<T>(
    path: string,
    options: FetchJsonOptions = {},
): Promise<T> {
    const { method = "GET", body, headers, ...rest } = options;

    const url = path.startsWith("http")
        ? path
        : `${API_BASE_URL}${path}`;

    console.log(API_BASE_URL)

    const mergedHeaders = new Headers(headers ?? {});
    // JSON 기본 헤더
    if (!mergedHeaders.has("Accept")) {
        mergedHeaders.set("Accept", "application/json");
    }
    if (body != null && !mergedHeaders.has("Content-Type")) {
        mergedHeaders.set("Content-Type", "application/json");
    }

    const res = await fetch(url, {
        method,
        headers: mergedHeaders,
        body: body != null ? JSON.stringify(body) : undefined,
        credentials: "include",
        ...rest,
    });

    const text = await res.text();
    let data: unknown = null;

    if (text) {
        try {
            data = JSON.parse(text);
        } catch {
            // JSON 아닐 수도 있으니 무시 (텍스트 응답 같은 경우)
            data = text;
        }
    }

    if (!res.ok) {
        const message =
            (typeof data === "object" &&
                data !== null &&
                "message" in data &&
                typeof (data as any).message === "string" &&
                (data as any).message) ||
            `Request failed: ${res.status}`;

        throw new Error(message);
    }

    return data as T;
}

/**
 * 메서드별 편의 래퍼
 */
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
