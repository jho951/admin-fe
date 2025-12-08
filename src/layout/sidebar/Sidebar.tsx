import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "@app/hooks";
import { toggleSidebar } from "@features/ui/uiSlice";
import Icon from "@shared/components/icon/Icon";

import {SIDEBAR_ITEMS} from "@constants/sidebarItems.ts";

import styles from "./Sidebar.module.css";

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const dispatch = useAppDispatch();

    const sidebarClassName = isOpen
        ? styles.sidebar
        : `${styles.sidebar} ${styles.sidebarCollapsed}`;

    const mainItems = SIDEBAR_ITEMS.filter((item) => item.id !== "settings");
    const settingsItems = SIDEBAR_ITEMS.filter((item) => item.id === "settings");

    const handleToggle = () => {
        dispatch(toggleSidebar());
    };

    return (
        <aside className={sidebarClassName}>
            <div className={styles.inner}>
                <div className={styles.profile}>
                    <div className={styles.avatar}>A</div>
                    <div className={styles.profileMeta}>
                        <span className={styles.profileRole}>PRODUCT MANAGER</span>
                        <span className={styles.profileName}>Andrew Smith</span>
                    </div>
                </div>

                {/* MAIN 섹션 */}
                <div className={styles.section}>
                    <span className={styles.sectionLabel}>MAIN</span>
                    <nav className={styles.nav}>
                        {mainItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) =>
                                    `${styles.navItem} ${
                                        isActive ? styles.navItemActive : ""
                                    }`
                                }
                            >
                                <div className={styles.iconWrap}>
                                    <Icon name={item.icon} className={styles.icon} />
                                </div>
                                <div className={styles.labelWrap}>
                                    <span className={styles.labelText}>{item.label}</span>
                                </div>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* SETTINGS 섹션 */}
                <div className={styles.section}>
                    <span className={styles.sectionLabel}>SETTINGS</span>
                    <nav className={styles.nav}>
                        {settingsItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) =>
                                    `${styles.navItem} ${
                                        isActive ? styles.navItemActive : ""
                                    }`
                                }
                            >
                                <div className={styles.iconWrap}>
                                    <Icon name={item.icon} className={styles.icon} />
                                </div>
                                <div className={styles.labelWrap}>
                                    <span className={styles.labelText}>{item.label}</span>
                                </div>
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>

            <button
                type="button"
                className={styles.toggleButton}
                onClick={handleToggle}
                aria-label={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
            >
                <Icon
                    name={isOpen ? "left-arrow" : "right-arrow"}
                    className={styles.toggleIcon}
                />
            </button>
        </aside>
    );
};

export default Sidebar;
