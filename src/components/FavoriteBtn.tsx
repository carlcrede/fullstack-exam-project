import { useState } from "react";

const FavoriteBtn = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddFavorite = () => {
        console.log('add to favorite');
        setIsFavorite(true);
    }

    const handleRemoveFavorite = () => {
        console.log('remove from favorite');
        setIsFavorite(false);
    }

  return (
    <div className="py-4">
        { isFavorite ? (
            <button onClick={handleRemoveFavorite} className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px] hover:bg-slate-700">Remove from favorites</button>
        ) : (
            <button onClick={handleAddFavorite} className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px] hover:bg-slate-700">Add to favorites</button>
        )}
    </div>
  )
}

export default FavoriteBtn;