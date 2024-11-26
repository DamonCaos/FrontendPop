import { REGEXP } from "../utils/constants.js";
import { createUser } from "./signup-model.js";


export function signupController(form) {
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
            errors.push('Incorrect format mail')
        }

        if (password !== passwordConfirm) {
            errors.push('password not match')
        }
        for (const error of errors) {
            //mostrar notificaciones
        }
        if (errors.length === 0) {
            handleCreateUser(userEmail, password)
        }
    })
}

async function handleCreateUser(userEmail, password) {
    try {
        await createUser(userEmail, password)
        window.location.href = "index.html"
    } catch (error) {
        alert(error.message)
    }
}