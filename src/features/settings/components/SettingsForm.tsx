/**
 * @file src/features/settings/components/SettingsForm.tsx
 * @description 설정 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import React from "react";
import {useAppDispatch, useAppSelector} from "@app/hooks";
import { Checkbox, Input } from "@jho951/ui-components";
import {
    updateEnableSignup,
    updateSiteTitle,
} from "../settingsSlice";
import styles from "./SettingsForm.module.css";

const SettingsForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { siteTitle, enableSignup } = useAppSelector(
        (state) => state.settings,
    );

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.field}>
                <span>사이트 제목</span>
                <Input
                    value={siteTitle}
                    onChange={(e) => dispatch(updateSiteTitle(e.target.value))}
                    fullWidth
                />
            </label>

            <label className={styles.checkboxField}>
                <Checkbox
                    checked={enableSignup}
                    onChange={(e) => dispatch(updateEnableSignup(e.target.checked))}
                    label="회원가입 기능 활성화"
                />
            </label>
        </form>
    );
};

export default SettingsForm;
