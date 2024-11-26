export async function userLogin(email, password) {
    const response = await fetch('http://localhost:8000/auth/login', {
        method: "POST",
        body: JSON.stringify({
            username: email,
            password
        }),
        headers: { "content-type": "application/json" }
    });

    if(!response.ok) {
        throw new Error('session error')
    }

    const { accessToken } = await response.json()

    return accessToken
    
}