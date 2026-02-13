/**
 * @file src/features/users/usersSlice.ts
 * @description 사용자 기능 상태/요청/화면을 담당하는 모듈입니다.
 */
import { createSlice } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersState {
    items: User[];
}

const initialState: UsersState = {
    items: [
        { id: 1, name: "홍길동", email: "hong@example.com" },
        { id: 2, name: "김영희", email: "kim@example.com" },
    ],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // TODO: add CRUD reducers later
    },
});

export default usersSlice.reducer;
