import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserService, { FavoriteProps } from "../services/User.service";
import { type User } from "./user/UserProfile";

const FavoriteBtn: React.FC<FavoriteProps> = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    useEffect(() => {
        UserService.getUserProfile().then(
            (response) => {
                const user = response.data as User;
                const isFavorite = user.favorites.some(favorite => favorite.movieDbId === props.movieDbId);
                setIsFavorite(isFavorite);
            }, (error) => {
               console.log(error);
            }
        );
    }, []);

    const handleAddFavorite = () => {
        toast.promise(
            UserService.addFavorite(props),
            {
                loading: 'Adding to favorites...',
                success: (res) => {
                    setIsFavorite(true);
                    return <b>Added to favorites!</b>
                },
                error: (err) => {
                    return <b>Failed to add to favorites. {err.response.data}</b>
                },
            },
        )
    }

    const handleRemoveFavorite = () => {
        toast.promise(
            UserService.removeFavorite(props.movieDbId),
            {
                loading: 'Removing from favorites...',
                success: (res) => {
                    setIsFavorite(false);
                    return <b>Removed from favorites!</b>
                },
                error: (err) => {
                    return <b>Failed to remove from favorites. {err.response.data}</b>
                },
            },
        )
    }

    return (
        <div className="py-4">
            {isFavorite ? (
                <button onClick={handleRemoveFavorite} className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px] hover:bg-slate-700">Remove from favorites</button>
            ) : (
                <button onClick={handleAddFavorite} className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px] hover:bg-slate-700">Add to favorites</button>
            )}
        </div>
    )
}

export default FavoriteBtn;