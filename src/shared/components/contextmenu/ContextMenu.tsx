/**
 * @file src/shared/components/contextmenu/ContextMenu.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import React from 'react';
import styles from './ContextMenu.module.css';

export interface MenuItem {
    label: string;
    onClick: () => void;
}

interface ContextMenuProps {
    items: MenuItem[];
    x: number;
    y: number;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ items, x, y }) => {
    return (
        <div
            className={styles.menuContainer}
            style={{ top: y, left: x }} // x, y를 인라인 스타일로 적용
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={styles.menuItem}
                    onClick={(e) => {
                        e.stopPropagation();
                        item.onClick();
                    }}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
};

export default ContextMenu;