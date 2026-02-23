/**
 * @file src/constants/LnbItems.ts
 * @description 프로젝트 전역 상수 정의을 담당하는 모듈입니다.
 */
import type {LnbItem} from "@constants/lnb/LnbItems.types.ts";

export const LNB_ITEMS: LnbItem[] = [
    {
        id: "dashboard",
        label: "대시보드",
        path: "/dashboard",
        icon: "dashboard",
    },
    {
        id: "users",
        label: "사용자 관리",
        path: "/users",
        icon: "users",
    },
    {
        id: "settings",
        label: "설정",
        path: "/settings",
        icon: "settings",
    },
];
