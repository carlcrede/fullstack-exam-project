import {Cast} from "../types/request-types";
import {Genre} from "../types/types";

interface Props  {
    genres: Genre[] | undefined
}

const GenreList: React.FC<Props> = ({genres})  => {


    return (
        <div className="py-4 flex gap-x-2">
            {
                genres?.map((genre, i) => (
                    <span key={genre.id}
                          className="py-2 px-6 border-solid border-red-400 border-2 text-xs font-bold rounded-[30px]">{genre.name}</span>
                ))
            }
        </div>
    )
}
export default GenreList