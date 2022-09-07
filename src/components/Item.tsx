export interface MovieDetails {
    title: string;
    id: number;
}

function Item(props: MovieDetails) {
    return (
        <div className="border-2 border-white">
            <p>{props.title}</p>
        </div>
    );
}

export default Item