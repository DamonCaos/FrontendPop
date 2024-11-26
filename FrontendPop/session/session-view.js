export function buildAuthorizedSession() {
    return `
    <a href="/create-ad.html">Submit ad</a>
    <button>Logout</button>
    `
}

export function buildUnathorizedSession() {
    return `
    <a href="/login.html">Login</a>
    <a href="/signup.html">SignUp</a>
    `
}