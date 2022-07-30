import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMocks";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.scss';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
        })
    }, [])


    return (
        <div className="itemListContainer-container">
            {products && <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer;