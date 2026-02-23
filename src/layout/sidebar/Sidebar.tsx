/**
 * @file src/layout/sidebar/Sidebar.tsx
 * @description 페이지 레이아웃 및 내비게이션 구성을 담당하는 모듈입니다.
 */
import { NavLink } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@app/hooks";
import {LNB_ITEMS} from "@constants/lnb/LnbItems.ts";
import {Icon} from "@jho951/ui-components";
import { toggleSidebar } from "@features/ui/uiSlice";
import styles from "./Sidebar.module.css";

const SidebarNavIcon = ({ id }: { id: string }) => {
    if (id === "dashboard") {
        return (
            <svg viewBox="0 0 24 24" className={styles.navIconSvg} aria-hidden="true">
                <path d="M3.5 12.5 12 4l8.5 8.5" />
                <path d="M6.5 10.5V20h11v-9.5" />
                <path d="M10 20v-5h4v5" />
            </svg>
        );
    }

    if (id === "users") {
        return (
            <svg viewBox="0 0 24 24" className={styles.navIconSvg} aria-hidden="true">
                <path d="M9 12a3.25 3.25 0 1 0 0-6.5A3.25 3.25 0 0 0 9 12Z" />
                <path d="M15.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M3.8 18.5c.6-2.4 2.7-4 5.2-4s4.6 1.6 5.2 4" />
                <path d="M13.2 18.5c.45-1.55 1.8-2.6 3.55-2.6 1.55 0 2.65.78 3.45 2.6" />
            </svg>
        );
    }

    if (id === "settings") {
        return (
            <svg viewBox="0 0 24 24" className={styles.navIconSvg} aria-hidden="true">
                <path d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z" />
                <path d="M19.2 13.05v-2.1l-1.9-.45a5.55 5.55 0 0 0-.55-1.33l1.03-1.66-1.49-1.48-1.66 1.03c-.42-.23-.86-.42-1.33-.55l-.45-1.9h-2.1l-.45 1.9c-.47.13-.91.32-1.33.55L7.31 6.03 5.83 7.51l1.03 1.66c-.23.42-.42.86-.55 1.33l-1.9.45v2.1l1.9.45c.13.47.32.91.55 1.33l-1.03 1.66 1.48 1.49 1.66-1.03c.42.23.86.42 1.33.55l.45 1.9h2.1l.45-1.9c.47-.13.91-.32 1.33-.55l1.66 1.03 1.49-1.49-1.03-1.66c.23-.42.42-.86.55-1.33l1.9-.45Z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" className={styles.navIconSvg} aria-hidden="true">
            <path d="M12 12h.01" />
        </svg>
    );
};

const Sidebar= () => {
    const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
    const dispatch = useAppDispatch();

    const mainItems = LNB_ITEMS.filter((item) => item.id !== "settings");
    const settingsItems = LNB_ITEMS.filter((item) => item.id === "settings");

    const handleToggle = () => {
        dispatch(toggleSidebar());
    };

    return (
        <aside className={`${styles.sidebar} ${!isSidebarOpen && styles.collapsed}`} >
            <div className={styles.inner}>
                <figure className={styles.profile}>
                    <div className={styles.avatar}>A</div>
                    <figcaption className={styles.profileMeta}>
                        <span className={styles.profileRole}>PRODUCT MANAGER</span>
                        <span className={styles.profileName}>Andrew Smith</span>
                    </figcaption>
                </figure>

                {/* MAIN 섹션 */}
                <div className={styles.section}>
                    <span className={styles.sectionLabel}>MAIN</span>
                    <nav className={styles.nav}>
                        {mainItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({isActive}) =>
                                    `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
                                }
                            >
                                <div className={styles.iconWrap}>
                                    <SidebarNavIcon id={item.id} />
                                </div>
                                <div className={styles.labelWrap}>
                                    <span className={styles.labelText}>{item.label}</span>
                                </div>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className={styles.section}>
                    <span className={styles.sectionLabel}>SETTINGS</span>
                    <nav className={styles.nav}>
                        {settingsItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({isActive}) =>
                                    `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
                                }
                            >
                                <div className={styles.iconWrap}>
                                    <SidebarNavIcon id={item.id} />
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
                aria-label={isSidebarOpen ? "사이드바 접기" : "사이드바 펼치기"}
            >
                <Icon
                    name={isSidebarOpen ? "left-arrow" : "right-arrow"}
                    className={styles.toggleIcon}
                />
            </button>
        </aside>
    );
}
export default Sidebar;
