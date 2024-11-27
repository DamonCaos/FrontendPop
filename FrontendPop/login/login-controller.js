import { notificationController } from "../notifications/notification-controller.js";
import { REGEXP } from "../utils/constants.js";
import { withLoading } from "../utils/functions.js";
import { userLogin } from "./login-model.js";


export function loginController(loginform) {

    const notificationsContainer = document.querySelector("#notifications-container")
    const { showNotification } = notificationController(notificationsContainer)
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
            handleLoginUser(userMail, password, showNotification)
        }
    })
}

async function handleLoginUser(userMail, password, showNotification) {
    const loading = document.querySelector(".loading")
    await withLoading(loading, async () => {
        try {
            const token = await userLogin(userMail, password);
            localStorage.setItem("jwt", token);

            showNotification("Login successful!", "success");

            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } catch (error) {
            showNotification(error.message, "error");
        }
    });
}
