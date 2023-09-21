const JWT_STORAGE_NAME = 'condoo-jwt';

export const getJwt = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(JWT_STORAGE_NAME)
    } else {
        return null
    }
}
export const setJwt = (token) => {
    if (typeof window !== "undefined") {
        return localStorage.setItem(JWT_STORAGE_NAME, token)
    } else {
        return null
    }
}