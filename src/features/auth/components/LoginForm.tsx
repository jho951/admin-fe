/**
 * @file src/features/auth/components/LoginForm.tsx
 * @description 인증 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/hooks";
import { login } from "../api";
import { loginSuccess } from "../authSlice";
import { Button, Input } from "@jho951/ui-components";

import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [errorField, setErrorField] = useState<"email" | "password" | null>(null,);

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
            const { accessToken, user } = await login({ email, password });
            dispatch(
                loginSuccess({
                    accessToken,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                }),
            );
            navigate("/dashboard");
        } catch (err) {
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

                <Input
                    id="email"
                    ref={emailRef}
                    label="이메일"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errorField === "email" ? "이메일을 확인해 주세요." : undefined}
                    fullWidth
                    autoComplete="username"
                />

                <Input
                    id="password"
                    ref={passwordRef}
                    label="비밀번호"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errorField === "password" ? "비밀번호를 확인해 주세요." : undefined}
                    fullWidth
                />

                {error && <p className={styles.errorText}>{error}</p>}

            <Button className={styles.submit} type="submit">
                로그인
            </Button>
        </form>
    );
};

export default LoginForm;
