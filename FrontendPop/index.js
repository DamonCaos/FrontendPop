import { addsController } from "./Adds/adds-controllers.js";

document.addEventListener('DOMContentLoaded', () => {

    const addsConteiner = document.querySelector('#adds-contiener');
    const notificationsConteiner = document.querySelector('#notifications-conteiner')
    const sessionContainer = document.querySelector('#session')

    addsController(addsConteiner)


})