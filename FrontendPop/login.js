import { loginController } from "./login/login-controller.js"

document.addEventListener("DOMContentLoaded", () => {
    const loginform = document.querySelector('form')
    loginController(loginform)
})