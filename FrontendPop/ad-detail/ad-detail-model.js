export async function getAd(adId) {
    try {
        const response = await fetch(`http://localhost:8000/api/ads/${adId}?_expand=user`);

        const ad = await response.json();
        if(!response.ok) {
            throw new Error("Not exist!")
        }

        return ad;
    } catch (error) {
        throw new Error(error.message)
        
    }
    
}

export async function removeAd(adId) {
    const token = localStorage.getItem('jwt');

    try {
        const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        if (!response.ok) {
            throw new Error('Not exist!')
        }
    } catch (error) {
        throw new Error(error.message)
    }


}