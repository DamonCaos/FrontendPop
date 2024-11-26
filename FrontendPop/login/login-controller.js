import { REGEXP } from "../utils/constants.js";
import { userLogin } from "./login-model";


export function loginController(loginform) {
    loginform.addEventListener("submit", (event) => {
        event.preventDefault()

        const userEmailElement = loginform.querySelector("#user-mail");
        const passwordElement = loginform.querySelector("#password");

        const userMail = userEmailElement.value;
        const password = passwordElement.value;

        const emailRegExp = new RegExp(REGEXP.mail)
        if(!emailRegExp.test(userMail)) {
            alert('incorrect format mail')
        } else {
            handleLoginUser(userMail, password)
        }
    })
}

async function handleLoginUser(userMail, password) {
    const token = await userLogin(userMail, password)

    localStorage.setItem("jwt", token);
    window.location.href = "/"
    
}