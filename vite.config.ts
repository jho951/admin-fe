import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "src/app"),
            "@shared": path.resolve(__dirname, "src/shared"),
            "@features": path.resolve(__dirname, "src/features"),
            "@layout": path.resolve(__dirname, "src/layout"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
            },
        },
    },
});
