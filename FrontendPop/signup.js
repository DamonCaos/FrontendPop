import { signupController } from "./signup/signup-controller.js"


document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector('form')
    signupController(signupForm)
})