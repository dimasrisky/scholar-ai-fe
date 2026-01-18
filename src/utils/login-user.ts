import type { AuthenticationFields } from "../types/authentication-fields";

type ResponseLogin = {
    data: {
        accessToken: string;
        refreshToken: string;
    }
}

export default async function loginUser(payload: AuthenticationFields): Promise<ResponseLogin> {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    })
    const result = await response.json()
    return result;
}