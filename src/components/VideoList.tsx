import {Video} from "../types/request-types";

interface Props  {
    videos: Video[] | undefined
}

const VideoList: React.FC<Props> = ({videos})  => {


    return (
        <div className="mb-12 py-0 px-8">
            {
                videos?.map((item, i) => (
                    <div key={item.id} className="mb-12">
                        <div className="mb-6">
                            <h2 className="font-bold">{item.name}</h2>
                        </div>
                        <iframe
                            src={`https://www.youtube.com/embed/${item.key}`}
                            height="300px"
                            width="100%"
                            title="video"
                            className='rounded-md'
                        ></iframe>
                    </div>
                ))
            }
        </div>
    )
}
export default VideoList