export type LoginFieldId = "email" | "password";

interface LoginField {
    id: LoginFieldId;
    label: string;
    type: "email" | "password";
    autoComplete: string;
    placeholder: string;
}

export const LOGIN_FIELDS: LoginField[] = [
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
