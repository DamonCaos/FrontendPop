import { adsController } from "./Ads/ads-controllers.js";
import { notificationController } from "./notifications/notification-controller.js";
import { sessionController } from "./session/session-controller.js";

document.addEventListener('DOMContentLoaded', () => {

    const adsConteiner = document.querySelector('#ads-container');
    const notificationsContainer = document.querySelector('#notifications-container')
    const sessionContainer = document.querySelector('#session')

    sessionController(sessionContainer)
    adsController(adsConteiner)
    const { showNotification } = notificationController(notificationsContainer)
    adsConteiner.addEventListener("loading-ads-info", (event) => {
        showNotification(event.detail.message, event.detail.type)
    } )

})