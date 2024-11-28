import { adDetailController } from "./ad-detail/ad-detail-controller.js";


document.addEventListener("DOMContentLoaded", () => {
    const serchParams = new URLSearchParams(window.location.search);
    const adId = serchParams.get('id');
    const adDetailContainer = document.querySelector("#ad-detail")
    adDetailController(adDetailContainer,adId)
})