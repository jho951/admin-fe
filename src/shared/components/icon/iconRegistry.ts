/**
 * @file src/shared/components/icon/iconRegistry.ts
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import {
    DashboardIcon,
    UsersIcon,
    SettingsIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EyeOpenIcon,
    EyeClosedIcon,
    CloseCircleIcon,
    SearchIcon,
    type IconComponent,
    type IconName,
} from "./Icons";

export const icons: Record<IconName, IconComponent> = {
    dashboard: DashboardIcon,
    users: UsersIcon,
    settings: SettingsIcon,
    "left-arrow": ChevronLeftIcon,
    "right-arrow": ChevronRightIcon,
    "eye-open": EyeOpenIcon,
    "eye-closed": EyeClosedIcon,
    "close-circle": CloseCircleIcon,
    search: SearchIcon,
};
