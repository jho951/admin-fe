/**
 * @file src/app/provider/contextMenuContext.ts
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import { createContext, useContext, type MouseEvent as ReactMouseEvent } from "react";

interface MenuItem {
    label: string;
    onClick: () => void;
}

interface ContextMenuContextType {
    showMenu: (e: ReactMouseEvent | MouseEvent, items: MenuItem[]) => void;
    hideMenu: () => void;
}

export const ContextMenuContext = createContext<ContextMenuContextType | undefined>(
    undefined,
);

export const useContextMenu = (): ContextMenuContextType => {
    const context = useContext(ContextMenuContext);
    if (!context) {
        throw new Error("useContextMenu must be used within ContextMenuProvider");
    }
    return context;
};

export type { MenuItem, ContextMenuContextType };
