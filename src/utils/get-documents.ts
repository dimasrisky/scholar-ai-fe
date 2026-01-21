export async function getDocuments(){
    const token = localStorage.getItem("accessToken")

    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/documents`, {
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
    }catch(error){
        throw error
    }
}