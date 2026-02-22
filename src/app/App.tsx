/**
 * @file src/app/App.tsx
 * @description 애플리케이션 초기화 및 전역 설정을 담당하는 모듈입니다.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "@app/store";
import AppRouter from "@app/router.tsx";

import {ThemeProvider} from "@app/provider/ThemeProvider";
import {ContextMenuProvider} from "@app/provider/ContextMenuProvider.tsx";

import "@app/style/ui-components.css";
import "@app/style/theme.css";
import "@app/style/index.css";
import "@app/style/font.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <ContextMenuProvider>
                    <AppRouter />
                </ContextMenuProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);
