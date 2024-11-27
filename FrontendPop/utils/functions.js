export async function withLoading(loadingElement, callback) {
    loadingElement.classList.remove("hidden");
    try {
        await callback();
    } finally {
        loadingElement.classList.add("hidden");
    }
}
