import type {LoginItems} from "@constants/auth/LoginItems.types.ts";

/**
 * @file src/constants/LoginItems.ts
 * @description 프로젝트 전역 상수 정의을 담당하는 모듈입니다.
 */
export const LOGIN_FIELDS: LoginItems[] = [
    {
        id: "email",
        label: "이메일",
        type: "email",
        autoComplete: "email",
        placeholder: "이메일을 입력하세요",
    },
    {
        id: "password",
        label: "비밀번호",
        type: "password",
        autoComplete: "current-password",
        placeholder: "비밀번호를 입력하세요",
    },
];
