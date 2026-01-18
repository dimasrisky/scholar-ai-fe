import type { ResponseRegister } from "../types/response-register";

type PayloadRegister = {
    email: string;
    password: string;
}

export default async function registerUser(payload: PayloadRegister): Promise<ResponseRegister> {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    return response.json();
}