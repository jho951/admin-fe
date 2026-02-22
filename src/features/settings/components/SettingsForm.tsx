/**
 * @file src/features/settings/components/SettingsForm.tsx
 * @description 설정 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import React from "react";
import {useAppDispatch, useAppSelector} from "@app/hooks";
import {Checkbox, Form, Input, Label} from "@jho951/ui-components";
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
        </Form>
    );
};

export default SettingsForm;
