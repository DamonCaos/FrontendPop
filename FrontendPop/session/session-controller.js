import { isUserLogged } from "../utils/auth.js";
import { buildAuthorizedSession, buildUnathorizedSession } from "./session-view.js";


export function sessionController(sessionContainer) {
    if(isUserLogged()) {
        sessionContainer.innerHTML = buildAuthorizedSession()
        const logoutButton = sessionContainer.querySelector('button')
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem('jwt')
            sessionController(sessionContainer)
        })
    } else {
        sessionContainer.innerHTML = buildUnathorizedSession()
    }
}