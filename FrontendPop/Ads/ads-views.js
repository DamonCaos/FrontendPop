// Mostrar anuncios

export const buildAd = (ad) => {
    const newAd = document.createElement('a');
    newAd.setAttribute("href", `/add-detail.html?id=${ad.id}`);
    const dateFix = new Date(ad.updatedAt)
    newAd.innerHTML = `
    <div>
        <span>usuario: ${ad.user.username} - ${dateFix.toLocaleDateString()}</span>
    </div>
    `;
    return newAd
}

export function buildEmptyAdsList() {
    return '<h2>No hay anuncios disponibles</h2>'
}
