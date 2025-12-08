import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../api";
import { useAppDispatch } from "@app/hooks";
import { loginSuccess } from "../authSlice";
import { LOGIN_FIELDS } from "@constants/loginFields";

import styles from "./LoginForm.module.css";
import TextInput from "@shared/components/input/TextInput";
import PasswordInput from "@shared/components/input/PasswordInput";
import Button from "@shared/components/button/Button";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [errorField, setErrorField] = useState<"email" | "password" | null>(
        null,
    );

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setErrorField(null);

        if (!email.trim()) {
            setError("이메일을 입력해주세요.");
            setErrorField("email");
            emailRef.current?.focus();
            return;
        }

        if (!password.trim()) {
            setError("비밀번호를 입력해주세요.");
            setErrorField("password");
            passwordRef.current?.focus();
            return;
        }

        try {
            const result = await fakeLogin(email, password);
            dispatch(loginSuccess(result.email));
            navigate("/dashboard");
        } catch (err) {
            setError("아이디 또는 비밀번호가 올바르지 않습니다.");
            setErrorField("email");
            emailRef.current?.focus();
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Admin</h2>

            {LOGIN_FIELDS.map((field) => {
                if (field.id === "email") {
                    return (
                        <div key={field.id} className={styles.field}>
                            <TextInput
                                ref={emailRef}
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                autoComplete={field.autoComplete}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                clearable
                                onClear={() => setEmail("")}
                                hasError={errorField === "email"}
                            />
                        </div>
                    );
                }
                return (
                    <div key={field.id} className={styles.field}>
                        <PasswordInput
                            ref={passwordRef}
                            id={field.id}
                            label={field.label}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onClear={() => setPassword("")}
                            hasError={errorField === "password"}
                        />
                    </div>
                );
            })}

            <div className={styles.errorRow} aria-live="polite">
                {error && <p className={styles.errorText}>{error}</p>}
            </div>

            <Button className={styles.submit} type="submit">
                로그인
            </Button>
        </form>
    );
};

export default LoginForm;
