export function buildAdDetail(ad) {
    const  createdAt = new Date(ad.updatedAt)

    return `
    <div>
        <span>${createdAt.toLocaleDateString()}</span>
        <p>${ad.description}</p>
        <span>User: ${ad.user.username}</span>
        
    
    </div>`
}

export function createDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Delete ad"
    return removeButton;
}