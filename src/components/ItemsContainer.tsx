import Item from "./Item";
import { MovieDetails } from "./Item";

const items = [
    { title: 'Spider Man', key: Math.floor(Math.random()*99) } as MovieDetails, 
    { title:'Forest Gump', key: Math.floor(Math.random()*99) } as MovieDetails
];

const itemList = items.map((item, index) => {
    return <Item {...item} />
})
function ItemsContainer() {
    return (
        <div className="flex flex-row space-x-4 justify-center basis-1">
            {itemList}
        </div>
    );
}

export default ItemsContainer