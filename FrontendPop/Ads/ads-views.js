// Mostrar anuncios

export const buildAd = (add) => {
    const newAd = document.createElement('a');
    newAd.setAttribute("href", `/add-detail.html?id=${add.id}`);
    const dateFix = new Date(add.updatedAT)
    newAd,innerHTML = `
    <div>
        <span>usuario: ${add.user.username} - ${dateFix.toLocaleDateString()}</span>
    </div>
    `;
    return newAd
}

export function buildEmptyAdsList() {
    return '<h2>No hay anuncios disponibles</h2>'
}
