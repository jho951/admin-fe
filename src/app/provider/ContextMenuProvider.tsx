/**
 * @file src/app/provider/ContextMenuProvider.tsx
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import React, { useState, useCallback, type ReactNode } from "react";
import ContextMenu from "@shared/components/contextmenu/ContextMenu.tsx";
import { ContextMenuContext, type MenuItem } from "./contextMenuContext";

export const ContextMenuProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [items, setItems] = useState<MenuItem[]>([]);

    const showMenu = useCallback((e: React.MouseEvent | MouseEvent, menuItems: MenuItem[]) => {
        e.preventDefault();
        setPosition({ x: e.pageX, y: e.pageY });
        setItems(menuItems);
        setVisible(true);
    }, []);

    const hideMenu = useCallback(() => setVisible(false), []);

    return (
        <ContextMenuContext.Provider value={{ showMenu, hideMenu }}>
            <div onWheel={hideMenu} onClick={hideMenu}>
                {children}
                {visible && <ContextMenu items={items} x={position.x} y={position.y} />}
            </div>
        </ContextMenuContext.Provider>
    );
};
