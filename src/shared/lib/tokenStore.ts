/**
 * @file src/shared/lib/tokenStore.ts
 * @description 공통 유틸리티 및 인프라 로직을 담당하는 모듈입니다.
 */
// tokenStore.ts
let accessToken: string | null = null;
const STORAGE_KEY = "admin_access_token";

// 새로고침 후 유지하고 싶으면 sessionStorage 사용
export function setAccessToken(token: string | null) {
    accessToken = token;
    if (token) {
        sessionStorage.setItem(STORAGE_KEY, token);
    } else {
        sessionStorage.removeItem(STORAGE_KEY);
    }
}

export function getAccessToken(): string | null {
    if (accessToken) return accessToken;
    const stored = sessionStorage.getItem(STORAGE_KEY);
    accessToken = stored;
    return stored;
}

export function clearAccessToken() {
    accessToken = null;
    sessionStorage.removeItem(STORAGE_KEY);
}
