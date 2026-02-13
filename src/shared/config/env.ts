/**
 * @file src/shared/config/env.ts
 * @description 환경 설정 및 런타임 구성을 담당하는 모듈입니다.
 */
const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const validateApiUrl = (value: string): string => {
    if (!value) {
        return "";
    }

    const normalized = trimTrailingSlash(value);
    const isAbsolute = normalized.startsWith("http://") || normalized.startsWith("https://");
    const isRelative = normalized.startsWith("/");

    if (!isAbsolute && !isRelative) {
        throw new Error(
            `Invalid VITE_API_URL "${value}". Use absolute URL (https://...) or relative path (/api).`,
        );
    }

    return normalized;
};

export const env = Object.freeze({
    mode: import.meta.env.MODE,
    isDev: import.meta.env.DEV,
    apiUrl: validateApiUrl(import.meta.env.VITE_API_URL ?? ""),
});
