export async function createAd(message) {
    const token = localStorage.getItem('jwt');

    

    const response = await fetch("http://localhost:8000/api/ads", {
        method: "POST",
        body: JSON.stringify({
            ...message
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`  
        }
    });

    if (!response.ok) {
        throw new Error("Failed to create ad. Please try again.");
    }

    return await response.json();  
}