export const saveAuthState = (authState) => {
    localStorage.setItem("authState", JSON.stringify(authState));
};

export const loadAuthState = () => {
    const authState = localStorage.getItem("authState");
    return authState
        ? JSON.parse(authState)
        : { isAuthenticated: false, user: null, token: null };
};

export const clearAuthState = () => {
    localStorage.removeItem("authState");
};
