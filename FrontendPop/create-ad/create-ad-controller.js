import { notificationController } from "../notifications/notification-controller.js"
import { withLoading } from "../utils/functions.js"
import { createAd } from "./create-ad-model.js"

export function createAdContoller(creatAdForm) {
    const notificationContainer = document.querySelector("#notifications-container");
    const { showNotification } = notificationController(notificationContainer);
    creatAdForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const photoElement = creatAdForm.querySelector("#photo")
        const nameElement = creatAdForm.querySelector("#name")
        const descriptionElement = creatAdForm.querySelector("#description")
        const priceElement = creatAdForm.querySelector("#price")
        const typeElement = creatAdForm.querySelector("#type")
        const photoFile = photoElement.files[0]
        const adData = {
            photo: 'default.jpg',
            name: nameElement.value,
            description: descriptionElement.value,
            price: parseFloat(priceElement.value),
            type: typeElement.value
        }
        if (!photoFile) {
            adData.photo = 'default.jpg'
        } else {
            adData.photo = photoFile
        }
        if (!adData.name || !adData.description || isNaN(adData.price) || !adData.type) {
            alert("Please fill in all required fields.");
            return;
        }
        handleAdCreation(adData, showNotification)
    })
}

async function handleAdCreation(adData, showNotification) {

    const loading = document.querySelector(".loading");



    await withLoading(loading, async () => {
        try {
            await createAd(adData);
            showNotification("Ad created successfully!", "success");
            window.location.href = "index.html"
        } catch (error) {
            showNotification(error.message, "error");
        }
    });
}
