import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/hooks";
import { login } from "../api";
import { loginSuccess } from "../authSlice";

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

        if (!email) {
            setError("이메일을 입력해 주세요.");
            setErrorField("email");
            emailRef.current?.focus();
            return;
        }
        if (!password) {
            setError("비밀번호를 입력해 주세요.");
            setErrorField("password");
            passwordRef.current?.focus();
            return;
        }

        try {
            const user = await login({ email, password });
            dispatch(loginSuccess(user));
            navigate("/dashboard");
        } catch (err) {
            console.log(err)
            const message =
                err instanceof Error ? err.message : "로그인에 실패했습니다.";
            setError(message);
            setErrorField("password");
            passwordRef.current?.focus();
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Admin</h2>

            <div className={styles.field}>
                <TextInput
                    id="email"
                    ref={emailRef}
                    label="이메일"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    hasError={errorField === "email"}
                    clearable
                    onClear={() => setEmail("")}
                    autoComplete="username"
                />
            </div>

            <div className={styles.field}>
                <PasswordInput
                    id="password"
                    ref={passwordRef}
                    label="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    hasError={errorField === "password"}
                    onClear={() => setPassword("")}
                />
            </div>

            <div className={styles.errorArea}>
                {error && <p className={styles.error}>{error}</p>}
            </div>

            <Button className={styles.submit} type="submit">
                로그인
            </Button>
        </form>
    );
};

export default LoginForm;
