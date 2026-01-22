export async function currentUser() {
    const token = localStorage.getItem("accessToken")
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const result = await response.json()

        if(!response.ok){
            throw result
        }

        return result
    }catch(err){
        throw err
    }
}