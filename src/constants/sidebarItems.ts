import type { IconName } from "@shared/components/icon/Icon";

interface SidebarItem {
    id: string;
    label: string;
    path: string;
    icon: IconName;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
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
