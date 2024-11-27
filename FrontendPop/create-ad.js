import { createAdContoller } from "./create-ad/create-ad-controller.js";
import { isUserLogged } from "./utils/auth.js";



if(!isUserLogged()) {
    window.location.href= "index.html"
}

document.addEventListener("DOMContentLoaded", () => {
    const creatAdForm = document.querySelector('form')

    createAdContoller(creatAdForm)
})