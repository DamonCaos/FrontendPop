import { getLoginUserInfo } from "../authentification/auth-model.js";
import { getAd, removeAd } from "./ad-detail-model.js";
import { buildAdDetail, createDeleteButton } from "./ad-detail-view.js";


export async function adDetailController(adDetailContainer, adId) {
    try {
        const ad = await getAd(adId)
        const user = await getLoginUserInfo();

        adDetailContainer.innderHTML = buildAdDetail(ad);
        if (user.id === ad.user.id) {
            const removeButtonElement = createDeleteButton();
            removeButtonElement.addEventListener("click", async () => {
                const shouldRemoveAd = confirm('Are you sure?');
                if (shouldRemoveAd) {
                    await removeAd(ad.id)
                    window.location.href = 'index.html'
                }
            })
        }
    } catch (error) {
        alert(error.message)
        window.location.href = "index.html"
    }
}