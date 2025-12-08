import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "@app/store";
import AppRouter from "@app/router.tsx";
import ThemeProvider from "@app/provider/ThemeProvider";

import "@app/style/index.css";
import "@app/style/theme.css";
import "@app/style/font.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);
