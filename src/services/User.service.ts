import { getAuthToken } from "../components/auth/Auth";
import http from "../http-common";

class UserService {
    uploadProfilePicture = async (formdata: FormData) => await http.put("/me/profile-picture", formdata, { headers: { Authorization: `Bearer ${getAuthToken()}`, "Content-Type": "multipart/form-data" } })
    getUserProfile = async () => await http.get(`/me`, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
    updateUserProfile = async (data: any) => await http.put(`/me`, data, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
    addFavorite = async (data: { movieDbId: string, media_type: 'movie' | 'tv' }) => await http.post(`/me/favorites`, data, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
    removeFavorite = async (movieDbId: string) => await http.delete(`/me/favorites/${movieDbId}`, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
}

export default new UserService();