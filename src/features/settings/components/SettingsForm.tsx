import React from "react";
import {useAppDispatch, useAppSelector} from "@app/hooks";
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
                <input
                    className={styles.input}
                    value={siteTitle}
                    onChange={(e) => dispatch(updateSiteTitle(e.target.value))}
                />
            </label>

            <label className={styles.checkboxField}>
                <input
                    type="checkbox"
                    checked={enableSignup}
                    onChange={(e) => dispatch(updateEnableSignup(e.target.checked))}
                />
                <span>회원가입 기능 활성화</span>
            </label>
        </form>
    );
};

export default SettingsForm;
