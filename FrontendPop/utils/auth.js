export const isUserLogged = () => {
    const token = localStorage.getItem('jwt')
    return !!token
}