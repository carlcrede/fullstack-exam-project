export const getAuthToken = () => localStorage.getItem('token');
export const isAuthenticated = () => !!getAuthToken();
export const setAuthToken = (token: string) => localStorage.setItem('token', token);