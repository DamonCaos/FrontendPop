export async function getLoginUserInfo() {
    const token = localStorage.getItem('jwt');

    try {
        const response = await fetch(`http://localhost:8000/auth/me`, {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const user = await response.jason();
        if(!response.ok) {
            throw new Error('User not exist');
        }
        return user;
    } catch (error) {
        throw new Error(error.message)
    }
}