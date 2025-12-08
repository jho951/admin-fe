import React from "react";

export type IconName =
    | "dashboard"
    | "users"
    | "settings"
    | "left-arrow"
    | "right-arrow"
    | "eye-open"
    | "eye-closed"
    | "close-circle";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

// 예시 아이콘들
const DashboardIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="5" rx="2" />
        <rect x="13" y="10" width="8" height="11" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
    </svg>
);

const UsersIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <circle cx="9" cy="9" r="3.2" />
        <path d="M4 18c0-2.3 2.2-4 5-4" />
        <circle cx="17" cy="9.5" r="2.4" />
        <path d="M14.5 17.5c0-1.8 1.6-3.2 3.5-3.2" />
    </svg>
);

const SettingsIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M4 12h2M18 12h2M12 4v2M12 18v2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M6.3 17.7l1.4-1.4" />
    </svg>
);

// ← / → 토글용
const ChevronLeftIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M14.5 5.5L9 12l5.5 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ChevronRightIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M9.5 5.5L15 12l-5.5 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* 👁 눈 아이콘 (열림) */
const EyeOpenIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        {/* 눈 모양 */}
        <path
            d="M2.5 12C4.3 8.7 7.8 6.5 12 6.5s7.7 2.2 9.5 5.5c-1.8 3.3-5.3 5.5-9.5 5.5S4.3 15.3 2.5 12z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* 동공 */}
        <circle
            cx="12"
            cy="12"
            r="2.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
        />
    </svg>
);

/* 👁‍🗨 눈 아이콘 (가려짐) */
const EyeClosedIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        {/* 기본 눈 모양 */}
        <path
            d="M2.5 12C4.3 8.7 7.8 6.5 12 6.5s7.7 2.2 9.5 5.5c-1.8 3.3-5.3 5.5-9.5 5.5S4.3 15.3 2.5 12z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* 동공 */}
        <circle
            cx="12"
            cy="12"
            r="2.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
        />
        {/* 대각선 가림선 */}
        <path
            d="M5 5l14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
        />
    </svg>
);

/* ❌ 동그라미 안에 X */
const CloseCircleIcon: IconComponent = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <circle
            cx="12"
            cy="12"
            r="9"
            fill="currentColor"
            opacity="0.25"
        />
        <path
            d="M9.2 9.2l5.6 5.6M14.8 9.2l-5.6 5.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const icons: Record<IconName, IconComponent> = {
    dashboard: DashboardIcon,
    users: UsersIcon,
    settings: SettingsIcon,
    "left-arrow": ChevronLeftIcon,
    "right-arrow": ChevronRightIcon,
    "eye-open": EyeOpenIcon,
    "eye-closed": EyeClosedIcon,
    "close-circle": CloseCircleIcon,
};
