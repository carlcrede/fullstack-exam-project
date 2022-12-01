import {Cast} from "../types/request-types";

interface Props  {
    cast: Cast[] | undefined
}

const CastList: React.FC<Props> = ({cast})  => {


    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))] gap-[10px]">
            {
                cast?.map((item, i) => (
                    <div key={item.id}>
                        <div className="pt-[160px] bg-cover mb-2 rounded-md"
                             style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.profile_path}')` }}></div>
                        <p className="text-xs font-bold">{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default CastList