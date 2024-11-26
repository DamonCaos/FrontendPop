// adds-models.js
export async function getAds () {
    try {
        const response = await fetch("http://localhost8000/api/adds");
        const ads = await response.json();
        if(!response.ok) {
            throw new Error('Not Found')
        };
        return ads;
    } catch (error) {
        throw new Error(error.message);
    };
};

