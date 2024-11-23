// Mostrar anuncios

export const buildAdd = (add) => {
    const newAdd = document.createElement('a');
    newAdd.setAttribute("href", `/add-detail.html?id=${add.id}`);
    const dateFix = new Date(add.updatedAT)
    newAdd,innerHTML = `
    <div>
        <span>usuario: ${add.user.username} - ${dateFix.toLocaleDateString()}</span>
    </div>
    `;
    return newAdd
}

export function buildEmptyAddsList() {
    return '<h2>No hay anuncios disponibles</h2>'
}
