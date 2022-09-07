import { useId } from "react";
import Item from "./Item";
import { MovieDetails } from "./Item";

const items: MovieDetails[] = [
    { title: 'Spider Man', id: 123 } as MovieDetails, 
    { title: 'Forest Gump', id: 321 } as MovieDetails
];

function ItemsContainer(): JSX.Element {
    const id = useId();
    const itemList = items.map((item) => {
        return <Item key={`${id}-${item.id}`} {...item} />
    });
    return (
        <div className="flex flex-row space-x-4 justify-center basis-1">
            {itemList}
        </div>
    );
}

export default ItemsContainer;