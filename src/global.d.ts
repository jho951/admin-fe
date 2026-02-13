/**
 * @file src/global.d.ts
 * @description 전역 타입 보강 선언을 담당하는 모듈입니다.
 */
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_PROXY_TARGET?: string;
    readonly VITE_DEV_PORT?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
