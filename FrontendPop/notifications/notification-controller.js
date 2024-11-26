import { createNotification } from "./notifications-view.js"



export function notificationController(notificationsConteiner) {
    const showNotification = (message, type = "succes") => {
        notificationsConteiner.innerHTML = createNotification(message, type);
        setTimeout(()=> {
            notificationsConteiner.innerHTML = ""
        }, 4000 )
    }
    return {
        showNotification
    }
}