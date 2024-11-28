export const buildAd = (ad) => {
    const newAd = document.createElement('a');
    newAd.setAttribute("href", `ad-detail.html?id=${ad.id}`);
    
    const dateFix = new Date(ad.updatedAt);
    const username = ad.user?.username || "Usuario desconocido"; // Fallback para usuario desconocido

    newAd.innerHTML = `
        <div class="ad-item">
            <div class="ad-photo">
                <img src="${ad.photo || 'default-photo.jpg'}" alt="${ad.name}" />
            </div>
            <div class="ad-details">
                <h3>${ad.name}</h3>
                <p>${ad.description}</p>
                <p><strong>Price:</strong> $${ad.price}</p>
                <p><strong>Type:</strong> ${ad.type}</p>
                <span>Usuario: ${username} - ${dateFix.toLocaleDateString()}</span>
            </div>
        </div>
    `;
    
    return newAd;
};



export function buildEmptyAdsList() {
    return '<h2>No hay anuncios disponibles</h2>';
}
