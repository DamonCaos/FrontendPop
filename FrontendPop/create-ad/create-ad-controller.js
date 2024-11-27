import { notificationController } from "../notifications/notification-controller.js"
import { withLoading } from "../utils/functions.js"
import { createAd } from "./create-ad-model.js"

export function createAdContoller(creatAdForm) {
    creatAdForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const photoElement = creatAdForm.querySelector("#photo")
        const nameElement = creatAdForm.querySelector("#name")
        const descriptionElement = creatAdForm.querySelector("#description")
        const priceElement = creatAdForm.querySelector("#price")
        const typeElement = creatAdForm.querySelector("#type")

        const adData = {
            photo: photoElement.files[0],
            name: nameElement.value,
            description: descriptionElement.value,
            proce: parseFloat(priceElement.value),
            type: typeElement.value
        }
        if (!adData.name || !adData.description || !adData.price || !adData.type) {
            alert("Please fill in all required fields.");
            return;
        }
        handleAdCreation(adData, showNotification)
    })
}

async function handleAdCreation(adData) {
    const notificationContainer = document.querySelector("#notifications-container");
    const loading = document.querySelector(".loading");
    const { showNotification } = notificationController(notificationContainer);


    await withLoading(loading, async () => {
        try {
            await createAd(adData);
            showNotification("Ad created successfully!", "success");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } catch (error) {
            showNotification(error.message, "error");
        }
    });
}
