export function buildAdDetail(ad) {
    const  creaedAt = new Date(ad.updateAt)

    return `
    <div>
        <span>${creaedAt.toLocaleDateString()}</span>
        <p>${ad.description}</p>
        
    
    </div>`
}

export function createDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Delete ad"
    return removeButton;
}