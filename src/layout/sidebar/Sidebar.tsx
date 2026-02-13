/**
 * @file src/layout/sidebar/Sidebar.tsx
 * @description 페이지 레이아웃 및 내비게이션 구성을 담당하는 모듈입니다.
 */
import { NavLink } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@app/hooks";

import { toggleSidebar } from "@features/ui/uiSlice";
import Icon from "@shared/components/icon/Icon";
import { SIDEBAR_ITEMS } from "@constants/sidebarItems";

import styles from "./Sidebar.module.css";

const Sidebar= () => {
    const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
    const dispatch = useAppDispatch();

    const mainItems = SIDEBAR_ITEMS.filter((item) => item.id !== "settings");
    const settingsItems = SIDEBAR_ITEMS.filter((item) => item.id === "settings");

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
                                    <Icon name={item.icon} className={styles.icon}/>
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
                                className={({isActive}) =>
                                    `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
                                }
                            >
                                <div className={styles.iconWrap}>
                                    <Icon name={item.icon} className={styles.icon}/>
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
