import { adsController } from "./Ads/ads-controllers.js";

document.addEventListener('DOMContentLoaded', () => {

    const adsConteiner = document.querySelector('#adds-contiener');
    const notificationsConteiner = document.querySelector('#notifications-conteiner')
    const sessionContainer = document.querySelector('#session')

    adsController(adsConteiner)


})