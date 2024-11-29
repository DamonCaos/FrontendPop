import { getLoginUserInfo } from "../authentification/auth-model.js";
import { notificationController } from "../notifications/notification-controller.js";
import { withLoading } from "../utils/functions.js";
import { getAd, removeAd } from "./ad-detail-model.js";
import { buildAdDetail, createDeleteButton } from "./ad-detail-view.js";


export async function adDetailController(adDetailContainer, adId) {
    try {
        const ad = await getAd(adId)
        const user = await getLoginUserInfo();

        adDetailContainer.innerHTML = buildAdDetail(ad);
        if (user.id === ad.user.id) {
            const removeButtonElement = createDeleteButton();
            adDetailContainer.appendChild(removeButtonElement)
            const loadingElement = document.querySelector('.loading');
            const notificationContainer = document.querySelector('#notifications-container')
            const { showNotification } = notificationController(notificationContainer)

            removeButtonElement.addEventListener("click", async () => {
                const shouldRemoveAd = confirm('Are you sure?');
                if (shouldRemoveAd) {
                    await withLoading(loadingElement, async () => {
                        try {
                            await removeAd(ad.id)
                            showNotification('ad removed!', 'success')
                            window.location.href = 'index.html';
                        } catch (error) {
                            showNotification(error.message, 'error')
                        }
                    });
                }
            });
        }
    } catch (error) {
        alert(error.message);
        window.location.href = "index.html";
    }
}