export async function uploadFile(payload: FormData) {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/documents`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: payload
        })

        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}