import { createNotification } from "./notifications-view.js"



export function notificationController(notificationsContainer) {
    const showNotification = (message, type = "succes") => {
        notificationsContainer.innerHTML = createNotification(message, type);
        setTimeout(()=> {
            notificationsContainer.innerHTML = ""
        }, 4000 )
    }
    return {
        showNotification
    }
}