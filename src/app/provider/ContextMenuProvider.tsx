/**
 * @file src/app/provider/ContextMenuProvider.tsx
 * @description 전역 컨텍스트 메뉴 표시/숨김을 관리합니다.
 */
import React, {
    useState,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    type ReactNode,
} from "react";
import { ContextMenuContext, type MenuItem } from "./contextMenuContext";
import styles from "./ContextMenuProvider.module.css";

export const ContextMenuProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [items, setItems] = useState<MenuItem[]>([]);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const hideMenu = useCallback(() => {
        setVisible(false);
    }, []);

    const showMenu = useCallback(
        (e: React.MouseEvent | MouseEvent, menuItems: MenuItem[]) => {
            e.preventDefault();
            if (!menuItems.length) {
                hideMenu();
                return;
            }

            setPosition({ x: e.clientX, y: e.clientY });
            setItems(menuItems);
            setVisible(true);
        },
        [hideMenu],
    );

    useEffect(() => {
        if (!visible) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                hideMenu();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", hideMenu);
        window.addEventListener("scroll", hideMenu, true);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", hideMenu);
            window.removeEventListener("scroll", hideMenu, true);
        };
    }, [visible, hideMenu]);

    useLayoutEffect(() => {
        if (!visible || !menuRef.current) return;

        const margin = 12;
        const rect = menuRef.current.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width - margin;
        const maxY = window.innerHeight - rect.height - margin;

        const nextX = Math.max(margin, Math.min(position.x, maxX));
        const nextY = Math.max(margin, Math.min(position.y, maxY));

        if (nextX !== position.x || nextY !== position.y) {
            setPosition({ x: nextX, y: nextY });
        }
    }, [visible, position]);

    return (
        <ContextMenuContext.Provider value={{ showMenu, hideMenu }}>
            <div onWheel={hideMenu} onClick={hideMenu}>
                {children}
                {visible && (
                    <div className={styles.layer} aria-hidden="true">
                        <div
                            ref={menuRef}
                            className={styles.menu}
                            role="menu"
                            aria-label="컨텍스트 메뉴"
                            style={{
                                top: position.y,
                                left: position.x,
                            }}
                            onClick={(event) => event.stopPropagation()}
                            onMouseDown={(event) => event.stopPropagation()}
                            onContextMenu={(event) => event.preventDefault()}
                        >
                            <div className={styles.glow} />
                            <ul className={styles.list}>
                                {items.map((item, index) => {
                                    const isDanger = /로그아웃|삭제|제거/.test(item.label);

                                    return (
                                        <li className={styles.item} key={`${item.label}-${index}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                className={`${styles.button} ${isDanger ? styles.danger : ""}`}
                                                onClick={() => {
                                                    hideMenu();
                                                    item.onClick();
                                                }}
                                            >
                                                <span className={styles.dot} aria-hidden="true" />
                                                <span className={styles.label}>{item.label}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </ContextMenuContext.Provider>
    );
};
