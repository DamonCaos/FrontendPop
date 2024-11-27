import { notificationController } from "../notifications/notification-controller.js";
import { REGEXP } from "../utils/constants.js";
import { createUser } from "./signup-model.js";


export function signupController(form) {
    const notificationsContainer = document.querySelector("#notifications-container");
    const { showNotification } = notificationController(notificationsContainer)


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userEmailElement = form.querySelector("#user-mail");
        const passwordElement = form.querySelector("#password");
        const passwordConfirmElement = form.querySelector("#password-confirm");

        const userEmail = userEmailElement.value;
        const password = passwordElement.value;
        const passwordConfirm = passwordConfirmElement.value;
        
        const errors = [];

        const emailRegExp = new RegExp(REGEXP.mail);
        if(!emailRegExp.test(userEmail)) {
            errors.push('Incorrect mail format')
        }

        if (password !== passwordConfirm) {
            errors.push('password do not match')
        }
        if (errors.length > 0) {
            errors.forEach(error => {
                showNotification(error, "error"); // Mostrar notificación de error
            });
        } else {
            handleCreateUser(userEmail, password, showNotification); 
        }
    });
}

async function handleCreateUser(userEmail, password, showNotification) {
    try {
        await createUser(userEmail, password)
        showNotification("user created successfully!", "success")
        window.location.href = "index.html"
    } catch (error) {
        showNotification(error.message, "error")
    }
}