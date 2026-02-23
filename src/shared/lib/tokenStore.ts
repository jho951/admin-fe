/**
 * @file src/shared/lib/tokenStore.ts
 * @description 공통 유틸리티 및 인프라 로직을 담당하는 모듈입니다.
 */
// HttpOnly 쿠키는 JS에서 읽거나 쓸 수 없으므로 영속 저장소를 사용하지 않습니다.
// 필요한 경우에만 메모리 캐시(비영속)로 보관합니다.
let accessToken: string | null = null;

export function setAccessToken(token: string | null) {
    accessToken = token;
}

export function getAccessToken(): string | null {
    return accessToken;
}

export function clearAccessToken() {
    accessToken = null;
}
