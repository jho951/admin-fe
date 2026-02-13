/**
 * @file src/shared/lib/date.ts
 * @description 공통 유틸리티 및 인프라 로직을 담당하는 모듈입니다.
 */
const formatDate = (date: Date): string => {
    return date.toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
};

export {formatDate}