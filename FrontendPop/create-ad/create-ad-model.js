export async function createAd() {
    const token = localStorage.getItem('jwt');
    const response = await fetch("http://localhost:8000/api/ads", {
        method: "POST",
        body: JSON.stringify({
            message
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`        
        }
    })
    if(!response.ok) {
        throw new Error("create ad error")
    }
}