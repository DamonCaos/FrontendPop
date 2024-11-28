export function buildAdDetail(ad) {
    const  creaedAt = new Date(tweet.updateAt)

    return `
    <div>
        <span>${creaedAt.toLocaleDateString()}</span>
        <p>${ad.description}</p>
        <span>${username}</span>
    
    </div>`
}

export function createDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Delete ad"
    return removeButton;
}