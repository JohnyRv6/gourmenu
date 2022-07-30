import ItemCard from "../ItemCard/ItemCard";
import './ItemList.scss';

const ItemList = ({ products }) => {
    return (
        <div className="itemList-container">
            {products && products.map((product) => <ItemCard key={product.id} product={product} />)}
        </div>
    )
}

export default ItemList;