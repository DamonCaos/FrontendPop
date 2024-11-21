// FrontendPop-models.js
export async function getAdds () {
    try {
        const response = await fetch("http://localhost8000/api/adds");
        const adds = await response.json();
        if(!response.ok) {
            throw new Error('Not Found')
        };
        return adds;
    } catch (error) {
        throw new Error(error.message);
    }
}

