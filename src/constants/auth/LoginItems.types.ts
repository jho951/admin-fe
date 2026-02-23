export type LoginItemsId = "email" | "password";

export interface LoginItems {
    id: LoginItemsId;
    label: string;
    type: LoginItemsId;
    autoComplete: string;
    placeholder: string;
}
