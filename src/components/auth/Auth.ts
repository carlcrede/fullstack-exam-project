export const getAuthToken = () => sessionStorage.getItem('token');
export const isAuthenticated = () => !!getAuthToken();
export const setAuthToken = (token: string) => sessionStorage.setItem('token', token);