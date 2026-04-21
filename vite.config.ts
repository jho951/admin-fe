import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const devPort = Number.parseInt(env.VITE_DEV_PORT || "5173", 10);
    const proxyTarget = env.VITE_PROXY_TARGET || "http://127.0.0.1:8080";

    return {
        plugins: [react()],
        resolve: {
            alias: {
                "@app": fileURLToPath(new URL("./src/app", import.meta.url)),
                "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
                "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
                "@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
                "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
                "@constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
                "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
            },
        },
        server: {
            port: Number.isNaN(devPort) ? 5173 : devPort,
            proxy: {
                "/api": {
                    target: proxyTarget,
                    changeOrigin: true,
                },
            },
        },
    };
});
