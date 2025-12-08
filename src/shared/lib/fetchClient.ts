// 실제로는 axios 등을 래핑해서 사용 가능
export const fetchJson = async <T>(
    input: RequestInfo | URL,
    init?: RequestInit,
): Promise<T> => {
    const res = await fetch(input, init);
    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }
    return res.json() as Promise<T>;
};
