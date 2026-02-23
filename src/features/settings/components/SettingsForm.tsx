/**
 * @file src/features/settings/components/SettingsForm.tsx
 * @description 설정 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import React from "react";
import {useAppDispatch, useAppSelector} from "@app/hooks";
import { useTheme } from "@app/provider/themeContext";
import {Checkbox, Form, Input, Label} from "@jho951/ui-components";
import {
    updateEnableSignup,
    updateSiteTitle,
} from "../settingsSlice";
import styles from "./SettingsForm.module.css";

const SettingsForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { themeMode, setThemeMode } = useTheme();
    const { siteTitle, enableSignup } = useAppSelector(
        (state) => state.settings,
    );

    return (
        <Form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="setting-input" className={styles.field}>
                사이트 제목
                <Input
                    id="setting-input"
                    value={siteTitle}
                    onChange={(e) => dispatch(updateSiteTitle(e.target.value))}
                    fullWidth
                />
            </Label>

            <label className={styles.checkboxField}>
                <Checkbox
                    checked={enableSignup}
                    onChange={(e) => dispatch(updateEnableSignup(e.target.checked))}
                    label="회원가입 기능 활성화"
                />
            </label>

            <fieldset className={styles.themeFieldset}>
                <legend className={styles.themeLegend}>테마 모드</legend>

                <label className={styles.radioField}>
                    <input
                        type="radio"
                        name="theme-mode"
                        value="light"
                        checked={themeMode === "light"}
                        onChange={() => setThemeMode("light")}
                    />
                    <span>라이트</span>
                </label>

                <label className={styles.radioField}>
                    <input
                        type="radio"
                        name="theme-mode"
                        value="dark"
                        checked={themeMode === "dark"}
                        onChange={() => setThemeMode("dark")}
                    />
                    <span>다크</span>
                </label>

                <label className={styles.radioField}>
                    <input
                        type="radio"
                        name="theme-mode"
                        value="system"
                        checked={themeMode === "system"}
                        onChange={() => setThemeMode("system")}
                    />
                    <span>시스템 설정 따르기</span>
                </label>
            </fieldset>
        </Form>
    );
};

export default SettingsForm;
