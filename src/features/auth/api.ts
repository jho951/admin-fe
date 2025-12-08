export const fakeLogin = async (email: string, password: string) => {
    // TODO: replace with real API
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (!email || !password) {
        throw new Error("이메일과 비밀번호를 입력하세요.");
    }
    return { email };
};
